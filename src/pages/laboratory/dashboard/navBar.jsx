'use client'
import { Avatar ,AvatarImage,AvatarFallback } from '../../../components/ui/avatar';
import React, { useEffect, useState } from 'react'
import { Cross1Icon, HamburgerMenuIcon } from '@radix-ui/react-icons'
import { Link } from "react-router-dom";

const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 pt-7 pb-5 mb-5 shadow-md ${isScrolled
                    ? 'bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg'
                    : 'bg-transparent'
                }`}
        >
            <div className='w-full flex justify-between flex-wrap'>
                <div className='text-2xl font-bold md:ml-20 ml-3'>HakimeLabs</div>

                <div className=' flex flex-1 justify-end'>
                    <div className='flex items-center'>
                        <ul className='flex'>
                            
                            <li className='mr-20'>
                                <Link href='/' className='bg-hover-blue hover:text-blue-500'>
                                    <Avatar>
                                        <AvatarImage src="https://github.com/shadcn.png" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
      
            </div>
        </nav>
    )
}

export default NavBar
