'use client'
import { Avatar } from ".";

export const Profile = ({ user, postOne }) => {


    return (
        <div className="mt-10">
            <div className="flex items-center justify-center gap-4">

                <Avatar username={user[0]?.username} size='w-20 h-20 text-2xl' />
            </div>

            <div className="mt-4 text-center">
                <h2 className="text-xl font-semibold">{user[0]?.fullname}</h2>
                <p>@{user[0]?.username}</p>
            </div>

            <div className="w-full flex items-center justify-center mt-10 gap-5">
                <div className="text-center">
                    <p className="text-2xl font-bold">{postOne?.length}</p>

                    <p className="text-lg">Publicaciones</p>
                </div>
                <div className="text-center">
                    <p className="text-2xl font-bold">{user[0]?.followers}</p>

                    <p className="text-lg">Seguidores</p>
                </div>
                <div className="text-center">
                    <p className="text-2xl font-bold">{user[0]?.following}</p>

                    <p className="text-lg">Seguidos</p>
                </div>
            </div>

        </div>
    )
}
