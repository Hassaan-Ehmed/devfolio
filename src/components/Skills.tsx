import React from 'react'
import { TabsForSkill } from './TabsForSkill'
// import  from './TabsForSkill'

export default function Skills() {
  return (
    <>




<div className='  flex justify-start items-center  '>

<div className='w-[25%] h-[5vw] flex justify-center items-center bg-[#28E98C]  rounded-r-full'>
<h1  className='text-[37px] text-[black] font-semibold'><u>Skills & Expertise</u></h1>    
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
