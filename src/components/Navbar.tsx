"use client"
import React from 'react'
import  AvatarComponent  from '../components/Avatar'
import TabsComponent from './Tabs'
import  {Menu, Moon} from 'lucide-react';

export default function Navbar() {
  return (
    <div className='h-[4vw]  bg-black  w-[100%] flex justify-between items-center  backdrop-blur-lg 
               [ shadow-black/70 shadow-2xl ]'>


<div className='w-[10%] h-[100%] abosulte overflow-hidden flex justify-center items-center'>

<AvatarComponent/>

</div>


<div className='w-[80%] h-[100%] hidden md:flex justify-center items-center ' >
<TabsComponent />

</div>

<div className='w-[13%] h-[100%] flex justify-around items-center' >

<div className=''>
<Moon color='white' className='cursor-pointer text-[10vh] '/>
</div>

<div className=' block md:hidden'>

<Menu color='white ' className='cursor-pointer'/>

</div>

</div>



    </div>





)
}
