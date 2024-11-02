import BarbershopItem from "../components/barbershop-item";
import Header from "../components/header";
import Search from "../components/search";
import { db } from "../lib/prisma";

interface BarberShopPageProps{
    searchParams:{
        search?:string;   //Essa "search" pode ser qualquer nome . inclusive o q 
    }
    
}

const BarberShopsPage = async ({searchParams}:BarberShopPageProps) => {
    const barbershops = await db.barbershop.findMany({
        where:{
            name:{
                contains:searchParams?.search,
                mode:"insensitive",
            },
        },
    })
    return ( 
       <div>
        <Header/> 
        <div className="px-5">
            <Search></Search></div>
        
        <div className="px-5">
        <h2 className='text-xs font-bold uppercase text-gray-400 mt-6 mb-3'>
            Resultados para &quot;{searchParams.search}&quot;</h2>
            <div className="grid grid-cols-2 gap-4">
            {barbershops.map((elem)=>(<BarbershopItem key={elem.id} barbershop={elem} />
              
            
            ))}

            </div>
        </div>
        </div>
     );
}
 
export default BarberShopsPage;