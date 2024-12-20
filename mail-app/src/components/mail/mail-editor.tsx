import React, { useCallback, useEffect, useState } from "react";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { X } from "lucide-react";
import { mailEditorOpen } from "./atoms/mail-atoms";
import { useRecoilState, useSetRecoilState } from "recoil";

const MailEditorComponent = () => {
    const [isEditorOpen, setIsEditorOpen] = useRecoilState(mailEditorOpen);

    function closeEditor() {
        setIsEditorOpen(false);
    }

    return (
        <Sheet open={isEditorOpen}>
            <SheetContent side={'bottom'} overlayColor='bg-black/10' className="w-[50%] h-[70%] ml-auto mr-[3%] mb-[3%] rounded-lg">
                <SheetClose onClick={closeEditor} className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-stone-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-stone-100 dark:ring-offset-stone-950 dark:focus:ring-stone-300 dark:data-[state=open]:bg-stone-800">
                    <X className="h-4 w-4" />
                    <span className="sr-only">Close</span>
                </SheetClose>
                <SheetHeader className="">
                    <SheetTitle>Compose mail</SheetTitle>
                    <SheetDescription>
                        Write your mail here.
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet >
    );
}

export default React.memo(MailEditorComponent);