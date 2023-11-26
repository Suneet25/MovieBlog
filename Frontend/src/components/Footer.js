"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { footerData, footerSocials } from "../helpers/data";

const Footer = () => {
  let router = useRouter();
  return (
    <div className=" bg-base-200">
      <footer className="max-w-7xl m-auto footer footer-center py-10 px-10 lg:px-0 text-base-content  flex flex-col md:flex-row lg:flex-row items-center justify-between">
        <nav>
          <div className="grid grid-flow-col gap-4  ">
            {footerSocials.map((social) => {
              return (
                <a key={social.id} className="cursor-pointer hover:text-white">
                  <svg
                    xmlns={social.xmlns}
                    width={social.width}
                    height={social.height}
                    viewBox={social.viewBox}
                    className={social.className}
                    fill="currentColor"
                  >
                    <path d={social.d}></path>
                  </svg>
                </a>
              );
            })}
          </div>
        </nav>

        <aside>
          <p>Copyright © 2023 - All right reserved by Suneet</p>
        </aside>

        <nav className="grid grid-flow-col gap-4">
          {footerData.map((data) => (
            <a
              key={data.id}
              className="link link-hover hover:text-white"
              href={data.href}
            >
              {data.title}
            </a>
          ))}
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
