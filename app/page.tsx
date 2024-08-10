import { SearchIcon } from 'lucide-react';
import Header from './components/header'
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import Image from 'next/image';
import { Card, CardContent } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { Avatar, AvatarImage } from './components/ui/avatar';
import { db } from './lib/prisma';
import BarbershopItem from './components/barbershop-item';


const Home = async () =>{ 
  //chamar banco de dados
  const barbershops = await db.barbershop.findMany({})
  
 
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

     <div className='relative w-full h-[150px] mt-6 >'>
     <Image src="/banner-01.png" fill className="object-cover rounded-xl" alt='Banner'/>
     </div>

     <h2 className='text-xs font-bold uppercase text-gray-400 mt-6 mb-3'>Agendamentos</h2>

     <Card className='mt-6'>
      <CardContent className='flex justify-between p-0'>
         {/*ESQUERDA*/}
        <div className='flex flex-col gap-2 py-5 pl-5'>
          <Badge className='w-fit'>Confirmado</Badge>
          <h3 className='font-semibold'>Corte de cabelo</h3>
          <div className="flex items-center">
            <Avatar className='h-6 w-6'>
              <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png"></AvatarImage>
            </Avatar>
            <p className='text-sm'>Barbearia James</p>
          </div>
        </div>
          {/*DIREITA*/}
        <div className='flex flex-col justify-center items-center px-5 border-l-2 border-solid'>
         <p>Agosto</p>
         <p>07</p>
         <p>2024</p>
        </div>

      </CardContent>
     </Card>

     <h2 className='text-xs font-bold uppercase text-gray-400 mt-6 mb-3'>Recomendados</h2>

    <div className='flex gap-4 overflow-auto  [&::-webkit-scrollbar]:hidden'>
    {barbershops.map((barbershop)=> (
      <BarbershopItem  key={barbershop.id} barbershop={barbershop}/>
    ))}
    </div>

    
     </div>
     </div>
  )
    
  
};

export default Home;