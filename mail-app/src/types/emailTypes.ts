export interface Email {
    id: string | null;
    sender: string;
    recipient: string;
    subject: string;
    body: string;
    date: Date;
    attachment: Attachment[];
}

export interface Attachment {
    filename: string;
    mimeType: string;
    size: number;
    content: string; //base64 encoded content
}

export interface MailDraft {
    id: number | null;
    subject: string;
    body: string;
    to: string;
}

export const dummyEmails = [
    {
        id: '1',
        sender: 'alice@example.com',
        recipient: 'me@cavemail.com',
        subject: 'Meeting Reminder',
        body: "Hey, don't forget about our meeting tomorrow at 10am in the conference room. We'll be discussing the new project milestones and assigning tasks. Please make sure to review the project plan before the meeting. Also, if you have any questions about the agenda or the project details, feel free to reach out to me beforehand. I want to ensure that we are all on the same page and can have a productive discussion. Looking forward to seeing everyone there.",
        date: new Date(2024, 0, 15, 9, 0, 0),
        attachment: []
    },
    {
        id: '2',
        sender: 'bob@example.com',
        recipient: 'me@cavemail.com',
        subject: 'Weekly Report',
        body: "Hi, here is the weekly report. It covers all the key metrics and performance indicators from the last week. Let me know if you have any questions or need further details. This week, we saw an increase in customer engagement, particularly in the new product line, which is a promising sign. Additionally, the marketing campaign appears to be driving significant traffic to our website. Please review the attached graphs and data sheets for a detailed breakdown. If there's anything specific you'd like to discuss, we can schedule a meeting to go over it in more detail.",
        date: new Date(2024, 0, 14, 9, 0, 0),
        attachment: []
    },
    {
        id: '3',
        sender: 'charlie@example.com',
        recipient: 'me@cavemail.com',
        subject: 'Lunch Invitation',
        body: "Hey, I was thinking if you'd like to grab lunch sometime this week. We can try out the new Italian restaurant downtown. Let me know your availability. I’ve heard great things about their lasagna and tiramisu, and I thought it would be a nice break from our usual routine. Plus, it would be a good opportunity to catch up and talk about some exciting ideas I have for our next project. Looking forward to your response. I hope you can make it!",
        date: new Date(2024, 0, 13, 9, 0, 0),
        attachment: []
    }
    ,
    {
        id: '4',
        sender: 'dave@example.com',
        recipient: 'me@cavemail.com',
        subject: 'Project Update',
        body: 'Hello, just a quick update on the project. Everything is on track, and we are making good progress. We should be able to meet the deadline as planned. I\'ll keep you posted on any further developments.',
        date: new Date(2024, 0, 12, 9, 0, 0),
        attachment: []
    },
    {
        id: '5',
        sender: 'eve@example.com',
        recipient: 'me@cavemail.com',
        subject: 'Networking Event',
        body: "Hi, don't miss the networking event this Thursday. It's a great opportunity to meet industry professionals and expand your network. See you there!",
        date: new Date(2024, 0, 11, 9, 0, 0),
        attachment: []
    },
    {
        id: '6',
        sender: 'frank@example.com',
        recipient: 'me@cavemail.com',
        subject: 'Team Meeting Minutes',
        body: 'Hello, here are the minutes from today’s team meeting. We discussed various topics including project timelines, resource allocation, and upcoming deadlines. Please review and let me know if there are any discrepancies.',
        date: new Date(2024, 0, 10, 9, 0, 0),
        attachment: []
    },
    {
        id: '7',
        sender: 'grace@example.com',
        recipient: 'me@cavemail.com',
        subject: 'Client Feedback',
        body: 'Hi, we received some feedback from the client regarding the recent deliverable. Please review the feedback and provide your insights. We need to address these points in our next meeting.',
        date: new Date(2024, 0, 9, 9, 0, 0),
        attachment: []
    },
    {
        id: '8',
        sender: 'hank@example.com',
        recipient: 'me@cavemail.com',
        subject: 'Budget Approval',
        body: 'Hello, the budget for Q2 has been approved. Please find the details attached. We can now proceed with the planned expenses and resource allocations.',
        date: new Date(2024, 0, 8, 9, 0, 0),
        attachment: []
    },
    {
        id: '9',
        sender: 'isabella@example.com',
        recipient: 'me@cavemail.com',
        subject: 'Workshop Invitation',
        body: 'Hi, you are invited to a workshop on Project Management next week. The workshop will cover various aspects of project management, including planning, execution, and monitoring. It’s a great opportunity to enhance your skills.',
        date: new Date(2024, 0, 7, 9, 0, 0),
        attachment: []
    },
    {
        id: '10',
        sender: 'jack@example.com',
        recipient: 'me@cavemail.com',
        subject: 'Travel Itinerary',
        body: 'Hello, here is your travel itinerary for the upcoming business trip. The itinerary includes flight details, hotel reservations, and meeting schedules. Let me know if there are any changes or additional requests.',
        date: new Date(2024, 0, 6, 9, 0, 0),
        attachment: []
    }
];
