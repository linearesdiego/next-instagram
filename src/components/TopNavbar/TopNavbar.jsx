
'use client'

//utils
import { links } from '@/utils/Links';
//next
import Image from 'next/image';
import Link from 'next/link';
//react
import React, { useState } from 'react';
//icons
import { FaBars, FaTimes } from 'react-icons/fa';

export const TopNavbar = () => {

    const [togleMenu, setTogleMenu] = useState(false);

    const toggleMenuClick = () => {
        setTogleMenu(!togleMenu);
    }
    return (
        <div className={`fixed z-50 w-full p-6 bg-grisOscuro text-white flex justify-between items-center`}>
            <button onClick={toggleMenuClick} className="text-white">
                {togleMenu ? <FaTimes className="w-8 h-8" /> : <FaBars className="w-8 h-8" />}
            </button>
            <Link className="cursor-pointer" href='/'>
                <Image src='/logo/instagram.png' alt='instagram' width={100} height={100} priority />

            </Link>
            {
                togleMenu && (
                    <div className="w-full fixed bg-blackOscuro py-10 flex items-center justify-center gap-7  top-24">
                        <ul className='w-full flex flex-col gap-10'>
                            {
                                links.map((link, index) => (
                                    <Link key={index} href={link.href} className="flex gap-5 items-center cursor-pointer hover:text-blue-500" onClick={toggleMenuClick}>
                                        {link.icon}
                                        <span>{link.name}</span>
                                    </Link>
                                ))
                            }
                        </ul>
                    </div>
                )
            }
        </div>
    );
};

