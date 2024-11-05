import { SearchIcon } from 'lucide-react';
import Header from './components/header'
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import Image from 'next/image';
import { Card, CardContent } from './components/ui/card';
import { db } from './lib/prisma';
import BarbershopItem from './components/barbershop-item';
import { QuickSearchOptions } from './_constants/search';
import BookingItem from './components/booking-item';
import Search from './components/search';
import Link from 'next/link';
import { SheetClose, SheetContent, SheetHeader, SheetTitle } from "./components/ui/sheet"
import { DialogClose } from './components/ui/dialog';




const Home = async () => {
  //chamar banco de dados
  const barbershops = await db.barbershop.findMany({})
  const popularBarbershops = await db.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  })


  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Jean</h2>
        <p>Quarta-feira,07 de agosto</p>


       <Search></Search>


        {/*BUSCA RAPIDA*/}

        <div className="flex gap-3 mt-6 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          {QuickSearchOptions.map((option) => (

          
              <Button className='gap-2' variant="secondary" asChild>
              <Link href={`/barbershops?service=${option.title}`}><Image src={option.imageUrl} width={16} height={16} alt={option.title}/>{option.title}</Link>
              
            </Button>
          

          ))}
        </div>

        <div className='relative w-full h-[150px] mt-6 >'>
          <Image src="/banner-01.png" fill className="object-cover rounded-xl" alt='Banner' />
        </div>

        <BookingItem />

        <h2 className='text-xs font-bold uppercase text-gray-400 mt-6 mb-3'>Recomendados</h2>

        <div className='flex gap-4 overflow-auto  [&::-webkit-scrollbar]:hidden'>
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>

        <h2 className='text-xs font-bold uppercase text-gray-400 mt-6 mb-3'>Populares</h2>

        <div className='flex gap-4 overflow-auto  [&::-webkit-scrollbar]:hidden'>
          {popularBarbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>

      </div>

    </div>
  )


};

export default Home;