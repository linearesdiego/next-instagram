import React from 'react'

export const Button = ({ onClick, disabled, text, type, otherProps }) => {
    return (
        <button
            onClick={onClick}
            className={`bg-blue-500 text-white px-6 py-2 rounded-xl mt-5 hover:bg-blue-700 ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${otherProps}`}
            disabled={disabled}
            type={type}
        >
            {text}
        </button>
    )
}
