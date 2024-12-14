export interface Email {
    id: string;
    sender: string;
    recipient: string;
    subject: string;
    body: string;
    data: Date;
    attachment: Attachment[];
}

export interface Attachment {
    filename: string;
    mimeType: string;
    size: number;
    content: string; //base64 encoded content
}

export const dummyEmails: Email[] = [
    {
        id: '1',
        sender: 'alice@example.com',
        recipient: 'me@cavemail.com',
        subject: 'Meeting Reminder',
        body: 'Don’t forget about our meeting tomorrow at 10am.',
        data: new Date(),
        attachment: [],
    },
    {
        id: '2',
        sender: 'bob@example.com',
        recipient: 'me@cavemail.com',
        subject: 'Weekly Report',
        body: 'Here is the weekly report. Let me know if you have any questions.',
        data: new Date(),
        attachment: [],
    },
    {
        id: '3',
        sender: 'charlie@example.com',
        recipient: 'me@cavemail.com',
        subject: 'Lunch Invitation',
        body: 'Would you like to grab lunch sometime this week?',
        data: new Date(),
        attachment: [],
    },
    {
        id: '4',
        sender: 'dave@example.com',
        recipient: 'me@cavemail.com',
        subject: 'Project Update',
        body: 'The project is on track. We should be able to meet the deadline.',
        data: new Date(),
        attachment: [],
    },
    {
        id: '5',
        sender: 'eve@example.com',
        recipient: 'me@cavemail.com',
        subject: 'Networking Event',
        body: 'Don’t miss the networking event this Thursday.',
        data: new Date(),
        attachment: [],
    },
    {
        id: '6',
        sender: 'frank@example.com',
        recipient: 'me@cavemail.com',
        subject: 'Team Meeting Minutes',
        body: 'Here are the minutes from today’s team meeting.',
        data: new Date(),
        attachment: [],
    },
    {
        id: '7',
        sender: 'grace@example.com',
        recipient: 'me@cavemail.com',
        subject: 'Client Feedback',
        body: 'We received some feedback from the client. Please review it.',
        data: new Date(),
        attachment: [],
    },
    {
        id: '8',
        sender: 'hank@example.com',
        recipient: 'me@cavemail.com',
        subject: 'Budget Approval',
        body: 'The budget for Q2 has been approved. Details attached.',
        data: new Date(),
        attachment: [],
    },
    {
        id: '9',
        sender: 'isabella@example.com',
        recipient: 'me@cavemail.com',
        subject: 'Workshop Invitation',
        body: 'You are invited to a workshop on Project Management next week.',
        data: new Date(),
        attachment: [],
    },
    {
        id: '10',
        sender: 'jack@example.com',
        recipient: 'me@cavemail.com',
        subject: 'Travel Itinerary',
        body: 'Here is your travel itinerary for the upcoming business trip.',
        data: new Date(),
        attachment: [],
    }
];
