"use client"
import { Barbershop, BarbershopService } from "@prisma/client";

import Image from "next/image";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Calendar } from "./ui/calendar";
import { ptBR } from "date-fns/locale";
import { useState } from "react";
import { format, set } from "date-fns";
import { useSession } from "next-auth/react";
import { createBooking } from "../_actions/create-booking";


interface ServiceItemProps {
  service: BarbershopService
  barbershop:Pick<Barbershop,"name">
}

const TIME_LIST = [
  "08:00",
  "08:30",
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
]


const ServiceItem = ({ service,barbershop}: ServiceItemProps) => {

  const [selectedDay, setSelectedDay] = useState<Date | undefined>(undefined)
  const [selectedTime, setSelectedTime] = useState<String | undefined>(undefined)
  const data = useSession()

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDay(date)
  }

  const handleSelectTime = (time: string) => {
    setSelectedTime(time)
  }


  const handleCreateBooking = async () => {
    if (!selectedDay|| !selectedTime) return

      const hour = Number(selectedTime.split(":")[0])
      const minute = Number(selectedTime.split(":")[1])
      const newDate = set(selectedDay,{
        minutes:minute,
        hours:hour,
      })

      await createBooking({
        serviceId:service.id,
        userId:data?.user,
        date:newDate,
      })
    }
    

  return (
    <Card>
      <CardContent className="flex items-center gap-3 space-y-3 mt-1">

        <div className="relative max-h-[110px] min-h-[110px] max-w-[110px] min-w-[110px]">
          <Image src={service.imageUrl} alt={service.name} fill className="object-cover rounded-xl" />
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-sm">{service.name}</h3>
          <p className="text-sm text-gray-400">{service.description}</p>
          {/*PREÇO E BOTAO*/}

          <div className="flex items-center justify-between">
            <p className="font-bold text-sm text-primary">{Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL"
            }).format(Number(service.price))}</p>

            <Sheet>
              <SheetTrigger>
                <Button variant="secondary" size="sm">Reservar</Button>
              </SheetTrigger>
              <SheetContent className="px-0">
                <SheetHeader>
                  <SheetTitle>Fazer Reserva</SheetTitle>
                </SheetHeader>
                <div className="py-5 border-b border-solid">
                  <Calendar
                    mode="single"
                    locale={ptBR}
                    selected={selectedDay}
                    onSelect={handleDateSelect}

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

                {selectedDay && (

                  <div className="flex border-b border-solid overflow-x-auto p-5 gap-3 [&::-webkit-scrollbar]:hidden">
                    {TIME_LIST.map((elem) => (
                      <Button 
                      className="rounded-full" 
                      key={elem} 
                      variant={selectedTime === elem ? "default" : "outline"} 
                      onClick={() => handleSelectTime(elem)}>{elem}</Button>
                    ))}
                  </div>
                )}

                {selectedDay && selectedTime && (
                  <div className="p-5">
                    <Card>
                      <CardContent className="space-y-3 p-3">
                        <div className="items-center flex justify-between">
                          <h2 className="font-bold">{service.name}</h2>
                          <p className="text-sm font-bold">
                            {Intl.NumberFormat("pt-BR",{
                              style:"currency",
                              currency:"BRL",}).format(Number(service.price))}
                          </p>
                        </div>

                        <div className="items-center flex justify-between">
                          <h2 className="text-sm text-gray-400">Data</h2>
                          <p className="text-sm">
                           {format(selectedDay,"d 'de' MMMM",{locale:ptBR})}
                         </p>
                        </div>

                        <div className="items-center flex justify-between">
                          <h2 className="text-sm text-gray-400">Horario</h2>
                          <p className="text-sm">
                           {selectedTime}
                         </p>
                        </div>

                        <div className="items-center flex justify-between">
                          <h2 className="text-sm text-gray-400">Barbearia</h2>
                          <p className="text-sm">
                           {barbershop.name}
                         </p>
                        </div>

                      </CardContent>
                    </Card>
                  </div>
                )}
              <SheetFooter className="px-5">
                <SheetClose asChild>
                  <Button type="submit">Confirmar</Button>
                </SheetClose>
              </SheetFooter>
              </SheetContent>
            </Sheet>

          </div>
        </div>

      </CardContent>
    </Card>
  );
}

export default ServiceItem;