import Image from 'next/image'
import React from 'react'
import Hero_img from '../../public/images/hero.svg'

export default function Hero() {
  return (
    <div className='h-[41vw] w-[100%]  bg-white flex  justify-between items-center'>


<div className='h-[37vw]  w-[55%]   flex flex-col justify-center  items-center pl-9'>    
    


    <div className='wrapper 1 h-[5vw] w-[51.5vw]    flex flex-col justify-center items-center '>


    <div className='h-[50%] w-[100%] flex justify-start  items-center'><h2 className='font-normal text-[2.7vw] '>Hi There   !</h2></div>

    </div>

<div className='wrapper 1 h-[30%] w-[100%]    flex flex-col justify-between items-center '>

<div className='h-[50%] w-[100%]   flex justify-start items-center'><h1 className='font-semibold text-[3.6vw] '>I'm Hassan Ahmed Khan</h1></div>


<div className='h-[40%] w-[100%] flex justify-start  items-center 
'>
<h2 className='font-medium text-[2.1vw] '>JAM Stack Developer</h2>

</div>

</div>


<div className='wrapper 2 h-[30%] w-[100%]  flex justify-center items-center  '>
    

<div className='h-[60%] w-[100%] flex justify-start items-center  '><p className='text-[1.4vw]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis officiis neque aspernatur sunt cupiditate, praesentium veritatis asperiores reiciendis rem recusandae? officiis neque aspernatur sunt cupiditate !</p></div>

</div>

</div> 

<div className='h-[37vw] w-[45%]  '>   

<Image  src={Hero_img} className='h-[100%] w-[90%]' alt='Hero Image'></Image>

</div>


    </div>
  )
}
