import React from 'react';
import '../css/Portfolio.css'
import img1 from '../images/a11.png'
import img2 from '../images/a3.png'
import img3 from '../images/a7.webp'
import img4 from '../images/a8.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCodeCompare, faUserTie } from '@fortawesome/free-solid-svg-icons';

export default function Catalog() {
  // array for catalog

  const arr = [
    {
      icon: faBars,
      name: "Mern Stack Developer",
      title: "Creating dynamic, high-performance web applications. Proficient in MongoDB, Express.js, React.js, and Node.js, I seamlessly integrate front-end and back-end technologies. My expertise includes building scalable APIs, responsive user interfaces, and robust database architectures. With a passion for innovation and a commitment to excellence, I deliver solutions that exceed client expectations."
    },
    // {
    //   icon: faUserTie,
    //   name: "Web Designer",
    //   title: ""
    // },
    {
      icon: faCodeCompare,
      name: "Wordpress Customization",
      title: "I transform websites with tailored themes and plugins to meet unique client needs. Proficient in PHP, HTML, CSS, and JavaScript, I create responsive, user-friendly designs that captivate visitors. My skills include optimizing site performance, enhancing functionality, and ensuring robust security. Dedicated to delivering exceptional results, I turn client visions into stunning, fully functional websites."
    },
    {
      icon: faCodeCompare,
      name: "Portfolio Designer",
      title: "Creating visually stunning and highly functional portfolios that showcase your skills and achievements. Proficient in modern design tools and technologies, I craft responsive, user-friendly layouts that leave a lasting impression. My expertise includes personalized design elements.Dedicated to highlighting your unique talents, I deliver portfolios that stand out in a competitive landscape."
    },
    {
      icon: faCodeCompare,
      name: "Wallpaper & Logo Designer",
      title: "Create distinctive and impactful visual identities that resonate with your brand. Leveraging advanced design tools, I craft unique logos that embody your business's essence and wallpapers that enhance any digital or physical space. My expertise includes custom designs, attention to detail, and a keen eye for aesthetics. Dedicated to delivering creative and memorable designs, I ensure your brand stands out. "
    }

  ];


  // array for card
  const card = [
    {
      img: img1, web: "Product Catalog site",
      heart: faCodeCompare, nbr: "250$", footer: "In which i just manage a product of my client requirement and add some changes.."
    },
    {
      img: img2, web: "Wordpress Theme Customize",
      heart: faCodeCompare, nbr: "150$", footer: "I that site of wordpress my client want to make its site responsive and some animation on its product.."
    },
    {
      img: img3, web: "Portfolio sites",
      heart: faCodeCompare, nbr: "150$", footer: "In which my client want a full attractive portfolio to attract it teacher and get a good marks in semester project..."
    },
    {
      img: img4, web: "Web Project using Mern",
      heart: faCodeCompare, nbr: "270$", footer: "My clients want multi requirements under the single platform like product listing, api's integration and security features ...."
    }
  ]




  return (
    <div>

      {/*  */}

      <div className="   bg-black">
        <div className="container py-16" >
          <div className=' col-6'>
            <h1 className=' text-2xl text-white font-bold'>FEATURES</h1>
            <p className=' text-cyan-100 text-5xl font-bold'>What I Do</p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10  my-12'>
            {arr.map((data, index) => (
              <div key={index} className="text-start p-4 bg-white rounded-lg shadow-md k border-solid border-2 border-white-500">
                <FontAwesomeIcon icon={data.icon} size="2x" className="text-rose-700" />
                <h1 className="text-xl font-semibold ">{data.name}</h1>
                <p className="mt-0">{data.title}</p>
              </div>
            ))}
          </div>

        </div>
        <hr className='bg-gray  h-1' />




      </div>


      {/* Catalog data */}


      <div className=' bg-slate-400'>
        {/* head div */}
        <div className="container bg-white py-4">
          <div className=' container mx-auto text-center'>
            <h1 className='font-bold'>VISIT PORTFOLIO AND KEEP YOUR FEEDBACK</h1>
            <h1 className=' text-5xl font-bold text-rose-800'><u>My Catalogs</u></h1>
          </div>

          {/* Cards data */}

          <div className='grid  md:grid-cols-2 lg:grid-cols-3 gap-10 mt-4 '>
            {
              card.map((crd, index) => (
                <div key={index} className=' h-[400px] border-solid border-2 px-4 py-6 rounded-md dic'>
                  <div className=' h-[60%] w-68 bg-black flex justify-center items-center'>
                    <img src={crd.img} alt="missing" className='h-[60%] w-[60%] kk' />
                  </div>
                  <div className='flex justify-between align-baseline my-3'>
                    <h1 className=' font-bold text-rose-500'>{crd.web}</h1>
                    <span className='flex justify-center align-baseline gap-1'>
                      <h1>
                        <FontAwesomeIcon icon={crd.heart}/>
                      </h1>
                      <h1>

                        {crd.nbr}
                      </h1>
                    </span>
                  </div>
                  <div className='my-8'>
                    <p className=' font-bold chnage'>
                      {crd.footer}
                    </p>
                  </div>
                </div>
              ))
            }


          </div>

        </div>
      </div>
      <hr />
    </div>
  );
}
