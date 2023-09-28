"use client";
import { createContext, useState, useContext, useEffect } from "react";
import { useSupabase } from "./supabase-provider";
import useSWR from "swr";
import { useRouter } from "next/navigation";
import createClient from "../../../utils/supabase-browser";

let Context = createContext();

export function SupabaseAuthProvider({ serverSession, children }) {

  let router = useRouter();
  let [supabase] = useState(() => createClient());
  //Get User
  let getUser = async () => {
    let { data: user, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", serverSession?.user?.id)
      .single();
    if (error) {
      console.log(error);
      return null;
    } else {
      return user;
    }
  };
  let {
    data: user,
    error,
    isLoading,
    mutate,
  } = useSWR(serverSession ? "profile-context" : null, getUser);

  //Sign-out
  let signOut = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  //Signin With Github
  let signInWithGithub = async () => {
    await supabase.auth.signInWithOAuth({ provider: "github" });
  };

  //Signin With Google
  let signInWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({ provider: "google" });
  };


  //Signin With Email And Password

  let signInWithPassword = async (email, password) => {
    console.log("RECIEVED", email,password);
    let { error } = await supabase.auth.signInWithPassword({
      email:email,
      password:password,
    });
    if (error) {
      return error.message;
    }
    return null;
  };

  useEffect(() => {
    let {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (session?.access_token !== serverSession?.access_token) {
        router.refresh();
      }
  
    });
    return () => {
      subscription.unsubscribe();
    };
  }, [router, supabase, serverSession?.access_token]);

  let exposed = {

    serverSession,
    user,
    error,
    isLoading,
    mutate,
    signInWithPassword,
    signOut,
    signInWithGithub,
    signInWithGoogle
  };
  return <Context.Provider value={exposed}>{children}</Context.Provider>;
}

export let useAuth = () => {
  let context = useContext(Context);
  if (context === undefined) {
    throw new Error("useSupabase must be used inside Supabase-auth-Provider");
  } else {
    return context;
  }
};
