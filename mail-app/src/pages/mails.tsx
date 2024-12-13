import MailViewSidebarComponent from "@/components/mail/mail-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";

export default function MailsComponent() {
    return (
        <div>
            <SidebarProvider style={{ "--sidebar-width": "12rem" }}>
                <MailViewSidebarComponent />
            </SidebarProvider>
        </div>
    )
}