"use client";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { useState, createContext, useContext } from "react";
import {headers,cookies} from "next/headers";

let Auth = createContext();
export let AuthContextProvider = ({ children }) => {
  let supabase = createServerComponentClient({ headers, cookies });
  //logout
  let handleLogout = () => {
    let { error } = supabase.auth.signOut();
    if (!error) {
      router.push("/login");
    }
    console.log("Logout worked");
  };
  const { data } = supabase.auth.getSession();

  return <Auth.Provider value={handleLogout}>{children}</Auth.Provider>;
};

let useHelper = () => {
  return useContext(Auth);
};

export { useHelper, AuthContextProvider };
