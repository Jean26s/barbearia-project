import { CalendarIcon, HomeIcon, LogOutIcon, MenuIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";
import { Avatar, AvatarImage } from "./ui/avatar";
import Image from 'next/image';
import { QuickSearchOptions } from "../_constants/search";
import Link from "next/link";

const SidebarSheet = () => {
    return (

        <SheetContent>
            <SheetHeader>
                <SheetTitle className="text-left">Menu</SheetTitle>
            </SheetHeader>

            <div className="py-5 border-b border-solid flex items-center gap-3">
                <Avatar>
                    <AvatarImage src="https://media.licdn.com/dms/image/v2/D4D03AQGzk24lBRUe_A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1721769731231?e=1733356800&v=beta&t=5x1f7bMW2QAv3xNdZHmpCIsSna3ZdXVwjMq8qigfREM" />
                </Avatar>
                <div>
                    <p className="font-bold">Jean Azevedo</p>
                    <p className="text-sm">jean.azevedo1@gmail.com</p>
                </div>
            </div>

            <div className="flex flex-col py-5 gap-1 border-b border-solid">
                <SheetClose asChild>
                    <Button className="justify-start gap-2" variant="ghost" asChild><Link href="/"> <HomeIcon size={18} /> Inicio </Link></Button>
                </SheetClose>

                <Button className="justify-start gap-2" variant="ghost"><CalendarIcon size={18} /> Agendamentos</Button>
            </div>

            <div className="flex flex-col py-5 gap-1 border-b border-solid">
                {QuickSearchOptions.map((option) => (
                    <Button key={option.title} className="justify-start gap-2" variant="ghost"><Image src={option.imageUrl} width={18} height={18} alt="Icones" /> {option.title}</Button>
                ))}
            </div>
            <div className="flex flex-col py-5 gap-1">
                <Button variant="ghost" className="justify-start gap-2"><LogOutIcon size={18} />Sair da conta</Button>
            </div>

        </SheetContent>

    );
}

export default SidebarSheet;