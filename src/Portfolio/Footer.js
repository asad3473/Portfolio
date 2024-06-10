import React from "react";
import img from '../images/asad3.jpeg'
export default function foter() {
    return (
        <div>
            <div className="sticky bottom-0  w-full bg-black">
                <div className="flex justify-center py-6 flex-col items-center">
                    <div className=" h-16 w-18 rounded-full	 bg-white bg-contain">
                        <img src={img} alt="" className="w-[100%] h-[100%] rounded-full" />
                    </div>
                    <div className=" font-bold text-rose-500">
                        <h1 >PORTFOLIO</h1>
                    </div>
                </div>

                {/* get in touch */}

                <div className="  bg-black pb-20">
                    <div className=" flex h-max flex-col justify-center items-center md:grid grid-cols-2 gap-2 m-auto pt-4">

                        <div className="cols-12 md:text-start text-center">
                            <div className=" text-white w-[100%] md:w-[80%]">
                                <h1 className=" text-2xl font-bold">GET IN TOUCH</h1>
                                <p>I'm a MERN stack developer passionate about building web applications. Whether you have a project idea, job opportunity, or just want to say hello, I'd love to hear from you!</p>
                            </div>
                            {/* icon */}
                            <div className='flex justify-center md:justify-start gap-4 mt-4'>
                                <div className='h-10 w-10 bg-white flex justify-center items-center border rounded-md text-black  dic'>
                                    <a href="https://github.com/asad3473">
                                    <i class="fa-brands fa-github"></i>
                                    </a>
                                </div>
                                <div className='h-10 w-10 bg-white flex justify-center items-center border rounded-md text-black dic'>
                                    <a href="https://www.linkedin.com/in/asadi987/">
                                    <i class="fa-brands fa-linkedin-in"></i>
                                    </a>
                                </div>
                                <div className='h-10 w-10 bg-white flex justify-center items-center border rounded-md text-black dic'>
                                   <a href="https://www.instagram.com/asdi9873/">
                                   <i class="fa-brands fa-instagram"></i>
                                   </a>
                                </div>
                                <div className='h-10 w-10 bg-white flex justify-center items-center border rounded-md text-black dic'>
                                <a href="https://stackoverflow.com/users/23427820/asad-ullah">
                                <i class="fa-brands fa-stack-overflow"></i>
                                </a>
                                </div>

                            </div>
                        </div>

                        {/* <div className="div "> adding icon div */}
                        <div className=" flex flex-col gap-6 lg:grid grid-cols-2 lg:gap-10">
                            <div className=" flex justify-center items-center flex-col gap-4 bg-slate-900 text-white round h-36 w-60 dic">
                            <i class="fa-regular fa-envelope"></i>
                            <code>Asadsoomro0311@gmail.com</code>
                            </div>
                            <div className=" flex justify-center items-center flex-col bg-slate-900 text-white round gap-4 h-36 w-60 dic">
                                <a href="https://www.codesthinker.com/" className="flex justify-center items-center flex-col gap-4">
                                <i class="fa-solid fa-link"></i>
                                <code>www.codesthinker.com </code>
                                </a>
                            </div>
                        </div>
                        
                    </div>
                </div>


            </div>
        </div>
    )
}
