'use client';

import { IoCloudUploadOutline } from 'react-icons/io5';

const ImageUploader = ({ isDragActive, acceptedFiles, getRootProps, getInputProps }) => {
    return (
        <div className='w-full'>
            <div {...getRootProps()} className="bg-gray-400 text-white p-10 rounded-xl flex gap-3 items-center justify-center cursor-pointer">
                <input {...getInputProps()} />
                {
                    isDragActive ?
                        <p>Suelta los archivos aquí para subirlos</p> :
                        <div className="flex gap-3 items-center justify-center">
                            <IoCloudUploadOutline color='white' className='w-10 h-10' />
                            <p>Arrastre o haga click para subir una imagen</p>
                        </div>
                }
            </div>
            <div className="mt-10">
                {
                    acceptedFiles[0] &&
                    <img src={URL.createObjectURL(acceptedFiles[0])} alt="Preview" className='m-auto w-[350px] h-[350px] object-cover rounded-xl' />
                }
            </div>
        </div>
    );
};

export default ImageUploader;
