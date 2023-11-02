import React, { useState, useContext, createContext } from 'react'

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [projectId, setProjectId] = useState(null);

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    return <AppContext.Provider value={{
        isModalOpen,
        openModal,
        closeModal,
        projectId,
        setProjectId,
    }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext, AppProvider}
