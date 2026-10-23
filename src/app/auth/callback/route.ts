import { NextResponse } from "next/server";
import { isEmailAllowed } from "@/lib/auth/allowlist";
import { createClient } from "@/lib/supabase/server";

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const next = searchParams.get("next") ?? "/";

  if (code) {
    const supabase = await createClient();
    if (supabase) {
      const { error } = await supabase.auth.exchangeCodeForSession(code);
      if (!error) {
        const {
          data: { user },
        } = await supabase.auth.getUser();
        if (!isEmailAllowed(user?.email)) {
          return NextResponse.redirect(`${origin}/unauthorized`);
        }
        return NextResponse.redirect(`${origin}${next}`);
      }
    }
  }

  return NextResponse.redirect(`${origin}/login?error=auth`);
}
