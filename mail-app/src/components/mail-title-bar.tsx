import React from "react";
import { Button } from "./ui/button";
import custom_menu_box_image from '../assets/images/menu-box.png'
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Input } from "@/components/ui/input";

export default function MailTitlebar() {

    return (
        <div className='flex justify-between h-[50px]'>
            < div className="flex flex-grow" >
                < div className="my-auto h-full flex" >
                    <Popover>
                        <PopoverTrigger className="flex">
                            <img src={custom_menu_box_image} className="w-[50px] h-full" alt="Image" />
                        </PopoverTrigger>
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
                <div className="flex w-[500px]  my-auto mx-10">
                    <Input type="search" placeholder="Search" />
                </div>
            </div >
            <div className="bg-red-400 flex">
                Right Section
            </div>
        </div >)
}