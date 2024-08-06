'use client';
import React, { useCallback, useState } from 'react';
import usePosts from '@/store/usePosts';
import ImageUploader from './ImageUploader';
import { useDropzone } from 'react-dropzone';
import { toast } from 'sonner';
import { Button } from './Button';

export const CreatePosts = ({ onClose }) => {
    const { upImageCloudinary, addPosts } = usePosts();
    const [imageUrl, setImageUrl] = useState(null);

    const onDrop = useCallback(acceptedFiles => {
        setImageUrl(acceptedFiles[0]);
    }, []);

    const { getRootProps, getInputProps, isDragActive, acceptedFiles } = useDropzone({ onDrop });

    const handleUpload = async (e) => {
        e.preventDefault();
        if (!imageUrl) return;

        const uploadedImageUrl = await upImageCloudinary(imageUrl);

        setImageUrl(uploadedImageUrl);
        if (uploadedImageUrl) {
            addPosts({ data: { image: uploadedImageUrl }, id: 1 }).then(() => {
                toast.success('Publicación creada correctamente');
                onClose();
            });
        }
    };

    return (
        <section className='w-full '>
            <div>
                <ImageUploader
                    isDragActive={isDragActive}
                    acceptedFiles={acceptedFiles}
                    getRootProps={getRootProps}
                    getInputProps={getInputProps}
                />
                <Button onClick={handleUpload} text='Subir' disabled={!imageUrl}
                />
            </div>
        </section>
    );
};
