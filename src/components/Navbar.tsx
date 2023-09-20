"use client"
import React from 'react'
import  AvatarComponent  from '../components/Avatar'
import TabsComponent from './Tabs'
import  {Moon} from 'lucide-react';

export default function Navbar() {
  return (
    <div className='h-[4vw]  w-[100%] flex justify-between items-center  backdrop-blur-lg 
               [ shadow-black/70 shadow-2xl ]'>


<div className='w-[10%] h-[100%] abosulte  overflow-hidden flex justify-center items-center'>

<AvatarComponent/>

</div>


<div className='w-[80%] h-[100%] flex justify-center items-center' >
<TabsComponent />

</div>

<div className='w-[10%] h-[100%] flex justify-center items-center' >

<Moon color='white'/>

</div>



    </div>





)
}
