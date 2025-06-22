import './App.css'
import MailTitlebar from './components/mail-title-bar'
import SideMenu from './components/side-menu'
import { SidebarProvider } from './components/ui/sidebar'
import MailsComponent from './pages/mails'
import { InnerSidebarProvider } from "@/components/mail/context/inner-sidebar-state-provider";
import { MenubarComponent } from './components/menu-bar'

const CustomSidebarStyle: React.CSSProperties & { [key: `--${string}`]: string } = {
  "--sidebar-width": "7.5rem",
  "--sidebar-width-icon": "3rem"
}

function App() {
  return (
    <div>
      <MailTitlebar />
      <div className='flex mt-[0px]'>
        <SidebarProvider style={CustomSidebarStyle} className='flex-1'>
          <SideMenu />
          <InnerSidebarProvider>
            <div className='flex-grow' style={{ marginLeft: "0rem" }}>
              <MenubarComponent />
              <div className='mt-[50px] z-10'>
                <MailsComponent />
              </div>
            </div>
          </InnerSidebarProvider>
        </SidebarProvider>
      </div>
    </div>
  )
}

export default App
