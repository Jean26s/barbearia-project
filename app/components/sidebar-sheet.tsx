"use client"
import { CalendarIcon, HomeIcon, LogInIcon, LogOutIcon, MenuIcon } from "lucide-react";
import { Button } from "./ui/button";
import {SheetClose, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";
import { Avatar, AvatarImage } from "./ui/avatar";
import Image from 'next/image';
import { QuickSearchOptions } from "../_constants/search";
import Link from "next/link";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { signIn } from "next-auth/react";

const SidebarSheet = () => {

    const handleLoginWithGoogleClick=()=> signIn("google")
        
    
    return (

        <SheetContent>
            <SheetHeader>
                <SheetTitle className="text-left">Menu</SheetTitle>
            </SheetHeader>

            <div className="py-5 border-b border-solid justify-between flex items-center gap-3">
                <h2 className="font-bold text-lg">Olá , Faça seu login</h2>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button size="icon">
                        <LogInIcon></LogInIcon>
                        </Button>
                        </DialogTrigger>
                        <DialogContent className="w-[90%]">
                            <DialogHeader>
                                <DialogTitle> Faça seu login </DialogTitle>
                                <DialogDescription>Conecte-se usando o google</DialogDescription>
                            </DialogHeader>
                            <Button onClick={handleLoginWithGoogleClick} variant="outline" className="gap-1 font-bold">
                                Google
                            </Button>
 
                        </DialogContent>
                </Dialog>
                {/* <Avatar>
                    <AvatarImage src="https://media.licdn.com/dms/image/v2/D4D03AQGzk24lBRUe_A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1721769731231?e=1733356800&v=beta&t=5x1f7bMW2QAv3xNdZHmpCIsSna3ZdXVwjMq8qigfREM" />
                </Avatar>
                <div>
                    <p className="font-bold">Jean Azevedo</p>
                    <p className="text-sm">jean.azevedo1@gmail.com</p>
                </div> */} 
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