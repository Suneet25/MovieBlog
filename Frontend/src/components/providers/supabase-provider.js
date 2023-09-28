"use client";
import createClient from "../../../utils/supabase-browser";

import { createContext, useState, useContext } from "react";

let Context = createContext(undefined);

export function SupabaseProvider({ children }) {
  let [supabase] = useState(() => createClient());
console.log("HEHE",supabase);
  return (
    <Context.Provider value={{ supabase }}>
      <>{children}</>
    </Context.Provider>
  );
}

export let useSupabase = () => {
  let context = useContext(Context);
  if (context === undefined) {
    throw new Error("useSupabase must be used inside SupabaseProvider");
  } else {
    return context;
  }
};
