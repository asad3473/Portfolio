import React from 'react'
import img from '../images/asdi.png'

export default function Home() {
    return (
        <div>

            <div className=' bg-black   w-full py-16'>
                <div className='container mx-auto '>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-10 justify-center items-center '>
                        <div className='text-white '>
                            <div className='px-2 py-3'>
                                <p className='text-xl relative'>WELCOME TO MY WORLD</p>
                                <h1 className='text-4xl font-bold'>Hi, I’m <span className='text-red-700	'>Asad Ullah </span> <br />Mern stack Developer/Designer.</h1>
                                <p className='text-xl'>
                                    "MERN stack developer/designer who believes in using animation strategically to simplify user experiences and guide interactions seamlessly. With expertise in MongoDB, Express.js, React.js, and Node.js,Javascript,Tailwind Css,bootstrap,CSS3 and HTML5.I craft dynamic web applications that prioritize both functionality and aesthetics."
                                </p>


                                {/* icon data */}
                                <div className="flex justify-between">
                                    <div className='mt-8 w-60 '>
                                        <p>FIND WITH ME</p>
                                        <div className='flex gap-4 mt-4'>
                                            <div className='h-10 w-10 bg-white flex justify-center items-center border rounded-md text-black  dic'>
                                                <a href="https://www.facebook.com/saim.asad.18488">
                                                    <i class="fa-brands fa-facebook"></i>
                                                </a>
                                            </div>
                                            <div className='h-10 w-10 bg-white flex justify-center items-center border rounded-md text-black dic'>
                                                <a href=" https://www.linkedin.com/in/asadi987/">
                                                    <i class="fa-brands fa-linkedin-in"></i>
                                                </a>
                                            </div>
                                            <div className='h-10 w-10 bg-white flex justify-center items-center border rounded-md text-black dic'>
                                                <a href="https://www.instagram.com/asdi9873/">
                                                    <i className="fa-brands fa-instagram"></i>
                                                </a>
                                            </div>

                                        </div>
                                    </div>
                                    <div className='mt-8 w-60 '>
                                        <p>BEST SKILL ON</p>
                                        <div className='flex gap-4 mt-4'>
                                            <div className='h-10 w-10 bg-white flex justify-center items-center border rounded-md text-black dic'>
                                                <i className="fa-brands fa-react"></i>
                                            </div>
                                            <div className='h-10 w-10 bg-white flex justify-center items-center border rounded-md text-black dic'>
                                                <i class="fa-brands fa-node"></i>
                                            </div>
                                            <div className='h-10 w-10 bg-white flex justify-center items-center border rounded-md text-black dic'>
                                                <i className="fa-brands fa-js"></i>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>


                        {/* image datta  */}
                        <div className='py-2 w-1/2 mx-auto'>
                            <div className='flex justify-center items-center relative'>
                                <div className='h-90 w-72 rounded-md bg-white relative opacity-85'>
                                    <img src={img} alt="" className='h-full w-full rounded-md' />
                                    <div className='absolute inset-0 flex justify-center items-center'>
                                        <div className='h-20 w-20 bg-black text-white rounded-full flex justify-center items-center opacity-85	'>
                                            <div className='h-10 w-10 bg-white text-black rounded-full flex justify-center items-center'>
                                                <i className="fa-solid fa-play"></i>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <hr />
            </div>

        </div>
    )
}
