import { selectedEmailState } from "./atoms/mail-atoms";
import { useRecoilValue } from "recoil";
import { ScrollArea } from "../ui/scroll-area";
import { Avatar, AvatarImage } from "../ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default function MailsViewComponent() {
    const selectedEmail = useRecoilValue(selectedEmailState);

    function defaultView() {
        return (<div className="h-full flex">
            <div className="m-auto">Nothing is selected</div>
        </div>)
    }

    function mailView() {
        return (
            <Card className="h-[75%] flex m-1 rounded-sm">
                <ScrollArea className="h-full rounded-md p-4 mx-auto">
                    <CardHeader className="p-0">
                        <div className="flex">
                            <Avatar className="bg-orange-100">
                                <AvatarFallback className="m-auto">{selectedEmail ? (selectedEmail.sender.charAt(0).toUpperCase()) : ('0')}</AvatarFallback>
                            </Avatar>

                            <div className="pl-2 py-2 font-sans ">
                                {selectedEmail ? selectedEmail.sender : ''}
                            </div>
                        </div>
                    </CardHeader>

                    <CardContent className="mt-5 text-left ml-12 p-0">
                        {selectedEmail ? selectedEmail.body : 'null'}
                    </CardContent>
                </ScrollArea>
            </Card>
        )
    }

    return (
        <div className="flex-1 flex-grow h-full">
            {selectedEmail &&
                <Card className="flex m-1 rounded-sm">
                    <CardHeader className="py-4">
                        <CardTitle>
                            {selectedEmail.subject}
                        </CardTitle>
                    </CardHeader>
                </Card>
            }
            {selectedEmail ? mailView() : defaultView()}
        </div>
    )
}