import PhoneItem from "@/app/components/phone-items";
import ServiceItem from "@/app/components/service-item";
import SidebarSheet from "@/app/components/sidebar-sheet";
import { Button } from "@/app/components/ui/button";
import { Sheet, SheetTrigger } from "@/app/components/ui/sheet";
import { db } from "@/app/lib/prisma";
import { ChevronLeftIcon, MapPinIcon, MenuIcon, Phone, SmartphoneIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface BarbershopPageProps {
    params: {
        id: string
    }
}

const BarbershopPage = async ({ params }: BarbershopPageProps) => {
    const barbershop = await db.barbershop.findUnique({
        where: {
            id: params.id,
        },
        include: {
            services: true,
        }


    })

    if (!barbershop) {
        return notFound()
    }



    return <div>

        <div className="relative w-full h-[250px]">
            <Image
                src={barbershop?.imageUrl}
                alt={barbershop?.name} fill className="object-cover" />

            <Button size="icon" variant="secondary" className="absolute top-4 left-4" asChild>
                <Link href="/">
                    <ChevronLeftIcon />
                </Link>
            </Button>

            <Sheet>
                    <SheetTrigger asChild>
                    <Button size="icon" variant="outline" className="absolute right-4 top-4">
                    <MenuIcon></MenuIcon>
                </Button>
                    </SheetTrigger>
                    <SidebarSheet/>
                </Sheet>

        </div>

        <div className="p-5 border-b border-solid">
            <h1 className="text-xl font-bold mb-3">{barbershop?.name}</h1>
            <div className="flex items-center gap-2 mb-2 ">
                <MapPinIcon className="text-primary" size={18} />
                <p className="text-sm">{barbershop?.address}</p>
            </div>

            <div className="flex items-center gap-2 ">
                <StarIcon className="text-primary fill-primary" size={18} />
                <p className="text-sm">4,8 (499 avaliações)</p>
            </div>
        </div>
        {/*DESCRIÇÃO*/}
        <div className="p-5 border-b border-solid space-y-3">
            <h2 className="text-xs font-bold uppercase text-gray-400">Sobre nós</h2>
            <p className="text-sm text-justify">{barbershop?.description}</p>
        </div>
        {/*SERVIÇOS*/}
        <div className="p-5 space-y-3 border-b border-solid" >
            <h2 className="text-xs font-bold uppercase text-gray-400">Serviços</h2>
            <div className="space-y-3">
                {barbershop.services.map(service => <ServiceItem key={service.id} service={service} barbershop={barbershop} />)}
            </div>
        </div>

        {/*CONTATO*/}

        <div className="p-5 space-y-3">
            {barbershop.phones.map((phone) => (
                <PhoneItem key={phone} phone={phone} />

            ))}
        </div>
    </div>



}

export default BarbershopPage;