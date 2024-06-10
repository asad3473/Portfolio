import React from 'react';

export default function Skills() {
  const skil = [
    {
      title: "HTML", nbr: "90%"
    },
    {
      title: "CSS", nbr: "90%"
    },
    {
      title: "BOOTSTRAP", nbr: "85%"
    },
    {
      title: "TAILWIND CSS", nbr: "90%"
    },
    {
      title: "JAVASCRIPT", nbr: "80%"
    },
    {
      title: "REACTS JS", nbr: "80%"
    },
    {
      title: "MERN STACK", nbr: "80%"
    },
  ];

  return (
    <>
      <div className='text-center my-4 text-4xl font-semibold text-red-500'>
        <h1>Development Skills</h1>
      </div>
      <div className="container  md:w-[80%] rounded my-6 dic">
        <div className=' bg-neutral-800 rounded pb-1 dic '>
          {skil.map((value, index) => (
            <div className='px-8 my-6' key={index}>
              <h1 className='text-white font-bold'>{value.title}</h1>
              <div className='bg-rose-500 w-full h-4 rounded my-3'>
                <div className='bg-gray-400 h-4 rounded flex justify-center items-center' style={{ width: value.nbr }}>
                  <h1 className='text-white text-center'>{value.nbr}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
