import React from 'react'
import { CiSearch } from "react-icons/ci";

export const InputSearch = () => {
    return (
        <div className="relative">
            <input type="text" className="px-10 py-2 bg-grisOscuro rounded-2xl w-80 text-white" placeholder="Buscar usuario" />
            <CiSearch className="w-6 h-6 absolute top-2 left-3" color='white' />
        </div>
    )
}