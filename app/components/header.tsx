import { Icon, MenuIcon } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import Image from 'next/image';
import { Button } from "./ui/button";


const Header = () => {
    return ( 
        <Card>
            <CardContent className="p-5 flex flex-row justify-between items-center">
                <Image src="/logo.png" alt="Fsw barber" width={120} height={18}></Image>
                <Button size="icon" variant="outline">
                    <MenuIcon></MenuIcon>
                </Button>
            </CardContent>
        </Card>
     );
}
 
export default Header;