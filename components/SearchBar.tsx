'use client'
import React, { useCallback, useEffect } from 'react'
import { IconSearch } from '@tabler/icons-react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

const SearchBar = () => {

    const [open, setOpen] = React.useState(false)

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
            }} className='flex group justify-center mr-8 gap-1 border py-1.5 px-2 border-[#333333] items-center w-fit h-fit bg-neutral-950 rounded-lg'>
                <IconSearch stroke={1.5} className='text-primary text-xs w-4 h-4 transition-all duration-150 ease-out group-hover:text-white' />
                <div className='text-primary text-xs group-hover:text-white font-sans font-bold ml-2 w-fit h-fit transition-all duration-150 ease-out'>Search Components</div>
                <div className='text-primary bg-neutral-800 px-1.5 py-1 rounded-sm flex justify-center items-center gap-0.5 w-fit h-fit'>
                    <span className="text-xs">⌘</span>
                    <span className='text-xs'>K</span>
                </div>
            </button>
            {
                open && (
                    <Dialog open={open} onOpenChange={setOpen}>
                        <DialogTrigger>Open</DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Are you absolutely sure?</DialogTitle>
                                <DialogDescription>
                                    This action cannot be undone. This will permanently delete your account
                                    and remove your data from our servers.
                                </DialogDescription>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
                )
            }
        </>
    )
}

export default SearchBar