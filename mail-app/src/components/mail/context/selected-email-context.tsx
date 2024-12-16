import { createContext, ReactNode, useState } from "react";
import { Email } from "@/types/emailTypes";

interface EmailContextType {
    selectedEmail: Email | null;
    setSelectedEmail: (email: Email | null) => void;
};

const SelectedEmailContext = createContext<EmailContextType | undefined>(undefined);
const SelectedEmailProvider = ({ children }: { children: ReactNode }) => {
    const [selectedEmail, setSelectedEmail] = useState<Email | null>(null);
    return (
        <SelectedEmailContext.Provider value={{ selectedEmail, setSelectedEmail }}>
            {children}
        </SelectedEmailContext.Provider>
    );
};

export { SelectedEmailContext, SelectedEmailProvider };
export type { EmailContextType };
