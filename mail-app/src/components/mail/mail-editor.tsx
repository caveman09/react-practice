import React, { useState } from "react";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet"
import { Maximize2, MinusIcon, X } from "lucide-react";
import { mailEditorOpen } from "./atoms/mail-atoms";
import { useRecoilState } from "recoil";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Input } from "../ui/input";

const MailEditorComponent = () => {
    const [isEditorOpen, setIsEditorOpen] = useRecoilState(mailEditorOpen);
    const [minimized, setMinimized] = useState(false);
    const [mailSubject, setMailSubject] = useState<String | undefined>(undefined);

    function closeEditor() {
        setIsEditorOpen(false);
    }

    function toggleMinimize() {
        setMinimized(!minimized);
        setIsEditorOpen(!isEditorOpen);
    }

    return (!minimized ?
        <Sheet open={isEditorOpen}>
            <SheetContent side={'bottom'} overlayColor='bg-black/10' className={`w-[500px] h-[600px] ml-auto mr-[3%] mb-[1%] rounded-lg p-0 overflow-hidden`}>

                <div className="flex justify-between pt-2 bg-orange-200 pb-2">
                    <SheetHeader className="ml-3 my-auto">
                        <SheetTitle className="text-base font-sans">New Message</SheetTitle>
                    </SheetHeader>

                    <div className="flex mr-2">
                        <Button variant={'ghost'} onClick={toggleMinimize} className="mx-2 h-[25px] px-1 rounded-sm opacity-70 hover:bg-inherit ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-stone-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-stone-100 dark:ring-offset-stone-950 dark:focus:ring-stone-300 dark:data-[state=open]:bg-stone-800">
                            <MinusIcon className="h-4 w-4" />
                        </Button>
                        <Button variant={'ghost'} onClick={() => { }} className="mx-2 h-[25px] px-1 rounded-sm opacity-70 hover:bg-inherit ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-stone-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-stone-100 dark:ring-offset-stone-950 dark:focus:ring-stone-300 dark:data-[state=open]:bg-stone-800">
                            <Maximize2 className="h-2 w-2" />
                        </Button>
                        <SheetClose onClick={closeEditor} className="rounded-sm opacity-70 px-1  ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-stone-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-stone-100 dark:ring-offset-stone-950 dark:focus:ring-stone-300 dark:data-[state=open]:bg-stone-800">
                            <X className="h-4 w-4" />
                            <span className="sr-only">Close</span>
                        </SheetClose>
                    </div>
                </div>

                <div>
                    <div className="flex">
                        <Input type="email" placeholder="Email" className="mx-1 w-[80%] mt-1"
                            LeftIcon={<span className="text-stone-500">To</span>} variant={"underline"}
                            RightIcon={<span className="text-stone-500">
                                <Button variant={"link"} className="p-0 h-4 w-4" onClick={() => { }}>Cc</Button>
                                <span className="mx-1" />
                                <Button variant={"link"} className="p-0 h-4 w-4" onClick={() => { }}>Bcc</Button>
                            </span>}
                        />
                    </div>
                    <div className="flex ml-[32px]">
                        <Input type="text" placeholder="Subject" className="mx-1 w-[95%] mt-1" variant={"underline"} />
                    </div>
                </div>
            </SheetContent>
        </Sheet > :
        <Card className="flex border-2 rounded-sm h-[40px] w-[200px] z-40 absolute right-2 bottom-2">
            <div onClick={() => { toggleMinimize() }} className=" flex-[65%] my-auto">
                Draft
            </div>
            <Button variant={'ghost'} onClick={() => { toggleMinimize(); closeEditor(); }} className="flex-1 px-0 h-8 w-8 my-[2px] mr-[2px] z-50 rounded-sm opacity-70 hover:bg-white ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-stone-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-stone-100 dark:ring-offset-stone-950 dark:focus:ring-stone-300 dark:data-[state=open]:bg-stone-800">
                <X className="h-8 w-8" />
            </Button>

        </Card>
    );
}

export default React.memo(MailEditorComponent);