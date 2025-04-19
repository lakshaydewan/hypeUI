import { ComponentType } from "react";
import Transition from "@/main/Break_Button";

interface ComponentData {
  name: string;
  Component: ComponentType;
  description: string;
  tags: string[];
  code: string;
  props: Array<{
    propName: string;
    type: string;
    default: string;
    description: string;
  }>;
}

export const components_data: Record<string, ComponentData> = {
  Break_Button: {
    name: "Break",
    Component: Transition,
    description: "Nothing special",
    tags: ["New", "Awwards"],
    code: `
import React from "react";

interface TransitionProps {
  text: string;
}

const Transition = ({ text }: TransitionProps) => {
  return (
    <div className="w-full h-full font-sans flex justify-center items-center">
      <div className="text-white text-lg h-fit z-50 cursor-pointer flex justify-center items-center text-md font-extralight group">
        {text.split("").map((char, index) => (
          <div
            key={index}
            className="w-fit inline-block transition-all duration-500 ease-out group-hover:scale-110"
            style={{
              transitionDelay: \`\${index * 50ms}\`,
            }}
          >
            <span
              className="group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-blue-500 group-hover:bg-clip-text group-hover:text-transparent"
            >
              {char}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transition;

    `,
    props: [
      {
        propName: "className",
        type: "string",
        default: "-",
        description: "The className of the component.",
      },
      {
        propName: "children",
        type: "ReactNode",
        default: "-",
        description: "The content of the component.",
      },
    ],
  },
};
