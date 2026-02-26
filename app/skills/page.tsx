import {
  Atom,
  Figma,
  BadgeCheck,
  Github,
} from "lucide-react";
import { SiNextdotjs, SiJavascript } from "react-icons/si";

export default function Skills() {
  return (
    <>
      {/* Title */}
      <h1 className="text-[40px] font-semibold tracking-wide mt-5">
        My{" "}
        <span className="text-[#ff6a00]">
          Skills
        </span>
      </h1>

      <div className="mt-8 grid grid-cols-4 gap-x-14 gap-y-14 max-w-[820px]">

        {/* Skill Item */}
        <SkillCircle
          icon={<Atom size={65} className="text-[#61dafb]" />}
          percent="60%"
          label="React"
        />

        <SkillCircle
          icon={<Figma size={65} className="text-[#F24E1E]" />}
          percent="85%"
          label="Figma"
        />

        <SkillCircle
          icon={<BadgeCheck size={65} className="text-[#E34F26]" />}
          percent="80%"
          label="HTML/CSS"
        />

        <SkillCircle
          icon={<SiNextdotjs size={65} className="text-white" />}
          percent="80%"
          label="Next.js"
        />

        <SkillCircle
          icon={<SiJavascript size={65} className="text-[#F7DF1E]" />}
          percent="60%"
          label="Java Script"
        />

        <SkillCircle
          icon={<Github size={65} className="text-white" />}
          percent="90%"
          label="GitHub"
        />

      </div>
    </>
  );
}

function SkillCircle({
  icon,
  percent,
  label,
}: {
  icon: React.ReactNode;
  percent: string;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center group cursor-pointer">

      <div
        className="w-[130px] h-[190px] rounded-full border 
        border-[#3a3a3f]
        flex flex-col items-center justify-center
        transition-all duration-300
        group-hover:border-[#ff6a00]"
      >
        {/* icon */}
        <div className="transition-all duration-300 group-hover:scale-110">
          {icon}
        </div>

        {/* percent */}
        <p className="mt-3 text-[16px] text-[#9a9a9f] font-medium 
                      transition-all duration-300 
                      group-hover:text-[#ff6a00]">
          {percent}
        </p>
      </div>

      {/* label */}
      <p className="mt-4 text-[15px] text-[#cfcfcf] 
                    transition-all duration-300 
                    group-hover:text-white">
        {label}
      </p>
    </div>
  );
}