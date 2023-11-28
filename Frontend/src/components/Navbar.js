"use client";
import Image from "next/image";
import Logo from "../Assets/Logo.webp";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import React, { useState } from "react";
import { useAuth } from "./providers/supabase-auth-provider";
import { logEvent } from "@/app/firebase";
import { create } from "@/app/action";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  let [category, setCategory] = useState("");

  let { signOut, user, serverSession } = useAuth();
  console.log("USER", serverSession);
  const path = usePathname();
  let router = useRouter();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  let handleLogout = () => {
    signOut();
    create();
  };
  return (
    <nav className="bg-amber-50 p-4 sticky top-0 z-10 shadow-lg ">
      <div className="max-w-7xl m-auto ">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <Link href="/" className="text-black text-lg font-bold">
              <Image
                src={Logo}
                width={100}
                height={100}
                alt="Logo"
                loading="lazy"
              />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-6 font-bold">
            <Link
              href={`/${category}`}
              className="text-black"
              style={{
                borderBottom: path === "/animes" ? "3px solid orange" : "",
              }}
            >
              <select
                className="bg-amber-50"
                onChange={(e) => setCategory(e.target.value)}
              >
                <option disabled defaultValue={"Categories"}>
                  Categories
                </option>
                <option value={"movies"}>Movies</option>
                <option value={"animes"}>Animes</option>
              </select>
            </Link>
            <Link
              href="/about"
              className="text-black"
              style={{
                borderBottom: path === "/about" ? "3px solid orange" : "",
              }}
            >
              About
            </Link>

            <Link
              href="/contact"
              className="text-black"
              style={{
                borderBottom: path === "/contact" ? "3px solid orange" : "",
              }}
              onClick={() =>
                logEvent(`test firebase analytics_${"clicked on contact"}`)
              }
            >
              Contact
            </Link>
            {user ? (
              <div className="flex justify-center items-center gap-5">
                <div>
                  <button
                    onClick={handleLogout}
                    className="text-white font-bold bg-orange-500 py-1 px-2 rounded-lg"
                    style={{
                      borderBottom: path === "/login" ? "3px solid orange" : "",
                    }}
                  >
                    Logout
                  </button>
                </div>
                {serverSession?.user?.app_metadata?.provider === "github" ||
                serverSession?.user?.app_metadata?.provider === "google" ? (
                  <div
                    className="avatar cursor-pointer"
                    onClick={() => {
                      logEvent(
                        `test firebase analytics_${"clicked on profile"}`
                      );
                      router.push("/profile");
                    }}
                  >
                    <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-orange-500 ring-offset-2">
                      <Image
                        src={user?.avatar_url}
                        alt="avatar"
                        width={200}
                        height={200}
                      />
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            ) : (
              <div className="flex justify-center items-center gap-4">
                <button
                  onClick={() => router.push("/login")}
                  className="text-black font-bold bg-amber-50 py-1 px-2 rounded-lg"
                  style={{
                    borderBottom: path === "/login" ? "3px solid orange" : "",
                  }}
                >
                  Login
                </button>
                <button
                  onClick={() => router.push("/sign_up")}
                  className="text-white font-bold bg-orange-500 py-1 px-2 rounded-lg"
                >
                  Signup
                </button>
              </div>
            )}
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-black focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <div className={`md:hidden ${isMobileMenuOpen ? "" : "hidden"} `}>
          <Link href="/" className="block text-black font-bold py-2 px-4">
            Home
          </Link>
          <Link
            href={`/${category}`}
            className="text-black"
            style={{
              borderBottom:
                path === "/animes" || "/movies" ? "3px solid orange" : "",
            }}
          >
            <select
              className="bg-amber-50"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option disabled defaultValue={"Categories"}>
                Categories
              </option>
              <option value={"movies"}>Movies</option>
              <option value={"animes"}>Animes</option>
            </select>
          </Link>
          <Link href="/about" className="block text-black font-bold py-2 px-4">
            About
          </Link>
          <Link
            href="/contact"
            className="block text-black font-bold py-2 px-4"
          >
            Contact
          </Link>
          {user ? (
            <div className="flex justify-center items-center gap-5">
              <div>
                <button
                  onClick={signOut}
                  className="text-white font-bold bg-orange-500 py-1 px-2 rounded-lg"
                  style={{
                    borderBottom: path === "/login" ? "3px solid orange" : "",
                  }}
                >
                  Logout
                </button>
              </div>
              {serverSession?.user?.app_metadata?.provider === "github" ||
              serverSession?.user?.app_metadata?.provider === "google" ? (
                <div
                  className="avatar cursor-pointer"
                  onClick={() => {
                    logEvent(
                      analytics,
                      `test firebase analytics_${"clicked on profile"}`
                    );
                    router.push("/profile");
                  }}
                >
                  <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-orange-500 ring-offset-2">
                    <Image
                      src={user?.avatar_url}
                      alt="avatar"
                      width={200}
                      height={200}
                      loading="lazy"
                    />
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          ) : (
            <div className="flex justify-center items-center gap-4">
              <button
                onClick={() => router.push("/login")}
                className="text-black font-bold bg-amber-50 py-1 px-2 rounded-lg"
                style={{
                  borderBottom: path === "/login" ? "3px solid orange" : "",
                }}
              >
                Login
              </button>
              <button
                onClick={() => router.push("/sign_up")}
                className="text-white font-bold bg-orange-500 py-1 px-2 rounded-lg"
              >
                Signup
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
