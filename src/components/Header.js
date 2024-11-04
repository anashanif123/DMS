import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
  } from "@/components/ui/menubar"
  
  import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Header() {
    return(
        <div className="bg-secondary py-3">
            <div className="container mx-auto flex justify-between p-2">
            <h1 className="font-mono font-bold text-xl" >LOGO</h1>
          <Menubar>
  <MenubarMenu>
    <MenubarTrigger >
    <Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CMN</AvatarFallback>
</Avatar>

    </MenubarTrigger>
    <MenubarContent>
     
      <MenubarItem>Profile</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>My Appointments</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Logout</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>
            </div>
          

        </div>
    )
}