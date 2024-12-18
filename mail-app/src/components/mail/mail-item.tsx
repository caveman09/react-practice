import { Email } from "@/types/emailTypes";
import React, { useState } from "react";
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
import { Avatar } from "../ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";

const EmailCard = (mail: Email) => {
    const setSelectedEmail = useSetRecoilState(selectedEmailState);
    const [cardHovered, setCardHovered] = useState(false);
    const [selectedItems, setSelectedItems] = useState<string[]>([]);

    const cardClicked = (ev: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setSelectedEmail(mail);
    };

    const onCardHovered = () => {
        setCardHovered(true);
    }

    const onCardUnhovered = () => {
        setCardHovered(false);
    }

    const handleToggle = (item: string) => {
        setSelectedItems((prev) => (prev.includes(item) ? prev.filter((value) => item !== value) : [...prev]));
    }

    return (
        <Card className="mt-4 h-20 transition-transform duration-100 hover:bg-orange-50 rounded-sm" onClick={cardClicked} onMouseEnter={onCardHovered} onMouseLeave={onCardUnhovered}>
            <div className="flex h-full pl-5 m-0">
                {cardHovered === true ? <Checkbox className="my-auto mx-3" /> :
                    <Avatar className="my-auto mx-0 bg-orange-100">
                        <AvatarFallback className="m-auto">
                            {mail.sender.charAt(0).toUpperCase()}
                        </AvatarFallback>
                    </Avatar>
                }

                <div className={`flex-grow ${cardHovered ? 'mr-0' : 'mr-10'} overflow-hidden`}>
                    <div className="flex flex-1 flex-grow justify-between">
                        <CardTitle className="text-start pt-3 pl-5">{mail.sender}</CardTitle>
                        {cardHovered === true &&
                            <ToggleGroup type='multiple' className="gap-3">
                                <ToggleGroupItem value="mail-open" className={`h-5 min-w-0 w-5 aspect-square data-[state=on]:bg-transparent hover:bg-transparent hover:text-orange-500`} onClick={() => handleToggle('mail-open')}> <MailOpen /> </ToggleGroupItem>
                                <ToggleGroupItem value="flag" className={`h-5 min-w-0 w-5 data-[state=on]:bg-transparent hover:bg-transparent hover:text-orange-500`} onClick={() => handleToggle('flag')}> <Flag /> </ToggleGroupItem>
                                <ToggleGroupItem value="pin" className={`h-5 min-w-0 w-4 data-[state=on]:bg-transparent hover:bg-transparent hover:text-orange-500`} onClick={() => handleToggle('pin')}> <PinIcon /> </ToggleGroupItem>
                            </ToggleGroup>
                        }
                    </div>
                    <div className="flex justify-between">
                        <CardDescription className="text-start pl-5">{mail.subject}</CardDescription>
                        <text className="text-xs font-thin text-gray-400 pr-1">
                            {mail.date.toDateString()}
                        </text>
                    </div>
                    <div className="ml-5 text-left text-ellipsis">
                        <text className="overflow-hidden text-ellipsis text-xs text-left text-gray-600">
                            {mail.body}
                        </text>
                    </div>
                </div>
                {cardHovered === true &&
                    <div className="ml-auto mt-0 flex">
                        <Button variant={'ghost'} className="py-[39px] px-3 hover:bg-red-400 hover:text-white rounded-none">
                            <Trash2 className="p-0" />
                        </Button>
                    </div >
                }
            </div >
        </Card >
    )
}

export default React.memo(EmailCard);