import React from 'react'
import SearchBar from './SearchBar'
import Logo from './Logo'
import Link from 'next/link'
import { IconSun } from '@tabler/icons-react'
import NavbarButton from './NavbarButton'

const links = [
    { name: 'Components', href: '/components',  },
    { name: 'Buttons', href: '/Buttons' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Showcase', href: '/Showcase', isNew:true },
]

const Navbar = () => {
    return (
        <div className='fixed top-0 z-50 left-0 w-full h-fit flex justify-center items-center'>
            <div className='w-[95%] h-fit py-1 bg-neutral-950 border border-neutral-800 rounded-lg mt-4 flex flex-row justify-between items-center'>
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
                    <Link href={"#"} className='text-primary hover:text-white transition-all duration-100 ease-out font-sans font-medium text-sm'>Discord</Link>
                    <Link href={"#"} className='text-primary hover:text-white transition-all duration-100 ease-out font-sans font-medium text-sm'>Twitter</Link>
                    <div className='cursor-pointer group hover:bg-neutral-800 p-2 rounded-sm flex justify-center items-center transition-all duration-150 ease-out'>
                        <IconSun stroke={1.5} className='text-primary w-[17px] h-[17px] transition-all duration-150 ease-out group-hover:text-white' />
                    </div>
                    <SearchBar />
                </div>
            </div>
        </div>
    )
}

export default Navbar