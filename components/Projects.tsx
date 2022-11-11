import Link from 'next/link'
import React from 'react'

export default function Projects() {
  return (
    <>
        <section id='projects' className="bg-black overflow-x-hidden relative bg-[url('/background.png')] bg-center bg-cover text-white py-20">
        <span className='text-9xl  left-2 top-1  font-extrabold absolute text-gray-900'>Projects</span>
        <div>
          <h2 className="mx-12 z-30 relative text-6xl font-extrabold">Projects</h2>

            <div className="z-20 text-sm md:text-base relative container grid grid-cols-3 mt-10 mx-auto px-3 text-black gap-x-8 gap-y-3">
                <div className="card bg-lime-400 hover:bg-green-500 text-center py-3 cursor-pointer"><Link className='cursor-pointer' href={'/'}>This Website</Link></div>
                <div className="card bg-lime-400 hover:bg-green-500 text-center py-3 cursor-pointer"><Link className='cursor-pointer' href={'https://zainkhanbaloch.github.io/eventually/'}>Eventually</Link></div>
                <div className="card bg-lime-400 hover:bg-green-500 text-center py-3 cursor-pointer"><Link className='cursor-pointer' href={'https://jarvisaiweb.netlify.com'}>JARVIS</Link></div>
                <div className="card bg-lime-400 hover:bg-green-500 text-center py-3 cursor-pointer"><Link className='cursor-pointer' href={'https://zainkhanbaloch.github.io/decafe_pr/'}>DeCafe</Link></div>
                <div className="card bg-lime-400 hover:bg-green-500 text-center py-3 cursor-pointer"><Link className='cursor-pointer' href={'https://zainkhanbaloch.github.io/doc.tor/'}>Doc.tor</Link></div>
                <div className="card bg-lime-400 hover:bg-green-500 text-center py-3 cursor-pointer"><Link className='cursor-pointer' href={'https://zainkhanbaloch.github.io/codexar_pr/'}>Codexar</Link></div>
            </div>
          </div>
        </section>
    </>
  )
}
