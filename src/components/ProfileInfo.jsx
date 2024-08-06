"use client";
//componets
import { Avatar } from "@/components";
//store
import useUsers from "@/store/useUsers";
//react
import { useEffect } from "react";

export const ProfileInfo = () => {
    const { fetchUsersOne, usersOne } = useUsers();
    useEffect(() => {
        fetchUsersOne({ id: 1 });
    }, []);
    return (
        <div className="mt-20 lg:mt-0">
            <h1 className="text-white text-lg tracking-widest mb-10">
                Mi Descripción personal
            </h1>

            <div className="w-full flex flex-col gap-4 items-center justify-center">
                <Avatar
                    username={usersOne?.username}
                    size="w-[150px] h-[150px] text-2xl text-white"
                />

                <p className="text-center text-white">{usersOne?.bio} </p>
            </div>
            <div className="mt-10 space-y-4">
                <h1 className="text-white text-lg tracking-widest ">Ubicación: </h1>
                <iframe
                    src={usersOne?.Ubi}
                    className="w-full h-[500px]"
                    style={{ border: "none" }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>

    )
}
