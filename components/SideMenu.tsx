"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  FaHome,
  FaUser,
  FaLayerGroup,
  FaBars,
  FaBriefcase,
  FaProjectDiagram,
  FaEnvelope,
} from "react-icons/fa";

const menus = [
  { icon: <FaHome />, path: "/", title: "Home" },
  { icon: <FaUser />, path: "/aboutme", title: "About Me" },
  { icon: <FaLayerGroup />, path: "/eduexp", title: "Education & Experience" },
  { icon: <FaBars />, path: "/spec", title: "Specification" },
  { icon: <FaBriefcase />, path: "/projects", title: "Projects" },
  { icon: <FaProjectDiagram />, path: "/skills", title: "Skills" },
  { icon: <FaEnvelope />, path: "/contactme", title: "Contact Me" },
];

export default function SideMenu() {
  const pathname = usePathname();

  return (
    <div
      className="fixed right-16 top-1/2 -translate-y-1/2 
                 bg-[#1D1C1D] 
                 border border-[#2a2a2e]
                 rounded-full 
                 px-6 py-10 
                 flex flex-col gap-8 
                 shadow-2xl 
                 z-50"
    >
      {menus.map((menu, i) => {
        const isActive = pathname === menu.path;

        return (
          <div key={i} className="relative group flex justify-center">
            
            <Link
              href={menu.path}
              className={`text-[24px] transition-all duration-300 ${
                isActive
                  ? "text-orange-500"
                  : "text-[#9a9a9f] hover:text-[#ff6a00]"
              }`}
            >
              {menu.icon}
            </Link>

            {/* Tooltip */}
            <span
              className="absolute right-14 
                         opacity-0 translate-x-2
                         group-hover:opacity-100 
                         group-hover:translate-x-0
                         bg-[#2a2a2e] 
                         text-white text-sm 
                         px-3 py-1 
                         rounded-md 
                         transition-all duration-300 
                         whitespace-nowrap"
            >
              {menu.title}
            </span>

          </div>
        );
      })}
    </div>
  );
}