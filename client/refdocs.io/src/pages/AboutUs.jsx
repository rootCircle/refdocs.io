import React from 'react';
import styles from './AboutUs.module.css'

function AboutUs() {
  return (
    <>
      <header id="header">
        <nav>
          <div className={styles.logo}><img src="/images/icon/logo.png" alt="logo" /></div>
          <ul>
            <li><a href="/index.html">Home</a></li>
            <li><a className={styles.active} href="">About Us</a></li>
            <li><a href="/contactus/contactus.html">Contact Us</a></li>
            <li><a href="/gallery/gallery.html">Gallery</a></li>
          </ul>
          <div className={styles.srch}><a href="/search/search.html"><button className={styles.btn55}>SEARCH</button></a></div>
          <a className={styles.getStarted} href="/login.html">Get Started</a>
        </nav>
      </header>
      <h1 className={styles.headContainer}><b>ABOUT US</b></h1>
      <div className={styles.context}>
        <div style={{ margin: '0px 0px 25px 7px' }}>
          <p>Your website offers free, comprehensive study resources for students. You provide a variety of educational content, including online courses, video lectures, and study materials. Your platform makes it convenient and effective for learners to acquire new skills and knowledge from home. </p>
          <br />
          <div style={{ display: 'flex' }}>
            <p>Our website provides free and easy access to a wide range of educational materials, designed to simplify the studying process for students. With a user-friendly online learning experience and interactive tools, our platform offers flexibility and convenience for learners worldwide. By providing opportunities for personal and professional development, we aim to enhance skills and knowledge and connect learners globally..</p>
            <img src="/images/imgs/ai-ml-photo.png" alt="svg" style={{ width: '13rem' }} />
          </div>
          <br />
        </div>
      </div>
      <footer>
        <div className={styles.footerContainer}>
          <div className={styles.leftCol}>
            <img src="/images/icon/logo - Copy.png" style={{ width: '200px' }} />
            <div className={styles.logo}></div>
            <div className={styles.socialMedia}>
              <a href="#"><img src="/images/icon/fb.png" alt="Facebook" /></a>
              <a href="#"><img src="/images/icon/insta.png" alt="Instagram" /></a>
              <a href="#"><img src="/images/icon/tt.png" alt="Twitter" /></a>
              <a href="#"><img src="/images/icon/ytube.png" alt="YouTube" /></a>
              <a href="#"><img src="/images/icon/linkedin.png" alt="LinkedIn" /></a>
            </div>
            <br />
            <br />
            <p className={styles.rightsText}>Copyright © 2023 Created By Team KAMP IV,
              <br /> All Rights Reserved.</p>
            <br />
            <p><img src="/images/icon/location.png" alt="Location" />Indian Institute Of
              Information Technology, Lucknow <br />Ahmamau, Lucknow - 226002
            </p>
            <br />
            <p><img src="/images/icon/phone.png" alt="Phone" /> +91-1234-567-890<br /><img
              src="/images/icon/mail.png" alt="Mail" />&nbsp; KAMPIV@gmail.com</p>
          </div>
          <div className={styles.rightCol}>
            <h1 style={{ color: '#fff' }}>Our Newsletter</h1>
            <div className={styles.border}></div>
            <br />
            <p>Enter Your Email to get our News and updates.</p>
            <form className={styles.newsletterForm}>
              <input className={styles.txtb} type="email" placeholder="Enter Your Email" />
              <input className={styles.btn} type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </footer>
    </>
  );
}

export default AboutUs;
