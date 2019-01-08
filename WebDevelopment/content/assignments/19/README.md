# Opdracht 19 - Templates

In deze opdracht gaan we gebruik maken van het HTML5 element `<template>`. In dit element kun je allerlei HTML-elementen
kwijt. Tijdens het opbouwen van de pagina wordt deze inhoud compleet genegeerd. Pas via Javascript kun je er iets mee bouwen.

Een voorbeeld:
```html
<template id="table-rows">
  <tr>
      <td></td>
      <td></td>
      <td><img/></td>
  </tr>  
</template>
```

Dit is een template waar als inhoud één tabel rij (`<tr>`) in zit, waar weer 3x een tabel-cel ( `<td>`) in opgenomen is.
In de laatste tabel-cell is ruimte voor een afbeelding (`<img>`).

We zouden dit template prima kunnen gebruiken om een lege tabel te vullen. Op basis van een set met gegevens maken we
steeds op basis van dit template een nieuwe regel met gegevens. Er is dus ook nog een stukje basis-HTML nodig. Bijvoorbeeld
een tabel voor het uitlijsten van films, met hun jaartal, naam & posterafbeelding.

```html
<body>
  <div class="container">
    <table>
      <thead>
          <th>Jaartal</th>
          <th>Naam</th>
          <th>Afbeelding</th>
      </thead>
      <tbody/>
    </table>
  </div>
</body>
```
Bovenstaande HTML levert een tabel op met alleen een header-regel, maar zonder body. Deze Body gaan we vullen met 
Javascript. Dat gaat door middel van de volgende stappen:
  1. zoek de template op in de DOM (door middel van `document.getElementById` )
  1. maak een kloon van de gevonden template
  1. pas de inhoud aan de kloon aan (dus: stop de gegevens er in) 
  1. voer de kloon (met gegevens er in) toe aan de DOM
  1. herhaal vanaf stap 1
  
  
Uiteindelijk ziet de basis HTML er dus als volgt uit:
```html
<body>
  <div class="container">
    <table>
      <thead>
          <th>Jaartal</th>
          <th>Naam</th>
          <th>Afbeelding</th>
      </thead>
      <tbody/>
    </table>
  </div>
  <template id="table-rows">
    <tr>
        <td></td>
        <td></td>
        <td><img/></td>
    </tr>  
  </template>

</body>

```

De stappen in code:
### Stap 1
Zoek het `<template>`-element op.
```javascript
  const myTemplate = document.getElementById("table-rows")
```

### Stap 2
Maak een kloon. dat doe je met document.importNode ([MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/importNode))
Door als tweede waarde `true` te gebruiken wordt een diepe kloon gemaakt (vereist!).
```javascript
  const clone = document.importNode(myTemplate.content, true);
```
### Stap 3
Pas de inhoud van de kloon aan door elementen op te zoeken en data toe te wijzen. Elementen opzoeken doe je door niet
aan het `document` een vraag te stellen (zoals `.getElementById()` of `.querySelector()`),maar aan de gekloonde template.

```javascript
  const cells = clone.querySelectorAll("td");
  const img   = clone.querySelectorAll("td img");
  cells[0].textContent = "1982";
  cells[1].textContent = "The Return of Martin Guerre";
  img.src = "https://m.media-amazon.com/images/M/MV5BNjdiYjBjMDYtNmFjNy00MDg0LWE2YTctMjA0ODhmMGQwNDM0XkEyXkFqcGdeQXVyMjI4MjA5MzA@._V1_SX300.jpg";
```

### Stap 4
Voeg nu de aangepaste clone toe aan de tabel. Dit doen we door de tabel op te zoeken en de functie `.appendChild()`
aan te roepen met als parameter de kloon.
```javascript
  const table = document.querySelector(".container table");
  table.appendChild(clone);
```

## Opdracht
Maak een lijst met films waar een bepaalde zoekterm in voorkomt. Bijvoorbeeld 'Martin'. Dit levert onderstaande URL op 
in de OMDB:
* http://www.omdbapi.com/?apikey=89f91ba6&type=movie&r=json&s=Martin&page=1

Eisen aan de opdracht:
  * Maak gebruik van het `<template>`-element
  * gebruik bovenstaande URL om gegevens op te vragen via een XMLHttpRequest (XHR). Zie ook [opdracht 12](../../solutions/opdracht12/README.md).
  * Maak gebruik van de jQuery functie `$.param()` om de URL-query string te bouwen 

Tips
  * Let goed op dat je het opzoeken van elementen in de DOM zo weinig mogelijk doet! 

## Referenties
  * [HTML5 Templates](https://www.w3schools.com/tags/tag_template.asp)
  * [MDN Template tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template)
  * [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/importNode)
  * [Jquery Param-functie](http://api.jquery.com/jquery.param/)