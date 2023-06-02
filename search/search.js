function getIndex(){
    var data = [
        {
            "Name" : "HTML",
            "Description" : "hyper text markup language",
            "URL" : "../subjects/computer_courses.html#html"
        },
        {
            "Name" : "p-tag",
            "Description" : "paragraph tag",
            "URL" : "../subjects/computer_courses.html#html"
        },
        {
            "Name" : "h1...h6",
            "Description" : "heading tag",
            "URL" : "../subjects/computer_courses.html#html"
        },
        {
            "Name" : "a-tag",
            "Description" : "Attribute",
            "URL" : "../subjects/computer_courses.html#html"
        },
        {
            "Name" : "img tag",
            "Description" : "image tag",
            "URL" : "../subjects/computer_courses.html#html"
        },
        {
            "Name" : "br tag",
            "Description" : "line break",
            "URL" : "../subjects/computer_courses.html#html"
        },
        {
            "Name" : "pre",
            "Description" : "preformatted text.",
            "URL" : "../subjects/computer_courses.html#html"
        },
        {
            "Name" : "style",
            "Description" : "Setting the style of an HTML element",
            "URL" : "../subjects/computer_courses.html#html"
        },
        {
            "Name" : "style",
            "Description" : "Setting the style of an HTML element",
            "URL" : "../subjects/computer_courses.html#html"
        },
        {
            "Name" : "Background Color",
            "Description" : "for giving color to the background",
            "URL" : "../subjects/computer_courses.html#css"
        },
        {
            "Name" : "text-color",
            "Description" : "for giving color to the text",
            "URL" : "../subjects/computer_courses.html#css"
        },
        {
            "Name" : "fonts",
            "Description" : "The CSS font-family property defines the font to be used for an HTML element",
            "URL" : "../subjects/computer_courses.html#css"
        },
        {
            "Name" : "text size",
            "Description" : "The CSS font-size property defines the text size for an HTML element:",
            "URL" : "../subjects/computer_courses.html#css"
        },
        {
            "Name" : "Text Alignment",
            "Description" : "The CSS text-:align property defines the horizontal text alignment for an HTML element",
            "URL" : "../subjects/computer_courses.html#css"
        },
        {
            "Name" : "b-tag",
            "Description" : "bold text",
            "URL" : "../subjects/computer_courses.html"
        },
        {
            "Name" : "strong",
            "Description" : "important text",
            "URL" : "../subjects/computer_courses.html#html"
        },
        {
            "Name" : "i",
            "Description" : "italic text",
            "URL" : "../subjects/computer_courses.html#html"
        },
        {
            "Name" : "em tag",
            "Description" : " Emphasized text",
            "URL" : "../subjects/computer_courses.html#html"
        },
        {
            "Name" : "mark",
            "Description" : "marked text",
            "URL" : "../subjects/computer_courses.html#html"
        },
        {
            "Name" : "small tag",
            "Description" : "smaller text",
            "URL" : "../subjects/computer_courses.html#html"
        },
        {
            "Name" : "del tag",
            "Description" : "deleted text",
            "URL" : "../subjects/computer_courses.html#html"
        },
        {
            "Name" : "ins tag",
            "Description" : "inserted text",
            "URL" : "../subjects/computer_courses.html#html"
        },
        {
            "Name" : "sub",
            "Description" : "subscript text",
            "URL" : "../subjects/computer_courses.html#html"
        },
        {
            "Name" : "sup",
            "Description" : "superscript text",
            "URL" : "../subjects/computer_courses.html#html"
        },
        {
            "Name" : "blockquote",
            "Description" : "The HTML blockquote element defines a section that is quoted from another source.",
            "URL" : "../subjects/computer_courses.html#html"
        },
        {
            "Name" : "q tag",
            "Description" : "The HTML q tag defines a short quotation.",
            "URL" : "../subjects/computer_courses.html#html"
        },
        {
            "Name" : "abbr",
            "Description" : "The HTML abbr tag defines an abbreviation or an acronym, like HTML, CSS, Mr., Dr., ASA, ATM.",
            "URL" : "../subjects/computer_courses.html#html"
        },
        {
            "Name" : "address tag",
            "Description" : "for address ",
            "URL" : "../subjects/computer_courses.html#html"
        },
        {
            "Name" : "city",
            "Description" : "for city",
            "URL" : "../subjects/computer_courses.html#html"
        },
        {
            "Name" : "bdo",
            "Description" : " Bi-Directional Override",
            "URL" : "../subjects/computer_courses.html#html"
        },
        {
            "Name" : "comments",
            "Description" : "!-- This is a comment --",
            "URL" : "../subjects/computer_courses.html#html"
        },
        {
            "Name" : "color",
            "Description" : "giving color to our text,bg and etc",
            "URL" : "../subjects/computer_courses.html#css"
        },
        {
            "Name" : "list tag",
            "Description" : "for giving list to the html",
            "URL" : "../subjects/computer_courses.html#html"
        },
        {
            "Name" : "or",
            "Description" : "order list",
            "URL" : "../subjects/computer_courses.html#html"
        },
        {
            "Name" : "ul",
            "Description" : "unordered list",
            "URL" : "../subjects/computer_courses.html#html"
        },
        {
            "Name" : "div",
            "Description" : "container tag",
            "URL" : "../subjects/computer_courses.html#html"
        },
        {
            "Name" : "span",
            "Description" : "The span element is an inline container used to mark up a part of a text, or a part of a document.",
            "URL" : "../subjects/computer_courses.html#html"
        },
        {
            "Name" : "forms tag",
            "Description" : "The HTML form element is used to create an HTML form for user input",
            "URL" : "../subjects/computer_courses.html#html"
        },
        {
            "Name" : "input",
            "Description" : "for the input",
            "URL" : "../subjects/computer_courses.html#html"
        },
        {
            "Name" : "label",
            "Description" : "for the label",
            "URL" : "../subjects/computer_courses.html#html"
        },
        {
            "Name" : "button",
            "Description" : "The input type=submit defines a button for submitting the form data to a form-handler.",
            "URL" : "../subjects/computer_courses.html#html"
        },
        {
            "Name" : "target",
            "Description" : "The target attribute specifies where to display the response that is received after submitting the form.",
            "URL" : "../subjects/computer_courses.html#html"
        },
        {
            "Name" : "method",
            "Description" : "The method attribute specifies the HTTP method to be used when submitting the form data.",
            "URL" : "../subjects/computer_courses.html#html"
        },
        {
            "Name" : "text area",
            "Description" : "The textarea element defines a multi-line input field (a text area)",
            "URL" : "../subjects/computer_courses.html#html"
        },
        {
            "Name" : "input attributes",
            "Description" : "The input value attribute specifies an initial value for an input field",
            "URL" : "../subjects/computer_courses.html#html"
        },
        {
            "Name" : "The readonly Attribute",
            "Description" : "The input readonly attribute specifies that an input field is read-only.",
            "URL" : "../subjects/computer_courses.html#html"
        },
        {
            "Name" : "The disabled Attribute",
            "Description" : "The input disabled attribute specifies that an input field should be disabled.",
            "URL" : "../subjects/computer_courses.html#html"
        },
        {
            "Name" : "The autofocus Attribute",
            "Description" : "The input autofocus attribute specifies that an ",
            "URL" : "../subjects/computer_courses.html#html"
        },
        {
            "Name" : "The height and width Attributes",
            "Description" : "The input height and width attributes specify the height and width of an input type=image element.",
            "URL" : "../subjects/computer_courses.html#html"
        },
        {
            "Name" : "css",
            "Description" : " Cascading Style Sheets",
            "URL" : "../subjects/computer_courses.html#css"
        },
        {
            "Name" : "color",
            "Description" : "for giving color in different ways",
            "URL" : "../subjects/computer_courses.html#css"
        },
        {
            "Name" : "border",
            "Description" : "define the type of out border",
            "URL" : "../subjects/computer_courses.html#css"
        },
        {
            "Name" : "margin",
            "Description" : "Margins are used to create space around elements, outside of any defined borders.            ",
            "URL" : "../subjects/computer_courses.html#css"
        },
        {
            "Name" : "padding",
            "Description" : "Padding is used to create space around an element's content, inside of any defined borders.",
            "URL" : "../subjects/computer_courses.html#css"
        },
        {
            "Name" : "css-height/width",
            "Description" : "for giving height and width to our text",
            "URL" : "../subjects/computer_courses.html#css"
        },
        {
            "Name" : "outline",
            "Description" : "it stand that the how your outline of a particular text is look like",
            "URL" : "../subjects/computer_courses.html#css"
        },
        {
            "Name" : "text",
            "Description" : "how is your text is or its types",
            "URL" : "../subjects/computer_courses.html#css"
        },
        {
            "Name" : "fonts",
            "Description" : "the type of writing",
            "URL" : "../subjects/computer_courses.html#css"
        },
        {
            "Name" : "table",
            "Description" : "for making content in tabular form",
            "URL" : "../subjects/computer_courses.html#html"
        },
        {
            "Name" : "position",
            "Description" : "it said about the position of the text",
            "URL" : "../subjects/computer_courses.html#css"
        },
        {
            "Name" : "overflow",
            "Description" : "The CSS overflow property controls what happens to content that is too big to fit into an area.",
            "URL" : "../subjects/computer_courses.html#css"
        },
        {
            "Name" : "float",
            "Description" : "The float property is used for positioning and formatting content",
            "URL" : "../subjects/computer_courses.html#css"
        },
        {
            "Name" : "nav",
            "Description" : "navigation bar",
            "URL" : "../subjects/computer_courses.html#html"
        },
        {
            "Name" : "dropdown",
            "Description" : "to drop-down function content",
            "URL" : "../subjects/computer_courses.html#html"
        },
        {
            "Name" : "forms",
            "Description" : "to making form",
            "URL" : "../subjects/computer_courses.html#html"
        },
        {
            "Name" : "gradient",
            "Description" : "giving the h-color ",
            "URL" : "../subjects/computer_courses.html#css"
        },
        {
            "Name" : "script",
            "Description" : "to give js to the content",
            "URL" : "../subjects/computer_courses.html#html"
        },
        {
            "Name" : "document.write",
            "Description" : "For testing purposes, it is convenient to use document.write()",
            "URL" : "../subjects/computer_courses.html#javascript"
        },
        {
            "Name" : "statement",
            "Description" : "In a programming language, these programming instructions are called statements.",
            "URL" : "../subjects/computer_courses.html#javascript"
        },
        {
            "Name" : "variables",
            "Description" : "to declaration of a value,let,const,var",
            "URL" : "../subjects/computer_courses.html#javascript"
        },
        {
            "Name" : "Arithmetic Operators",
            "Description" : "for doing some needful operations in our program",
            "URL" : "../subjects/computer_courses.html#javascript"
        },
        {
            "Name" : "Assignment Operators",
            "Description" : "for assign to the value as per their need",
            "URL" : "../subjects/computer_courses.html#javascript"
        },
        {
            "Name" : "datatype",
            "Description" : "which type of input take",
            "URL" : "../subjects/computer_courses.html#javascript"
        },
        {
            "Name" : "function",
            "Description" : "for doing a functionality which work on calling-by-function in a program",
            "URL" : "../subjects/computer_courses.html#javascript"
        },
        {
            "Name" : "object",
            "Description" : "assign the object value",
            "URL" : "../subjects/computer_courses.html#javascript"
        },
        {
            "Name" : "string",
            "Description" : "taking the names in double q...()",
            "URL" : "../subjects/computer_courses.html#javascript"
        },
        {
            "Name" : "number",
            "Description" : "mathematical operation on some number or with 17l",
            "URL" : "../subjects/computer_courses.html#javascript"
        },
        {
            "Name" : "bigint",
            "Description" : "for taking big inputs",
            "URL" : "../subjects/computer_courses.html#javascript"
        },
        {
            "Name" : "array",
            "Description" : "An array is a special variable, which can hold more than one value",
            "URL" : "../subjects/computer_courses.html#javascript"
        },
        {
            "Name" : "dates",
            "Description" : "for declaring the dates",
            "URL" : "../subjects/computer_courses.html#javascript"
        },
        {
            "Name" : "booleans",
            "Description" : "taking the statement is true of false",
            "URL" : "../subjects/computer_courses.html#javascript"
        },
        {
            "Name" : "if else",
            "Description" : "giving under some conditions statements",
            "URL" : "../subjects/computer_courses.html#javascript"
        },
        {
            "Name" : "switch",
            "Description" : "giving under some conditions statements",
            "URL" : "../subjects/computer_courses.html#javascript"
        },
        {
            "Name" : "loop",
            "Description" : "giving under some conditions statements",
            "URL" : "../subjects/computer_courses.html#javascript"
        },
        {
            "Name" : "break",
            "Description" : "giving under some conditions statements",
            "URL" : "../subjects/computer_courses.html#javascript"
        },
        {
            "Name" : "dom",
            "Description" : "Document Object Model",
            "URL" : "../subjects/computer_courses.html#javascript"
        },
    ];

    return data;
}

