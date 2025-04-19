import React from 'react'
import ButtonSleek from './ButtonSleek'

const componentsName = [
    { name: 'Button', href: '/components/button' },
    { name: 'Input', href: '/components/input' },
    { name: 'Textarea', href: '/components/textarea' },
    { name: 'Checkbox', href: '/components/checkbox' },
    { name: 'Radio', href: '/components/radio' },
    { name: 'Switch', href: '/components/switch' },
    { name: 'Avatar', href: '/components/avatar' },
    { name: 'Badge', href: '/components/badge' },
    { name: 'Button', href: '/components/button' },
    { name: 'Card', href: '/components/card' },
    { name: 'Checkbox', href: '/components/checkbox' },
    { name: 'Divider', href: '/components/divider' },
    { name: 'Dropdown', href: '/components/dropdown' },
    { name: 'Icon', href: '/components/icon' },
    { name: 'Input', href: '/components/input' },
    { name: 'Modal', href: '/components/modal' },
    { name: 'Radio', href: '/components/radio' },
    { name: 'Select', href: '/components/select' },
    { name: 'Switch', href: '/components/switch' },
    { name: 'Tabs', href: '/components/tabs' },
    { name: 'Textarea', href: '/components/textarea' },
    { name: 'Toast', href: '/components/toast' },
    { name: 'Tooltip', href: '/components/tooltip' },
    { name: 'Typography', href: '/components/typography' },
    { name: 'AvatarGroup', href: '/components/avatar-group' },
    { name: 'Breadcrumb', href: '/components/breadcrumb' },
    { name: 'ButtonGroup', href: '/components/button-group' },
    { name: 'Card', href: '/components/card' },
    { name: 'Checkbox', href: '/components/checkbox' },
    { name: 'Divider', href: '/components/divider' },
    { name: 'Dropdown', href: '/components/dropdown' },
    { name: 'Icon', href: '/components/icon' },
]

const ComponentSideBar = () => {
    return (
        <div className='lg:flex justify-center items-center hidden w-[27vw] h-screen bg-white dark:bg-neutral-950 pt-40'>
            <div className='flex w-[70%] relative flex-col items-start gap-1.5 overflow-y-scroll h-full pb-2'>
                <div className='dark:text-white text-black py-1 z-10 bg-white dark:bg-neutral-950 sticky top-0 left-0 text-start text-[15px] font-sans font-bold mb-1'>All Components</div>
                {
                    componentsName.map((component, index) => (
                        <ButtonSleek key={index} text={component.name} link={component.href} />
                    ))
                }
            </div>
        </div>
    )
}

export default ComponentSideBar;