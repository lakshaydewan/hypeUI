"use client"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Instagram, Twitter, Github, Linkedin, ArrowRight, Menu, X } from "lucide-react"

const FullScreenNav = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Journal", href: "/journal" },
    { name: "Contact", href: "/contact" },
  ]

  const socialLinks = [
    { icon: <Instagram size={20} />, href: "https://instagram.com", label: "Instagram" },
    { icon: <Twitter size={20} />, href: "https://twitter.com", label: "Twitter" },
    { icon: <Github size={20} />, href: "https://github.com", label: "Github" },
    { icon: <Linkedin size={20} />, href: "https://linkedin.com", label: "LinkedIn" },
  ]

  return (
    <div className="relative flex justify-center items-center h-screen w-screen bg-[#f8f8f8] text-[#1a1a1a] font-['Inter',sans-serif] overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f8f8f8] to-[#eaeaea] z-0" />

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={() => setIsOpen(false)}
            className="absolute top-0 left-0 w-full h-full backdrop-blur-sm bg-black/5 z-10"
          />
        )}
      </AnimatePresence>

      {/* Menu toggle button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-8 right-8 z-30 p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
      >
        <motion.div initial={{ rotate: 0 }} animate={{ rotate: isOpen ? 90 : 0 }} transition={{ duration: 0.3 }}>
          {isOpen ? <X size={20} className="text-[#1a1a1a]" /> : <Menu size={20} className="text-[#1a1a1a]" />}
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              duration: 0.5,
              ease: [0.25, 1, 0.5, 1],
            }}
            className="fixed top-0 right-0 w-full md:w-[450px] h-screen bg-white flex flex-col p-12 pt-28 z-20 shadow-2xl overflow-hidden"
          >
            {/* Menu content */}
            <div className="h-full flex flex-col justify-between">
              <nav className="mb-12">
                <h2 className="text-sm font-medium uppercase tracking-wider text-[#888] mb-8">Navigation</h2>
                <ul className="space-y-1">
                  {navLinks.map((link, index) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.1 + index * 0.1,
                        duration: 0.5,
                      }}
                    >
                      <a
                        href={link.href}
                        className="group flex items-center justify-between py-4 text-2xl font-light text-[#1a1a1a] hover:text-[#3b82f6] transition-colors duration-300 border-b border-[#f0f0f0]"
                      >
                        <span>{link.name}</span>
                        <motion.div
                          initial={{ opacity: 0, x: -5 }}
                          whileHover={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.2 }}
                          className="opacity-0 group-hover:opacity-100 text-[#3b82f6]"
                        >
                          <ArrowRight size={16} />
                        </motion.div>
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="mt-auto"
              >
                <h2 className="text-sm font-medium uppercase tracking-wider text-[#888] mb-6">Connect</h2>
                <div className="flex gap-4">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.6 + index * 0.1,
                        duration: 0.4,
                      }}
                      className="group"
                    >
                      <div className="p-3 rounded-full bg-[#f5f5f5] hover:bg-[#3b82f6] hover:text-white transition-all duration-300">
                        {link.icon}
                      </div>
                    </motion.a>
                  ))}
                </div>

                <div className="mt-12 pt-6 border-t border-[#f0f0f0] text-[#888] text-sm">
                  <p>© {new Date().getFullYear()} Studio</p>
                  <p className="mt-1">hello@studio.com</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      
    </div>
  )
}

export default FullScreenNav;
