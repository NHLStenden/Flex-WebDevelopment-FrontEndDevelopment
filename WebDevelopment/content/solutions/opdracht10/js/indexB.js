$(document).ready(initPage);

function initPage(){
    var container = $("div.container");
    var olElement = $("<ol>");

    $(container).append(olElement);

    for(var i=0;i<10;i++){
        var liElement = $("<li>");
        $(liElement).addClass("clickable")
            .attr("data-mijnVolgNr",i)
            .attr("data-mijn-volg-nr","0" + i)
            .text("Item " + i)
            .on("click",{volgnummer:i}, clickHandler);
        $(olElement).append(liElement);
    }
}//initPage

function clickHandler(evt){
    // vanilla Javascript
    var text1 =this.textContent;

    //jQuery method
    var text2 =$(this).text();

    alert(text1);
    alert(text2);
}