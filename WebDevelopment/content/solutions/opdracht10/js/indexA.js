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
            .text("Item " + i);
        $(olElement).append(liElement);
    }
}//initPage
