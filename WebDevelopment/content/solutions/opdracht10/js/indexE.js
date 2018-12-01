$(document).ready(initPage);

function initPage(){
    var container = $("div.container");
    var olElement = $("<ol>");

    $(container).append(olElement);

    for(var i=0;i<10;i++){
        var liElement = $("<li>");
        $(liElement).addClass("clickable")
            .attr("data-mijnVolgNr",i)
            .attr("data-mijn-volg-nr",i)
            .text("Item " + i)
            .on("click",{volgnummer:i}, clickHandler);
        $(olElement).append(liElement);
    }
}//initPage

function clickHandler(evt){
    // haal het data-object op dat meegegeven is bij het installeren van de click-handler (==> "{volgnummer:i}" ).
    var data = evt.data;

    // haal alle attributen op waarvan de attribuutnaam begint met "data-"
    var dataSet = this.dataset;

    // laat het attribuut "data-mijnvolgnr" zien
    console.log("data-mijnVolgNr = " + dataSet.mijnvolgnr);

    // laat het attribuut "data-mijn-volg-nr" zien
    console.log("data-mijn-volg-nr = " + dataSet.mijnVolgNr);

    // laat het volgnummer zien uit het event-data-object
    console.log("waarde van i was " + data.volgnummer);

    // verwijder alle classes "SELECTED"
    $("li.SELECTED").removeClass("SELECTED");

    // zet de class "SELECTED" aan of uit (wel of niet aanwezig)
    $(this).toggleClass("SELECTED");
}//clickHandler

