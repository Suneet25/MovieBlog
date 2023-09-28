"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FaGithub, FaGoogle } from "react-icons/fa";
import Link from "next/link";
import { useAuth } from "@/components/providers/supabase-auth-provider";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const { signInWithPassword, signInWithGithub, signInWithGoogle, user } =
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
      if (!error) {
        setError(null);
        console.log("LOGINDATA", data);
      }
      if (error) {
        setError(error);
      }
      console.log("LOGIN SUBMITTED", { email, password });
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
              className="w-full border border-gray-300 rounded-lg py-2 px-3 mt-1 focus:outline-none focus:ring focus:ring-indigo-200  bg-white text-black"
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

          <div className="flex place-content-evenly items-center gap-10 mt-5">
            <div>
              <button
                onClick={signInWithGithub}
                className="  bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg flex items-center"
              >
                <div className="flex content-between items-center">
                  <FaGithub className="mr-2 " />
                  <span> Github</span>
                </div>
              </button>
            </div>

            <div>
              <button
                onClick={signInWithGoogle}
                className="text-center  flex items-center space-x-2 bg-blue-600 font-semibold text-white py-2 px-4 rounded-lg"
              >
                <FaGoogle className="text-xl" />
                <span>Google</span>
              </button>
            </div>
          </div>
        </form>
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
