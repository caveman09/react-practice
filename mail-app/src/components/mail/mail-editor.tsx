import { memo, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion"
import { Maximize2, MinusIcon, X } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { mailDraftsState } from "./atoms/mail-atoms";
import { useRecoilValue } from "recoil";

export const MailEditorComponent = memo(
    ({ editorId }: { editorId: number }) => {
        /* mail states */
        const [mailSubject, setMailSubject] = useState<String | undefined>(undefined);
        const [mailBody, setMailBody] = useState<String | undefined>(undefined);
        const [mailTo, setMailTo] = useState<String | undefined>(undefined);

        /* visual effects states */
        const [isEditorOpen, setIsEditorOpen] = useState(true)
        const [minimized, setMinimized] = useState(false);

        function closeEditor() {
            setIsEditorOpen(false);
        }

        function toggleMinimize() {
            setMinimized(!minimized);
            setIsEditorOpen(!isEditorOpen);
        }

        return (
            <div className="bottom-0 z-50">
                <AnimatePresence>
                    {isEditorOpen && !minimized && (
                        <motion.div
                            key={"maximized-editor-" + editorId.toString()}
                            layoutId={"editor" + editorId.toString()}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 0 }} // keep opacity for morph
                            transition={{ duration: 0.2 }}
                            style={{ zIndex: 50 }}
                        >
                            <Card className="w-[400px] h-[500px] ml-auto mr-[3%] mb-[1%] rounded-lg p-0 overflow-hidden">
                                <div className="flex justify-between bg-orange-200 py-1">
                                    <CardHeader className="ml-3 my-auto py-0">
                                        <CardTitle className="text-base font-sans">New Message</CardTitle>
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
                            </Card>
                        </motion.div >

                    )}
                    {minimized &&
                        (
                            <motion.div
                                key={"minimized-editor" + editorId.toString()}
                                layoutId={"editor" + editorId.toString()}
                                initial={{ opacity: 1, y: 0 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 50 }}
                                transition={{ duration: 0.3 }}
                                style={{
                                    zIndex: 50,
                                }}
                            >
                                < Card className="flex border-2 rounded-sm h-[40px] w-[200px] z-40 right-2 transition-all duration-300 ease-in-out"
                                    style=
                                    {{
                                        bottom: minimized ? '10px' : '10px'
                                    }
                                    }>
                                    <div onClick={() => { toggleMinimize() }} className=" flex-[65%] my-auto">
                                        Draft
                                    </div>
                                    <Button variant={'ghost'} onClick={() => { toggleMinimize(); closeEditor(); }} className="flex-1 px-0 h-8 w-8 my-[2px] mr-[2px] z-50 rounded-sm opacity-70 hover:bg-white ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-stone-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-stone-100 dark:ring-offset-stone-950 dark:focus:ring-stone-300 dark:data-[state=open]:bg-stone-800">
                                        <X className="h-8 w-8" />
                                    </Button>
                                </Card >
                            </motion.div>
                        )
                    }
                </AnimatePresence >
            </div>
        );
    }
)

export const MailEditorsOverlay = memo(() => {
    const mailDrafts = useRecoilValue(mailDraftsState);

    return (
        createPortal(
            <div className="fixed bottom-0 left-[0px] z-50 flex gap-2 p-4 mx-[5%] w-[90%] flex-row-reverse">
                {mailDrafts.map((draft, index) => (
                    <MailEditorComponent key={index} editorId={draft.id || -1} />
                ))}
            </div>,
            document.body
        )
    );
}) 
