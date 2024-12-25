import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Mail, MailOpen, Search, Trash2 } from "lucide-react";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";

interface Message {
  id: number;
  sender: string;
  subject: string;
  preview: string;
  read: boolean;
}

const initialMessages: Message[] = [
  {
    id: 1,
    sender: "John Doe",
    subject: "New Order #1234",
    preview: "A new order has been placed...",
    read: false,
  },
  {
    id: 2,
    sender: "Jane Smith",
    subject: "Product Inquiry",
    preview: "I have a question about...",
    read: true,
  },
  {
    id: 3,
    sender: "Support Team",
    subject: "Your Ticket #5678",
    preview: "We've received your support request...",
    read: false,
  },
  {
    id: 4,
    sender: "Marketing",
    subject: "Upcoming Sale",
    preview: "Don't miss our biggest sale of the year...",
    read: true,
  },
  {
    id: 5,
    sender: "System",
    subject: "Security Alert",
    preview: "We detected a new login to your account...",
    read: false,
  },
];

export default function List() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMessages = messages.filter(
    (message) =>
      message.sender.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.sender.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleRead = (id: number) => {
    setMessages(
      messages.map((msg) => (msg.id === id ? { ...msg, read: !msg.read } : msg))
    );
  };

  const deleteMessages = (id: number) => {
    setMessages(messages.filter((msg) => msg.id !== id));
  };
  return (
    <div className="w-full flex justify-center items-center  ">
      <Card className="w-[1100px]">
        <CardHeader>
          <CardTitle>Inbox</CardTitle>
          <div className="flex items-center space-x-2">
            <Search className="w-4 h-4 opacity-50" />
            <Input
              placeholder="Search messages..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-sm"
            />
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredMessages.map((message) => (
              <div
                key={message.id}
                className="flex items-center space-x-4 p-2 hover:bg-gray-100 rounded"
              >
                <Checkbox
                  checked={message.read}
                  onCheckedChange={() => toggleRead(message.id)}
                />
                <div className="flex-1 min-w-0">
                  <p
                    className={`font-medium truncate ${
                      message.read ? "text-gray-600" : "text-black"
                    }`}
                  >
                    {message.sender}
                  </p>
                  <p
                    className={`text-sm truncate ${
                      message.read ? "text-gray-500" : "text-gray-900"
                    }`}
                  >
                    {message.subject}
                  </p>
                  <p className="text-sm text-gray-500 truncate">
                    {message.preview}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => toggleRead(message.id)}
                  >
                    {message.read ? (
                      <MailOpen className="h-4 w-4" />
                    ) : (
                      <Mail className="h-4 w-4" />
                    )}
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => deleteMessages(message.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
