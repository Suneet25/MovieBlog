import { createPagesBrowserClient } from "@supabase/auth-helpers-nextjs";

let supabase = createPagesBrowserClient();
export default supabase;
