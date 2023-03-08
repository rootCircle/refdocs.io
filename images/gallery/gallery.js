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
})