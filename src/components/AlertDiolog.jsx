import { useState } from 'react';

const AlertDialog = ({ isOpen, onClose, message,onConfirm }) => {
    // const [resolveFunc, setResolveFunc] = useState(null);

    const handleOKClick = () => {
        onConfirm(true)
        
    };

    

    const handleClose = () => {
        onClose();
        // setResolveFunc(false);
    };

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-60">
                    <div className="bg-white w-[40%] p-8 rounded-lg shadow-lg">
                        <p className="text-lg text-black">{message}</p>
                        <div className="mt-4 flex justify-end gap-5 ">
                            <button onClick={handleClose} className="px-4 py-2 border-2 hover:bg-gray-200 border-gray-300  text-black rounded-md focus:outline-none">
                                Cancel
                            </button>
                            <button onClick={handleOKClick} className="px-4 py-2  bg-accent  hover:bg-primary text-white rounded-md mr-2 focus:outline-none">
                                Continue
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default AlertDialog;
