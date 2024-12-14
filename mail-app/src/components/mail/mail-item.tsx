import { Email } from "@/types/emailTypes";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default function EmailCard(mail: Email) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{mail.sender}</CardTitle>
                <CardDescription>{mail.subject}</CardDescription>
            </CardHeader>
            <CardContent>

            </CardContent>
            <CardFooter>

            </CardFooter>
        </Card>
    )
}