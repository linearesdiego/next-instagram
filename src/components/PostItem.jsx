'use client'
import React, { useState } from 'react'
import { Avatar } from '.'
import usePosts from '@/store/usePosts';
import { toast } from 'sonner';
import Image from 'next/image';

export const PostItem = ({ item, users, isHome }) => {
    const [likes, setLikes] = useState(item.likes);
    const [isLiked, setIsLiked] = useState(false);

    const { uploadLikes } = usePosts();


    const handleLike = async () => {
        const newLikes = likes + 1;
        setLikes(newLikes);
        setIsLiked(true);
        await uploadLikes({
            data: {
                likes: newLikes,
                id: item.id
            },
            id: users?.id
        }).then((response) => {
            if (response) {
                toast.success('Le ha dado me gusta a la publicación');
            }
        });
    };

    const handleDoubleClick = async () => {
        if (!isLiked) {
            handleLike();
        }
    };

    const handleOneClick = async () => {
        if (!isLiked) {
            handleLike();
        }
    };

    return (
        <div key={item.id} className="relative flex flex-col space-y-3 max-h-[700px] rounded-lg overflow-hidden">
            <img
                onDoubleClick={handleDoubleClick}
                src={item.image}
                alt={item.title}
                className={`w-full object-cover max-h-[500px] rounded-lg  ${!isHome ? 'my-3' : ''}`}
            />
            {
                isHome &&
                <div className="flex flex-col p-3 space-y-2 rounded-b-lg">

                    <div key={users?.id} className="w-full flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <Avatar username={users?.username} size='w-7 h-7 text-sm ' />
                            <p className="text-white text-sm">{users?.username}</p>
                        </div>
                        <div className="flex items-center gap-1 text-white">
                            <Image onClick={handleOneClick} src={isLiked ? "/logo/hearthRed.png" : "/logo/hearth.svg"}
                                width={20} height={20} alt="heart" className="cursor-pointer" />
                            <span>{item?.likes}</span>
                        </div>
                    </div>

                </div>
            }

        </div>
    )
}
