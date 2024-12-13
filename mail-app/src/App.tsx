import React from 'react'
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

function App() {

  return (
    <React.Fragment>
      <MailTitlebar></MailTitlebar>
      <SidebarProvider style={{ "--sidebar-width": "3rem" }}>
        <div className='flex bg-orange-100 flex-1'>
          <SideMenu />
          <div className='flex-grow'>
            <div className='sticky top-[50px]'>
              <Menubar>
                <MenubarMenu>
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
          </div>
        </div>
      </SidebarProvider>
    </React.Fragment >
  )
}

export default App
