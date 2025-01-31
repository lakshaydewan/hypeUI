import React, { JSX } from 'react'
import { IconBrandNextjs, IconBrandReact, IconBrandTailwind, IconBrandTypescript, IconBrandFramerMotion } from '@tabler/icons-react'

interface TechBadgeProps {
  name: string
  isactive?: boolean
}

const TechBadge = ({ name, isactive }: TechBadgeProps) => {
  const baseClasses = "bg-neutral-950 group cursor-pointer text-sm font-light gap-1 w-fit px-5 py-3 text-white border border-neutral-800 rounded-lg flex flex-row justify-between items-center transition-all duration-500 ease-out";

  const badgeStyles: Record<string, string> = {
    "Next.js": `border ${isactive ? "!border-white" : "hover:border-white"}`,
    "React": `border ${isactive ? "!border-[#60dbfb] delay-100" : "hover:border-[#60dbfb]"}`,
    "TailwindCSS": `border ${isactive ? "!border-blue-400 delay-300" : "hover:border-[#36b6f1]"}`,
    "FramerMotion": `border ${isactive ? "!border-pink-500 delay-200" : "hover:border-[#b64891]"}`,
    "TypeScript": `border ${isactive ? "!border-blue-400 delay-500" : "hover:border-blue-400"}`
  };

  const iconStyles: Record<string, string> = {
    "Next.js": `${isactive ? "text-white rotate-[360deg]" : "text-neutral-500 group-hover:text-white group-hover:rotate-[360deg]"} transition-all duration-300 ease-out`,
    "React": `${isactive ? "text-[#60dbfb] rotate-[360deg] transition-all duration-1000" : "group-hover:text-[#60dbfb] group-hover:animate-spin"} transition-all duration-300 ease-out`,
    "TailwindCSS": `${isactive ? "text-[#36b6f1] fill-[#36b6f1]" : "group-hover:text-[#36b6f1] group-hover:fill-[#36b6f1]"} transition-all duration-500 ease-out`,
    "FramerMotion": `${isactive ? "text-[#b64891]" : "group-hover:text-[#b64891]"} transition-all duration-500 ease-out`,
    "TypeScript": `${isactive ? "text-blue-400" : "group-hover:text-blue-400"} transition-all duration-500 ease-out`
  };

  const icons: Record<string, JSX.Element> = {
    "Next.js": <IconBrandNextjs stroke={1} className='size-6' />,
    "React": <IconBrandReact stroke={1} className='size-6' />,
    "TailwindCSS": <IconBrandTailwind stroke={1} className='size-6 group-hover:fill-[#36b6f1]' />,
    "FramerMotion": <IconBrandFramerMotion stroke={1} className='size-6' />,
    "TypeScript": <IconBrandTypescript stroke={1} className='size-6' />
  };

  return (
    <div className={`${baseClasses} ${badgeStyles[name] || ""}`}>
      <div className={iconStyles[name] || ""}>{icons[name] || null}</div>
      <div>{name}</div>
    </div>
  );
}

export default TechBadge;
