# Opdracht 08 - DOM & Body event handling
In de vorige opdracht hebben we zowel een click handler gebouwd voor de `<body>` als de list-items `<li>`.
In de volgende variant gaan we alleen een click handler bouwen voor de `<body>` en proberen we er op een andere
manier achter te komen waar het click-event als eerste is geland.

Maak gebruik van onderstaande `<body>`

```html
<body>
  <h1>Welkom bij opdracht 8</h1>
  <P>In onderstaande lijst staan 15 items</P>
  <ol id="mijnlijstje">

  </ol>

  <P>Dit is een stuk bestaande tekst. Klik eens op mij!</P>
</body>
```


Schrijf een functie die de click-events van de body afvangt en de volgende zaken rapporteert:
  1. het pad naar het aangeklikte element (bijv. Body->OL#mijnlijstje->LI[3]
  1. de naam van het element (P, LI, BODY etc)
  1. de textinhoud van het aangeklikte element
  
Gebruik voor de eerste subopdracht een recursieve functie! Maak twee varianten:
  * de eerste begint bij de body en daalt af in de structuur
  * de tweede begint bij het aangeklikte element en gaat omhoog in de structuur

  

