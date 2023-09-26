import React from 'react'
import { TabsForSkill } from './TabsForSkill'
// import  from './TabsForSkill'

export default function Skills() {
  return (
    <>




<div className=' flex justify-start items-start  mt-5    h-[7vw]'>

<div className='w-[25%] h-[5vw] flex justify-center items-center bg-[white] shadow-lg  rounded-r-lg'>
<h1  className='text-[37px] text-[#28E98C] font-semibold ml-5'>Skills & Expertise</h1>    
</div>

</div>



<div className='w-[100%] h-[48.5vw]  flex flex-col justify-start items-center'>


<div className='h-[50vw] w-[97%] bg-white'>

<TabsForSkill/>


</div>


</div>

    </>
  )
}
