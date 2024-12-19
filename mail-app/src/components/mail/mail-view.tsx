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
import { Button } from "../ui/button";
import { Forward, Reply, ReplyAll, SunIcon } from "lucide-react";

export default function MailsViewComponent() {
    const selectedEmail = useRecoilValue(selectedEmailState);

    function defaultView() {
        return (<div className="h-full flex">
            <div className="m-auto">Nothing is selected</div>
        </div>)
    }

    function mailView() {
        return (
            <ScrollArea className="h-[80vh]">
                <Card className="m-1 rounded-sm p-4">
                    <CardHeader className="p-0">
                        <div className="flex">
                            <Avatar className="bg-orange-100">
                                <AvatarFallback className="m-auto">{selectedEmail ? (selectedEmail.sender.charAt(0).toUpperCase()) : ('0')}</AvatarFallback>
                            </Avatar>

                            <div className="pl-2 py-2 font-sans ">
                                {selectedEmail ? selectedEmail.sender : ''}
                            </div>

                            <div className="ml-auto my-auto pr-5">
                                <text className="text-xs text-gray-600">{selectedEmail ? selectedEmail.date.toUTCString() : ''}</text>
                            </div>
                        </div>
                    </CardHeader>

                    <CardContent className="mt-5 text-left ml-12 p-0">
                        {selectedEmail ? selectedEmail.body : 'null'}
                    </CardContent>

                    <div className="flex pl-11 mt-8">
                        <Button variant={'outline'} className="h-6 w-15 rounded-none"> <Reply className="" />Reply </Button>
                        <Button variant={'outline'} className="h-6 w-15 mx-3 rounded-none"><Forward className="" />Forward </Button>
                    </div>
                </Card >
            </ScrollArea >
        )
    }

    return (
        <div className="flex-1 flex-grow h-full">
            {selectedEmail &&
                <Card className=" m-1 rounded-sm">
                    <CardHeader className="py-3">
                        <CardTitle className="flex w-full">
                            {selectedEmail.subject}
                            <div className="ml-auto">
                                <Button variant={'ghost'} className="h-6 w-4"> <SunIcon /> </Button>
                                <Button variant={'ghost'} className="h-6 w-4"> <Reply /> </Button>
                                <Button variant={'ghost'} className="h-6 w-4"> <ReplyAll /> </Button>
                                <Button variant={'ghost'} className="h-6 w-4"> <Forward /> </Button>
                            </div>
                        </CardTitle>
                    </CardHeader>
                </Card>
            }
            {selectedEmail ? mailView() : defaultView()}
        </div>
    )
}