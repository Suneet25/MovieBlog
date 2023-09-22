"use client";
// import { AuthContext } from '@/Context/authContext';
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
const router=useRouter();
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-amber-50 p-4 sticky top-0 z-10 shadow-lg" >
 <div className="max-w-7xl m-auto ">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link href="#" className="text-black text-lg font-bold">
            Logo
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-6 font-bold">
          <Link href="/" className="text-black">
            Home
          </Link>
          <Link href="/movies" className="text-black">
            Movies{" "}
          </Link>
          <Link href="/about" className="text-black">
            Anime
          </Link>
          <button onClick={()=>router.push("/login")} className="text-black font-bold bg-white py-1 px-2 rounded-lg" >
            Login
          </button>
          <button onClick={()=>router.push("/sign_up")} className="text-white font-bold bg-orange-500 py-1 px-2 rounded-lg">
            Signup
          </button>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
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

      <div className={`md:hidden ${isMobileMenuOpen ? "" : "hidden"}`}>
        <Link href="#" className="block text-white py-2 px-4">
          Home
        </Link>
        <Link href="#" className="block text-white py-2 px-4">
          Movies
        </Link>
        <Link href="#" className="block text-white py-2 px-4">
          Anime
        </Link>
        <button onClick={()=>router.push("/login")} className="text-black font-bold bg-white py-1 px-2 rounded-lg" >
            Login
          </button>
          <button onClick={()=>router.push("/sign_up")}className="text-black font-bold bg-white py-1 px-2 rounded-lg">
            Signup
          </button>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
//HELLO