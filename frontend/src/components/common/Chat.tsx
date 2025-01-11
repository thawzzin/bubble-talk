import { EllipsisVertical } from "lucide-react";
import { Separator } from "../ui/separator";
import { cn } from "@/lib/utils";
import Message from "./Message";
import Chatinput from "./Chatinput";

const Chat = () => {
  return (
    <div className="flex flex-col justify-between flex-1 text-white px-5 h-full">
      <div>
        <div className="flex justify-between mb-3">
          <h1 className="text-xl font-bold">Johnny</h1>
          <EllipsisVertical strokeWidth={1} size={20} />
        </div>
        <Separator className={cn("opacity-20")} />
      </div>
      <div className="my-3 flex flex-col gap-y-5">
        <Message />
        <Chatinput />
      </div>
    </div>
  );
};

export default Chat;
