import './App.css'
import MailTitlebar from './components/mail-title-bar'
import SideMenu from './components/side-menu'
import { SidebarProvider, SidebarTrigger } from './components/ui/sidebar'
import MailsComponent from './pages/mails'
import { InnerSidebarProvider } from "@/components/mail/context/inner-sidebar-state-provider";
import { MenubarComponent } from './components/menu-bar'
import { useRecoilState } from 'recoil'
import { sidebarOpen } from './components/mail/atoms/mail-atoms'

const CustomSidebarStyle: React.CSSProperties & { [key: `--${string}`]: string } = {
  "--sidebar-width": "7.5rem",
  "--sidebar-width-icon": "3rem"
}

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useRecoilState(sidebarOpen);

  return (
    <div>
      <MailTitlebar />
      <div className='flex mt-[0px]'>
        <SidebarProvider style={CustomSidebarStyle} className='flex-1'>
          <SidebarTrigger className='fixed top-[50px] z-50' onClick={() => { setIsSidebarOpen(!isSidebarOpen) }} />
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
