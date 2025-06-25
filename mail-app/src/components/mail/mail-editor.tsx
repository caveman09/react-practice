import { memo, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion"
import { Maximize2, MinusIcon, X } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { mailDraftsState } from "./atoms/mail-atoms";
import { useRecoilValue, useSetRecoilState } from "recoil";

export const MailEditorComponent = memo(
    ({ editorId }: { editorId: number }) => {
        /* mail states */
        const [mailSubject, setMailSubject] = useState<string | undefined>(undefined);
        const [mailBody, setMailBody] = useState<string | undefined>(undefined);
        const [mailTo, setMailTo] = useState<string | undefined>(undefined);

        /* visual effects states */
        const [isEditorOpen, setIsEditorOpen] = useState(true)
        const [minimized, setMinimized] = useState(false);
        const setMailDrafts = useSetRecoilState(mailDraftsState);

        function closeEditor() {
            setIsEditorOpen(false);
            console.log("Closing editor with ID:", editorId);
            setMailDrafts((drafts) => drafts.filter((draft) => draft.id !== editorId));
        }

        function toggleMinimize() {
            setMinimized(!minimized);
            setIsEditorOpen(!isEditorOpen);
        }

        return (
            <div className="bottom-0 z-50">
                {!minimized && (
                    <Card className="w-[450px] h-[500px] ml-auto mr-[3%] mb-[1%] rounded-lg p-0 overflow-hidden">
                        <div className="flex justify-between bg-orange-200 py-1">
                            <CardHeader className="ml-3 my-auto py-0">
                                <CardTitle className="text-base font-sans">{mailSubject ? mailSubject : "New Message"}</CardTitle>
                            </CardHeader>

                            <div className="flex mr-2 gap-1">
                                <Button variant={'ghost'} onClick={toggleMinimize} className="mx-1 h-[25px] px-1 rounded-sm opacity-70 hover:bg-inherit ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-stone-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-stone-100 dark:ring-offset-stone-950 dark:focus:ring-stone-300 dark:data-[state=open]:bg-stone-800">
                                    <MinusIcon className="h-4 w-4" />
                                </Button>
                                <Button variant={'ghost'} onClick={() => { }} className="mx-1 h-[25px] px-1 rounded-sm opacity-70 hover:bg-inherit ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-stone-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-stone-100 dark:ring-offset-stone-950 dark:focus:ring-stone-300 dark:data-[state=open]:bg-stone-800">
                                    <Maximize2 className="h-2 w-2" />
                                </Button>
                                <Button variant={"ghost"} onClick={closeEditor} className="mx-1 h-[25px] px-1 rounded-sm opacity-70 hover:bg-inherit ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-stone-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-stone-100 dark:ring-offset-stone-950 dark:focus:ring-stone-300 dark:data-[state=open]:bg-stone-800">
                                    <X className="h-4 w-4" />
                                    <span className="sr-only">Close</span>
                                </Button>
                            </div>
                        </div>
                        <div>
                            <div className="flex">
                                <Input type="email" placeholder="Email" className="mx-1 w-[80%] mt-1" value={mailTo} onChange={(e) => setMailTo(e.target.value)}
                                    LeftIcon={<span className="text-stone-500">To</span>} variant={"underline"}
                                    RightIcon={<span className="text-stone-500">
                                        <Button variant={"link"} className="p-0 h-4 w-4" onClick={() => { }}>Cc</Button>
                                        <span className="mx-1" />
                                        <Button variant={"link"} className="p-0 h-4 w-4" onClick={() => { }}>Bcc</Button>
                                    </span>}
                                />
                            </div>
                            <div className="flex ml-[32px]">
                                <Input type="text" placeholder="Subject" className="mx-1 w-[95%] mt-1" variant={"underline"} value={mailSubject} onChange={(e) => setMailSubject(e.target.value)} />
                            </div>
                        </div>
                    </Card>
                )}
                {minimized &&
                    (
                        <Card className="flex rounded-sm rounded-t-lg h-[40px] w-[200px] z-40 right-2 transition-all duration-300 ease-in-out mt-[465px] bg-orange-200 px-2"
                            style=
                            {{
                                bottom: minimized ? '10px' : '10px'
                            }
                            }>
                            <div onClick={() => { toggleMinimize() }} className=" flex-[65%] my-auto mx-3 text-base font-sans font-semibold cursor-pointer">
                                Draft
                            </div>
                            <Button variant={'ghost'} onClick={() => { toggleMinimize(); closeEditor(); }} className="mx-1 my-auto h-[25px] px-1 rounded-sm opacity-70 hover:bg-inherit ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-stone-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-stone-100 dark:ring-offset-stone-950 dark:focus:ring-stone-300 dark:data-[state=open]:bg-stone-800">
                                <X className="h-8 w-8" />
                            </Button>
                        </Card >
                    )
                }
            </div >
        );
    }
)

export const MailEditorsOverlay = memo(() => {
    const mailDrafts = useRecoilValue(mailDraftsState);

    useEffect(() => {
        console.log("Mail drafts updated:", mailDrafts);
    }, [mailDrafts]);

    return (
        createPortal(
            <div className="fixed bottom-0 left-[0px] z-50 flex gap-2 p-4 mx-[5%] w-[95%] flex-row-reverse">
                {mailDrafts.map((draft, index) => (
                    <MailEditorComponent key={index} editorId={draft.id !== null ? draft.id : -1} />
                ))}
            </div>,
            document.body
        )
    );
}) 
