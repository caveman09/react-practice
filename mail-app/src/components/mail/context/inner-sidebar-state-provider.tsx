import React, { createContext, useContext, useRef } from "react";

interface mailSidebarContextType {
    functionRef: React.MutableRefObject<() => void>;
}

const InnerSidebarContext = createContext<mailSidebarContextType | undefined>(undefined);

export const InnerSidebarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const functionRef = useRef<() => void>(() => { });

    return (
        <InnerSidebarContext.Provider value={{ functionRef }}>
            {children}
        </InnerSidebarContext.Provider>
    );
};

export const useInnerSidebarContext = () => {
    const context = useContext(InnerSidebarContext);
    if (!context) {
        throw new Error('useInnerSidebarContext must used within a InnerSidebarProvider');
    }
    return context;
};