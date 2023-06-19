import React, { useEffect } from 'react'
import galleryStyle from './Gallery.module.css'


// function sideMenu(params) {

// }



const Gallery = () => {

  function sideMenu(side) {
    var menu = document.getElementById('side-menu');
    if (menu === null) {
      return;
    }
    if(side==0) {
      menu.style.visibility="visible";
      menu.style = 'transform: translateX(0vh); position:fixed;';
    }
    else {
      menu.style = 'transform: translateX(-100%);';
    }
    side++;
  }



  useEffect(() => {
    // sideMenu(1);
    console.log(document.querySelectorAll("a"));
  }, []) 
  return (
    <div>
      <header id="header">
        <nav>
          <div className={galleryStyle.logo}><img src="/images//icon/logo.png"  alt="logo" /></div>
          <ul>
            <li><a href="../index.html">Home</a></li>
            <li><a href="../aboutus/about_web.html">About Us</a></li>
            <li><a href="../contactus/contactus.html">Contact Us</a></li>
            <li><a className={galleryStyle.active} href="gallery.html">Gallery</a></li>
          </ul>
          <div className={galleryStyle.srch} ><a href="../search/search.html"><button className={galleryStyle.btn55} >SEARCH</button></a></div>
          <a className={galleryStyle.getstarted} href="../login.html">Get Started</a>
          <img src="/images//icon/menu.png"  className={galleryStyle.menu} onClick={sideMenu(0)} alt="menu" />
        </nav>
        <div className={galleryStyle.sidemenu} id="side-menu" style={{visibility:"hidden"}}>
          <div className={galleryStyle.close} onClick={sideMenu(1)}><img src="/images//icon/close.png"  alt="" /></div>
          <div className={galleryStyle.user}>
          </div>
          <ul>
            <li><a href="../index.html" onClick={sideMenu(1)}>Home</a></li>
            <li><a href="../aboutus/about_web.html" onClick={sideMenu(1)}>About Us</a></li>
            <li><a href="../contactus/contactus.html" onClick={sideMenu(1)}>Contact Us</a></li>
            <li><a className={galleryStyle.active} href="gallery.html" onClick={sideMenu(1)}>Gallery</a></li>
          </ul>
        </div>
        <div className={galleryStyle.gal}>
          <h1><b>Gallery</b></h1>
        </div>


        <section className={galleryStyle.wrapper}>
          <i className="fa-solid fa-arrow-left button" id="prev"></i>
          <div className={galleryStyle.imagecontainer} >
            <div className={galleryStyle.carousel}>
              <img style={{height:"auto"}} src="../images/\creator\ak1.jpg" alt="" />
              <img src="../images/\creator\dev1.jpeg" alt="" />
              <img src="/images//imgs/img3.jpg"  alt="" />
              <img style={{height:"214px"}} src="/images//imgs/img4.jpg"  alt="" />
              <img style={{height:"auto"}} src="/images//imgs/2.jpg"  alt="" />
              <img src="/images//imgs/img5.jpg"  alt="" />
              <img src="/images//imgs/img6.jpg"  alt="" />
              <img src="/images//imgs/img7.jpg"  alt="" />
              <img src="/images//imgs/img8.jpg"  alt="" />
              <img style={{height:"auto"}} src="refo1\../images/\imgs\1jpg.jpg" alt="" />
              <img style={{height:"214px"}} src="/images//imgs/4.jpg"  alt="" />
              <img style={{height:"auto"}} src="/images//imgs/3.jpg"  alt="" />
              <img src="/images//imgs/img2.jpg"  alt="" />
              <img style={{height:"auto"}} src="/images//imgs/5.jpg"  alt="" />
              <img style={{height:"auto"}} src="/images//imgs/6.jpg"  alt="" />
              <img style={{height:"auto"}} src="/images//imgs/7.jpg"  alt="" />
              <img style={{height:"auto"}} src="/images//imgs/8.jpg"  alt="" />
            </div>
            <i className="fa-solid fa-arrow-right button" id="next"></i>
          </div>
        </section>
        <div className={galleryStyle.gallery}>
          <img style={{height:"214px"}} src="/images//newfolder/i.1.jpeg"  alt="" />
          <img style={{height:"214px"}} src="/images//newfolder/i.3.jpeg"  alt="" />
          <img style={{height:"214px"}} src="/images//newfolder/i.2.jpg"  alt="" />
          <img style={{height:"214px"}} src="/images//newfolder/n1.jpg"  alt="" />
          <img style={{height:"214px"}} src="/images//newfolder/i.4.jpeg"  alt="" />
          <img style={{height:"214px"}} src="/images//newfolder/i.16.jpg"  alt="" />
          <img style={{height:"214px"}} src="/images//newfolder/i.5.jpg"  alt="" />

          <img src="/images//newfolder/n3.jpeg"  alt="" />
          <img style={{height:"214px"}} src="/images//newfolder/n2.jpeg"  alt="" />
          <img style={{height:"214px"}} src="/images//newfolder/i.8.jpeg"  alt="" />
          <img style={{height:"214px"}} src="/images//newfolder/i.9.jpg"  alt="" />
          <img style={{height:"214px"}} src="/images//imgs/4.jpg"  alt="" />
          <img style={{height:"214px"}} src="/images//imgs/3.jpg"  alt="" />
          <img style={{height:"214px"}} src="/images//newfolder/i.16.jpg"  alt="" />
          <img style={{height:"214px"}} src="/images/newfolder/n4.jpeg"  alt="" />
          <img style={{height:"214px"}} src="/images//newfolder/i.11.jpg"  alt="" />
          <img style={{height:"214px"}} src="/images//newfolder/i.16.jpg"  alt="" />
          <img style={{height:"214px"}} src="/images//newfolder/i.10.jpeg"  alt="" />
        </div>

        <footer>
          <div className={galleryStyle.footercontainer} >
            <div className={galleryStyle.leftcol} >
              <img src="../images//icon/logo - Copy.png" style={{width:"200px"}} />
              <div className={galleryStyle.logo}></div>
              <div className={galleryStyle.socialmedia} >
                <a href="#"><img src="../images//icon\fb.png" /></a>
                <a href="#"><img src="../images//icon\insta.png" /></a>
                <a href="#"><img src="../images//icon\tt.png" /></a>
                <a href="#"><img src="../images//icon\ytube.png" /></a>
                <a href="#"><img src="../images//icon\linkedin.png" /></a>
              </div><br /><br />
              <p className={galleryStyle.rightstext} >Copyright © 2023 Created By Team KAMP IV , <br />
                All Rights Reserved.</p>
              <br />
              <p><img src="/images//icon/location.png"  /> Indian Institute Of Information
                Technology , Lucknow <br />Ahmamau,Lucknow - 226002</p><br />
              <p><img src="/images//icon/phone.png"  /> +91-1234-567-890<br /><img src="/images//icon/mail.png"  />&nbsp;
                KAMPIV@gmail.com</p>
            </div>
            <div className={galleryStyle.rightcol} >
              <h1 style={{color:"#fff"}}>Our Newsletter</h1>
              <div className={galleryStyle.border}></div><br />
              <p>Enter Your Email to get our News and updates.</p>
              <form className={galleryStyle.newsletterform} >
                <input className={galleryStyle.txtb} type="email" placeholder="Enter Your Email" />
                <input className={galleryStyle.btn} type="submit" value="Submit" />
              </form>
            </div>
          </div>
        </footer>
      </header>
    </div>
  )
}




