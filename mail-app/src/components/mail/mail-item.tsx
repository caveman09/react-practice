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
import { selectedEmailState } from "./atoms/mail-atoms";
import { useSetRecoilState } from "recoil";

const EmailCard = (mail: Email) => {
    const setSelectedEmail = useSetRecoilState(selectedEmailState);

    const cardClicked = (ev: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setSelectedEmail(mail);
    };

    return (
        <Card className="mt-4 h-20 transition-transform duration-100 hover:scale-105 hover:bg-orange-50" onClick={cardClicked}>
            <CardHeader>
                <CardTitle>{mail.sender}</CardTitle>
                <CardDescription>{mail.subject}</CardDescription>
            </CardHeader>
            <CardContent>

            </CardContent>
            <CardFooter>

            </CardFooter>
        </Card>
    )
}

export default React.memo(EmailCard);