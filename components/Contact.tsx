import React from 'react'
import Image from 'next/image';

export default function Contact() {
  return (
    <>
        <section id='contact' className='py-10 md:py-24 relative'>
        <span className='text-9xl -z-10 -left-48 top-56 rotate-90 font-extrabold absolute text-slate-200'>Contact</span>

            <div className="container  lg:ml-12 flex justify-evenly align-middle content-center flex-col md:flex-row mt-12">
                <div className="left ">
                    <h2 className="mx-12 text-6xl font-extrabold">Contact</h2>
                    <form className='mx-12 mt-4' action="https://formspree.io/f/myyvlvqb" method='POST'>
                        <input className='border outline-2 outline-green-500 border-lime-400 my-2 w-72 py-2 px-4 inline-block placeholder:text-lime-500' placeholder='Your Name' type="text" name="Name" id="name" />
                        <br />
                        <input className='border outline-2 outline-green-500 border-lime-400 my-2 w-72 py-2 px-4 inline-block placeholder:text-lime-500' placeholder='Your Email' type="email" name="Email" id="email" />
                        <br />
                        <textarea className='border outline-2 outline-green-500 border-lime-400 my-2 w-72 h-20 py-2 px-4 inline-block placeholder:text-lime-500' placeholder='Your Message' name="Message" id="message" ></textarea>
                        <br />
                        <button type='submit' className='py-2 hover:bg-green-500 px-4 text-black bg-lime-400 '>Send</button>
                    </form>
                </div>
                <div className="right my-auto mt-8">
                <div data-tilt data-tilt-max="20" data-tilt-speed="50" data-tilt-perspective="500" data-tilt-glare data-tilt-max-glare="1" data-tilt-scale="1.05" className="card relative w-fit mx-auto">
                <div className="imagebox">
                    <Image className=' my-auto z-[46] relative'  src={'/meta.jpg'} width={270} height={100} priority  alt='sidebar'/>
                </div>
                  <div   className="contentbox z-[1] absolute -left-4 -top-4 h-40 w-40  bg-gray-300"></div>
                  <div   className="contentbox z-[1] absolute -right-4 -bottom-4 h-40 w-40  bg-gray-300"></div>   
              </div>
                 </div>
            </div>
        </section>
    </>
  )
}
