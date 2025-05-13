import { ComponentType } from "react";
import TextAnimate from "@/components/TextAnimate";
import HackerEffect from "@/main/Hacker_Effect";
import ActionSearchBar from "@/components/ActionSearch";
import ThemeToggle from "@/components/ThemeToggle";
import AnimatedNavbar from "@/components/AnimatedNavbar";
import DragableItems from "@/components/Draggable";
import ShimmerText from "@/main/ShimmerText";
import FlipFade from "@/components/FlipText";

const escapedCode = `"use client"
"import { Moon, Sun } from \\"lucide-react\\""
"import { useTheme } from \\"next-themes\\""
""
"import { Switch } from \\"@/components/ui/switch\\""
""
"export function ThemeToggle() {"
"  const { theme, setTheme } = useTheme()"
""
"  const toggleTheme = () => {"
"    setTheme(theme === \\"light\\" ? \\"dark\\" : \\"light\\")"
"  }"
""
"  return ("
"    <div className=\\"flex items-center space-x-2 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]\\">"
"      <Sun"
"        className={\`h-[1.2rem] w-[1.2rem] transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] \${"
"          theme === \\"dark\\" ? \\"text-[#A1A1AA] scale-75 rotate-12\\" : \\"text-foreground scale-100 rotate-0\\""
"        }\`}"
"      />"
"      <Switch"
"        checked={theme === \\"dark\\"}"
"        onCheckedChange={toggleTheme}"
"        aria-label=\\"Toggle theme\\""
"        className=\\"transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-110\\""
"      />"
"      <Moon"
"        className={\`h-[1.2rem] w-[1.2rem] transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] \${"
"          theme === \\"light\\" ? \\"text-[#A1A1AA] scale-75 rotate-12\\" : \\"text-foreground scale-100 rotate-0\\""
"        }\`}"
"      />"
"    </div>"
"  )"
"}"`;


