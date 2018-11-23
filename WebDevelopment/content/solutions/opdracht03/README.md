# Uitwerking opdracht 03
Voor deze opdracht weer twee uitwerkingen met verschillende aanpak.

### Variant A
In de eerste variant (zie map A) zoeken we het bedoelde element op via `document.getElementById()` functie

```javascript
  var objOrderedList = document.getElementById("mijnlijstje");

```

Als we dat element eenmaal aan een variabele hebben toegewezen, kunnen we het gebruiken om de HTML van dat element te vullen.
In de eerste variant doen we dat op een doeltreffende, zij het wat ouderwetse manier:
```javascript
objOrderedList.innerHTML += "<li>" + items[i] ;
```
Wat hier in als eerste opvalt is dat je in `<ol>`-element bij het `<li>`-element de afsluitende `</li>` mag weglaten. Zie ook 
de documentatie van het World Wide Web Consortium (W3C). Dit is de instantie die de HTML5-standaard formeel bepaalt en 
vaststeld en het uiteindelijk tot standaard verklaart. Leer deze documentatie lezen!

De manier waarop we de lijst vullen is door het *attribuut* "innerHTML" steeds verder uit te breiden. Er had ook kunnen staan:
```javascript
objOrderedList.innerHTML = objOrderedList.innerHTML + "<li>" + items[i] ;
```
Maar de eerste variant is korter en prima leesbaar.

Wat er onder water gebeurt met het toekennen van tekst aan het attribuut `innerHTML`, is dat de HTML-parser weer aan het werk moet:
deze gaat de HTML die je opgeeft interpreteren en omzetten in objecten, en plaatst deze in de DOM. Dat kan soms erg handig
zijn, maar heeft ook zo zijn nadelen. 
  * traag: je zet weer een interpreter aan het werk
  * als je bepaalde attributen (zoals een eventhandler voor click-events) wilt aanpassen moet je weer gaan zoeken in de
  nieuwe DOM-object (met bijv. `document.getElementById`).
  
Daarom gaan we het in variant B anders doen.

### Variant B
In de tweede variant doen het anders: daar maken we netjes een HTML-element aan van het type LI en voegen deze toe
aan de DOM:

```javascript
    var objListItem = document.createElement("li");
    objListItem.textContent = items[i];
    ol.appendChild(objListItem);
```

Daarvoor is wel meer code nodig, maar je krijgt ook meer controle over wat je er mee wilt doen. Hoe dat werkt zien we later,
maar je kunt aan een stukje tekst geen functie koppelen om het click-event te koppelen. Aan een object zoals de variabele `objListItem` 
kan dat wel. 

We gebruiken verder niet meer het attribuut `innerHTML` maar `textContent` om de getoonde tekst van het `li` element te vullen.
Als we alle attributen van het `objListItem` hebben aangepast, voegen we het toe aan de DOM. 

## Referenties:
  * [Document Object Model](https://nl.wikipedia.org/wiki/Document_Object_Model)
  * [GetElementByID](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)
  * [CreateElement](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
  * [documentElement](https://developer.mozilla.org/en-US/docs/Web/API/Document/documentElement)
  * [W3C standard - LI element](https://www.w3.org/TR/html52/grouping-content.html#the-li-element)