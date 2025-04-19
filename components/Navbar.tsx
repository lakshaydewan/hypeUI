import React from 'react'
import SearchBar from './SearchBar'
import Logo from './Logo'
import NavbarButton from './NavbarButton'
import ThemeToggle from './ThemeToggle'
import FullScreenNav from './FullScreenNav'

const links = [
    { name: 'Components', href: '/components',  },
    { name: 'Buttons', href: '/buttons' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Showcase', href: '/showcase', isNew:true },
]

const socialsLinks = [
    { name: "Twitter", href: "https://twitter.com/lakshaydiwan" },
    { name: "Discord", href: "https://github.com/lakshaydiwan" },
]

const Navbar = () => {
    return (
        <div className='fixed top-0 z-50 left-0 w-full h-fit flex justify-center items-center'>
            <div className='w-[95%] h-fit shadow-2xl border border-neutral-400 py-1 bg-white dark:bg-neutral-950 dark:border dark:border-neutral-800 rounded-lg mt-4 flex flex-row justify-between items-center'>
                <div className='flex justify-center items-center gap-5'>
                    <Logo />
                    <div className='hidden lg:flex flex-row gap-5 items-center'>
                        {
                            links.map((link, index) => {
                                return (
                                    <NavbarButton key={index} link={link} index={index} />
                                )
                            })
                        }
                    </div>
                </div>
                <div className='hidden lg:flex flex-row gap-3 items-center'>
                    {
                        socialsLinks.map((link, index) => {
                            return (
                                <NavbarButton key={index} link={link} index={index} />
                            )
                        })
                    }
                    <ThemeToggle />
                    <div className='mr-8'>
                        <SearchBar />
                    </div>
                </div>
                <div className='lg:hidden flex flex-row gap-3 items-center'>
                    <FullScreenNav />
                </div>
            </div>
        </div>
    )
}

export default Navbar