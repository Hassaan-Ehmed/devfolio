import React from 'react'
import Resume_Img  from '../../../public/images/resume.png' 
import Cv_Img  from '../../../public/images/Resume/CV-image.png' 
import Cv_Img2  from '../../../public/images/cv-image2.png' 
import Image from 'next/image'

export default function page() {
  return (  
  
  <>
  
<div className='w-[100%] h-[43vw]  mt-5 flex justify-around items-center'>


<div className='h-[40vw] w-[40%]  flex flex-col items-center justify-start gap-14 '>


<div className='w-[60%] h-[5vw] flex justify-center items-center bg-[white] shadow-lg  rounded-lg'>
<h1  className='text-[37px] text-[#28E98C] font-semibold '>Resume / CV</h1>    
</div>


<div className='w-[90%] h-[30vw] '>




<Image src={Resume_Img} className='h-[100%] w-[90%]' alt='About Image'></Image>



</div>



</div>


<div  className='w-[55vw] h-[40vw] flex flex-col justify-around    items-center'>


<div className='w-[60%] h-[31vw] border-[3px] border-[#37474F] rounded-lg flex justify-center items-center'>

<Image src={Cv_Img2} className='h-[100%] w-[70%]  shadow-lg blur-md ' alt='CV Image' ></Image>


</div>


<div  className='w-[100%] h-[3.5vw] flex justify-center items-center  -mt-8'>   
<a href="/images/Resume/CV.pdf" download={'CV'} className="px-5 p-2.5 font-medium bg-black hover:bg-black/90 hover:text-[#28E98C] text-[#28E98C] rounded-lg text-sm">
Download CV
</a>



</div>


</div>
</div>


    
  </>
    )
}
