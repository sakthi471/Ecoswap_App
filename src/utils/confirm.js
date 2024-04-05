import AlertDialog from '@/components/AlertDiolog';
import { createRoot } from 'react-dom/client';


const AlertConfirm = (message) => {
    return new Promise((resolve, reject) => {
        const container = document.createElement('div');
        document.body.appendChild(container);

        const handleClose = () => {
            root.unmount();
            container.parentNode.removeChild(container);
            resolve(false);
        };

        const handleConfirm = (result) => {
            root.unmount();
            container.parentNode.removeChild(container);
            resolve(result);
        };

        const root = createRoot(container);
        root.render(<AlertDialog isOpen={true} onClose={handleClose} onConfirm={handleConfirm} message={message} />);
    });
};

export default AlertConfirm;
