import ServiceItem from "@/app/components/service-item";
import { Button } from "@/app/components/ui/button";
import { db } from "@/app/lib/prisma";
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface BarbershopPageProps{
    params:{
        id:string
    }
}

const  BarbershopPage = async ({params}:BarbershopPageProps) => {
    const barbershop = await db.barbershop.findUnique({
        where:{
            id:params.id,
    },
        include:{
            services:true,
        }
        
    
    })
    
    if(!barbershop){
        return notFound()
    }

    

    return <div>
        
            <div className="relative w-full h-[250px]">
                <Image 
                src={barbershop?.imageUrl}  
                alt={barbershop?.name} fill className="object-cover"/>
                
                <Button size="icon" variant="secondary" className="absolute top-4 left-4" asChild>
                    <Link href="/">
                    <ChevronLeftIcon/>
                    </Link>
                </Button>

                <Button size="icon" variant="secondary" className="absolute top-4 right-4">
                    <MenuIcon/> 
                </Button>
                
                </div>

                <div className="p-5 border-b border-solid">
                <h1 className="text-xl font-bold mb-3">{barbershop?.name}</h1>
                    <div className="flex items-center gap-2 mb-2 ">
                        <MapPinIcon className="text-primary" size={18}/>
                        <p className="text-sm">{barbershop?.address}</p>
                    </div>

                    <div className="flex items-center gap-2 ">
                        <StarIcon className="text-primary fill-primary"size={18}/>
                        <p className="text-sm">4,8 (499 avaliações)</p>
                    </div>  
                </div>

                <div className="p-5 border-b border-solid space-y-3">
                    <h2 className="text-xs font-bold uppercase text-gray-400">Sobre nós</h2>
                    <p className="text-sm text-justify">{barbershop?.description}</p>
                </div>

                <div className="p-5 space-y-3" >
                <h2 className="text-xs font-bold uppercase text-gray-400">Serviços</h2>
                <div className="space-y-3">
                {barbershop.services.map(service=><ServiceItem key={service.id} service={service}/>)}
                </div>
                </div>
                
            </div>
        
        
     
}
 
export default BarbershopPage ;