"use client";
import { createContext, useState, useContext, useEffect } from "react";

import useSWR from "swr";
import { useRouter } from "next/navigation";
import createClient from "../../../utils/supabase-browser";

import "react-toastify/dist/ReactToastify.min.css";
import { ToastError, ToastSuccess } from "../Toast";

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

  //Sign-up
  let SignUp = async (email, password) => {
    let { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/api/auth/callback`,
      },
    });
    if (error) {
      setTimeout(() => ToastError(error.message), 1000);
      return error.message;
    }
    if (!error) {
      setTimeout(() => ToastSuccess("signup successful"), 1000);
      router.push("/login");
    }
  };
  //Sign-out
  let signOut = async () => {
    await supabase.auth.signOut();
    setTimeout(() => ToastSuccess("You are successfully logged out"), 1000);
    router.push("/login");
  };

  //Signin With Github
  let signInWithGithub = async () => {
    await supabase.auth.signInWithOAuth({ provider: "github" });
    setTimeout(
      () => ToastSuccess("You are successfully logged in with Github"),
      1000
    );
  };

  //Signin With Google
  let signInWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({ provider: "google" });
    setTimeout(
      () => ToastSuccess("You are successfully logged in with Google"),
      1000
    );
  };

  //Signin With Email And Password

  let signInWithPassword = async (email, password) => {
    let { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (error) {
      setTimeout(() => ToastError(error.message), 1000);
      return error.message;
    }
    if (!error) {
      ToastSuccess("You are successfully logged in");
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
    SignUp,
    signInWithPassword,
    signOut,

    signInWithGithub,
    signInWithGoogle,
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
