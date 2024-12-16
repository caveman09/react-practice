import React, { useEffect } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import EmailCard from "./mail-item";
import { dummyEmails, Email } from "@/types/emailTypes";

const MailsListComponent = () => {
    return (
        <div id='mail-div' className="flex-grow h-[41rem]">
            <ScrollArea id='mail-scroll' className="flex-grow rounded-md border max-h-full h-full z-10">
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