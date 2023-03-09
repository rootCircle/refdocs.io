
  
function sideMenu(side) {
  var menu = document.getElementById('side-menu');
  if(side==0) {
    menu.style = 'transform: translateX(0vh); position:fixed;';
  }
  else {
    menu.style = 'transform: translateX(-100%);';
  }
  side++;
}
var pics = document.querySelectorAll(".container .gallery img")
for(let i = 0 ; i< pics.length ; i++){
    pics[i].addEventListener("click" , (e)=>{


        let overlay=document.createElement("div");
        overlay.className="overlay"
        document.body.appendChild(overlay)


        let popupbox=document.createElement("div");
        popupbox.className="popupbox"
     

        let popupimg = document.createElement("img")
        popupimg.src = pics[i].src

        popupbox.appendChild(popupimg)

        document.body.appendChild(popupbox)

        let x = document.createElement("span")
        let x_text = document.createTextNode("X")
        x.appendChild(x_text)
        x.className="close"


        popupbox.appendChild(x)


    })
}

document.addEventListener("click" , (e) => {
    if(e.target.className == "close" ){
        e.target.parentElement.remove()
        document.querySelector(".overlay").remove()
    }
});
const wrapper = document.querySelector(".wrapper"),
  carousel = document.querySelector(".carousel"),
  images = document.querySelectorAll("img"),
  buttons = document.querySelectorAll(".button");

let imageIndex = 1,
  intervalId;
const autoSlide = () => {
  
  intervalId = setInterval(() => slideImage(++imageIndex), 2000);
};

// autoSlide();  thoda bekar hora hai isse :)

const slideImage = () => {
  
  imageIndex = imageIndex === images.length ? 0 : imageIndex < 0 ? images.length - 1 : imageIndex;
  carousel.style.transform = `translate(-${imageIndex * 100}%)`;
};
const updateClick = (e) =>{
  clearInterval(intervalId);
  imageIndex += e.target.id === "next" ? 1 : -1;
  slideImage(imageIndex);
  autoSlide();
};
buttons.forEach((button) => button.addEventListener("click", updateClick));
wrapper.addEventListener("mouseover", () => clearInterval(intervalId));
wrapper.addEventListener("mouseleave", autoSlide);
