"use client";
import Image from "next/image";
import Logo from "../Assets/Logo.webp";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import React, { useState } from "react";
import style from "../app/styles/navbar.module.css"

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  let [category, setCategory] = useState("");
  const router = useRouter();
  const path = usePathname();
  console.log("PATH", path);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-amber-50 p-4 sticky top-0 z-10 shadow-lg ">
      <div className="max-w-7xl m-auto ">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <Link href="/" className="text-black text-lg font-bold">
              <Image src={Logo} width={100} height={100} />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-6 font-bold">
      
            <Link
              href={`/${category}`}
              className="text-black"
              style={{
                borderBottom: path === "/animes" && "/movies"  ? "3px solid orange" : "",
              }}
              class={style.navHead}
            >
              <select
                className="bg-amber-50"
                onChange={(e) => setCategory(e.target.value)}
              >
                <option disabled selected>
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
            >
              Contact
            </Link>
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
          <Link href="#" className="block text-black font-bold py-2 px-4">
            Home
          </Link>
          <Link href="#" className="block text-black font-bold py-2 px-4">
            Movies
          </Link>
          <Link href="#" className="block text-black font-bold py-2 px-4">
            About
          </Link>
          <Link href="#" className="block text-black font-bold py-2 px-4">
            Contact
          </Link>
          <button
            onClick={() => router.push("/login")}
            className="text-black font-bold bg-white py-1 px-2 rounded-lg"
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
      </div>
    </nav>
  );
};

export default Navbar;
//HELLO
