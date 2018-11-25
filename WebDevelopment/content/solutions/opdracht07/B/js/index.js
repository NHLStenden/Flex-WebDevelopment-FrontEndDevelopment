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

    var items = document.querySelectorAll("#mijnlijstje li");
    for(const item  of items){
        item.addEventListener("click", clickHandler);
    }

    var body = document.querySelector("body");
    body.addEventListener("click", function(evt){alert("click on body")});

}//initPage()

function clickHandler(evt){
    console.log(this);
    console.log(evt);

    evt.preventDefault();
    evt.stopPropagation();

    var text1 = this.textContent;
    var text2 = evt.target.textContent;

    alert(text1 + "/" + text2);
}//clickHandler()