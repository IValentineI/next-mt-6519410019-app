import { Code2, Globe, Palette } from 'lucide-react';

export default function Specializations() {
  const specializations = [
    {
      title: "Front end-developer",
      description: "Front-end is where I weave code and creativity to shape captivating and user-centric digital experiences.",
      icon: Code2,
    },
    {
      title: "UI/UX Designer",
      description: "UI/UX design is my palette for blending art and user psychology into seamless and delightful interactions.",
      icon: Globe,
    },
    {
      title: "Graphic designer",
      description: "As a graphic designer, I transform ideas into visually striking and impactful designs.",
      icon: Palette,
    },
  ];

  return (
    <div className="flex flex-col justify-center h-full w-full pl-4 py-10">
      <h2 className="text-4xl font-bold mb-10 text-white">
        My <span className="text-[#ff5722]">Specializations</span>
      </h2>

      <div className="flex flex-col gap-6 w-full max-w-200">
        {specializations.map((spec, index) => {
          const Icon = spec.icon;
          return (
            <div 
              key={index} 
              className="group p-8 rounded-3xl border border-[#ff5722] hover:bg-[#ff5722]/5 transition-all duration-300 flex justify-between items-start"
            >
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold text-white group-hover:text-[#ff5722] transition-colors">
                  {spec.title}
                </h3>
                <p className="text-[#8c8c8c] text-sm max-w-125">
                  {spec.description}
                </p>
              </div>
              
              <Icon className="w-6 h-6 text-[#ff5722]" strokeWidth={1.5} />
            </div>
          );
        })}
      </div>
    </div>
  );
}