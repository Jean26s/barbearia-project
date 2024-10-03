import { CalendarIcon, HomeIcon, Icon, LogOutIcon, MenuIcon } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import Image from 'next/image';
import { Button } from "./ui/button";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { QuickSearchOptions } from "../_constants/search";
import { Avatar, AvatarImage } from "./ui/avatar";
import Link from "next/link";
import SidebarSheet from "./sidebar-sheet";



const Header = () => {
    return ( 
        <Card>
            <CardContent className="p-5 flex flex-row justify-between items-center">
                <Image src="/logo.png" alt="Fsw barber" width={120} height={18}></Image>
                <Sheet>
                    <SheetTrigger asChild>
                    <Button size="icon" variant="outline">
                    <MenuIcon></MenuIcon>
                </Button>
                    </SheetTrigger>
                    <SidebarSheet/>
                </Sheet>
                
            </CardContent>
        </Card>
     );
}
 
export default Header;