function search(event){
    event.preventDefault();
    var data = getIndex();
    const THRESHOLD = 0.8;
    
    let searchQuery = document.querySelector(".search-input").value;
    let result = [];
    for (let index = 0; index < data.length; index++) {
        if (jaroWinkler(data[index].Name, searchQuery) >= THRESHOLD) {
            result.push(data[index]);
            data.splice(index, 1);
            index--;
        }
    }

    for (let index = 0; index < data.length; index++) {
        if (jaroWinkler(data[index].Description, searchQuery) > THRESHOLD) {
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
        container.style.color="white";
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

    document.querySelector(".search-prompt").style.marginTop = "6rem";

    domLast.appendChild(container);

}


///////////////////////////////////////////////////////////
// Based on Monge-Elkan string comparison algorithm
//////////////////////////////////////////////////////////

function jaroWinkler(s, t) {
    // Calculate length of both strings
    const n = s.length;
    const m = t.length;

    if (n === 0 || m === 0) {
        return 0;
    }

    // Set matching window size
    const windowSize = Math.floor(Math.max(n, m) / 2) - 1;

    // Initialize arrays for matches and transpositions
    const sMatches = new Array(n).fill(false);
    const tMatches = new Array(m).fill(false);
    let matches = 0;
    let transpositions = 0;

    // Find matches and transpositions within the matching window
    for (let i = 0; i < n; i++) {
        let start = Math.max(0, i - windowSize);
        let end = Math.min(i + windowSize + 1, m);

        for (let j = start; j < end; j++) {
            if (!tMatches[j] && s[i] === t[j]) {
                sMatches[i] = true;
                tMatches[j] = true;
                matches++;
                break;
            }
        }
    }

    // If no matches were found, return 0
    if (matches === 0) {
        return 0;
    }

    // Count transpositions
    let k = 0;

    for (let i = 0; i < n; i++) {
        if (sMatches[i]) {
            while (!tMatches[k]) {
                k++;
            }

            if (s[i] !== t[k]) {
                transpositions++;
            }

            k++;
        }
    }

    // Calculate similarity ratio and prefix scale
    const similarity = (matches / n + matches / m + (matches - transpositions / 2) / matches) / 3;
    const prefixScale = Math.min(4, getCommonPrefixLength(s, t)) / 10;

    // Calculate Jaro-Winkler similarity
    return similarity + prefixScale * (1 - similarity);
}

function getCommonPrefixLength(s, t) {
    let i = 0;

    while (i < s.length && i < t.length && s[i] === t[i]) {
        i++;
    }

    return i;
}

function jaroWinklerSimilarity(s1, s2) {
    const s = s1.split(" ");
    const t = s2.split(" ");
    let cummax = 0;

    for (let i = 0; i < s.length; i++) {
        let maxscore = 0;

        for (let j = 0; j < t.length; j++) {
            maxscore = Math.max(maxscore, jaroWinkler(s[i], t[j]));
        }

        cummax += maxscore;
    }

    return cummax / s.length;
}