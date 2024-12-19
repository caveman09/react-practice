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
import { MailSidebarProvider, useMailSidebarContext } from "@/components/mail/context/mail-sidebar-satate-provider";
import { MenubarComponent } from './components/menu-bar'

function App() {

  return (
    <RecoilRoot>
      <div className=''>
        <MailTitlebar />
        <div className='flex mt-[0px]'>
          <SidebarProvider style={{ "--sidebar-width": "0rem" }} className='flex-1'>
            <SideMenu style={{ width: "3rem" }} />
            <MailSidebarProvider>
              <div className='flex-grow' style={{ marginLeft: "3rem" }}>

                <MenubarComponent />

                <div className='mt-[50px] z-10'>
                  <MailsActionBarComponent />
                  <MailsComponent />
                </div>

              </div>
            </MailSidebarProvider>
          </SidebarProvider>
        </div>
      </div>
    </RecoilRoot>
  )
}

export default App
