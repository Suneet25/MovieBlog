import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies, headers } from "next/headers";


let createClient =()=> createServerComponentClient({ headers, cookies });

export default createClient;    