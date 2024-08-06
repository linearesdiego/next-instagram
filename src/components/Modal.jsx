
export const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-grisOscuro rounded-lg overflow-hidden shadow-xl max-w-lg  p-6 w-[90%] lg:w-full">
                <div className="flex justify-between items-center pb-3 border-b border-gray-300">
                    <h2 className="text-xl text-white font-semibold">{title}</h2>
                    <button onClick={onClose} className="text-slate-200 hover:text-gray-100 text-xl">
                        &times;
                    </button>
                </div>
                <div className="mt-4">
                    {children}
                </div>

            </div>
        </div>
    );
};
