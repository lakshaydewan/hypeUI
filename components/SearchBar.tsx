'use client'
import React, { useCallback, useEffect } from 'react'
import { IconCircle, IconSearch } from '@tabler/icons-react'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"

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

const SearchBar = () => {

    const [open, setOpen] = React.useState(false)
    const [searchResults, setSearchResults] = React.useState(componentsName)

    const handleSearch = (input: string) => {
        const filteredResults = componentsName.filter((component) => component.name.toLowerCase().includes(input.toLowerCase()))
        setSearchResults(filteredResults)
    }

    const handleKeyDown = useCallback((event: KeyboardEvent) => {
        if (event.key === 'k' && (event.ctrlKey || event.metaKey)) {
            event.preventDefault();
            setOpen(!open)
        }
    }, [open])

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown)
        return () => {
            document.removeEventListener('keydown', handleKeyDown)
        }
    }, [handleKeyDown])

    return (
        <>
            <button onClick={() => {
                setOpen(true)
            }} className='flex group justify-center mr-8 gap-1 border py-1.5 px-2 border-neutral-400 dark:border-[#333333] items-center w-fit h-fit bg-white dark:bg-neutral-950 rounded-lg'>
                <IconSearch stroke={1.5} className='text-primary text-xs w-4 h-4 transition-all duration-500 ease-out group-hover:text-neutral-950 dark:group-hover:text-white' />
                <div className='text-primary text-xs group-hover:text-neutral-950 dark:group-hover:text-white font-sans font-bold ml-2 w-fit h-fit transition-all duration-500 ease-out'>Search Components</div>
                <div className='group-hover:text-black dark:group-hover:text-neutral-50 text-primary bg-white dark:bg-neutral-800 px-1.5 transition-all duration-500 ease-out py-1 rounded-sm flex justify-center items-center gap-0.5 w-fit h-fit'>
                    <span className="text-xs">⌘</span>
                    <span className='text-xs'>K</span>
                </div>
            </button>
            {
                open && (
                    <Dialog open={open} onOpenChange={setOpen}>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Search For Components</DialogTitle>
                                    <div className='flex flex-col w-full h-[37vh]'>
                                        <div className='relative mt-1.5 flex justify-center rounded-lg border items-center w-full'>
                                            <IconSearch stroke={1.5} className='text-primary pl-2 text-xs w-[28px] h-[28px] transition-all duration-500 ease-out group-hover:text-neutral-950 dark:group-hover:text-white' />
                                            <input onChange={(e) => handleSearch(e.target.value)} type="text" placeholder="Search" className='w-full h-[40px] font-sans rounded-lg font-light tracking-wider outline-none focus:outline-0 ring-0 px-2' />
                                        </div>
                                        <div className='w-full h-[100%] pt-1 overflow-y-scroll gap-0'>
                                                {
                                                    searchResults.map((component, index) => {
                                                        return (
                                                            <div key={index} className='flex justify-start py-1 gap-1 items-center w-full'>  
                                                                <IconCircle stroke={1.5} className='text-primary pl-2 text-xs w-[28px] h-[28px] transition-all duration-500 ease-out group-hover:text-neutral-950 dark:group-hover:text-white' />
                                                                <a href={component.href} className='flex flex-row gap-1 items-center w-full'>
                                                                    {component.name}
                                                                </a>
                                                            </div>
                                                        )
                                                    })
                                                }
                                        </div>
                                    </div>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
                )
            }
        </>
    )
}

export default SearchBar