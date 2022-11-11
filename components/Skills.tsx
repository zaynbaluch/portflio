import Image from "next/image";
import React from "react";

export default function Skills() {
  return (
    <>
      <section id="skills" className="relative">
      <span className='text-9xl -z-10 -left-28 top-24 rotate-90 font-extrabold absolute text-slate-200'>Skills</span>

        <div className="container flex justify-evenly align-middle content-center  flex-col max-w-full lg:flex-row my-14 lg:my-24 ">
            <div className="left  ">
                <h2 className="mx-12 text-6xl font-extrabold">Skills</h2>
                <div className="frontend  mx-16  font-thin text-sm">
                <h4 className="text-2xl font-extrabold">Frontend</h4>
                <div className="card-container mt-2">
                    <div className="inline-block mr-2 mt-2 card bg-slate-100 border border-lime-300 w-16 h-16 ">
                    <h6 className="text-center ">HTML</h6>
                    
                    <Image
                        className="mx-auto"
                        src={"/html.svg"}
                        width={30}
                        height={30}
                        alt="HTML"
                    />
                    </div>
                    <div className="inline-block mr-2 mt-2 card bg-slate-100 border border-lime-300 w-16 h-16  ">
                    <h6 className="text-center">CSS</h6>
                    <Image
                        className="mx-auto mt-1"
                        src={"/css.svg"}
                        width={30}
                        height={30}
                        alt="HTML"
                    />
                    </div>
                    <div className="inline-block mr-2 mt-2 card bg-slate-100 border border-lime-300 w-16 h-16  ">
                    <h6 className="text-center">Tailwind</h6>
                    <Image
                        className="mx-auto mt-2"
                        src={"/tailwind.svg"}
                        width={30}
                        height={30}
                        alt="HTML"
                    />
                    </div>
                    <div className="inline-block mr-2 mt-2 card bg-slate-100 border border-lime-300 w-16 h-16  ">
                    <h6 className="text-center">React</h6>
                    <Image
                        className="mx-auto"
                        src={"/react.svg"}
                        width={30}
                        height={30}
                        alt="HTML"
                    />
                    </div>

                    <div className="inline-block mr-2 mt-2 card bg-slate-100 border border-lime-300 w-16 h-16  ">
                    <h6 className="text-center">Next.js</h6>
                    <Image
                        className="mx-auto mt-3"
                        src={"/next.svg"}
                        width={30}
                        height={30}
                        alt="HTML"
                    />
                    </div>
                </div>
                </div>
            
                <div className="backend  mx-16 font-thin text-sm">
                    <h4 className="text-2xl font-extrabold">Backend</h4>
                    <div className="card-container mt-2">
                    <div className="inline-block mr-2 mt-2 card bg-slate-100 border border-lime-300 w-16 h-16  ">
                        <h6 className="text-center">Node.js</h6>
                        <Image
                        className="mx-auto"
                        src={"/node.svg"}
                        width={30}
                        height={30}
                        alt="HTML"
                        />
                    </div>
                    <div className="inline-block mr-2 mt-2 card bg-slate-100 border border-lime-300 w-16 h-16  ">
                        <h6 className="text-center">Express.js</h6>
                        <Image
                        className="mx-auto mt-2"
                        src={"/express.svg"}
                        width={30}
                        height={30}
                        alt="HTML"
                        />
                    </div>
                    <div className="inline-block mr-2 mt-2 card bg-slate-100 border border-lime-300 w-16 h-16  ">
                        <h6 className="text-center">REST API</h6>
                        <Image
                        className="mx-auto mt-1"
                        src={"/rest.svg"}
                        width={30}
                        height={30}
                        alt="HTML"
                        />
                    </div>
                    </div>
                </div>

                <div className="databases mx-16  font-thin text-sm">
                    <h4 className="text-2xl font-extrabold">Databases</h4>
                    <div className="card-container mt-2">
                    <div className="inline-block mr-2 mt-2 card bg-slate-100 border border-lime-300 w-16 h-16  ">
                        <h6 className="text-center">MongoDB</h6>
                        <Image
                        className="mx-auto w-4"
                        src={"/mongodb.svg"}
                        width={30}
                        height={20}
                        alt="HTML"
                        />
                    </div>
                    <div className="inline-block mr-2 mt-2 card bg-slate-100 border border-lime-300 w-16 h-16  ">
                        <h6 className="text-center">Postgres</h6>
                        <Image
                        className="mx-auto mt-1"
                        src={"/postgres.svg"}
                        width={30}
                        height={30}
                        alt="HTML"
                        />
                    </div>
                    <div className="inline-block mr-2 mt-2 card bg-slate-100 border border-lime-300 w-16 h-16  ">
                        <h6 className="text-center">MySQL</h6>
                        <Image
                        className="mx-auto mt-2"
                        src={"/mysql.svg"}
                        width={30}
                        height={30}
                        alt="HTML"
                        />
                    </div>
                    <div className="inline-block mr-2 mt-2 card bg-slate-100 border border-lime-300 w-16 h-16  ">
                        <h6 className="text-center">SQL</h6>
                        <Image
                        className="mx-auto"
                        src={"/sql.svg"}
                        width={25}
                        height={30}
                        alt="HTML"
                        />
                    </div>
                    </div>
                </div>
                
                <div className="cloud mx-16  font-thin text-sm">
                    <h4 className="text-2xl font-extrabold">Cloud & DevOps</h4>
                    <div className="card-container mt-2">
                    <div className="inline-block mr-2 mt-2 card bg-slate-100 border border-lime-300 w-16 h-16  ">
                        <h6 className="text-center">Vercel</h6>
                        <Image
                        className="mx-auto"
                        src={"/vercel.ico"}
                        width={30}
                        height={30}
                        alt="HTML"
                        />
                    </div>
                    <div className="inline-block mr-2 mt-2 card bg-slate-100 border border-lime-300 w-16 h-16  ">
                        <h6 className="text-center">Heroku</h6>
                        <Image
                        className="mx-auto"
                        src={"/heroku.svg"}
                        width={30}
                        height={30}
                        alt="HTML"
                        />
                    </div>
                    <div className="inline-block mr-2 mt-2 card bg-slate-100 border border-lime-300 w-16 h-16  ">
                        <h6 className="text-center">Linux</h6>
                        <Image
                        className="mx-auto"
                        src={"/linux.svg"}
                        width={30}
                        height={30}
                        alt="HTML"
                        />
                    </div>
                    </div>
                </div>
            </div>
        
            <div className="right mt-20">
            <div  data-tilt data-tilt-max="20" data-tilt-speed="50" data-tilt-perspective="500" data-tilt-glare data-tilt-max-glare="1" data-tilt-scale="1.05" className="card relative w-fit mx-auto">
                <div className="imagebox">
                    <Image className=' my-auto z-[46] relative'  src={'/cone.jpg'} width={270} height={100} priority  alt='sidebar'/>
                </div>
                  <div   className="contentbox z-[1] absolute -left-4 -top-4 h-40 w-40  bg-gray-300"></div>
                  <div   className="contentbox z-[1] absolute -right-4 -bottom-4 h-40 w-40  bg-gray-300"></div>   
              </div>
            </div>
        </div>
      </section>
    </>
  );
}
