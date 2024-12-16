import { Separator } from "@/components/ui/separator";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import React, { useEffect, useRef, useState, createContext, useContext, ReactNode } from 'react';
import MailViewSidebarComponent from "@/components/mail/mail-sidebar";
import MailsViewComponent from "@/components/mail/mail-view";
import MailsListComponent from "@/components/mail/mail-list";
import { SelectedEmailContext, SelectedEmailUpdaterContext } from "@/components/mail/context/selected-email-context";
import { Email } from "@/types/emailTypes";

const MailsComponent = () => {
    const [selectedEmail, setSelectedEmail] = useState<Email | null>(null);

    const SelectedEmailProvider = ({ children }: { children: ReactNode }) => {
        return (
            <SelectedEmailContext.Provider value={{ selectedEmail }}>
                {children}
            </SelectedEmailContext.Provider>
        );
    };

    const SelectedEmailUpdaterProvider = ({ children }: { children: ReactNode }) => {
        return (
            <SelectedEmailUpdaterContext.Provider value={{ setSelectedEmail }}>
                {children}
            </SelectedEmailUpdaterContext.Provider>
        );
    }

    const updateDivHeight = () => {
        const div = document.getElementById('mails-parent');
        if (div) {
            div.style.height = `${window.innerHeight - 90}px`;
        }

        const maildiv = document.getElementById('mail-div');
        if (maildiv) {
            maildiv.style.height = `${window.innerHeight - 90}px`;
        }

        const scroll = document.getElementById('mail-scroll');
        if (scroll) {
            scroll.style.height = `${window.innerHeight - 90}px`;
        }
    }

    useEffect(() => {

        updateDivHeight();
        window.addEventListener('resize', updateDivHeight);
        return () => {
            window.removeEventListener('resize', updateDivHeight);
        };
    }, [])

    useEffect(() => {
        updateDivHeight();
    }, [selectedEmail])

    return (
        <div id="mails-parent" className="flex overflow-hidden">
            <SidebarProvider style={{ "--sidebar-width": "12rem" }} className="max-h-full flex-1">
                <MailViewSidebarComponent />
                <ResizablePanelGroup direction="horizontal" className="flex-1 max-h-full h-full">
                    <ResizablePanel className="max-h-full h-full">
                        <div>
                            <div>TopBar</div>
                            <SelectedEmailUpdaterProvider>
                                <MailsListComponent />
                            </SelectedEmailUpdaterProvider>
                        </div>
                    </ResizablePanel>
                    <ResizableHandle withHandle className="h-full" />
                    <ResizablePanel className="max-h-full h-full">
                        <SelectedEmailProvider>
                            <MailsViewComponent />
                        </SelectedEmailProvider>
                    </ResizablePanel>
                </ResizablePanelGroup>
            </SidebarProvider>
        </div >
    )
}

export default React.memo(MailsComponent);