import React, { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useSelector } from "react-redux";
import { useToast } from "@/components/ui/use-toast";

function Chatbot({ context }) {
  const [input, setInput] = useState("");
  const [chatLog, setChatLog] = useState([
    { sender: "bot", message: "Hello, how can I help you?" },
  ]);
  const token = useSelector((state) => state.auth.token);
  const id = useSelector((state) => state.auth.user.id);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSendMessage = async () => {
    if (input.trim() === "") return;

    const newChatLog = [...chatLog, { sender: "user", message: input }];
    setChatLog(newChatLog);
    setInput("");

    const data = { query: input, patientHistory: context ? context : [] };
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    setIsLoading(true);
    console.log(data);
    try {
      const response = await axios.post(
        `http://localhost:5072/api/ai/conversation/${id}/chat`,
        data,
        config
      );
      const aiResponse = { sender: "bot", message: response.data.data.content };
      setChatLog([...newChatLog, aiResponse]);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      toast({
        title: "Error! Error Occurred",
        description: error.message ? error.message : "Something Went wrong",
      });
      setIsLoading(false);
    }
    setIsLoading(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div>
      <Sheet>
        <SheetTrigger className="rounded-full">
          <svg
            fill="#E4F0EE"
            height="64px"
            width="64px"
            version="1.1"
            id="Capa_1"
            viewBox="-14.4 -14.4 88.80 88.80"
            stroke="#E4F0EE"
            strokeWidth="0.0006000000000000001"
            transform="rotate(0)"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0">
              <rect
                x="-14.4"
                y="-14.4"
                width="88.80"
                height="88.80"
                rx="44.4"
                fill="#8BA5A8"
                strokeWidth="0"
              ></rect>
            </g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="#fffff"
              strokeWidth="1.56"
            >
              <path d="M54,2H6C2.748,2,0,4.748,0,8v33c0,3.252,2.748,6,6,6h8v10c0,0.413,0.254,0.784,0.64,0.933C14.757,57.978,14.879,58,15,58 c0.276,0,0.547-0.115,0.74-0.327L25.442,47H54c3.252,0,6-2.748,6-6V8C60,4.748,57.252,2,54,2z M12,15h15c0.553,0,1,0.448,1,1 s-0.447,1-1,1H12c-0.553,0-1-0.448-1-1S11.447,15,12,15z M46,33H12c-0.553,0-1-0.448-1-1s0.447-1,1-1h34c0.553,0,1,0.448,1,1 S46.553,33,46,33z M46,25H12c-0.553,0-1-0.448-1-1s0.447-1,1-1h34c0.553,0,1,0.448,1,1S46.553,25,46,25z"></path>
            </g>
            <g id="SVGRepo_iconCarrier">
              <path d="M54,2H6C2.748,2,0,4.748,0,8v33c0,3.252,2.748,6,6,6h8v10c0,0.413,0.254,0.784,0.64,0.933C14.757,57.978,14.879,58,15,58 c0.276,0,0.547-0.115,0.74-0.327L25.442,47H54c3.252,0,6-2.748,6-6V8C60,4.748,57.252,2,54,2z M12,15h15c0.553,0,1,0.448,1,1 s-0.447,1-1,1H12c-0.553,0-1-0.448-1-1S11.447,15,12,15z M46,33H12c-0.553,0-1-0.448-1-1s0.447-1,1-1h34c0.553,0,1,0.448,1,1 S46.553,33,46,33z M46,25H12c-0.553,0-1-0.448-1-1s0.447-1,1-1h34c0.553,0,1,0.448,1,1S46.553,25,46,25z"></path>
            </g>
          </svg>
        </SheetTrigger>
        <SheetContent className="bg-[#A7C2C5]">
          <SheetHeader>
            <SheetTitle className="mb-4 bg-teal-900 text-white px-4 py-2 mr-4 rounded-md">
              GuideBot
            </SheetTitle>
            <SheetDescription className="h-[400px] rounded-lg px-2 py-2 text-black overflow-y-auto">
              {chatLog.map((entry, index) => (
                <div
                  key={index}
                  className={`p-2 m-2 rounded-md ${
                    entry.sender === "bot" ? "bg-white" : "bg-blue-100"
                  }`}
                >
                  {entry.message}
                </div>
              ))}
              {isLoading && <p>Generating response...</p>}
            </SheetDescription>
          </SheetHeader>
          <SheetFooter>
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message..."
            />
            <Button
              className="bg-[#1F555D] w-1/4 h-10 text-white"
              onClick={handleSendMessage}
            >
              Send
            </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default Chatbot;
