import React from 'react'

export default function Experiences() {
  return (
    <>
    <section id='experiences' className="my-4 overflow-x-hidden py-8 relative bg-black bg-[url('/background.png')] bg-center  ">
    <span className='md:text-9xl text-8xl left-10 top-7  font-extrabold absolute text-gray-900'>Experience</span>


<div className="container z-10 relative mx-auto w-full h-full bg-transparent">
<h2 className="mx-12 text-6xl  text-white font-extrabold">Experience</h2>

  <div className="relative wrap overflow-hidden p-10 h-full">
    <div className="border-2-2 absolute border-opacity-20 border-gray-400 h-full border" style={{left: '50%'}}></div>

    <div className="mb-8 flex justify-between items-center w-full right-timeline">
      <div className="order-1 w-5/12"></div>
      <div className="z-20 flex items-center order-1 bg-gray-400 w-8 h-8 rounded-full">
        <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
      </div>
      <div className="order-1 z-10 border-lime-400 hover:bg-green-500 bg-lime-400 w-5/12 px-6 py-4">
        <h3 className="mb-1 text-base font-bold md:text-xl">Freelance Developer</h3>
        <p className="text-sm leading-snug tracking-wide text-opacity-100">@Fiverr.com    (Aug 2022-Present)</p>
        <p className="text-sm leading-snug tracking-wide text-opacity-100">Tech-Stack:   HTML, Tailwind CSS, Wordpress, Bootstrap, React</p>
      </div>
    </div>


    <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
      <div className="order-1 w-5/12"></div>
      <div className="z-20 flex items-center order-1 bg-gray-400  w-8 h-8 rounded-full">
        <h1 className="mx-auto text-white font-semibold text-lg">2</h1>
      </div>
      <div className="order-1  z-10 border border-lime-400 hover:bg-green-500 bg-lime-400 w-5/12 px-6 py-4">
        <h3 className="mb-1 text-base font-bold md:text-xl">Cofounder</h3>
        <p className="text-sm  leading-snug tracking-wide  text-opacity-100">@Codexar  (Oct 2022-Present)</p>
        <p className="text-sm  leading-snug tracking-wide  text-opacity-100">Tech-Stack:   React.JS, Next.JS, Express.JS, MongoDB, PostgreSQL</p>
      </div>
    </div>
   </div>
</div>
</section>
    </>
  )
}
