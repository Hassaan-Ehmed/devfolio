import React from 'react'
import Gallery from './Gallery'

export default function Projects() {
  return (
   <>


<div className=' flex justify-start items-start  mt-5    h-[7vw]'>

<div className='w-[25%] h-[5vw] flex justify-center items-center bg-[white] shadow-lg  rounded-r-lg'>
<h1  className='text-[37px] text-[#28E98C] font-semibold mr-[58px]'>Our Projects</h1>    
</div>

</div>

<div className='h-[40vw] w-[100%]  flex flex-col justify-center '>
  <Gallery/>
   </div>
   </>
  )
}
