import { redirect } from "next/navigation";

/** Year browsing removed — single roadmap on home. */
export default function YearRedirectPage() {
  redirect("/");
}
