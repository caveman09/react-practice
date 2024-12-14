import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import EmailCard from "./mail-item";
import { dummyEmails, Email } from "@/types/emailTypes";

export default function MailsListComponent() {
    return (
        <div className="flex-grow max-h-[41rem]">
            <ScrollArea className="rounded-md border h-[41rem]">
                < div className="p-4" >
                    {
                        dummyEmails.map((mailItem, index) => (
                            <EmailCard {...mailItem} id={mailItem.id}></EmailCard>
                        ))
                    }
                </div >
            </ScrollArea >
        </div >
    )
}