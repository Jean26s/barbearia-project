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




const Home = async () =>{ 
  //chamar banco de dados
  const barbershops = await db.barbershop.findMany({})
  const popularBarbershops = await db.barbershop.findMany({
    orderBy: {
    name: "desc",
    },
  })
  
 
  return ( <div>
      <Header/>
     <div className="p-5">
     <h2 className="text-xl font-bold">Olá, Jean</h2>
     <p>Quarta-feira,07 de agosto</p>
     

     <div className="flex items-center gap-2 mt-6">
     <Input placeholder='Faça sua busca...'></Input>
     <Button>
      <SearchIcon/>
     </Button>
     </div>


     {/*BUSCA RAPIDA*/}

     <div className="flex gap-3 mt-6 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
      {QuickSearchOptions.map((option)=>(

       <Button className='gap-2' variant="secondary">
       <Image src={option.imageUrl} width={16} height={16} alt={option.title}></Image>
       {option.title}
     </Button>
      
      ))}
     </div>

     <div className='relative w-full h-[150px] mt-6 >'>
     <Image src="/banner-01.png" fill className="object-cover rounded-xl" alt='Banner'/>
     </div>

    <BookingItem/>

        <h2 className='text-xs font-bold uppercase text-gray-400 mt-6 mb-3'>Recomendados</h2>

        <div className='flex gap-4 overflow-auto  [&::-webkit-scrollbar]:hidden'>
        {barbershops.map((barbershop)=> (
          <BarbershopItem  key={barbershop.id} barbershop={barbershop}/>
        ))}
        </div>

         <h2 className='text-xs font-bold uppercase text-gray-400 mt-6 mb-3'>Populares</h2>

      <div className='flex gap-4 overflow-auto  [&::-webkit-scrollbar]:hidden'>
      {popularBarbershops.map((barbershop)=> (
        <BarbershopItem  key={barbershop.id} barbershop={barbershop}/>
      ))}
      </div>
     
        </div>
      <footer>
      <Card>
        <CardContent className='px-5 py-6'>
        <p className='text-sm text-gray-400'>2024 Copyrigth <span className='font-bold'>Fsw Barber</span></p>
          </CardContent>
          </Card>     
      </footer>
        </div>
  )
    
  
};

export default Home;