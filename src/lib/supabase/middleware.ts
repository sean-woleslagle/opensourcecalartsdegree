import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import { isEmailAllowed } from "@/lib/auth/allowlist";
import { getSupabaseEnv, supabaseConfigured } from "./config";

function isPublicPath(pathname: string): boolean {
  return (
    pathname === "/login" ||
    pathname.startsWith("/login/") ||
    pathname === "/unauthorized" ||
    pathname.startsWith("/unauthorized/") ||
    pathname.startsWith("/auth/")
  );
}

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({ request });
  const { pathname } = request.nextUrl;

  const redirectTo = (path: string) => {
    const url = request.nextUrl.clone();
    url.pathname = path;
    url.search = "";
    const redirect = NextResponse.redirect(url);
    supabaseResponse.cookies.getAll().forEach((cookie) => {
      redirect.cookies.set(cookie.name, cookie.value);
    });
    return redirect;
  };

  if (!supabaseConfigured()) {
    if (!isPublicPath(pathname)) {
      return redirectTo("/login");
    }
    return supabaseResponse;
  }

  const { url, anonKey } = getSupabaseEnv();

  const supabase = createServerClient(url, anonKey, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value }) =>
          request.cookies.set(name, value),
        );
        supabaseResponse = NextResponse.next({ request });
        cookiesToSet.forEach(({ name, value, options }) =>
          supabaseResponse.cookies.set(name, value, options),
        );
      },
    },
  });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    if (!isPublicPath(pathname)) {
      return redirectTo("/login");
    }
    return supabaseResponse;
  }

  if (!isEmailAllowed(user.email)) {
    if (pathname !== "/unauthorized" && !pathname.startsWith("/auth/")) {
      return redirectTo("/unauthorized");
    }
    return supabaseResponse;
  }

  if (pathname === "/login" || pathname === "/unauthorized") {
    return redirectTo("/");
  }

  return supabaseResponse;
}
