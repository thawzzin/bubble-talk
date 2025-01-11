import { Card, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Input } from "../ui/input";
import { Search } from "lucide-react";

const Users = () => {
  return (
    <div className="flex-[0.3] px-5">
      <div className="flex items-center mb-5 mx-auto relative">
        <Input className={cn("bg-transparent")} placeholder="Search..." />
        <Search
          color="#ffffff"
          size={20}
          className="absolute right-3 top-1/2 -translate-y-1/2 opacity-30"
        />
      </div> 
      <Card className={cn("w-full bg-dark-active text-white border-none")}>
        <CardHeader className={cn("p-3")}>
          <div className="flex items-center gap-5">
            <Avatar className={cn("")}>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>J</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className={cn("text-lg")}>Johnny</CardTitle>
              <CardDescription>Deploy your new project ...</CardDescription>
            </div>
          </div>
        </CardHeader>
      </Card>
      <Card className={cn("w-full bg-transparent text-white border-none")}>
        <CardHeader className={cn("p-3")}>
          <div className="flex items-center gap-5">
            <Avatar className={cn("")}>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>J</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className={cn("text-lg")}>Mary</CardTitle>
              <CardDescription>Deploy your new project ...</CardDescription>
            </div>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};

export default Users;
