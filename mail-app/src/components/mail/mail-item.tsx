import { Email } from "@/types/emailTypes";
import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "../ui/checkbox";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";
import { selectedEmailState } from "./atoms/mail-atoms";
import { useSetRecoilState } from "recoil";
import { Button } from "../ui/button";
import { Flag, MailOpen, PinIcon, Trash2 } from "lucide-react";

const EmailCard = (mail: Email) => {
    const setSelectedEmail = useSetRecoilState(selectedEmailState);

    const cardClicked = (ev: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setSelectedEmail(mail);
    };

    return (
        <Card className="mt-4 h-20 transition-transform duration-100 hover:scale-105 hover:bg-orange-50 rounded-sm" onClick={cardClicked}>
            <div className="flex h-full pl-5 m-0">
                <Checkbox className="my-auto" />
                <div className="mt-3">
                    <CardTitle className="text-start pl-5">{mail.sender}</CardTitle>
                    <CardDescription className="text-start pl-5">{mail.subject}</CardDescription>
                </div>
                <div className="ml-auto mt-0 flex">
                    <ToggleGroup type='multiple' className="items-start">
                        <ToggleGroupItem value="mail-open"> <MailOpen /> </ToggleGroupItem>
                        <ToggleGroupItem value="flag"> <Flag /> </ToggleGroupItem>
                        <ToggleGroupItem value="pin"> <PinIcon /> </ToggleGroupItem>
                    </ToggleGroup>
                    <Button variant={'ghost'} className="py-[39px] px-3 hover:bg-red-400 hover:text-white rounded-none">
                        <Trash2 className="p-0" />
                    </Button>
                </div>
            </div>
        </Card>
    )
}

export default React.memo(EmailCard);