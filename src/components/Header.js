import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Header() {
  const session = null;
  return (
    <div className="bg-secondary py-3">
      <div className="container mx-auto flex justify-between p-2">
        <h1 className="font-mono font-bold text-xl">LOGO</h1>
       {
        session ? (
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CMN</AvatarFallback>
              </Avatar>
            </MenubarTrigger>
            <MenubarContent>
              <Link href={"/profile"}>
                <MenubarItem>Profile</MenubarItem>
              </Link>

              <MenubarSeparator />
              <Link href={"/appointements"}>
                <MenubarItem>My Appointments</MenubarItem>
              </Link>
              <MenubarSeparator />
              <MenubarItem>Logout</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
        ):(
        
       <Link href={"/signin"}>
        <Button variant={"outline"} >Login</Button>
       
       </Link>
      )}
      </div>
    </div>
  );
}
