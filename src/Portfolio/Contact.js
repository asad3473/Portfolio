import React from 'react'
import gif from '../images/video.mp4'
export default function Contact() {
  const card = [
    {
      img: gif, Title: "Asad UllaH",
      rank: "ReactJs Developer", phone: "+92 307 9873475", email: "asadsoomro0311@gmail.com", description: "I am available for freelance work. Connect with me via call & email."
    }
  ]
  return (
    <div>

      <div className=" bg-black pb-10 py-16 ">
        <div className="container ">
          <div className='container mx-auto text-white text-center'>
            <h1 className=' text-4xl font-bold text-rose-500'>Contact With Me</h1>
          </div>


          {/* contact card */}


          <div className='grid grid-cols-1 md:grid-cols-2  mt-6 gap-5'>
            {
              card.map((crd, index) => (
                <div key={index} className=' h-[auto] w-[auto] border-solid border-2 px-4 py-6 rounded-md dic text-white'>
                  <div className=' h-[40%] w-[100%] bg-black flex justify-center items-center'>
                    <video autoPlay muted className='h-[60%] w-[60%] kk rounded' >

                      <source type='video/mp4' src={gif} alt="missing" className='rounded' />
                    </video>
                  </div>
                  <div className='mx-4 '>
                    <h1 className=' font-bold text-rose-500 text-2xl'>{crd.Title}</h1>
                    <h1 className='my-2'>{crd.rank}</h1>
                    <h1 className='my-2'>{crd.description}</h1>
                    <h1 className='my-2'>Phone: {crd.phone}</h1>
                    <h1 className='my-2'>Email: {crd.email}</h1>
                  </div>
                  {/* find with me */}
                  <div className='mt-4 w-60 mx-4'>
                    <p className='text-white'>FIND WITH ME</p>
                    <div className='flex gap-4 my-4 '>
                      <div className='h-10 w-10 bg-white flex justify-center items-center border rounded-md text-black dic '>
                        <a href="https://www.facebook.com/saim.asad.18488">
                          <i class="fa-brands fa-facebook"></i>
                        </a>
                      </div>
                      <div className='h-10 w-10 bg-white flex justify-center items-center border rounded-md text-black dic'>
                        <a href=" https://www.linkedin.com/in/asadi987/">
                          <i class="fa-brands fa-linkedin-in"></i>
                        </a>
                      </div>
                      <div className='h-10 w-10 bg-white flex justify-center items-center border rounded-md text-black dic  '>
                        <a href="https://www.instagram.com/asdi9873/">
                          <i className="fa-brands fa-instagram"></i>
                        </a>
                      </div>

                    </div>
                  </div>
                </div>
              ))
            }

            {/* Form data */}
            <div className=' bg-black-400 px-5 py-4 rounded-sm  border-solid border-2'>
              <div className='flex justify-between gap-3'>
                <div >
                  <label htmlFor="Name" className=' font-medium text-lg text-white '>Your Name</label>
                  <input type="text" name="" id="" className='w-[100%] h-10  rounded px-2 outline-none border-none bg-gray-300' />
                </div>
                <div>
                  <label htmlFor="Name" className=' font-medium text-lg text-white '>Phone Number</label>
                  <input type="text" name="" id="" className='w-[100%] h-10 rounded px-2 outline-none border-none bg-gray-300' />
                </div>
              </div>
              {/* email */}
              <div>
                <label htmlFor="Name" className=' font-medium text-lg text-white '>Email</label>
                <input type="text" name="" id="" className='w-[100%] h-10 rounded px-2 outline-none border-none bg-gray-300' />
              </div>
              {/* subject */}
              <div>
                <label htmlFor="Name" className=' font-medium text-lg text-white '>Subject</label>
                <input type="text" name="" id="" className='w-[100%] h-10 rounded px-2 outline-none border-none bg-gray-300' />
              </div>
              {/* message */}
              <div>
                <label htmlFor="Name" className=' font-medium text-lg text-white '>Your Message</label><br />
                <textarea name="" id="" cols={10} rows={8} className='w-[100%] rounded px-2  outline-none border-none bg-gray-300'></textarea>
              </div>
              {/* button */}
              <div className='bg-gray-300 w-[100%] text-center rounded py-2 px-3 from-pink-600 font- text-lg font-serif '>
                <button className=''>Send Message</button>
              </div>
            </div>
          </div>


        </div>
      </div>

      <hr />
    </div>
  )
}
