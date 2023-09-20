import Image from 'next/image'
import React from 'react'
import Hero_img from '../../public/images/hero.png'

export default function Hero() {
  return (
    <div className='h-[91vh] w-[100%]  bg-white flex  justify-between items-center'>


<div className='h-[85vh] w-[55%]  flex flex-col justify-evenly  items-center pl-9'>    
    

<div className='wrapper 1 h-[30%] w-[100%]  justify-between items-center '>


<div className='h-[50%] w-[100%]  flex justify-start items-center'><h2 className='font-normal text-4xl '>Hi There !</h2></div>


<div className='h-[50%] w-[100%]  flex justify-start items-center'><h1 className='font-semibold text-5xl '>I'm Hassan Ahmed Khan</h1></div>


</div>


<div className='wrapper 2 h-[45%] w-[100%]  '>
    

<div className='h-[40%] w-[100%] flex justify-start items-center 
'>
<h2 className='font-medium text-3xl'>JAM Stack Developer</h2>

</div>
<div className='h-[60%] w-[100%] flex justify-start items-center '><p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis officiis neque aspernatur sunt cupiditate, praesentium veritatis asperiores reiciendis rem recusandae? officiis neque aspernatur sunt cupiditate !</p></div>

</div>



</div> 

<div className='h-[85vh] w-[45%] '>   

<Image  src={Hero_img} className='h-[100%] w-[90%]' alt='Hero Image'></Image>
</div>


    </div>
  )
}
