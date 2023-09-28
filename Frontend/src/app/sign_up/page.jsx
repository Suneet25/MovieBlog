"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import createClient from "../../../utils/supabase-browser";
function page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let router = useRouter();

  // instantiate supabase client
  let [supabase] = useState(() => createClient());
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // sends a sign up request to supabase email provider
    let { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/api/auth/callback`,
      },
    });
    if (error) {
      alert(error.message);
    }
    if (data) {
      console.log("DATA", data);
      alert("Sign up successful");
      router.push("/login");
    }

    console.log("Submitted:", { email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full sm:w-96">
        <h2 className="text-2xl font-semibold mb-6">Sign-up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              className="bg-white text-black w-full border border-gray-300 rounded-lg py-2 px-3 mt-1 focus:outline-none focus:ring focus:ring-indigo-200"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-600 font-medium"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              className="w-full border  border-gray-300 rounded-lg py-2 px-3 mt-1  focus:outline-none focus:ring focus:ring-indigo-200 bg-white text-black"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out"
          >
            Signup
          </button>
        </form>
        <p className="mt-5">
          Already an user{" "}
          <Link className="text-blue-500 hover:text-blue-700" href={"/login"}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default page;
