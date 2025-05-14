import Link from "next/link"
import { IconBrandDiscord, IconBrandGithub, IconBrandTwitter } from "@tabler/icons-react"
import { Heart } from "lucide-react"

const links_column_1 = [
  { name: "Components", href: "/components" },
  { name: "Pricing", href: "/pricing" },
  { name: "Templates", href: "/templates" },
  { name: "Showcase", href: "/Showcase" },
  { name: "Blog", href: "/blog" },
  { name: "Box Shadows", href: "/box-shadows" },
]

const links_column_2 = [
  {
    name: "Github",
    href: "https://github.com/lakshaydiwan/hype-ui",
    icon: <IconBrandGithub stroke={1} className="size-5" />,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/lakshaydiwan",
    icon: <IconBrandTwitter stroke={1} className="size-5" />,
  },
  {
    name: "Discord",
    href: "https://discord.gg/9w4k2v5",
    icon: <IconBrandDiscord stroke={1} className="size-5" />,
  },
]

const Footer = () => {
  return (
    <footer className="w-full relative overflow-hidden bg-gradient-to-b dark:from-black dark:to-black/95 from-neutral-100 to-white  dark:text-white pt-32 pb-14">
      {/* Subtle gradient accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-900 dark:via-neutral-500/30 to-transparent w-full"></div>

      {/* Large HYPE text */}
      <div className="flex justify-center items-center w-full translate-y-[46%] h-fit absolute bottom-0 opacity-5">
        <h1 className="font-sans font-extrabold sm:text-[200px] text-[100px] md:text-[300px] lg:text-[400px]">HYPE</h1>
      </div>

      {/* Links section */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="w-full flex justify-center items-start">
          <div className="flex flex-row gap-20 md:gap-16 lg:gap-32 items-start">
            <div className="flex flex-col items-start gap-4">
              {links_column_1.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="dark:text-neutral-400 text-neutral-700 hover:text-neutral-950 dark:hover:text-white transition-all duration-300 ease-out font-sans font-medium text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="flex flex-col items-start gap-4">
              {links_column_2.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="dark:text-neutral-400 text-neutral-700 hover:text-neutral-950 dark:hover:text-white transition-all duration-300 ease-out font-sans font-medium text-sm flex items-center gap-2"
                >
                  {link.icon}
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Built with love - subtle and elegant */}
      <div className="container mx-auto px-4 mt-16 text-center">
        <div className="inline-flex items-center justify-center gap-1.5 text-xs text-neutral-500 hover:text-neutral-400 transition-colors duration-300">
          <span>Built with</span>
          <Heart className="h-3 w-3 text-green-500/70 fill-green-500/70" />
          <span>
            by{" "}
            <Link
              href="https://twitter.com/lakshaydiwan"
              className="hover:text-neutral-300 transition-colors duration-300"
            >
              Lakshay Diwan
            </Link>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
