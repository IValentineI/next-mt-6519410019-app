"use client";

import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGoogle,
  FaXTwitter,
} from "react-icons/fa6";

import My_Profile from "@/assets/images/MyProfile2.png";

export default function MyCard() {
  return (
    <div className="w-[320px] bg-#1D1C1D border border-[#2a2a2e] rounded-[20px] p-6 shadow-xl">
      <h2 className="text-[28px] tracking-wide text-white mb-1">
        <span className="text-[#ff6a00]">N</span>atthawut
      </h2>

      <div className="rounded-2xl overflow-hidden">
        <Image src={My_Profile} alt="myprofile" width={325} height={324} />
      </div>

      <p className="mt-2 text-[20px] text-[#cfcfd4] text-center">
        STU ID: 6519410019
      </p>

      <p className="text-[16px] text-[#7D7373] text-center mt-1">
        Fullstack Web Developer
      </p>

      {/* Social Icons */}
      <div className="flex justify-center gap-6 mt-8 text-[30px] text-[#d4d4d8]">
        <a
          href="https://web.facebook.com/Yura.Mikato.Naomi"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#ff6a00] transition"
        >
          <FaFacebook />
        </a>

        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#ff6a00] transition"
        >
          <FaXTwitter />
        </a>

        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#ff6a00] transition"
        >
          <FaInstagram />
        </a>

        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#ff6a00] transition"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://www.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#ff6a00] transition"
        >
          <FaGoogle />
        </a>
      </div>

      <button
        className="mt-8 w-full bg-[#ff6a00]
                      hover:bg-[#ff7a1a] transition
                      rounded-2xl py-3
                      text-black tracking-wider text-[18px]"
      >
        HIRE ME !
      </button>
    </div>
  );
}
