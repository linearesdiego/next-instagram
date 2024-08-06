'use client';

//store
import usePosts from '@/store/usePosts';
import useUsers from '@/store/useUsers';
//react
import React, { useEffect, useState } from 'react';
import { Loader, PostItem } from '..';
//components


export const Posts = () => {
    const { posts, fetchPosts } = usePosts();
    const { users } = useUsers();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPosts = async () => {
            await fetchPosts();
            setLoading(false);
        };
        loadPosts();
    }, [fetchPosts]);

    return (
        <div className="mt-10">
            <h1 className="text-white text-lg tracking-widest mb-2">Publicaciones</h1>

            {loading ? (
                <div className="flex justify-center items-center h-[500px]" >
                    {/* Loader */}
                    <Loader />

                </div>
            ) : (
                <div className="columns-1 gap-5 lg:gap-8 sm:columns-2 lg:columns-3 xl:columns-4">
                    {posts.map(post => (
                        <PostItem key={post.id} item={post} users={users?.find(user => user.id === post.userId)} isHome={true} />
                    ))}
                </div>
            )}

            {posts.length === 0 && !loading && <p className="text-white text-lg mt-5">No hay publicaciones</p>}
        </div>
    );
};
