import React from 'react';
import img1 from './../../assets/images/portfolio/imgi_1_poert1.png';
import img2 from './../../assets/images/portfolio/imgi_2_port2.png';
import img3 from './../../assets/images/portfolio/imgi_3_port3.png';

import style from './Potfolio.module.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

export default function Portfolio() {
  return (
 <>
 
 <Navbar/>
    <div className={style.container}>
      <div className={style.row}>
        <div className={style['col-md-4']}>
          <div className={style.inner}>
            <img src={img1} alt="" />
          </div>
        </div>
        <div className={style['col-md-4']}>
          <div className={style.inner}>
            <img src={img2} alt="" />
          </div>
        </div>
        <div className={style['col-md-4']}>
          <div className={style.inner}>
            <img src={img3} alt="" />
          </div>
        </div>
        <div className={style['col-md-4']}>
          <div className={style.inner}>
            <img src={img1} alt="" />
          </div>
        </div>
        <div className={style['col-md-4']}>
          <div className={style.inner}>
            <img src={img2} alt="" />
          </div>
        </div>
        <div className={style['col-md-4']}>
          <div className={style.inner}>
            <img src={img3} alt="" />
          </div>
        </div>
      </div>
    </div>

    <Footer/>
 </>
  );
}
