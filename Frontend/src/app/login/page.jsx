"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/components/providers/supabase-auth-provider";
import { ToastContainer, toast } from "react-toastify";
import GoogleButton from "react-google-button";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { signInWithPassword, signInWithGoogle, user } =
    useAuth();

  let router = useRouter();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data, error } = await signInWithPassword(email, password);
 
      if (error) {
        setError(error);
      }
    } catch (error) {
      console.log("Somthing went wrong while login with email");
    }
  };
  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [user]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <ToastContainer />
      <div className="bg-white p-8 rounded-lg shadow-md w-full sm:w-96">
        <h2 className="text-2xl font-semibold mb-6 text-gray-700">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 font-medium">
              Email<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              className="w-full border border-gray-300 rounded-lg py-2 px-3 mt-1 focus:outline-none focus:ring focus:ring-indigo-200  bg-white text-black"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-600 font-medium"
            >
              Password<span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              className=" bg-white text-black w-full border border-gray-300 rounded-lg py-2 px-3 mt-1 focus:outline-none focus:ring focus:ring-indigo-200"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out"
          >
            Login
          </button>
        </form>

        <div className="flex content-center items-center mt-5 rounded-lg overflow-hidden ">
        
          <GoogleButton
            style={{
              width: 600,
              borderRadius: "10px",
            
            }}
            onClick={signInWithGoogle}
          />
        </div>

        <p className="mt-5">
          Not an user{" "}
          <Link className="text-blue-500 hover:text-blue-700" href={"/sign_up"}>
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
