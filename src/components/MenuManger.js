import { useState, createContext } from "react";

const menuContext = createContext();

export const useMenu = () => createContext(menuContext);

export const MenuManger = ({ children }) => {
    const [open, setOpen] = useState(false);

    const value = {
    	open,
        setOpen,
    }

    return <menuContext.Provider value={value}>{ children }</menuContext.Provider>
}
