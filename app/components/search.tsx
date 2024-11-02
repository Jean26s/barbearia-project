"use client"
import { SearchIcon } from "lucide-react";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Search = () => {

    const router = useRouter()
    const [search,setSearch] = useState("")
    const handleSubmit = (e:any)=>{
        e.preventDefault()
        router.push(`/barbershops?search=${search}`)
        
    }
    return ( 
        <form onSubmit={handleSubmit} className="flex items-center gap-2 mt-6">
        <Input placeholder='Faça sua busca...' value={search} onChange={(e)=>setSearch(e.target.value)}></Input>
        <Button type="submit">
          <SearchIcon />
        </Button>
      </form>
      
     );
}
 
export default Search;