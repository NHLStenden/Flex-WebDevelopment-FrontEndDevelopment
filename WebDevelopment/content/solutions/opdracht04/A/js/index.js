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

        objListItem.addEventListener("click", function(evt){alert("ik ben aangeklikt.")});

        // onderstaande regel is de zeer verkorte notatie (Arrow notation of Lambda function)
        //objListItem.addEventListener("click", evt => alert("ik ben aangeklikt."));

        ol.appendChild(objListItem);
    }

}//initPage()