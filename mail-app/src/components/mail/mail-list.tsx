import React, { useEffect } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import EmailCard from "./mail-item";
import { Email } from "@/types/emailTypes";

interface MailsListProps {
    dummyEmails: Email[];
}

const MailsListComponent: React.FC<MailsListProps> = ({ dummyEmails }) => {
    return (
        <div id='mail-div' className="flex-grow h-[41rem]">
            <ScrollArea id='mail-scroll' className="flex-grow rounded-sm border max-h-full h-full z-10 mx-1">
                < div className="px-4" >
                    {
                        dummyEmails.map((mailItem, index) => (
                            <EmailCard {...mailItem} key={mailItem.id}></EmailCard>
                        ))
                    }
                </div >
            </ScrollArea >
        </div >
    )
}

export default React.memo(MailsListComponent);