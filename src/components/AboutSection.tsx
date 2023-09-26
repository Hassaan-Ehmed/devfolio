import React from 'react'
import About_img  from '../../public/images/about1.png' 
import Image from 'next/image'

export default function AboutSection() {
  return (
    <>
        <div className='container  h-[40vw] w-[100%] mt-5  flex justify-between items-center'>



<div className=' w-[45%] h-[40vw]'>



<Image src={About_img} className='h-[100%] w-[92%]' alt='About Image'></Image>



</div>


<div className='w-[55%] h-[38vw] flex flex-col gap-8  justify-center items-center'>


<div className='w-[40%] h-[4vw] bg-[white] text-center shadow-lg  rounded-lg -mt-2'>
<h1  className='text-[32px] text-[#28E98C] font-semibold '>About me</h1>    
</div>

<div className='w-[80%]  h-[27vw]'>

<p className='text-xl  text-justify'>

Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis laborum voluptate molestiae eum vitae nisi sit dolorum sed vero, iusto animi id? Voluptate velit voluptas et quod eveniet, earum commodi corrupti reprehenderit unde dolorem est dolor itaque eligendi eius optio tenetur eaque suscipit nam labore quam aperiam. Atque obcaecati consequuntur reprehenderit modi quam saepe cupiditate perspiciatis quisquam rem. Neque quae aperiam labore laboriosam officiis assumenda quos impedit magnam vitae eum. Accusantium qui rem ea, dolorum eveniet dignissimos repudiandae. Incidunt cupiditate quibusdam officia perferendis repellat fugiat obcaecati quaerat officiis. Earum doloribus tenetur ipsum necessitatibus odit nisi amet vitae sequi, at ut!

</p>
</div>  
</div>




  </div>
    </>
  )
}
