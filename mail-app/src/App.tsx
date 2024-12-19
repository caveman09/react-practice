import React from 'react'
import { RecoilRoot } from 'recoil'
import './App.css'
import { Button } from './components/ui/button'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"
import MailTitlebar from './components/mail-title-bar'
import SideMenu from './components/side-menu'
import { SidebarProvider, SidebarTrigger } from './components/ui/sidebar'

import burger_menu_image from './assets/images/burgermenu.png'
import MailsComponent from './pages/mails'
import MailsActionBarComponent from './components/mail/mail-actionbar'

function App() {
  return (
    <RecoilRoot>
      <div className=''>
        <MailTitlebar></MailTitlebar>
        <div className='flex mt-[0px]'>
          <SidebarProvider style={{ "--sidebar-width": "0rem" }} className='flex-1'>
            <SideMenu style={{ width: "3rem" }} />

            <div className='flex-grow' style={{ marginLeft: "3rem" }}>
              <div className='sticky top-[50px]'>
                <Menubar className='p-0 overflow-hidden z-40'>
                  <MenubarMenu>
                    <Button variant={'ghost'} className=''>
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

              <div className='mt-[50px] z-10'>
                <MailsActionBarComponent />
                <MailsComponent />
              </div>
            </div>
          </SidebarProvider>
        </div>
      </div>
    </RecoilRoot>
  )
}

export default App
