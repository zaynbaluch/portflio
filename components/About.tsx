
import Link from 'next/link'
import React from 'react'

export default function About() {
  return (
    <>
        <article id='about'>
            <div className="container relative flex flex-col md:flex-row justify-between">
                <span className='text-9xl -z-10 -left-36 top-44 rotate-90 font-extrabold absolute text-slate-200'>About</span>
                
                <div className="left mx-auto flex h-80">
                    <div className='h-36 relative border-black border-r-2 mx-4 px-6 py-4'>
                        <div className="absolute -right-5 rotate-45 -bottom-4 h-10 w-10 rounded-lg bg-lime-500"></div>
                    </div>
                    <div className='h-56 relative border-black border-r-2 mx-4 px-6 py-4'>
                        <div className="absolute -right-5 rotate-45 -bottom-4 h-10 w-10 rounded-lg bg-lime-500"></div>
                    </div>
                    <div className='h-26 relative border-black border-r-2 mx-4 px-6 py-4'>
                        <div className="absolute -right-5 rotate-45 -bottom-4 h-10 w-10 rounded-lg bg-lime-500"></div>
                    </div>
                </div>

                <div className="right my-28 px-7 md:mx-8 lg:mx-8 max-w-xl">
                    <h2 className='text-6xl font-extrabold'>About</h2>
                    <p className='mt-7 text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab autem voluptas quasi quo quas voluptatem, dolorum eveniet ad architecto illo quis officiis a.</p>
                    <Link scroll={false}  className='mt-7 hover:bg-green-500 px-6 py-2 text-black bg-lime-500 inline-block' href={'#contact'}>Contact</Link>
                </div>

            </div>
        </article>
    </>
  )
}
