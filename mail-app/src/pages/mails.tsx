import { SidebarProvider } from "@/components/ui/sidebar";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MailViewSidebarComponent from "@/components/mail/mail-sidebar";
import MailsViewComponent from "@/components/mail/mail-view";
import MailsListComponent from "@/components/mail/mail-list";
import { dummyEmails } from "@/types/emailTypes";
import { Card } from "@/components/ui/card";
import { useInnerSidebarContext } from "@/components/mail/context/inner-sidebar-state-provider";
import MailEditorComponent from "@/components/mail/mail-editor";
import MailsActionBarComponent from "@/components/mail/mail-actionbar";

const MailListTopBarComponent: React.FunctionComponent<{ title: string, children: ReactNode | undefined }> = ({ title, children }) => {
    return (
        <Card className="rounded-sm mt-1 mx-1 h-[50px]">
            <div className="">
                {children ? children : <div className="pt-2.5 pl-10 text-start text-xl font-semibold">{title}</div>}
            </div>
        </Card>
    )
}

const InboxMailsList = () => {
    const InboxTab: React.FC<{}> = () => {
        return <Tabs defaultValue="Focused" className="w-full h-full p-0">
            <TabsList className="h-full w-full justify-start pl-10 rounded-sm m-0 py-2.5">
                <TabsTrigger value="Focused" className="rounded-sm">Focused</TabsTrigger>
                <TabsTrigger value="Other" className="rounded-sm">Other</TabsTrigger>
            </TabsList>
        </Tabs>;
    }
    return (
        <div>
            <MailListTopBarComponent title={'Inbox'}>
                <InboxTab />
            </MailListTopBarComponent>
            <MailsListComponent dummyEmails={dummyEmails} />
        </div>
    )
}

const JunkMailsList = () => {
    return (
        <div>
            <MailListTopBarComponent title={'Junk'} children={undefined} />
            <MailsListComponent dummyEmails={dummyEmails} />
        </div>
    )
}

const DraftMailsList = () => {
    return (
        <div>
            <MailListTopBarComponent title={'Draft'} children={undefined} />
            <MailsListComponent dummyEmails={dummyEmails} />
        </div>
    )
}

const DeletedMailsList = () => {
    return (
        <div>
            <MailListTopBarComponent title={'Deleted'} children={undefined} />
            <MailsListComponent dummyEmails={dummyEmails} />
        </div>
    )
}

const CustomSidebarStyle: React.CSSProperties & { [key: `--${string}`]: string } = {
    "--sidebar-width": "12rem"
}

const MailsComponent = () => {
    let sidebarOpen = useRef<boolean | undefined>(true);
    const [sidebar, setSidebar] = useState(true);
    const { functionRef } = useInnerSidebarContext();

    const toggleSidebar = useCallback(() => {
        sidebarOpen.current = !sidebarOpen.current;
        setSidebar(sidebarOpen.current);
        console.log(sidebarOpen);
    }, [])

    useEffect(() => {
        functionRef.current = toggleSidebar;
    }, [functionRef]);

    useEffect(() => {

        const updateDivHeight = () => {
            const div = document.getElementById('mails-parent');
            if (div) {
                div.style.height = `${window.innerHeight - 135}px`;
            }

            const maildiv = document.getElementById('mail-div');
            if (maildiv) {
                maildiv.style.height = `${window.innerHeight - 90}px`;
            }

            const scroll = document.getElementById('mail-scroll');
            if (scroll) {
                scroll.style.height = `${window.innerHeight - 190}px`;
            }
        }

        updateDivHeight();

        window.addEventListener('resize', updateDivHeight);
        return () => {
            window.removeEventListener('resize', updateDivHeight);
        };
    }, [])

    return (
        <Router>
            <MailsActionBarComponent />
            <div id="mails-parent" className="flex overflow-hidden">
                <SidebarProvider open={sidebar} style={CustomSidebarStyle} className="max-h-full flex-1">
                    <MailViewSidebarComponent />
                    <ResizablePanelGroup direction="horizontal" className="flex-1 max-h-full h-full">
                        <ResizablePanel className="max-h-full h-full" defaultSize={40} minSize={35}>
                            <Routes>
                                <Route path="/" element={<InboxMailsList />} />
                                <Route path="/junkemail" element={<JunkMailsList />} />
                                <Route path="/drafts" element={<DraftMailsList />} />
                                <Route path="/sentitems" element={<></>} />
                                <Route path="/deleteditems" element={<DeletedMailsList />} />
                            </Routes>
                        </ResizablePanel>
                        <ResizableHandle withHandle className="h-full" />
                        <ResizablePanel className="max-h-full h-full" defaultSize={60} minSize={40}>
                            <MailsViewComponent />
                            <MailEditorComponent />
                        </ResizablePanel>
                    </ResizablePanelGroup>
                </SidebarProvider>
            </div >
        </Router >
    )
}

export default React.memo(MailsComponent);