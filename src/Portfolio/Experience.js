import React from 'react';

export default function Experience() {
  const grade = [
    {
      course: "Front End Developer (ReactJs)",
      company: "Code's Thinker",
      date: "Present (10/2/2022)",
      demo: "I have dynamic capabilities to craft stunning, interactive interfaces that impress at first glance. Seamlessly blending creativity with functionality, I showcase skills and achievements in a compelling manner. With React.js's component-based architecture, portfolios scale seamlessly across devices, delivering a flawless user experience. From mesmerizing animations to intuitive navigation, every detail is meticulously designed to captivate visitors and highlight talents. Stand out in the competitive landscape with a React.js-powered portfolio that leaves a lasting impression on clients and employers alike."
    },
    {
      course: "Teaching Experience (Front End Design)",
      company: "Code's Thinker",
      date: "06/08/2023",
      demo: "I have teaching experience in front end design, I foster creativity and skill development in crafting engaging user interfaces. Through hands-on projects and workshops, I teach HTML, CSS, JavaScript, and React.js, emphasizing design principles and usability. I provide personalized feedback to inspire students to excel in building responsive websites and captivating animations. Join me in exploring the dynamic world of front-end design and unleashing your creativity."
    },
  ];

  return (
    <div className="container my-6">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-evenly gap-4">
      {grade.map((val, index) => (
       
          <div className='container  rounded py-6 border text-white ind px-4' key={index}>
            <div className=' w-full'>
              <div>
                <h1>{val.course}</h1>
                <h1>{val.company}</h1>
              </div>
              <div>
                <h1>{val.date}</h1>
              </div>
            </div>
            <p className='py-4'>
              {val.demo}
            </p>
          </div>
        
      ))}
      </div>
    </div>
  );
}
