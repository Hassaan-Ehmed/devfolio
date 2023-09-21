import { Button } from "@/components/ui/button"
import { Card,  CardContent,  CardDescription,  CardFooter,  CardHeader,  CardTitle,} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {  Tabs,  TabsContent,  TabsList,  TabsTrigger,} from "@/components/ui/tabs"
import Image from "next/image"



export function TabsForSkill() {
  return (
    <Tabs defaultValue="account" className="w-[100%] mt-8 flex flex-col items-center justify-center">
      
      <TabsList className="grid justify-center w-[38%] grid-cols-2  bg-black">
        <TabsTrigger value="account">Technologies</TabsTrigger>
        <TabsTrigger value="password">Tools</TabsTrigger>
      </TabsList>
    


      <TabsContent value="account" className="w-[60%] mt-[30px]">
        <Card className="h-[32vw] bg-[#37474F]  flex justify-center gap-12 overflow-x-hidden overflow-y-auto shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px]">
         {/* <CardContent className=" h-[5vw] w-[5vw] bg-slate-600 ml-14 rounded-full flex justify-center items-center absolute">
<Image src={'/images/c++.png'} alt="c++" fill={true}   className="relative"/>
          </CardContent> */}
         
      <div className="h-[100%] w-[90%] flex flex-wrap justify-center gap-12 ">

      <div className="  h-[70px] w-[70px] bg-slate-600 rounded-full relative">
         <Image src={'/images/c++.png'} alt="c++" fill={true} />
          </div>
      <div className="  h-[70px] w-[70px] bg-slate-600 rounded-full relative">
         <Image src={'/images/c++.png'} alt="c++" fill={true} />
          </div>
      <div className="  h-[70px] w-[70px] bg-slate-600 rounded-full relative">
         <Image src={'/images/c++.png'} alt="c++" fill={true} />
          </div>
      <div className="  h-[70px] w-[70px] bg-slate-600 rounded-full relative">
         <Image src={'/images/c++.png'} alt="c++" fill={true} />
          </div>
      <div className="  h-[70px] w-[70px] bg-slate-600 rounded-full relative">
         <Image src={'/images/c++.png'} alt="c++" fill={true} />
          </div>
      <div className="  h-[70px] w-[70px] bg-slate-600 rounded-full relative">
         <Image src={'/images/c++.png'} alt="c++" fill={true} />
          </div>
      <div className="  h-[70px] w-[70px] bg-slate-600 rounded-full relative">
         <Image src={'/images/c++.png'} alt="c++" fill={true} />
          </div>
      <div className="  h-[70px] w-[70px] bg-slate-600 rounded-full relative">
         <Image src={'/images/c++.png'} alt="c++" fill={true} />
          </div>
      <div className="  h-[70px] w-[70px] bg-slate-600 rounded-full relative">
         <Image src={'/images/c++.png'} alt="c++" fill={true} />
          </div>
      <div className="  h-[70px] w-[70px] bg-slate-600 rounded-full relative">
         <Image src={'/images/c++.png'} alt="c++" fill={true} />
          </div>
      <div className="  h-[70px] w-[70px] bg-slate-600 rounded-full relative">
         <Image src={'/images/c++.png'} alt="c++" fill={true} />
          </div>
      <div className="  h-[70px] w-[70px] bg-slate-600 rounded-full relative">
         <Image src={'/images/c++.png'} alt="c++" fill={true} />
          </div>
      <div className="  h-[70px] w-[70px] bg-slate-600 rounded-full relative">
         <Image src={'/images/c++.png'} alt="c++" fill={true} />
          </div>
      <div className="  h-[70px] w-[70px] bg-slate-600 rounded-full relative">
         <Image src={'/images/c++.png'} alt="c++" fill={true} />
          </div>
      <div className="  h-[70px] w-[70px] bg-slate-600 rounded-full relative">
         <Image src={'/images/c++.png'} alt="c++" fill={true} />
          </div>
      <div className="  h-[70px] w-[70px] bg-slate-600 rounded-full relative">
         <Image src={'/images/c++.png'} alt="c++" fill={true} />
          </div>


          
          </div>
    
        
        </Card>
      </TabsContent>
      <TabsContent value="password" className="w-[60%] mt-[30px]">
        <Card className="h-[32vw] bg-[#37474F] flex  justify-center gap-12 overflow-x-hidden overflow-y-auto shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px]">
         {/* <CardContent className=" h-[5vw] w-[5vw] bg-slate-600 ml-14 rounded-full flex justify-center items-center absolute">
<Image src={'/images/c++.png'} alt="c++" fill={true}   className="relative"/>
          </CardContent> */}
         
      <div className="h-[100%] w-[90%] flex flex-wrap justify-center gap-12 ">

      <div className="  h-[70px] w-[70px] bg-slate-600 rounded-full relative">
         <Image src={'/images/c++.png'} alt="c++" fill={true} />
          </div>
      <div className="  h-[70px] w-[70px] bg-slate-600 rounded-full relative">
         <Image src={'/images/c++.png'} alt="c++" fill={true} />
          </div>
      <div className="  h-[70px] w-[70px] bg-slate-600 rounded-full relative">
         <Image src={'/images/c++.png'} alt="c++" fill={true} />
          </div>
      <div className="  h-[70px] w-[70px] bg-slate-600 rounded-full relative">
         <Image src={'/images/c++.png'} alt="c++" fill={true} />
          </div>
      <div className="  h-[70px] w-[70px] bg-slate-600 rounded-full relative">
         <Image src={'/images/c++.png'} alt="c++" fill={true} />
          </div>
      <div className="  h-[70px] w-[70px] bg-slate-600 rounded-full relative">
         <Image src={'/images/c++.png'} alt="c++" fill={true} />
          </div>
      <div className="  h-[70px] w-[70px] bg-slate-600 rounded-full relative">
         <Image src={'/images/c++.png'} alt="c++" fill={true} />
          </div>
      <div className="  h-[70px] w-[70px] bg-slate-600 rounded-full relative">
         <Image src={'/images/c++.png'} alt="c++" fill={true} />
          </div>
      <div className="  h-[70px] w-[70px] bg-slate-600 rounded-full relative">
         <Image src={'/images/c++.png'} alt="c++" fill={true} />
          </div>
      <div className="  h-[70px] w-[70px] bg-slate-600 rounded-full relative">
         <Image src={'/images/c++.png'} alt="c++" fill={true} />
          </div>
      <div className="  h-[70px] w-[70px] bg-slate-600 rounded-full relative">
         <Image src={'/images/c++.png'} alt="c++" fill={true} />
          </div>
      <div className="  h-[70px] w-[70px] bg-slate-600 rounded-full relative">
         <Image src={'/images/c++.png'} alt="c++" fill={true} />
          </div>
      <div className="  h-[70px] w-[70px] bg-slate-600 rounded-full relative">
         <Image src={'/images/c++.png'} alt="c++" fill={true} />
          </div>
      <div className="  h-[70px] w-[70px] bg-slate-600 rounded-full relative">
         <Image src={'/images/c++.png'} alt="c++" fill={true} />
          </div>
      <div className="  h-[70px] w-[70px] bg-slate-600 rounded-full relative">
         <Image src={'/images/c++.png'} alt="c++" fill={true} />
          </div>
      <div className="  h-[70px] w-[70px] bg-slate-600 rounded-full relative">
         <Image src={'/images/c++.png'} alt="c++" fill={true} />
          </div>


          
          </div>
    
        
        </Card>
      </TabsContent>
     
    </Tabs>
  )
}
