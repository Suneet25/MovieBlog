"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { footerData, footerSocials } from "./data";

const Footer = () => {
  let router = useRouter();
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <nav className="grid grid-flow-col gap-4">
        {footerData.map((data) => (
          <a
            key={data.id}
            className="link link-hover"
          href={data.href}
          >
            {data.title}
          </a>
        ))}
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          {footerSocials.map((social) => {
            return (
              <a key={social.id}>
                <svg
                  xmlns={social.xmlns}
                  width={social.width}
                  height={social.height}
                  viewBox={social.viewBox}
                  className={social.className}
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
    </footer>
  );
};

export default Footer;
