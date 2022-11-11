import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <>
      <footer className="bg-black text-white bg-[url('/background.png')] bg-center  pt-10">
        <div className="container my-16 flex justify-evenly flex-col md:flex-row">
            <div className="left ml-8 ">
                <h4 className='text-2xl font-extrabold'>Zayn Baloch</h4>
                <p >Thanks for visiting. Don&apos;t forget to give feedback!</p>
            </div>
            <div className="right">
                <h4 className='text-xl font-extrabold text-center'>Connect With Me</h4>
                <div className='flex mt-2 gap-2 mx-auto w-fit'>
                    <Link href={'https://www.facebook.com/zaynbeloch'}> <Image className='cursor-pointer' style={{filter: 'invert(100%)'}} src={'/facebook.svg'} width={20} height={20} alt={'Social Media Icon'}/></Link>
                    <Link href={'https://www.instagram.com/zayn_baloch.14/'}> <Image className='cursor-pointer' style={{filter: 'invert(100%)'}} src={'/instagram.svg'} width={20} height={20} alt={'Social Media Icon'}/></Link>
                    <Link href={'https://twitter.com/ZainAbb26568848'}> <Image className='cursor-pointer' style={{filter: 'invert(100%)'}} src={'/linkedin.svg'} width={20} height={20} alt={'Social Media Icon'}/></Link>
                    <Link href={'https://www.linkedin.com/in/zayn-baloch-8492201b1/'}> <Image className='cursor-pointer' style={{filter: 'invert(100%)'}} src={'/twitter.svg'} width={20} height={20} alt={'Social Media Icon'}/></Link>
                    <Link href={'https://github.com/zainkhanbaloch'}> <Image className='cursor-pointer' style={{filter: 'invert(100%)'}} src={'/github.svg'} width={20} height={20} alt={'Social Media Icon'}/></Link>
                </div>
            </div>
        </div>
        <div className='border-t border-t-white mx-10 py-8 '>
            <p className='text-center'>Copyright &copy; Zayn Baloch | 2022</p>
        </div>
      </footer>
    </>
  )
}
