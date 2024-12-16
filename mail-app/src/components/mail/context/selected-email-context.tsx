import { Children, createContext, ReactNode, useState } from "react";
import { Email } from "@/types/emailTypes";

interface SelectedEmailContextType {
    selectedEmail: Email | null;
};
interface SelectedEmailUpdaterContextType {
    setSelectedEmail: (email: Email | null) => void;
}

const SelectedEmailContext = createContext<SelectedEmailContextType | undefined>(undefined);
const SelectedEmailUpdaterContext = createContext<SelectedEmailUpdaterContextType | undefined>(undefined);

export { SelectedEmailContext, SelectedEmailUpdaterContext };
export type { SelectedEmailContextType, SelectedEmailUpdaterContextType };
