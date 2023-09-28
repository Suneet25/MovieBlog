"use client";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
export let PrivateRoute = async ({ children }) => {
  let supabase = createServerComponentClient({ headers, cookies });
  let router = useRouter();
  const { data } = await supabase.auth.getSession();
  console.log("AUTHDATA", data);

  if (!data.session) {
    alert("User is not authenticated");
    return router.push("/login");
  }
  return children;
};
