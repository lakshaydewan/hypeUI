import React from 'react';
import Link from 'next/link';
import { IconBrandDiscord, IconBrandGithub, IconBrandTwitter } from '@tabler/icons-react';

const links_column_1 = [
    { name: 'Components', href: '/components' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Templates', href: '/templates' },
    { name: 'Showcase', href: '/Showcase' },
    { name: 'Blog', href: '/blog' },
    { name: 'Box Shadows', href: '/box-shadows' }
];

const links_column_2 = [
    { name: 'Github', href: 'https://github.com/lakshaydiwan/hype-ui', icon: <IconBrandGithub stroke={1} className='size-6' /> },
    { name: 'Twitter', href: 'https://twitter.com/lakshaydiwan', icon: <IconBrandTwitter stroke={1} className='size-6' /> },
    { name: 'Discord', href: 'https://discord.gg/9w4k2v5', icon: <IconBrandDiscord stroke={1} className='size-6' /> }
];

const Footer = () => {
    return (
        <div 
            className='w-screen h-[80vh] md:h-[100vh] pt-10 md:pt-28 bg-cover bg-center flex md:flex-row flex-col justify-center items-center' 
            style={{ backgroundImage: "url('https://static.cdn-luma.com/files/dm-landing/footer_1/flower-footer.jpg')" }}
        >
            <div className='w-full h-[30%] md:h-full flex-col flex justify-start items-center md:items-end'>
                <h1 className='text-center p-0 text-white font-sans font-bold text-8xl md:text-[150px] lg:text-[200px]'>
                    HYPE
                </h1>
            </div>
            <div className='w-full h-full flex justify-center items-start'>
                <div className='flex flex-row gap-20 md:gap-12 lg:gap-24 items-start md:mt-5 lg:mt-8'>
                    <div className='flex flex-col items-start gap-3'>
                        {links_column_1.map((link, index) => (
                            <Link key={index} href={link.href} className='text-neutral-300 hover:text-white transition-all duration-300 ease-out font-sans font-bold text-sm'>
                                {link.name}
                            </Link>
                        ))}
                    </div>
                    <div className='flex flex-col items-start gap-3'>
                        {links_column_2.map((link, index) => (
                            <Link key={index} href={link.href} className='text-neutral-300 hover:text-white transition-all duration-300 ease-out font-sans font-bold text-sm'>
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
