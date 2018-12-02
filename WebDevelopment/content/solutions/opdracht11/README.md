# Uitwerking opdracht 11
We installeren eerst eenvoudig een click-handler op alle juiste `<li>`-items:

```javascript

$(document).ready(initPage);

function initPage(){
    $("div.container ul li").on("click",clickHandler);
}//initPage
```

Vervolgens schrijven we de click-handler:

```javascript

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

```

Eerst maakt de click-handler een referentie naar het element waar we de wijzigingen gaan doorvoeren. Hoewel computers 
en browser tegenwoordig erg snel zijn, is het zoeken in de DOM erg kostbaar. Vooral bij complexe DOM-structuren kost
dit relatief veel tijd.

Daarna maken we de huidige lijst met `<li>`-elementen leeg.

Voor de duidelijkheid halen we de CLASS-names van het aangeklikte element op. Dat levert een DOMNodeList (zie bij de referenties).
Deze kunnen we eenvoudig met een FOR-loop aflopen en zo nieuwe `<li>`-elementen maken. We gebruiken de expressie
`classes[i]` twee keer om deze aan het attribuut `text` en `class` toe te wijzen. 

Als laatste voegen we het nieuwe `<li>`-element toe aan de lijst van de gevonde `<ul>`. 

Je weet nu hoe je eenvoudig de DOM kan manipuleren.

## Referenties
[MDN classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)