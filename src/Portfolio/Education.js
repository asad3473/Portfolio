import React from 'react'
export default function Collection() {
  const grade = [
    {
      degree: "BS Computer Science", uni: "The Islamia University of Bahawalpur(IUB)", cgpa: "3.27/4", demo: "Graduated with a Bachelor of Science in Computer Science (BSCS) from [IUB], where I specialized in key areas such as Data Structures, Algorithms, Web Development, and Artificial Intelligence.My education provided me with a strong foundation in both theoretical concepts and practical applications.I am eager to leverage my skills and knowledge in a professional environment, contributing to innovative and impactful projects."
    },
    {
      degree: "Intermediate (ICS)", uni: "Iqra Degree College Sadiq Abad", cgpa: "627/1100", demo: "During my intermediate my major subject is Physics, Mathematics, and Computer Science during my Intermediate education, I've honed a diverse skill set. Proficient in languages like C++,C,CSS and Html.I excel in developing efficient software applications. My expertise in web development frameworks.Also i get Experienced in web app development, I ensure secure and scalable solutions. Ready to tackle complex challenges, I deliver innovative and exceptional service to clients."
    },
    {
      degree: "Metric", uni: "Govt Boys High School APL", cgpa: "762/1100", demo: "During my Metric my major subject is Physics, Mathematics, and Computer Science.I've honed a diverse skill set,learn in languages like C++,CSS and Html.I make simple landing page in our school lab and get amazing experience to use computer."
    },
  ]
  return (
    <>

      <div className="container py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-4  ">
          {
            grade.map((val, index) => (


              index===1 ? <div className=' rounded py-6 border text-white ind  px-4' key={index}> 
              <div className='flex justify-between items-center gap-4 w-[100%] ' >
                <div>
                  <h1>{val.degree}</h1>
                  <h1>{val.uni}</h1>
                </div>
                <div>
                  <h1>{val.cgpa}</h1>
                </div>
              </div>



              <p className='py-4'>
                {val.demo}
              </p>
            </div>: <div className=' rounded py-6 border bg-sky-500 k px-6' key={index}>
                <div className='flex justify-between items-center gap-4 w-[100%] '>
                  <div>
                    <h1>{val.degree}</h1>
                    <h1>{val.uni}</h1>
                  </div>
                  <div>
                    <h1>{val.cgpa}</h1>
                  </div>
                </div>



                <p className='py-4'>
                  {val.demo}
                </p>
              </div>

               

            ))
          }
        </div>
      </div>

    </>
  )
}
