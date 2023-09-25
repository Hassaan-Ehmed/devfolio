import {  GithubIcon, Instagram, Linkedin, Twitter } from 'lucide-react'
import React from 'react'

export default function Footer() {
  return (
    <>
     

<footer  className="relative bg-blueGray-200 pt-8 pb-6 mt-10 border-t-2 border-t-gray-200">
  <div  className="container mx-auto px-4 mt-16 ">
    <div  className="flex flex-wrap text-left lg:text-left">
      <div  className="w-full lg:w-6/12 px-4">
        <h4  className="text-3xl fonat-semibold text-[#28E98C]">Let's keep in touch!</h4>
        <h5  className="text-lg mt-0 mb-2 text-blueGray-600">
          Find me on any of these platforms, and collaborate with me    .
        </h5>
      
        <div  className="mt-6 lg:mb-0 mb-6 flex gap-6 justify-start items-center">
          <button className='h-10 w-10 rounded-full bg-white shadow-lg flex justify-center items-center'><span><Instagram  className='text-[#28E98C]'/></span>
          </button>
          <button className='h-10 w-10 rounded-full bg-white shadow-lg flex justify-center items-center'><span><Twitter  className='text-[#28E98C]'/></span>
          </button>
          <button className='h-10 w-10 rounded-full bg-white shadow-lg flex justify-center items-center'><span><Linkedin className='text-[#28E98C]'/></span>
          </button>
          <button className='h-10 w-10 rounded-full bg-white shadow-lg flex justify-center items-center'><span><GithubIcon className='text-[#28E98C]'/></span>
          </button>
        </div>
      </div> 
      <div  className="w-full lg:w-6/12 px-4">
        <div  className="flex flex-wrap items-top mb-6">
          <div  className="w-full lg:w-4/12 px-4 ml-auto">
            <span  className="block uppercase text-blueGray-500 text-sm font-semibold mb-2 text-[#28E98C]">Useful Links</span>
            <ul  className="list-unstyled">
              <li>
                <a  className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://www.creative-tim.com/presentation?ref=njs-profile">Home</a>
              </li>
              <li>
                <a  className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://blog.creative-tim.com?ref=njs-profile">About</a>
              </li>
              <li>
                <a  className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://www.github.com/creativetimofficial?ref=njs-profile">Resume</a>
              </li>
              <li>
                <a  className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile">Contact Us</a>
              </li>
            </ul>
          </div>
          <div  className="w-full lg:w-4/12 px-4">
            <span  className="block uppercase text-blueGray-500 text-sm font-semibold mb-2 text-[#28E98C]">Other Resources</span>
            <ul  className="list-unstyled">
              <li>
                <a  className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile">MIT License</a>
              </li>
              <li>
                <a  className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://creative-tim.com/terms?ref=njs-profile">Terms &amp; Conditions</a>
              </li>
              <li>
                <a  className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://creative-tim.com/privacy?ref=njs-profile">Privacy Policy</a>
              </li>
              <li>
                <a  className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://creative-tim.com/contact-us?ref=njs-profile">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <hr  className="my-6 border-blueGray-300" />
    <div  className="flex flex-wrap items-center md:justify-between justify-center">
      <div  className="w-full md:w-4/12 px-4 mx-auto text-center">
        <div  className="text-sm text-blueGray-500 font-semibold py-1">
          Copyright © <span id="get-current-year">2023</span>
        </div>
      </div>
    </div>
  </div>
</footer>
    </>
  )
}
