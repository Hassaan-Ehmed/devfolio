import { Button } from "@/components/ui/button"
import { Card,} from "@/components/ui/card"
import {  Tabs,  TabsContent,  TabsList,  TabsTrigger,} from "@/components/ui/tabs"
import Image from "next/image"



export function TabsForSkill() {    
  return (
    <Tabs defaultValue="account" className="w-[100%] mt-8 flex flex-col items-center justify-center">
      
      <TabsList className="grid justify-center w-[38%] grid-cols-2  bg-black">
        <TabsTrigger value="account">Technologies</TabsTrigger>
        <TabsTrigger value="password">Tools</TabsTrigger>
      </TabsList>
    


      <TabsContent value="account" className="w-[65%] mt-[30px]">
        <Card className="h-[32vw] bg-[#eeeeee]  flex justify-center gap-12 overflow-x-hidden overflow-y-auto shadow-[#28E98C_0px_6px_17px_0px,_#28E98C_0px_1px_1px_0px]">
         {/* <CardContent className=" h-[5vw] w-[5vw] bg-slate-600 ml-14 rounded-full flex justify-center items-center absolute">
<Image src={'/images/c++.png'} alt="c++" fill={true}   className="relative"/>
          </CardContent> */}
         
      <div className="h-[100%] w-[90%] flex flex-wrap justify-center gap-12 ">

      <div className="  h-[70px] w-[70px] bg-transparent rounded-full relative">
         <Image src={'/images/techsS/csh.png'} alt="c++" fill={true} />
          </div>
      <div className="  h-[70px] w-[70px] bg-transparent rounded-full relative">
         <Image src={'/images/techsS/java.png'}  alt="c++" fill={true} />
          </div>
      <div className="  h-[70px] w-[70px] bg-transparent rounded-full relative">
         <Image src={'/images/techsS/c.png'} alt="c" fill={true} />
          </div>
      <div className="  h-[70px] w-[70px] bg-transparent rounded-full relative">
         <Image src={'/images/techsS/php.png'} alt="c++" fill={true} />
          </div>
      <div className="  h-[70px] w-[70px] bg-transparent rounded-full relative">
         <Image src={'/images/techsS/django.png'} alt="c++" fill={true} />
          </div>
      <div className="  h-[70px] w-[70px] bg-transparent rounded-full relative">
         <Image src={'/images/techsS/cpp.png'} alt="c++" fill={true} />
          </div>
      <div className="  h-[70px] w-[70px] bg-transparent rounded-full relative">
         <Image src={'/images/techsS/python.png'} alt="c++" fill={true} />
          </div>
      <div className="  h-[70px] w-[70px] bg-transparent rounded-full relative">
         <Image src={'/images/techsS/gatsby.png'} alt="c++" fill={true} />
          </div>
      <div className="  h-[70px] w-[70px] bg-transparent rounded-full relative">
         <Image src={'/images/techsS/angular.png'} alt="c++" fill={true} />
          </div>
      <div className="  h-[70px] w-[70px] bg-transparent rounded-full relative">
         <Image src={'/images/techsS/react.png'} alt="c++" fill={true} />
          </div>
      <div className="  h-[70px] w-[70px] bg-transparent rounded-full relative">
         <Image src={'/images/techsS/node.png'} alt="c++" fill={true} />
          </div>
      <div className="  h-[70px] w-[70px] bg-transparent rounded-full relative">
         <Image src={'/images/techsS/next.png'} alt="c++" fill={true} />
          </div>
      <div className="  h-[70px] w-[70px] bg-transparent rounded-full relative">
         <Image src={'/images/techsS/laravel.png'} alt="c++" fill={true} />
          </div>
      <div className="  h-[70px] w-[70px] bg-transparent rounded-full relative">
         <Image src={'/images/techsS/swfit.png'} alt="c++" fill={true} />
          </div>
      <div className="  h-[70px] w-[70px] bg-transparent rounded-full relative">
         <Image src={'/images/techsS/js.jpg'} alt="c++" fill={true} />
          </div>
      <div className="  h-[70px] w-[70px] bg-transparent rounded-full relative">
         <Image src={'/images/techsS/ruby.png'} alt="c++" fill={true} />
          </div>


          
          </div>
    
        
        </Card>
      </TabsContent>
      <TabsContent value="password" className="w-[65%] mt-[30px]">
        <Card className="h-[32vw] bg-[#eeeeee] flex  justify-center gap-12 overflow-x-hidden overflow-y-auto  shadow-[#28E98C_0px_6px_17px_0px,_#28E98C_0px_1px_1px_0px]">
         {/* <CardContent className=" h-[5vw] w-[5vw] bg-slate-600 ml-14 rounded-full flex justify-center items-center absolute">
<Image src={'/images/c++.png'} alt="c++" fill={true}   className="relative"/>
          </CardContent> */}
         
      <div className="h-[100%] w-[90%] flex flex-wrap justify-center gap-12 ">

      <div className="  h-[70px] w-[70px] bg-slate-600 rounded-full relative ">
         <Image src={'/images/techsS/firebase.png'} alt="c++" fill={true} />
          </div>
      <div className="  h-[70px] w-[70px] bg-transparent rounded-full relative">
         <Image src={'/images/techsS/canva.png'} alt="c++" fill={true} />
          </div>
      <div className="  h-[70px] w-[70px] bg-transparent rounded-full relative">
         <Image src={'/images/techsS/figma.png'} alt="c++" fill={true} />
          </div>
      <div className="  h-[70px] w-[70px] bg-transparent rounded-full relative">
         <Image src={'/images/techsS/material.png'} alt="c++" fill={true} />
          </div>
      <div className="  h-[70px] w-[70px] overflow-clip bg-transparent rounded-full relative">
         <Image src={'/images/techsS/github.png'} alt="c++" fill={true} />
          </div>
      <div className="  h-[70px] w-[70px] bg-transparent  rounded-full relative">
         <Image src={'/images/techsS/cockroch.png'} alt="c++" fill={true} />
          </div>
      <div className="  h-[70px] w-[70px] bg-transparent rounded-full relative">
         <Image src={'/images/techsS/figma.png'} alt="c++" fill={true} />
          </div>
      <div className="  h-[70px] w-[70px] bg-transparent rounded-full relative">
         <Image src={'/images/techsS/font.png'} alt="c++" fill={true} />
          </div>
      <div className="  h-[70px] w-[70px] bg-transparent rounded-full relative">
         <Image src={'/images/techsS/ProtoPie.png'} alt="c++" fill={true} />
          </div>
      <div className="  h-[70px] w-[70px] bg-transparent overflow-clip rounded-full relative">
         <Image src={'/images/techsS/supabase.png'} alt="c++" fill={true} />
          </div>
      <div className="  h-[70px] w-[70px] bg-transparent rounded-full relative">
         <Image src={'/images/techsS/hera.png'} alt="c++" fill={true} />
          </div>
      <div className="  h-[70px] w-[70px] bg-transparent rounded-full relative">
         <Image src={'/images/techsS/in.png'} alt="c++" fill={true} />
          </div>
      <div className="  h-[70px] w-[70px] bg-transparent rounded-full relative">
         <Image src={'/images/techsS/postgres.png'} alt="c++" fill={true} />
          </div>
      <div className="  h-[70px] w-[70px] bg-transparent rounded-full relative">
         <Image src={'/images/techsS/ps.png'} alt="c++" fill={true} />
          </div>
      <div className="  h-[70px] w-[70px] bg-transparent rounded-full relative">
         <Image src={'/images/techsS/cs.png'} alt="c++" fill={true} />
          </div>
      <div className="  h-[70px] w-[70px] bg-transparent rounded-full relative">
         <Image src={'/images/techsS/bootstrap.png'} alt="c++" fill={true} />
          </div>


          
          </div>
    
        
        </Card>
      </TabsContent>
     


<a href="#_" className="px-5 py-2.5 mt-8 font-medium bg-black hover:bg-black/90 hover:text-[#28E98C] text-[#28E98C] rounded-lg text-sm">
See more
</a>

</Tabs>


)
}
