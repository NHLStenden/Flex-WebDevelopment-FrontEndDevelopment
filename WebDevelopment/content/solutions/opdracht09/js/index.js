window.onload = initPage;

function initPage(){
    var items = [
        "Martin",
        "Bas",
        "Stefan",
        "Piet",
        "Klaas",
        "Jan",
        "Aswien",
        "Karel",
        "Bert",
        "Mark",
        "Arjan",
        "ABCDE",
        "x",
        "y",
        "z",
    ];
    var ol = document.getElementById("mijnlijstje");
    for (var i in items){
        var objListItem = document.createElement("li");
        objListItem.textContent = items[i];

        ol.appendChild(objListItem);
    }

    var body = document.querySelector("body");
    body.addEventListener("click", clickHandler);

}//initPage()

function clickHandler(evt){
    console.log(this);
    console.log(evt);

    var text = evt.target.textContent;
    var elType = evt.target.tagName;

    alert("U heeft geklikt op een element van het type " + elType + " met inhoud :: " + text );

    var path = evt.path;
    var upText = getPathRecursiveUp(path);
    var downText = getPathRecursiveDown(path);

    alert("Up : " + upText  + " -------------- Down: " + downText);

}//clickHandler()


function getPathRecursiveUp(arrItems){
  if (arrItems.length == 0) return "";
  var newPath = arrItems;
  var text =convertPathPartToString(arrItems[0]);
  return text + " > " + getPathRecursiveUp([].slice.call(newPath,1));
}//getPathRecursiveUp

function getPathRecursiveDown(arrItems){
    if (arrItems.length == 0) return " / ";
    var newPath = arrItems;
    var text = convertPathPartToString(arrItems[0]);
    return getPathRecursiveDown([].slice.call(arrItems,1)) + "/" + text;
}//getPathRecursiveDown

function convertPathPartToString(part){
    var name = "?";

    switch(part.constructor.name){
        case "HTMLLIElement":
        case "HTMLOListElement":
        case "HTMLBodyElement":
        case "HTMLHtmlElement":
        case "HTMLParagraphElement":
            name = part.tagName;
            break;
        case "HTMLDocument":
            name = "{Document}";
            break;
        case "Window":
            name = "{Window}";
            break;
    }

    return name;

}//convertPathPartToString
