import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { LogOut, MessageSquare, Moon, User, Users } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="flex-[0.05] pr-5 flex flex-col">
      <Avatar className={cn("mx-auto mb-10")}>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>TZ</AvatarFallback>
      </Avatar>

      <div className="flex flex-col items-center gap-y-10 text-center text-xs">
        <button>
          <MessageSquare
            color="#ffffff"
            size={28}
            strokeWidth={1}
            className="mx-auto"
          />
          <p className="text-white">All Chats</p>
        </button>
        <button>
          <User color="#ffffff" size={28} strokeWidth={1} className="mx-auto" />
          <p className="text-white">Personal Chats</p>
        </button>
        <button>
          <Users
            color="#ffffff"
            size={28}
            strokeWidth={1}
            className="mx-auto"
          />
          <p className="text-white">Group Chats</p>
        </button>
      </div>
      <div className="mt-auto text-center space-y-10 mb-5">
        <button className="block mx-auto">
          <Moon color="#ffffff" size={28} strokeWidth={1} className="mx-auto" />
        </button>
        <button className="block mx-auto">
          <LogOut
            color="#ffffff"
            size={28}
            strokeWidth={1}
            className="mx-auto"
          />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
