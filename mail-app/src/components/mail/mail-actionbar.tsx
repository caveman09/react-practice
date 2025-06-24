import { memo } from "react";
import { Archive, Flag, LucideFolderPlus, Mail, MailCheckIcon, ReplyAll, ShieldAlert, Trash2Icon } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Separator } from "../ui/separator";

const HomeBar = memo(
    ({ composeMailCallback }: { composeMailCallback: () => void }) => {

        return (
            <div className="flex">
                <Button variant={'link'} className="rounded-none m-[1px] border-none bg-white hover:bg-orange-300" onClick={composeMailCallback}>
                    <Mail />
                    Compose
                </Button>
                <Button variant={'ghost'} className="rounded-none mx-[1px] my-auto bg-white hover:bg-gray-100">
                    <Trash2Icon />
                    Empty Folder
                </Button>
                <Separator orientation="vertical" className="" />
                <Button variant={'outline'} className="rounded-none m-[1px] border-none bg-white hover:bg-orange-100">
                    <Archive />
                    Archive
                </Button>
                <Separator orientation="vertical" className="" />
                <Button variant={'outline'} className="rounded-none m-[1px] border-none bg-white hover:bg-orange-100">
                    <LucideFolderPlus />
                    Move
                </Button>
                <Separator orientation="vertical" className="" />
                <Button variant={'outline'} className="rounded-none m-[1px] border-none bg-white hover:bg-orange-100">
                    <ShieldAlert />
                    Report
                </Button>
                <Separator orientation="vertical" className="" />
                <Button variant={'outline'} className="rounded-none m-[1px] border-none bg-white hover:bg-orange-100">
                    <ReplyAll />
                    Reply all
                </Button>
                <Separator orientation="vertical" className="" />
                <Button variant={'outline'} className="rounded-none m-[1px] border-none bg-white hover:bg-orange-100">
                    <MailCheckIcon />
                    Mark all as read
                </Button>
                <Separator orientation="vertical" className="" />
                <Button variant={'outline'} className="rounded-none m-[1px] border-none bg-white hover:bg-orange-100">
                    <Flag />
                    Flag / Unflag
                </Button>
            </div>
        )
    }
)

const MailsActionBarComponent = memo(({ composeMailCallback }: { composeMailCallback: () => void }) => {
    return (
        <Card className="h-[40px] rounded-none flex">
            <HomeBar composeMailCallback={composeMailCallback} />
        </Card>
    )
})

export default MailsActionBarComponent;