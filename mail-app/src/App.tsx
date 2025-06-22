import { RecoilRoot } from 'recoil'
import './App.css'
import MailTitlebar from './components/mail-title-bar'
import SideMenu from './components/side-menu'
import { SidebarProvider, SidebarTrigger } from './components/ui/sidebar'
import MailsComponent from './pages/mails'
import { InnerSidebarProvider, useInnerSidebarContext } from "@/components/mail/context/inner-sidebar-state-provider";
import { MenubarComponent } from './components/menu-bar'

const CustomSidebarStyle: React.CSSProperties & { [key: `--${string}`]: string } = {
  "--sidebar-width": "0rem"
}

function App() {

  return (
    <RecoilRoot>
      <div className=''>
        <MailTitlebar />
        <div className='flex mt-[0px]'>
          <SidebarProvider style={CustomSidebarStyle} className='flex-1'>
            <SideMenu />
            <InnerSidebarProvider>
              <div className='flex-grow' style={{ marginLeft: "3rem" }}>

                <MenubarComponent />

                <div className='mt-[50px] z-10'>
                  <MailsComponent />
                </div>

              </div>
            </InnerSidebarProvider>
          </SidebarProvider>
        </div>
      </div>
    </RecoilRoot>
  )
}

export default App
