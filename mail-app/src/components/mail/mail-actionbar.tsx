import { Archive, LucideFolderPlus, Mail, ShieldAlert, Trash2Icon } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";

const HomeBar = () => {
    return (
        <div className="flex">
            <Button variant={'link'} className="rounded-sm m-[1px] border-none bg-white hover:bg-orange-300">
                <Mail />
                Compose
            </Button>
            <Button variant={'outline'} className="rounded-sm m-[1px] border-none bg-white hover:bg-orange-100">
                <Trash2Icon />
                Empty Folder
            </Button>
            <Button variant={'outline'} className="rounded-sm m-[1px] border-none bg-white hover:bg-orange-100">
                <Archive />
                Archive
            </Button>
            <Button variant={'outline'} className="rounded-sm m-[1px] border-none bg-white hover:bg-orange-100">
                <LucideFolderPlus />
                Move
            </Button>
            <Button variant={'outline'} className="rounded-sm m-[1px] border-none bg-white hover:bg-orange-100">
                <ShieldAlert />
                Report
            </Button>
        </div>
    )
}

const MailsActionBarComponent = () => {
    return (
        <Card className="h-[40px] rounded-none flex">
            <HomeBar />
        </Card>
    )
}

export default MailsActionBarComponent;