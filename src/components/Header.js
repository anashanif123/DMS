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
import { auth } from "../../auth";
import Image from "next/image";

export default async function Header() {
  const session = await auth();

  console.log("seesion in header",session);
  
  return (
    <div className="bg-secondary py-3">
      <div className="container mx-auto flex justify-between">
        <h1 className="font-mono font-bold text-xl">LOGO</h1>
       {
        session ? (
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger className={"border-none bg-transparent p-0 m-0"}>
            <Image
            src={session?.user?.image} 
            height={40}
            width={40}
            className="rounded-full"
            />
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
