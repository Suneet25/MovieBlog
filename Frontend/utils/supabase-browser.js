import { createPagesBrowserClient } from "@supabase/auth-helpers-nextjs";

let createClient =()=> createPagesBrowserClient();
export default createClient;
