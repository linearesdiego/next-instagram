"use client";
//store
import useUsers from "@/store/useUsers";
//react
import { useState, useEffect } from "react";
//toast
import { toast } from "sonner";
import { Button } from "..";
//components


export const ProfileEdit = () => {
    const { fetchUsersOne, usersOne, updateUser } = useUsers();

    const [user, setUser] = useState({
        username: "",
        email: "",
        fullname: "",
        bio: "",
    });

    useEffect(() => {
        fetchUsersOne({ id: 1 });
    }, [fetchUsersOne]);

    useEffect(() => {
        if (usersOne) {
            setUser({
                username: usersOne.username,
                email: usersOne.email,
                fullname: usersOne.fullname,
                bio: usersOne.bio,
            });
        }
    }, [usersOne]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateUser({ data: user, id: usersOne?.id }).then(() => {
            toast.success("Perfil actualizado correctamente");
        });
    };
    return (
        <div className="mt-20 lg:mt-0">
            <h1 className="  text-white text-lg tracking-widest mb-2">
                Configurar Perfil
            </h1>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label
                        htmlFor="username"
                        className="block text-sm font-medium text-gray-200"
                    >
                        Nombre de Usuario
                    </label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={user.username}
                        onChange={handleChange}
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>

                <div>
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-200"
                    >
                        Correo Electrónico
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>

                <div>
                    <label
                        htmlFor="fullname"
                        className="block text-sm font-medium text-gray-200"
                    >
                        Nombre Completo
                    </label>
                    <input
                        type="text"
                        id="fullname"
                        name="fullname"
                        value={user.fullname}
                        onChange={handleChange}
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>

                <div>
                    <label
                        htmlFor="bio"
                        className="block text-sm font-medium text-gray-200"
                    >
                        Biografía
                    </label>
                    <textarea
                        id="bio"
                        name="bio"
                        value={user.bio}
                        rows={5}
                        cols={5}
                        onChange={handleChange}
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                </div>



                <Button disabled={
                    !user.username ||
                    !user.email ||
                    !user.fullname ||
                    !user.bio
                } type='submit' text="Guardar Cambios" otherProps='w-full' onClick={handleSubmit} />
            </form>
        </div>
    )
}
