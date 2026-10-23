import { createBrowserClient } from "@supabase/ssr";
import { getSupabaseEnv, supabaseConfigured } from "./config";

export function createClient() {
  if (!supabaseConfigured()) return null;
  const { url, anonKey } = getSupabaseEnv();
  return createBrowserClient(url, anonKey);
}
