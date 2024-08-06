'use client'
//store
import useUsers from "@/store/useUsers";
import usePosts from "@/store/usePosts";
//next
import Image from "next/image"
//react
import { useEffect, useState } from "react";

//components
import { Profile } from ".";

//router
import Link from "next/link";
import { links } from "@/utils/Links";


export const Sidebar = () => {
    //estado para manejar si el sidebar esta abierto o cerrado
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const { fetchUsers, users } = useUsers();
    const { postsOne, fetchPostsOne } = usePosts();
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    useEffect(() => {
        fetchUsers();
        fetchPostsOne({ id: "1" });
    }
        , []);
    return (
        <div className={`fixed inset-y-0 left-0 w-[420px] p-8 bg-grisOscuro text-white transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0`}>
            <div className="flex items-center justify-between">
                <div className="w-full flex items-center">
                    <Image src='/logo/logo.png' alt="logo" className="" width={50} height={50} priority />
                    <Image src='/logo/instagram.png' alt="instagram" className='w-auto h-auto' width={250} height={250} priority />
                </div>
                <button onClick={toggleSidebar} className="md:hidden text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>

            <Profile user={users} postOne={postsOne} />

            <nav className="mt-10 ml-4">
                <ul className="flex flex-col gap-10">

                    {
                        links.map((link, index) => (
                            <Link key={index} href={link.href} className="flex gap-5 items-center cursor-pointer hover:text-blue-500">
                                {link.icon}
                                <span>{link.name}</span>
                            </Link>
                        ))
                    }

                </ul>

            </nav>

        </div>
    )
}
