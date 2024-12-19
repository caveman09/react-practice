import { Button } from "./ui/button";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarTrigger } from "./ui/menubar";
import burger_menu_image from '../assets/images/burgermenu.png'
import { useInnerSidebarContext } from "./mail/context/inner-sidebar-state-provider";

export const MenubarComponent = () => {
    const { functionRef } = useInnerSidebarContext();
    return (
        <div className='sticky top-[50px]'>
            <Menubar className='p-0 overflow-hidden z-40'>
                <MenubarMenu>
                    <Button variant={'ghost'} className='' onClick={() => { functionRef.current() }}>
                        <img src={burger_menu_image} className='w-full h-full' />
                    </Button>
                    <MenubarTrigger>File</MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem>
                            New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                        </MenubarItem>
                        <MenubarItem>New Window</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>Share</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>Print</MenubarItem>
                    </MenubarContent>
                    <MenubarSeparator></MenubarSeparator>
                </MenubarMenu>
            </Menubar>
        </div>
    );
}