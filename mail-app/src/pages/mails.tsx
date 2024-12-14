import MailsListComponent from "@/components/mail/mail-list";
import MailViewSidebarComponent from "@/components/mail/mail-sidebar";
import MailsViewComponent from "@/components/mail/mail-view";
import { Separator } from "@/components/ui/separator";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";

export default function MailsComponent() {
    return (
        <div className="flex flex-grow">
            <SidebarProvider style={{ "--sidebar-width": "12rem" }}>
                <MailViewSidebarComponent />
                <ResizablePanelGroup direction="horizontal">
                    <ResizablePanel>
                        <MailsListComponent />
                    </ResizablePanel>
                    <ResizableHandle withHandle className="h-full" />
                    <ResizablePanel>
                        <MailsViewComponent />
                    </ResizablePanel>
                </ResizablePanelGroup>
            </SidebarProvider>
        </div>
    )
}