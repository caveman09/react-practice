import React from "react";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

import custom_menu_box_image from '../assets/images/menu-box.png'
import custom_avatar_image from '../assets/images/avatar.png.jpg'
import custom_settings_image from '../assets/images/settings-icon.png'
import custom_notifications_image from '../assets/images/notif-icon.png'

export default function MailTitlebar() {

    return (
        <div className='flex justify-between h-[50px] sticky top-0 bg-white'>
            < div className="flex flex-grow" >
                {/* Menu Popover */}
                < div className="my-auto h-full flex" >
                    <Popover>
                        <PopoverTrigger className="flex aspect-square">
                            <img src={custom_menu_box_image} className="m-auto w-[35px] h-[35px] aspect-square" alt="Image" />
                        </PopoverTrigger>
                        <div className="m-auto bg-orange-300 px-[10px]">Cave Mail</div>
                        <PopoverContent>
                            <div className="flex">
                                <p className="text-sm text-muted-foreground mx-auto">
                                    Option1
                                </p>
                            </div>
                            <div className="flex">
                                <p className="text-sm text-muted-foreground mx-auto">
                                    Option2
                                </p>
                            </div>
                        </PopoverContent>
                    </Popover>
                </div >
                {/* Searchbar Text Input */}
                <div className="flex w-[100px]  md:w-[500px] sm:w-[300px]  my-auto mx-10">
                    <Input type="search" placeholder="Search" />
                </div>
            </div >

            <div className="flex flex-grow px-2 space-x-0 justify-end">
                {/* Notifications Button */}
                <div className="flex my-3  aspect-square">
                    <Sheet>
                        <SheetTrigger>
                            <img src={custom_notifications_image} />
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle>Notifications</SheetTitle>
                                <SheetDescription>
                                    Nothing for now ! All your notifications will show up here!
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>
                {/* Settings Button */}
                <div className="flex my-3 aspect-square px-2">
                    <Dialog>
                        <DialogTrigger className="flex aspect-square">
                            <img src={custom_settings_image}></img>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Settings</DialogTitle>
                                <DialogDescription>
                                    Adjust settings here.
                                </DialogDescription>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
                </div>
                {/* Avatar */}
                <Avatar className="flex my-auto">
                    <AvatarImage src={custom_avatar_image} />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
        </div >)
}