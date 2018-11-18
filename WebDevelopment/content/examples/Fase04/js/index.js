// only execute the initPage function when the document is done loading.
$(document).ready(initPage);

/**
 * Assigns classes to all the P-elements in the indicated container
 * @param container Only P-elements in this container will be handled
 */
function assignClasses(container){

    // now find all the P-elements we just added in the container, and assign a class to it.
    $("P", container).addClass("counter");

    // do the same but subtle difference: only assign when index is even
    $("P", container).each(
        function(idx,item) {
            if (idx %2 ==0 ) $(item).addClass("blue");
        }
    );

    // now select the P-items that have the number one in the displayed text
    $("p:contains('1')", container).addClass("red");

    // select all PARAGRAPHS that have a sibling PARAGRAPH element and assign class 'double'
    // notice how the very first P-element doesn't get this class
    // the node that gets selected through this jquery-selector is the SECOND node.
    $("P+P",container).addClass("double");

    // find the last child of a certain type (P-element) within the parent (#container)
    $("#container p:last-child").addClass("last");

    // explain what this does
    $("p:gt(-4)").addClass("last-three");

}//assignClasses

/**
 * a function to create a click handler for all the P-elements in the indicated container
 * @param container Only P-elements in this container will be handled
 */
function createClickHandler(container){

    // create a click-handler that will report the assigned classes
    var classReport = $("#classlist");

    $("p", container).on("click" ,function(evt){

        // show which item is clicked
        // - find the place where to show the text of the clicked item
        var spanReport = $("#report P SPAN");

        // - find the text of the second SPAN that was clicked (DIV > UL > LI > SPAN + SPAN)
        var spanText = $("span+span", this).text();
        $(spanReport).text(spanText);

        // list all the class names in a bullit list
        // - clear current content
        $(classReport).empty();

        // - loop all the classnames (attribute classList) and create LI-elements
        $.each(this.classList, function(idx, item){
            var newItem = $("<li>").text(item);
            $(classReport).append(newItem);
        });
    });

}//createClickHandler

/**
 * Initialises the page
 */
function initPage(){
    // define an array
    var items= ['One','Two','Three','Four','Five','Six','Seven','Eight'];

    // in the DOM search for a HTML element with attribute ID = "container"
    var container = $("#container");

    // now cycle through the array using a jquery function. this function takes two parameters:
    // - the array
    // - a function with two parameters: an index number and the item from the array currently being processed
    $.each(items, function(idx, item){
        // create a new PARAGRAPH element ('<p>') and after creation immediately set the
        // text attribute to the value of the array index of the item
        var newP = $("<p>");
        var span1 = $("<span>").text(idx + ":");
        var span2 = $("<span>").text(item);

        $(newP).append(span1).append(span2);

        // add the new paragraph to the container
        $(container).append(newP);
    });

    assignClasses(container);
    createClickHandler(container);

}//initPage()

