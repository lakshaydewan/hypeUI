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
