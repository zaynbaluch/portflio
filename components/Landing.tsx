import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import React from 'react';
// import Typed from 'typed.js';
// import Typed from 'react-typed';


export default function Landing() {
  const animstrings = ['Fullstack', 'Web', 'Developer']
  return (
    <>
        <article id='home' className="min-h-min border-2 border-black text-white bg-[url('/background.png')] bg-center bg-cover md:h-screen">
            <div className='flex flex-col lg:flex-row mx-8 lg:mx-0 content-center justify-around align-middle  my-28 md:my-44 scroll-mt-4'>
            <div className="left  max-w-xl">
                <header className=' my-auto'>
                    <h1 className='text-4xl md:text-6xl font-extrabold'>Lorem ipsum dolor sit amet
                    {/* <div className="container">
        <span className="text first-text">I'm a</span>
        <span className="text sec-text">Freelancer</span>
    </div> */}
        
                    {/* <Typed                    
                    strings={animstrings}
                    typeSpeed={40}
                    backSpeed={50}                    
                    className='auto-type text-4xl md:text-6xl'/>
                     */}
                    </h1>
                    <p className='mt-7 md:text-base text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus dolorum, facilis nesciunt mollitia culpa quo aperiam illo tenetur rem deleniti id necessitatibus, esse est!</p>
                    <Link scroll={false} className='mb-5 hover:bg-green-500 mt-7 px-6 py-2 text-black bg-lime-500 inline-block' href={'#contact'}>Contact</Link>
                </header>
            </div>
            <div className="right mt-6 md:mt-auto">
              <div data-tilt data-tilt-max="20" data-tilt-speed="50" data-tilt-perspective="500" data-tilt-glare data-tilt-max-glare="1" data-tilt-scale="1.05" className="card relative w-fit mx-auto my-auto">
                <div className="imagebox">
                    <Image className=' my-auto z-[46] relative'  src={'/cube.jpg'} width={270} height={100} priority  alt='sidebar'/>
                </div>
                  <div   className="contentbox z-[1] absolute -left-4 -top-4 h-40 w-40  bg-gray-900"></div>
                  <div   className="contentbox z-[1] absolute -right-4 -bottom-4 h-40 w-40  bg-gray-900"></div>   
              </div>
            </div>
            </div>

        </article>
        {/* <Script id='another' src="/scriptanim.js"/>
        <Script strategy='afterInteractive' id='innerjs'>
          { `
            const typed = new Typed(".auto-type",  {
            strings : ['Fullstack', 'Web', 'Developer'],
            typeSpeed : 150,
            backSpeed : 150,
            loop :  true
          })`}
        </Script> */}
  {/* <Script id='ibberjs'>
        {`const text = document.querySelector(".sec-text");

        const textLoad = () => {
            setTimeout(() => {
                text.textContent = "Freelancer";
            }, 0);
            setTimeout(() => {
                text.textContent = "Blogger";
            }, 4000);
            setTimeout(() => {
                text.textContent = "YouTuber";
            }, 8000); //1s = 1000 milliseconds
        }

        textLoad();
        setInterval(textLoad, 12000);`} */}
    {/* </Script>   */}
    </>
  )
}
