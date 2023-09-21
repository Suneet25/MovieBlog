"use client";
import { useState } from "react";
import GoogleButton from "react-google-button";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  let router = useRouter();

  // instantiate supabase client
  const supabase = createClientComponentClient();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (!error) {
      setError(null);
      console.log("LOGINDATA",data)
      router.push("/");
    }
    if (error) {
      setError(error);
      alert(error.message)
      console.log("ERROR", error);
    }
    console.log("LOGIN SUBMITTED", { email, password });
  };


//LoginWithGoogle
let handleGoogleLogin=()=>{
  console.log("Logged in with google");
}


  //logout
  let handleLogout = async (event) => {
    event.preventDefault();
    let { error } = await supabase.auth.signOut();
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full sm:w-96">
        <h2 className="text-2xl font-semibold mb-6">Login</h2>
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
              className="w-full border border-gray-300 rounded-lg py-2 px-3 mt-1 focus:outline-none focus:ring focus:ring-indigo-200"
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
              className="w-full border border-gray-300 rounded-lg py-2 px-3 mt-1 focus:outline-none focus:ring focus:ring-indigo-200"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out"
          >
            Login
          </button>
          <br/>
<hr/>
<br/>
          <button  className="w-full flex justify-center  text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out">

          <GoogleButton  className="w-[100%]" onClick={handleGoogleLogin}/>
          </button>
          {!error ? (
            <button
              type="submit"
              className="w-full bg-red-500  hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out mt-3"
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            ""
          )}
        </form>
        <p className="mt-5">
          Not an user <Link className="text-blue-500 hover:text-blue-700" href={"/sign_up"}>
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
