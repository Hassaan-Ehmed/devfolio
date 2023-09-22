import React from 'react'

export default function Gallery() {
  return (
    <>
      
   <div className="container flex justify-center items-center mx-auto px-4 lg:px-32 lg:pt-5">
  <div className="-m-1 flex justify-center flex-wrap md:-m-2">
    
    
    <div className="flex w-[45%] flex-wrap ">
      <div className="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          className="block w-full rounded-lg object-cover object-center shadow-xl"
          src="/images/project-dm.png" />
      </div>
      <div className="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          className="block  w-full rounded-lg object-cover object-center shadow-xl"
          src="/images/project-ss.png"  />
      </div>
      <div className="w-full p-1 md:p-2">
        <img
          alt="gallery"
          className="block  w-full rounded-lg object-cover object-center shadow-xl"
          src="/images/project-nuxt.png"  />
      </div>
    </div>



    <div className="flex w-[45%] flex-wrap  ">
      <div className="w-full p-1 md:p-2">
        <img
          alt="gallery"
          className="block  w-full rounded-lg object-cover object-center shadow-xl"
          src="/images/project-angular.png"  />
      </div>
      <div className="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          className="block  w-full rounded-lg object-cover object-center shadow-xl"
          src="/images/project-ms.png"  />
      </div>
      <div className="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          className="block  w-full rounded-lg object-cover object-center shadow-xl"
          src="/images/project-ts.png"  />
      </div>
    </div>
  </div>
</div>

   
    </>
  )
}