// var pics = document.querySelectorAll(".gallery img")
// for(let i = 0 ; i< pics.length ; i++){
//     pics[i].addEventListener("click" , (e)=>{


//         let overlay=document.createElement("div");
//         overlay.className="overlay"
//         document.body.appendChild(overlay)


//         let popupbox=document.createElement("div");
//         popupbox.className="popupbox"


//         let popupimg = document.createElement("img")
//         popupimg.src = pics[i].src

//         popupbox.appendChild(popupimg)

//         document.body.appendChild(popupbox)

//         let x = document.createElement("span")
//         let x_text = document.createTextNode("X")
//         x.appendChild(x_text)
//         x.className="close"


//         popupbox.appendChild(x)


//     })
// }

// // document.addEventListener("click" , (e) => {
// //     if(e.target.className == "close" ){
// //         e.target.parentElement.remove()
// //         document.querySelector(".overlay").remove()
// //     }
// // });
// // const wrapper = document.querySelector(".wrapper"),
// //   carousel = document.querySelector(".carousel"),
// //   images = document.querySelectorAll("img"),
// //   buttons = document.querySelectorAll(".button");

// // let imageIndex = 1,
// //   intervalId;
// const autoSlide = () => {

//   intervalId = setInterval(() => slideImage(++imageIndex), 4000);
// };

// // autoSlide();  thoda bekar hora hai isse :)

// const slideImage = () => {

//   imageIndex = imageIndex === images.length ? 0 : imageIndex < 0 ? images.length - 1 : imageIndex;
//   carousel.style.transform = `translate(-${imageIndex * 22}%)`;
// };
// const updateClick = (e) =>{
//   clearInterval(intervalId);
//   imageIndex += e.target.id === "next" ? 1 : -1;
//   slideImage(imageIndex);
//   autoSlide();
// };
//   buttons.forEach((button) => button.addEventListener("click", updateClick));
//   wrapper.addEventListener("mouseover", () => clearInterval(intervalId));
//   wrapper.addEventListener("mouseleave", autoSlide);


export default Gallery