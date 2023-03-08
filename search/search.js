function getIndex(){
    var data = [
        {
            "Name" : "Data Structure and algorithm",
            "Description" : "Blah Blah",
            "URL" : "absolute url to the address of the course"
        },
        {
            "Name" : "Hurry",
            "Description" : "Blah Blah",
            "URL" : "absolute url to the address of the course"
        },
        {
            "Name" : "Dta Structure and algorithm",
            "Description" : "Blah Blah",
            "URL" : "absolute url to the address of the course"
        },
        {
            "Name" : "Data Struct and algorithm",
            "Description" : "Blah Blah",
            "URL" : "absolute url to the address of the course"
        }
    ]

    return data;
}

function search(){
    var data = getIndex();
    
    let searchQuery = document.querySelector(".search-input").value;
    let result = [];
    const exp = new RegExp(searchQuery, "gi");
    for (let index = 0; index < data.length; index++) {
        if (data[index].Name.match(exp) !== null) {
            result.push(data[index]);
            data.splice(index, 1);
            
            index--;
        }
    }

    for (let index = 0; index < data.length; index++) {
        if (data[index].Description.match(exp) !== null) {
            result.push(data[index]);
            data.splice(index, 1);
            
            index--;
        }
    }

    showResults(result);
    
}   


function showResults(resultData){

    var domLast = document.querySelector(".search-results");
    domLast.innerHTML="";
    
    if (domLast.previousElementSibling.tagName != "HR") {
        // add hr if no hr exists before
        var hr = document.createElement("hr");
        domLast.parentNode.insertBefore(hr, domLast);
    }

    

    var container = document.createElement("div");
    container.setAttribute("class", "container-fluid");

    if (resultData.length === 0) {
        container.innerHTML="No result found!";
        domLast.style.width="auto";
        container.style.fontSize="2.5rem";
        container.style.paddingTop="7rem";
    }

    for (let index = 0; index < resultData.length; index++) {
        let card = document.createElement("div");
        card.setAttribute("class", "card");
        
        let cardBody = document.createElement("div");
        container.setAttribute("class", "card-body");

        let title =  document.createElement("a");
        title.setAttribute("class", "card-title card-link");
        title.setAttribute("href", resultData[index].URL);
        title.innerHTML = resultData[index].Name;

        let desc = document.createElement("p");
        desc.setAttribute("class", "card-text");
        desc.innerHTML = resultData[index].Description;

        cardBody.appendChild(title);
        cardBody.appendChild(desc);
        card.appendChild(cardBody);
        container.appendChild(card);
    }

    document.querySelector(".search-prompt").style.marginTop = "auto";

    domLast.appendChild(container);

}