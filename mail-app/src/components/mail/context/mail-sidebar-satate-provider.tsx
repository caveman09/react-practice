import React, { createContext, useContext, useRef } from "react";

interface mailSidebarContextType {
    functionRef: React.MutableRefObject<() => void>;
}

const MailSidebarContext = createContext<mailSidebarContextType | undefined>(undefined);

export const MailSidebarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const functionRef = useRef<() => void>(() => { });

    return (
        <MailSidebarContext.Provider value={{ functionRef }}>
            {children}
        </MailSidebarContext.Provider>
    );
};

export const useMailSidebarContext = () => {
    const context = useContext(MailSidebarContext);
    if (!context) {
        throw new Error('useMailSidebarContext must used within a MailSidebarProvider');
    }
    return context;
};