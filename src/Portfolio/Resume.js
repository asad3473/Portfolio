import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import Education from '../Portfolio/Education'
import Skills from './Skills'
import Experience from './Experience'
export default function About() {

  // usestate for checking condition
  const [move, setMove] = useState("Education")
  return (
    <div>
      <div className=" bg-black pb-10 py-16 ">
        <div className="container ">
          <div className='container mx-auto text-white text-center mb-4'>
            <h1 className=' text-4xl font-bold text-rose-500'>My Resume</h1>
          </div>

          <div className="container bg-sky-900 resu">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              <div className= {` bg-sky-900 rounded flex justify-center items-center h-16 cont`} onClick={() => setMove("Education")} >
                <p > Education</p>
              </div>
              <div className=' bg-sky-900 rounded flex justify-center items-center h-16 cont' onClick={() => setMove("Skills")}>
                <p >Professional Skills</p>
              </div>
              <div className=' bg-sky-900 rounded flex justify-center items-center h-16 cont' onClick={() => setMove("Experience")}>
                <p > Experience</p>
              </div>
              {/* <div className=' bg-sky-900 rounded flex justify-center items-center h-16 cont' onClick={() => setMove("Interview")}>
                <p > Interview</p>
              </div> */}






            </div>
          </div>
        </div>
        {
          move === "Education" ? <Education /> : move === "Skills" ? <Skills /> : <Experience />
        }
      </div>

      <hr />

    </div>
  )
}
