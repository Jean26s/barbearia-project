import { Barbershop } from "@prisma/client";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { StarIcon } from "lucide-react";

interface BarbershopItemProps{
    barbershop:Barbershop
}

const BarbershopItem = ({barbershop}:BarbershopItemProps) => {
    return ( 
        <Card className="min-w-[167px] rounded-2xl">
            <CardContent className="p-0 px-1 pt-1">
                <div className="relative h-[159px] w-full">
                    <Image alt={barbershop.name} fill className="object-cover rounded-2xl" src={barbershop.imageUrl}></Image>
                    <Badge className="absolute left-2 top-2" variant="secondary">
                        <StarIcon size={12} className="fill-primary text-primary"></StarIcon>
                        <p className="pl-1 text-xs">5,0</p>
                    </Badge>
                </div>
                <div className="py-3 px-1">
                    <h3 className="truncate font-semibold">{barbershop.name}</h3>
                    <p className="truncate text-sm text-gray-400">{barbershop.address}</p>
                    <Button variant="secondary" className="w-full mt-3">Reservar</Button>
                </div>
            </CardContent>
            </Card>
     );
    }
export default BarbershopItem;
    