interface ComponentData {
  name: string;
  Component: ComponentType<any>;
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
  "AnimateText" : {
    name: "AnimateText",
    Component: TextAnimate,
    description: "Nothing special",
    tags: ["Awwards", "Text Reveal"],
    code: `
'use client'
import React from 'react'
import { motion } from 'framer-motion'

interface TextAnimateProps {
    text: string;
}

const TextAnimate = ({text}: TextAnimateProps) => {
    const line = text;
    const words = line.split(" ")

    const containerVariants = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.05 },
        },
    }

    const wordVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.3, ease: "easeOut" }, 
        },
    }

    return (
            <motion.div 
                className='w-full h-fit flex flex-wrap items-center lg:justify-start justify-center gap-x-1 px-auto text-center lg:pr-2 pt-2' 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {words.map((text, index) => (
                    <motion.span 
                        key={index}
                        variants={wordVariants}
                        className='relative h-fit w-fit font-sans font-light text-lg text-neutral-800 dark:text-primary'
                    >
                        {text + " "}
                    </motion.span>
                ))}
            </motion.div>
    )
}

export default TextAnimate

    `,
    props: [
      {
        propName: "text",
        type: "string",
        default: "-",
        description: "The text to animate.",
      },
    ]
  },
  "HackerEffect": {
    name: "HackerEffect",
    Component: HackerEffect,
    description: "Nothing special",
    tags: ["New", "Awwards"],
    code: `
"use client"
import { cn } from '@/lib/utils';
import React, {useEffect, useRef} from 'react'

const HackerEffect = ({text, className}: {text: string, className?: string}) => {

    const letters = [
        'A', 'B', 'C', 'D', '#', 'F', 'G', 'H', 'I', 'J',
        'K', 'L', 'M', '$', 'O', 'P', 'Q', '@', 'S', 'T',
        'U', '%', 'W', 'X', 'Y', 'Z'
      ];

      const wordRef = useRef<HTMLHeadingElement>(null)

      useEffect(() => {
        const word = wordRef.current;
    
        if (word) {
          const handleMouseOver = () => {
            const def_value = text.toUpperCase();
            let iteration = 0;
            const intervalID = setInterval(()=> {
              const newWORD = word.innerText.split("").map((_, index) => {
                if (index < iteration) {
                    return def_value[index];
                }
                return letters[Math.floor(Math.random() * 26)];
              }).join("");
              console.log(newWORD);
              word.innerText = newWORD;
              if (iteration > 10) {
                clearInterval(intervalID);
              }
              iteration += 1 / 2;
            }, 40);
          };
    
          word.addEventListener('mouseover', handleMouseOver);
    
          return () => {
            word.removeEventListener('mouseover', handleMouseOver);
          };
        }
      });
  return (
            <span id='word' ref={wordRef} className={cn('font-sans cursor-pointer text-white', className)}>{text.toUpperCase()}</span>
  )
}

export default HackerEffect;`,
    props: [
      {
        propName: "text",
        type: "string",
        default: "-",
        description: "The text to animate.",
      },
      {
        propName: "className",
        type: "string",
        default: "-",
        description: "Additional class names for styling.",
      }
    ]
  },
  "SearchBar": {
    name: "SearchBar",
    Component: ActionSearchBar,
    description: "A modern search bar with a command palette style.",
    tags: ["Search", "Command Palette"],
    code: `
"use client"
import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Send, BarChart2, Globe, Video, PlaneTakeoff, AudioLines } from "lucide-react"

function useDebounce<T>(value: T, delay = 500): T {
    const [debouncedValue, setDebouncedValue] = useState<T>(value)
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setDebouncedValue(value)
      }, delay)
  
      return () => {
        clearTimeout(timer)
      }
    }, [value, delay])
  
    return debouncedValue
  }

interface Action {
  id: string
  label: string
  icon: React.ReactNode
  description?: string
  short?: string
  end?: string
}

interface SearchResult {
  actions: Action[]
}

const allActions = [
  {
    id: "1",
    label: "Book tickets",
    icon: <PlaneTakeoff className="h-4 w-4 text-blue-500" />,
    description: "Operator",
    short: "⌘K",
    end: "Agent",
  },
  {
    id: "2",
    label: "Summarize",
    icon: <BarChart2 className="h-4 w-4 text-orange-500" />,
    description: "gpt-4o",
    short: "⌘cmd+p",
    end: "Command",
  },
  {
    id: "3",
    label: "Screen Studio",
    icon: <Video className="h-4 w-4 text-purple-500" />,
    description: "gpt-4o",
    short: "",
    end: "Application",
  },
  {
    id: "4",
    label: "Talk to Jarvis",
    icon: <AudioLines className="h-4 w-4 text-green-500" />,
    description: "gpt-4o voice",
    short: "",
    end: "Active",
  },
  {
    id: "5",
    label: "Translate",
    icon: <Globe className="h-4 w-4 text-blue-500" />,
    description: "gpt-4o",
    short: "",
    end: "Command",
  },
]

function ActionSearchBar({ actions = allActions }: { actions?: Action[] }) {
  const [query, setQuery] = useState("")
  const [result, setResult] = useState<SearchResult | null>(null)
  const [isFocused, setIsFocused] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const [selectedAction, setSelectedAction] = useState<Action | null>(null)
  const debouncedQuery = useDebounce(query, 200)

  useEffect(() => {
    if (!isFocused) {
      setResult(null)
      return
    }

    if (!debouncedQuery) {
      setResult({ actions: allActions })
      return
    }

    const normalizedQuery = debouncedQuery.toLowerCase().trim()
    const filteredActions = allActions.filter((action) => {
      const searchableText = action.label.toLowerCase()
      return searchableText.includes(normalizedQuery)
    })

    setResult({ actions: filteredActions })
  }, [debouncedQuery, isFocused])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
    setIsTyping(true)
  }

  const container = {
    hidden: { opacity: 0, height: 0 },
    show: {
      opacity: 1,
      height: "auto",
      transition: {
        height: {
          duration: 0.4,
        },
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        height: {
          duration: 0.3,
        },
        opacity: {
          duration: 0.2,
        },
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2,
      },
    },
  }

  // Reset selectedAction when focusing the input
  const handleFocus = () => {
    setSelectedAction(null)
    setIsFocused(true)
  }

  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="relative flex flex-col justify-start items-center min-h-[300px]">
        <div className="w-full max-w-sm sticky top-0 bg-background z-10 pt-4 pb-1">
          <label className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1 block" htmlFor="search">
            Search Commands
          </label>
          <div className="relative">
            <Input
              type="text"
              placeholder="What's up?"
              value={query}
              onChange={handleInputChange}
              onFocus={handleFocus}
              onBlur={() => setTimeout(() => setIsFocused(false), 200)}
              className="pl-3 pr-9 py-1.5 h-9 text-sm rounded-lg focus-visible:ring-offset-0"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4">
              <AnimatePresence mode="popLayout">
                {query.length > 0 ? (
                  <motion.div
                    key="send"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Send className="w-4 h-4 text-gray-400 dark:text-gray-500" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="search"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Search className="w-4 h-4 text-gray-400 dark:text-gray-500" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="w-full max-w-sm">
          <AnimatePresence>
            {isFocused && result && !selectedAction && (
              <motion.div
                className="w-full border rounded-md shadow-sm overflow-hidden dark:border-gray-800 bg-white dark:bg-black mt-1"
                variants={container}
                initial="hidden"
                animate="show"
                exit="exit"
              >
                <motion.ul>
                  {result.actions.map((action) => (
                    <motion.li
                      key={action.id}
                      className="px-3 py-2 flex items-center justify-between hover:bg-gray-200 dark:hover:bg-zinc-900  cursor-pointer rounded-md"
                      variants={item}
                      layout
                      onClick={() => setSelectedAction(action)}
                    >
                      <div className="flex items-center gap-2 justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-gray-500">{action.icon}</span>
                          <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{action.label}</span>
                          <span className="text-xs text-gray-400">{action.description}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-400">{action.short}</span>
                        <span className="text-xs text-gray-400 text-right">{action.end}</span>
                      </div>
                    </motion.li>
                  ))}
                </motion.ul>
                <div className="mt-2 px-3 py-2 border-t border-gray-100 dark:border-gray-800">
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>Press ⌘K to open commands</span>
                    <span>ESC to cancel</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export default ActionSearchBar
`,
    props: [
      {
        propName: "actions",
        type: "Action[]",
        default: "-",
        description: "The actions to display in the search bar.",
      }
    ]
  },
"Theme Toggle": {
  name: "Theme Toggle",
  Component: ThemeToggle,
  description: "A toggle for switching between light and dark themes.",
  tags: ["Theme", "Dark Mode"],
  code: escapedCode,
  props: []
},
"Vercel tabs": {
  name: "Vercel tabs",
  Component: AnimatedNavbar,
  description: "A simple animated navbar with vercel like tab animations.",
  tags: ["Navbar", "Tabs"],
  code: "\"use client\"\nimport React from \"react\"\nimport { motion } from \"framer-motion\"\n\nconst AnimatedNavbar = () => {\n  const links = [\n    { name: \"Home\", href: \"/\" },\n    { name: \"About\", href: \"/about\" },\n    { name: \"Contact\", href: \"/contact\" },\n    { name: \"Services\", href: \"/services\" },\n    { name: \"Blog\", href: \"/blog\" },\n  ]\n\n  const [activeLink, setActiveLink] = React.useState(0)\n  const [hoveredLink, setHoveredLink] = React.useState<number | null>(null)\n\n  const handleLinkClick = (index: number) => {\n    setActiveLink(index)\n  }\n\n  const highlightedLink = hoveredLink !== null ? hoveredLink : activeLink\n\n  return (\n      <div className=\"flex justify-center rounded-full items-center\">\n        {links.map((link, index) => (\n          <div\n            onClick={() => handleLinkClick(index)}\n            onMouseEnter={() => setHoveredLink(index)}\n            onMouseLeave={() => setHoveredLink(null)}\n            key={index}\n            className={`px-5 py-2 relative rounded-full  flex items-center justify-center cursor-pointer`}\n          >\n            <span className=\"mix-blend-exclusion text-white z-10\">{link.name}</span>\n            {index === highlightedLink && (\n              <motion.div\n                transition={{ duration: 0.7, type: \"spring\" }}\n                layoutId={\"const\"}\n                className=\"w-full inset-0 absolute h-full bg-gradient-to-r bg-neutral-950 dark:bg-white rounded-full\"\n              ></motion.div>\n            )}\n          </div>\n        ))}\n      </div>\n  )\n}\n\nexport default AnimatedNavbar;",
  props: []
},
"Draggable Project Workflow": {
  name: "Draggable Project Workflow",
  Component: DragableItems,
  description: "A drag and drop project workflow component.",
  tags: ["Draggable", "Project Workflow"],
  code: `"use client"\nimport * as React from \"react\";\nimport { useState } from \"react\";\nimport { Reorder } from \"framer-motion\";\n\n\nconst initialItems = [\"📱 Review App Design\", \"🔍 User Research\", \"💻 Code Implementation\", \"🧪 Testing & QA\"]\n\ninterface ItemProps {\n    items?: string[];\n}\n\nexport default function DragableItems({items = initialItems}: ItemProps) {\n    \n    const [itemsToMap, setItems] = useState(items || initialItems);\n\n    return (\n        <div className=\"w-screen h-screen bg-neutral-100 flex items-center justify-center\">\n            <div className=\"p-5 md:px-9 rounded-md bg-white shadow-xl w-fit h-fit\">\n            <h2 className=\"text-2xl font-semibold text-slate-800 mb-2\">Project Workflow</h2>\n            <p className=\"text-sm text-slate-500 mb-6\">Drag to reorder project phases</p>\n            <Reorder.Group axis=\"y\" onReorder={setItems} values={items}>\n                {itemsToMap.map((item) => (\n                    <Item key={item} item={item} />\n                ))}\n            </Reorder.Group>\n            </div>\n        </div>\n    );\n}\n\nfunction Item({ item }: { item: string }) {\n\n    const [isDragging, setIsDragging] = useState(false);\n\n    return (\n        <Reorder.Item\n            className={\`bg-white text-black border border-gray-300 \${isDragging ? \"shadow-xl\" : \"\"} px-6 rounded-lg shadow-md p-4 m-2 cursor-pointer\`}\n            id={item}\n            value={item}\n            onDrag={()=> {\n                setIsDragging(true);\n            }}\n            onDragEnd={() => {\n                setIsDragging(false);\n            }}\n        >\n            <div className=\"px-10\">{item}</div>\n        </Reorder.Item>\n    );\n}`,
  props: [
    {
      propName: "items",
      type: "string[]",
      default: "-",
      description: "The items to display in the draggable list.",
    }
  ]
},
"GPT Shimmer Text": {
  name: "GPT Shimmer Text",
  Component: ShimmerText,
  description: "A shimmer text effect for OpenAI.",
  tags: ["Shimmer", "OpenAI"],
  code: `
'use client'
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function ShimmerText({ text, className }: { text: string, className?: string }) {
    return (
        <div className={cn("relative inline-block text-lg font-sans font-semibold bg-clip-text text-transparent bg-gradient-to-b from-neutral-700 to-neutral-500 dark:from-neutral-500 dark:to-neutral-400", className)}>
            {text}
            <motion.div
                className="absolute inset-0 text-transparent bg-clip-text [background-image:linear-gradient(to_right,_transparent_0%,_transparent_35%,_black_50%,_transparent_65%,_transparent_100%)] dark:[background-image:linear-gradient(to_right,_transparent_0%,_transparent_35%,_white_50%,_transparent_65%,_transparent_100%)]"
                style={{ backgroundSize: "200% 100%" }}
                animate={{ backgroundPosition: ["200% 0%", "-200% 0%"] }}
                transition={{
                    duration: 3.6,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop",
                }}
            >
                {text}
            </motion.div>
        </div>
    );
}
  `,
  props: [
    {
      propName: "text",
      type: "string",
      default: "-",
      description: "The text to animate.",
    },
    {
      propName: "className",
      type: "string",
      default: "-",
      description: "Additional class names for styling.",
    }
  ]
},
"vercel Tabs": {
  name: "Vercel Tabs",
  Component: AnimatedNavbar,
  description: "A simple animated navbar with vercel like tab animations.",
  tags: ["Navbar", "Tabs", "Vercel"],
  code: `
"use client"
import React from "react"
import { motion } from "framer-motion"

const AnimatedNavbar = () => {
  const links = [
    { name: "Home", href: "/" },
    { name: "ProjectReports", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
  ]

  const [activeLink, setActiveLink] = React.useState(0)
  const [hoveredLink, setHoveredLink] = React.useState<number | null>(null)

  const handleLinkClick = (index: number) => {
    setActiveLink(index)
  }

  const highlightedLink = hoveredLink !== null ? hoveredLink : activeLink

  return (
      <div className="flex justify-center rounded-full items-center">
        {links.map((link, index) => (
          <div
            onClick={() => handleLinkClick(index)}
            onMouseEnter={() => setHoveredLink(index)}
            onMouseLeave={() => setHoveredLink(null)}
            key={index}
            className={'px-5 py-2 relative rounded-full flex items-center justify-center cursor-pointer'}
          >
            <span className="mix-blend-exclusion text-white z-10">{link.name}</span>
            {index === highlightedLink && (
              <motion.div
                transition={{ duration: 0.7, type: "spring" }}
                layoutId={"const"}
                className="w-full inset-0 absolute h-full bg-gradient-to-r bg-neutral-950 dark:bg-white rounded-full"
              ></motion.div>
            )}
          </div>
        ))}
      </div>
  )
}

export default AnimatedNavbar;
`,
  props: []
},
"Flip Text": {
  name: "Flip Text",
  Component: FlipFade,
  description: "A flip text animation.",
  tags: ["Animation", "Text", "Flip"],
  code: `
'use client'
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface FlipFadeProps {
    textArray?: string[];
    className?: string;
}

export default function FlipFade({textArray = ["better", "cleaner", "cooler", "louder"], className}: FlipFadeProps) {
    const arr = textArray;
    const [active, setActive] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActive(prev => {
                if (prev === arr.length - 1) {
                    return 0;
                }
                return prev + 1;
            });
        }, 1500);

        return () => clearInterval(interval);
    })

    return (
        <AnimatePresence mode="popLayout">
            <motion.div
                key={arr[active]}
                initial={{ rotateX: 0, opacity: 0, filter: 'blur(10px)', y: 50 }}
                animate={{ rotateX: 0, opacity: 1, filter: 'blur(0px)', y: 0 }}
                exit={{
                    rotateX: 0, opacity: 0, scale: 1.5, filter: 'blur(10px)', y: -50, transition: {
                        type: 'keyframes',
                    }
                }}
                transition={{ type: 'spring', damping: 20, stiffness: 350 }}
                className={cn("text-neutral-950 dark:text-white origin-top-left", className)}
                style={{
                    transformStyle: 'preserve-3d',
                }}
            >
                {arr[active]}
            </motion.div>
        </AnimatePresence>
    );
}
`,
props: [
    {
      propName: "textArray",
      type: "string[]", 
      default: "['better', 'cleaner', 'cooler', 'louder']",
      description: "The array of text to animate.",
    },
    {
      propName: "className",
      type: "string",
      default: "-",
      description: "Additional class names for styling.",
    }
  ]
},
};
