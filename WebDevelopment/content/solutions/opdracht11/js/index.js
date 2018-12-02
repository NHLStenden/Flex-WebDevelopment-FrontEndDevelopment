$(document).ready(initPage);

function initPage(){
    $("div.container ul li").on("click",clickHandler);
}//initPage

function clickHandler(evt){
    // maak referentie naar het element waar we gaan wijzigen. door dit maar één keer te doen
    // wordt er minder in de DOM gezocht, en dat scheelt veel tijd
    var report = $("#report");

    // haal de lijst met CLASS-names op van het aangeklikte item: de waarde van THIS verwijst naar het aangeklikte item.
    var classes = this.classList;

    // maak de huidige lijst met LI-elementen leeg.
    $(report).empty();

    // maak een nieuwe lijst met LI-elementen
    for(var i=0;i<classes.length;i++) {
        // maak een nieuw element
        var liItem = $("<li/>");

        // ken de tekst toe en voeg een CLASS toe (chaining!)
        $(liItem).text(classes[i]).addClass(classes[i]);

        // voeg het nieuwe item toe aan de lijst
        $(report).append(liItem);
    }//for

}//clickHandler

