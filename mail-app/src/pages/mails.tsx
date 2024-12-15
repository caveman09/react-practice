import MailsListComponent from "@/components/mail/mail-list";
import MailViewSidebarComponent from "@/components/mail/mail-sidebar";
import MailsViewComponent from "@/components/mail/mail-view";
import { Separator } from "@/components/ui/separator";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { useEffect, useRef, useState } from "react";

export default function MailsComponent() {
    useEffect(() => {
        const updateDivHeight = () => {
            const div = document.getElementById('mails-parent');
            if (div) {
                div.style.height = `${window.innerHeight - 90}px`;
            }
        }
        updateDivHeight();
        window.addEventListener('resize', updateDivHeight);
        return () => {
            window.removeEventListener('resize', updateDivHeight);
        };
    }, [])

    return (
        <div id="mails-parent" className="flex overflow-hidden">
            <SidebarProvider style={{ "--sidebar-width": "12rem" }} className="max-h-full flex-1">
                <MailViewSidebarComponent />
                <ResizablePanelGroup direction="horizontal" className="flex-1 overflow-hidden max-h-[41rem]">
                    <ResizablePanel className="max-h-full">
                        <MailsListComponent />
                    </ResizablePanel>
                    <ResizableHandle withHandle className="h-full" />
                    <ResizablePanel className="max-h-full">
                        <MailsViewComponent />
                    </ResizablePanel>
                </ResizablePanelGroup>
            </SidebarProvider>
        </div >
    )
}