import Link from 'next/link';
import { usePathname } from 'next/navigation';


import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabss"
import { useEffect } from 'react';

export default function TabsDemo() {

  const pathName = usePathname()

const activeApply = "bg-[#28E98C]  text-white/50  text-foreground shadow" 

  
  return (
    <Tabs defaultValue="account" className="w-[400px] ">
      <TabsList className="grid w-full grid-cols-4">
       <Link href={`/`}><TabsTrigger value="Home" className={pathName == "/" ? activeApply:""} >Home</TabsTrigger></Link>
       <Link href={`/about`}><TabsTrigger value="About"  className={pathName == "/about" ? activeApply:""}>About</TabsTrigger></Link>
       <Link href={`/resume`}><TabsTrigger value="Resume"
        className={pathName == "/resume" ? activeApply:""}>Resume</TabsTrigger></Link>
       <Link href={`/contact`}><TabsTrigger value="Contact" 
        className={pathName == "/contact" ? activeApply:""}>Contact</TabsTrigger></Link>
       
      </TabsList>
    </Tabs>
  )
}
