import { redirect } from "next/navigation";

type Props = { params: Promise<{ termId: string }> };

/** Term browsing removed — land on the matching soft section on the roadmap. */
export default async function TermRedirectPage({ params }: Props) {
  const { termId } = await params;
  const id = typeof termId === "string" ? termId : "t1";
  redirect(`/?section=${encodeURIComponent(id)}`);
}
