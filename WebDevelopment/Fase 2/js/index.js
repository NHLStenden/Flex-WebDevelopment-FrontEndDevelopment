window.onload = function(){
    initPage();
}

function initPage(){
    var container = document.getElementById("container");
    container.textContent = "Hello World (Fase 2)";

    var newDiv = document.createElement("P");
    newDiv.className = 'welkom';
    newDiv.innerHTML = "<span>Hello</span>World";
    document.documentElement.appendChild(newDiv);
}
