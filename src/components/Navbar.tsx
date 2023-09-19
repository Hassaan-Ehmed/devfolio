"use client"
import React from 'react'
import  AvatarComponent  from '../components/Avatar'
import MenubarComponent from '../components/MenuBar'
import  {Moon} from 'lucide-react';

export default function Navbar() {
  return (
    <div className='h-[4vw] w-[100%] flex justify-between items-center  backdrop-blur-lg
               [ bg-gradient-to-b from-green-600 to-emerald-400 ]
               [ shadow-black/70 shadow-2xl ]'>


<div className='w-[10%] h-[100%] abosulte  overflow-hidden flex justify-center items-center'>

<AvatarComponent/>

</div>


<div className='w-[80%] h-[100%] flex justify-center items-center' >
<MenubarComponent />

</div>

<div className='w-[10%] h-[100%] flex justify-center items-center' >

<Moon/>

</div>



    </div>





)
}