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

        objListItem.addEventListener("click", clickHandler);

        ol.appendChild(objListItem);
    }

}//initPage()

function clickHandler(evt){
    alert("ik ben aangeklikt.")
}//clickHandler()