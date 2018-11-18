window.onload = function(){ //* Anonymous function called when all HTML objects are loaded in the DOM
    initPage();
}//window.onload

/**
 * Function called to initialise the page
 */
function initPage(){
    // search for the container using and ID-selector and store in JS variable "container"
    // https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
    var container = document.getElementById("container");

    // modify the content of the container to simple text content
    // only execute the code if the container is not null (not found)
    if (container) container.textContent = "Hello World (Fase 2)";

    // code below will not add an element as there is no element with ID "container1".
    var container1 = document.getElementById("container1");
    if (container1) container1.textContent = "Again :: Hello World (Fase 2)";

    // now create a new P-element and add it to the end of the current document ("DOM tree body")
    // https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
    var newDiv = document.createElement("P");

    // set classname for link to CSS-styles
    newDiv.className = 'welkom';

    // set content of the newly created element
    newDiv.innerHTML = "<span>Hello</span>World";

    // add it to the DOM
    // https://developer.mozilla.org/en-US/docs/Web/API/Document/documentElement
    document.documentElement.appendChild(newDiv);


    // attach an event handler to the newly added DIV listening to the "click"-event
    newDiv.addEventListener("click", function(evt){
        // log the event to the console
        console.log(evt);

        // log the scope of the "this" variable
        console.log(this);

        // show a message
        alert("U heeft geklikt");
    });

    // Code below also works (first add event handler, then add it to the DOM)
    var newDiv2 = document.createElement("P");
    newDiv2.className = 'welkom';
    newDiv2.innerHTML = "<span>Hello</span>World (part 2)";
    newDiv2.addEventListener("click", function(evt){
        console.log(evt);
        console.log(this);
        alert("U heeft geklikt (2)");
    });

    document.documentElement.appendChild(newDiv2);

}//initPage()
