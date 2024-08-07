"use client";
//components
import { Loader, PostItem } from "@/components";
//store
import usePosts from "@/store/usePosts";
import useUsers from "@/store/useUsers";
//react
import { useEffect, useState, useCallback } from "react";

export const MyPosts = () => {
    const { postsOne, fetchPostsOne } = usePosts();
    const [loading, setLoading] = useState(true);

    const loadPosts = useCallback(async () => {
        setLoading(true);
        await fetchPostsOne({ id: "1" });
        setLoading(false);
    }, [fetchPostsOne]);

    useEffect(() => {
        loadPosts();
    }, [loadPosts]);

    return (
        <div className="mt-20 lg:mt-0">
            <h1 className="text-white text-lg tracking-widest">Mis Publicaciones</h1>

            {loading ? (
                <div className="flex justify-center items-center h-[500px]">
                    <Loader />
                </div>
            ) : (
                <div className="columns-1 gap-5 lg:gap-8 sm:columns-2 lg:columns-3 xl:columns-4">
                    {postsOne.map((post) => (
                        <PostItem key={post.id} item={post} isHome={false} />
                    ))}
                </div>
            )}

            {postsOne.length === 0 && !loading && (
                <p className="text-white text-lg mt-5">No hay publicaciones</p>
            )}
        </div>
    );
}
