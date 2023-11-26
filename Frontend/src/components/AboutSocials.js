"use client";
import React from "react";

import {
 
  FaFacebook,
  FaPinterest,
  FaTelegram,
  FaWhatsappSquare,
  FaReddit,
  FaVoicemail,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";

let aboutSocials = [
  { id: 1, logo: FaTwitterSquare, name: "Twitter" },
  { id: 2, logo: FaFacebook, name: "Facebook" },
  { id: 3, logo: FaReddit, name: "Reddit" },
  { id: 4, logo: FaVoicemail, name: "Email" },
  { id: 5, logo: FaPinterest, name: "Pinterest" },
  { id: 6, logo: FaLinkedin, name: "Linkedin" },
  { id: 7, logo: FaTelegram, name: "Telegram" },
  { id: 8, logo: FaWhatsappSquare, name: "WhatsApp" },
];

const AboutSocials = () => {
  return (
    <div className="mt-3 flex flex-wrap gap-3 ">
      {aboutSocials.map((social) => {
        return (
          <div
            key={social.id}
            className=" flex gap-5 border-2 px-5 rounded-lg border-gray-200 items-center content-center hover:border-black border-solid cursor-pointer"
          >
            <social.logo />
            <span className="text-gray-700">{social.name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default AboutSocials;
