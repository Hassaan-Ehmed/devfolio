import Image from 'next/image'
import React from 'react'
import Education_img  from '../../public/images/edu2.png'
import { AccordionDemo } from './Accordion'

export default function Education() {
  return (
    <>



<div className=' flex justify-center items-start  mt-12  h-[5vw]'>
    
    
        
<div className='w-[20%] h-[4vw] bg-[white] text-center shadow-lg  rounded-lg mt-4'>
<h1  className='text-[32px] text-[#28E98C] font-semibold '>My Education</h1>    
</div>

</div>

<div className='container  h-[40vw] w-[100%]  flex justify-between items-center -mt-5'>            

<div className=' w-[50%] h-[40vw] flex justify-center items-center '>

<AccordionDemo/>

</div>

            
<div className='  w-[46%] h-[35vw] flex flex-col gap-8  justify-center items-center'>


<Image src={Education_img} className='h-[100%] w-[80%]' alt='About Image'></Image>

</div>

                </div> 
    </>
  )
}
