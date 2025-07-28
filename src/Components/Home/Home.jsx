import React from 'react';
import style from './Home.module.css';

import boyimg from './../../assets/images/home/imgi_1_avataaars.svg';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className={`vh-100 d-flex justify-content-center align-items-center ${style.test}`}>
        <div className={`text-center`}>
          <img src={boyimg} alt="boy icon" className={style.inner} />
          <h1 className="mt-3">Start Framework</h1>
          <p className={style.text}>Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </div>
      <Footer/>
    </>
  );
}
