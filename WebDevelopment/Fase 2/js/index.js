window.onload = function(){ //* Anonymous function called when all HTML objects are loaded in the DOM
    initPage();
}//window.onload

/**
 * Function called to initialise the page
 */
function initPage(){
    // search for the container using and ID-selector and store in JS variable "container"
    // https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
    var container = document.getElementById("container1");

    // modify the content of the container to simple text content
    // only execute the code if the container is not null (not found)
    if (container) container.textContent = "Hello World (Fase 2)";

    // now create a new P-element and add it to the end of the current document ("DOM tree body")
    // https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
    var newDiv = document.createElement("P");
    // set classname
    newDiv.className = 'welkom';

    // set content of the newly created element
    newDiv.innerHTML = "<span>Hello</span>World";

    // add it to the DOM
    // https://developer.mozilla.org/en-US/docs/Web/API/Document/documentElement
    document.documentElement.appendChild(newDiv);
}
