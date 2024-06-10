import React from 'react';
import video1 from '../images/animated.mp4';
import img from '../images/cara1.png';
import img2 from '../images/cata2.png';
import img3 from '../images/cata3.png';
import img4 from '../images/cata4.png';
import img5 from '../images/cata5.png';
import '../css/Portfolio.css';

export default function Animated() {
  return (
    <div>
      <hr />
      <div className=" bg-black ">
        <div className=" h-[100vh] w-[100%] flex justify-center items-center">
          <video autoPlay muted loop className="h-[100%] w-[100%] object-cover opacity-75">
            <source type="video/mp4" src={video1} alt="missing" />
          </video>
          <div className="overlay absolute  inset-0">
            <div className="flex flex-col md:flex-row justify-center items-center space-x-4">
              <div className="content overflow-x-hidden mb-4 w-[90vw] md:w-[50%]  my-10 md:mb-0">
                <div className="content__container ">
                  <p className="content__container__text"><i class="fa-solid fa-robot"></i></p>
                  <ul className="content__container__list">
                    <li className="content__container__list__item text-nowrap  ">Welcome to My Portfolio <i class="fa-solid fa-users"></i></li>
                    <li className="content__container__list__item text-nowrap">Welcome to My Home <i class="fa-solid fa-house"></i></li>
                    <li className="content__container__list__item text-nowrap">Welcome to My Services <i class="fa-solid fa-truck-fast"></i></li>
                    <li className="content__container__list__item text-nowrap">Welcome to My Resume <i class="fa-brands fa-algolia"></i></li>
                  </ul>
                </div>
              </div>

              <div className="swatch">
                <div className='my-10'>
                  <img src={img} alt="" />
                </div>
                <div className='my-10'>
                  <img src={img4} alt="" />
                </div>
                <div className='my-10'>
                  <img src={img3} alt="" />
                </div>
                <div className='my-10'>
                  <img src={img2} alt="" />
                </div>
                <div className='my-10'>
                  <img src={img5} alt="" />
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}
