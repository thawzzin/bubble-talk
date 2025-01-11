import { cn } from "@/lib/utils";
import { Input } from "../ui/input";
import { Image, Send } from "lucide-react";

const Chatinput = () => {
  return (
    <div className="flex items-center gap-x-3">
      <Image strokeWidth={1} />
      <Input
        className={cn("bg-dark-active border-none")}
        placeholder="Your Message"
      />
      <Send strokeWidth={1}/>
    </div>
  );
};

export default Chatinput;
