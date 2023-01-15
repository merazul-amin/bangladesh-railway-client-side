import React, { createContext } from 'react';

export const LoadingContext = createContext();

const LoadingModalContext = ({ children }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <LoadingContext.Provider value={{ open, setOpen, handleClose, handleOpen }}>
                {children}
            </LoadingContext.Provider>
        </div>
    );
};

export default LoadingModalContext;