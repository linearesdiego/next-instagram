
export const Avatar = ({ username, size }) => {
    //quiero hacer un avatar con las dos primeras letras del username

    const avatar = username?.substring(0, 2).toUpperCase()
    return (
        <div className={`${size} bg-blue-400 rounded-full flex items-center justify-center  font-semibold`}>
            {avatar}
        </div>
    )
}
