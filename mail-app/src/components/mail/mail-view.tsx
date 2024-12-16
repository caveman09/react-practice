import { selectedEmailState } from "./atoms/mail-atoms";
import { useRecoilValue } from "recoil";

export default function MailsViewComponent() {
    const selectedEmail = useRecoilValue(selectedEmailState);

    function defaultView() {
        return (<div className="h-full flex">

            <div className="m-auto">Nothing is selected</div>
        </div>)
    }

    return (
        <div className="flex-1 flex-grow h-full">
            {selectedEmail ? selectedEmail.subject : defaultView()}
        </div>
    )
}