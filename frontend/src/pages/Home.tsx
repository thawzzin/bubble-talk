import Chats from "@/components/common/Chat";
import Sidebar from "@/components/common/Sidebar";
import Users from "@/components/common/Users";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const Home = () => {
  return (
    <div className="flex bg-black min-h-screen p-5">
      <Sidebar />
      <div className="flex flex-1 py-5 bg-dark-background rounded-sm">
        <Users />
        <Separator orientation="vertical" className={cn("opacity-40")}/>
        <Chats />
      </div>
    </div>
  );
};

export default Home;
