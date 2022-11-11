import Image from 'next/image'
// import Link from 'next/link'
import React from 'react'




export default function Navbar() {
  return (
    <>
    <nav className='py-4 z-50 fixed w-full bg-black flex flex-col md:flex-row justify-end px-4 md:pr-6 lg:px-10 text-white'>

        <div className="container flex content-center mx-auto">
            <a href={'/'}><Image className='invert inline' priority src={'/favicon.svg'} width={50} height={50} alt={'logo'}/></a>
            <a href={'/'}><span className='ml-3 font-extrabold my-auto text-2xl'>Zayn Baloch</span></a>
        </div>

        <ul className='flex space-x-5 text-sm mx-auto  md:text-base my-3  md:my-auto'>
            <li><a  className='hover:text-green-400' href={'#home'}>Home</a></li>
            <li><a  className='hover:text-green-400' href={'#about'}>About</a></li>
            <li><a  className='hover:text-green-400' href={'#skills'}>Skills</a></li>
            <li><a  className='hover:text-green-400' href={'#projects'}>Projects</a></li>
            <li><a  className='hover:bg-green-500 py-2 px-6 text-black bg-lime-400 ' href={'#contact'}>Contact</a></li>
        </ul>
    </nav>
    </>
  )
}
