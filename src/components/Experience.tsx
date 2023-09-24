import React from 'react'

export default function Experience() {
  return (
    <>
    
    {/* <!-- component --> */}

    <div className='  flex justify-start items-center bg-[#28E98C]'>

<div className='w-[25%] h-[5vw] flex justify-center items-center '>
<h1  className='text-[37px]  text-black font-semibold'><u>Experience</u></h1>    
</div>

</div>


<div className="container bg-white mx-auto w-full h-[58vw]">
  <div className="relative wrap overflow-hidden p-10 h-full">
    <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border" style={{"left": "50%"}}></div>
    {/* <!-- right timeline --> */}
    <div className="mb-8 flex justify-between items-center w-full right-timeline">
      <div className="order-1 w-5/12"></div>
      <div className="z-20 flex items-center order-1 bg-shadow-xl bg-[#37474F] w-8 h-8 rounded-full">
        <h1 className="mx-auto font-semibold text-lg  text-white">1</h1>
      </div>
      <div className="order-1 bg-[#28E98C] rounded-lg shadow-xl w-5/12 px-6 py-4">
        <h3 className="mb-3 font-bold text-black text-xl">Frontend Development <span className='ml-2 font-semibold'>[ 2 years ]</span></h3>
        <p className="text-sm leading-snug tracking-wide text-black text-opacity-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </div>
    </div>

    {/* <!-- left timeline --> */}
    <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
      <div className="order-1 w-5/12"></div>
      <div className="z-20 flex items-center order-1 bg-[#37474F] shadow-xl w-8 h-8 rounded-full">
        <h1 className="mx-auto text-white font-semibold text-lg">2</h1>
      </div>
      <div className="order-1 bg-black rounded-lg shadow-xl w-5/12 px-6 py-4">
      <h3 className="mb-3 font-bold text-white text-xl">Backend Development <span className='ml-2 font-semibold'>[ 1 years ]</span></h3>
        <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </div>
    </div>
    
    {/* <!-- right timeline --> */}
    <div className="mb-8 flex justify-between items-center w-full right-timeline">
      <div className="order-1 w-5/12"></div>
      <div className="z-20 flex items-center order-1 bg-[#37474F] shadow-xl w-8 h-8 rounded-full">
        <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
      </div>
      <div className="order-1 bg-[#28E98C] rounded-lg shadow-xl w-5/12 px-6 py-4">
      <h3 className="mb-3 font-bold text-black text-xl">API Development <span className='ml-2 font-semibold'>[ 1.5 years ]</span></h3>
        <p className="text-sm leading-snug tracking-wide text-black text-opacity-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </div>
    </div>

    {/* <!-- left timeline --> */}
    <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
      <div className="order-1 w-5/12"></div>
      <div className="z-20 flex items-center order-1 bg-[#37474F] shadow-xl w-8 h-8 rounded-full">
        <h1 className="mx-auto text-white font-semibold text-lg">4</h1>
      </div>
      <div className="order-1 bg-black rounded-lg shadow-xl w-5/12 px-6 py-4">
      <h3 className="mb-3 font-bold text-white text-xl">Web Designing <span className='ml-2 font-semibold'>[ 1 years ]</span></h3>
        <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </div>
    </div>
  </div>
</div>
    
    
    </>
  )
}
