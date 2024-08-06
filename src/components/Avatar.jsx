
export const Avatar = ({ username, size }) => {
    //aca realizo un avatar con las iniciales del username del usuario
    const avatar = username?.substring(0, 2).toUpperCase()
    return (
        <div className={`${size} bg-blue-400 rounded-full flex items-center justify-center  font-semibold`}>
            {avatar}
        </div>
    )
}
