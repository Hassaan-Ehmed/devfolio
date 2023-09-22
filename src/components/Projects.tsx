import React from 'react'
import Gallery from './Gallery'

export default function Projects() {
  return (
   <>


<div className='  flex justify-start items-center'>

<div className='w-[25%] h-[5vw] flex justify-center items-center'>
<h1  className='text-[37px] '><u>My Projects</u></h1>    
</div>

</div>

   
<div className='h-[40vw] w-[100%]  flex flex-col justify-center '>
  <Gallery/>
   </div>
   </>
  )
}
