"use client";
import { SearchIcon } from 'lucide-react';
import Header from './components/header'
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import Image from 'next/image';
import { Card, CardContent } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { Avatar, AvatarImage } from './components/ui/avatar';


const Home = () =>{ 
 
  return <div>
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
     
     <Card className='mt-6'>
      <CardContent className='flex justify-between'>
         {/*ESQUERDA*/}
        <div className='flex flex-col gap-2 py-5'>
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
        <div className='flex flex-col justify-center items-center'>
         <p>Agosto</p>
         <p>07</p>
         <p>2024</p>
        </div>

      </CardContent>
     </Card>
     </div>
     </div>
    
    
  
};

export default Home;