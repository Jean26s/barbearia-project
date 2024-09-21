import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

//TODO RECEBER AGENDAMENTO COMO PROP

const BookingItem = () => {
    return (
        <>
        <h2 className='text-xs font-bold uppercase text-gray-400 mt-6 mb-3'>Agendamentos</h2>
      
        {/*AGENDAMENTO*/}
  
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
       </>
      );
}
 
export default BookingItem;