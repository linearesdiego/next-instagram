"use client";
import { CreatePosts, InputSearch, Modal, Posts } from "@/components";
import useModal from "@/hooks/useModal";
import { CiCirclePlus } from "react-icons/ci";
export const Home = () => {
    const { isVisible, openModal, closeModal } = useModal();
    return (
        <>
            <div className="w-full flex flex-col mt-20 lg:mt-0  items-center justify-between lg:flex-row ">
                <InputSearch />
                <button
                    onClick={openModal}
                    className="px-4 py-2 bg-custom-gradient text-white flex items-center justify-center gap-3 rounded-2xl mt-10 lg:mt-0"
                >
                    <CiCirclePlus className="w-8 h-8" />
                    Añadir publicación
                </button>
            </div>

            <Posts />

            <Modal isOpen={isVisible} onClose={closeModal} title="Crear publicación">
                <CreatePosts onClose={closeModal} />
            </Modal>
        </>

    )
}
