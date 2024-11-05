"use client"
import { BarbershopService } from "@prisma/client";

import Image from "next/image";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Calendar } from "./ui/calendar";
import { ptBR } from "date-fns/locale/pt-BR";

interface ServiceItemProps{
    service:BarbershopService
}


const ServiceItem = ({service}:ServiceItemProps) => {
    return ( 
  <Card>
    <CardContent className="flex items-center gap-3 space-y-3 mt-1">
    
            <div className="relative max-h-[110px] min-h-[110px] max-w-[110px] min-w-[110px]">
            <Image src={service.imageUrl} alt={service.name} fill className="object-cover rounded-xl"/>
            </div>
            <div className="space-y-2">
                <h3 className="font-semibold text-sm">{service.name}</h3>
                <p className="text-sm text-gray-400">{service.description}</p>
                {/*PREÇO E BOTAO*/}

                <div className="flex items-center justify-between">
                    <p className="font-bold text-sm text-primary">{Intl.NumberFormat("pt-BR",{
                        style:"currency",
                        currency:"BRL"
                    }).format(Number(service.price))}</p>

                    <Sheet>
                        <SheetTrigger>
                        <Button variant="secondary" size="sm">Reservar</Button>
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle>Fazer Reserva</SheetTitle>
                            </SheetHeader>
                            <div className="py-5"> 
                                <Calendar 
                                mode="single" 
                                locale={ptBR}
                                styles={{
                                    head_cell: {
                                      width: "100%",
                                      textTransform: "capitalize",
                                    },
                                    cell: {
                                      width: "100%",
                                    },
                                    button: {
                                      width: "100%",
                                    },
                                    nav_button_previous: {
                                      width: "32px",
                                      height: "32px",
                                    },
                                    nav_button_next: {
                                      width: "32px",
                                      height: "32px",
                                    },
                                    caption: {
                                      textTransform: "capitalize",
                                    },
                                }}
                                ></Calendar>
                            </div>
                        
                        </SheetContent>
                    </Sheet>
                    
                    </div>
            </div>
        
    </CardContent>
  </Card>
     );
}
 
export default ServiceItem;