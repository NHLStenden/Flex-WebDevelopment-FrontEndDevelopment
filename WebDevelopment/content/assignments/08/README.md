# Opdracht 08
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
  * het pad naar het aangeklikte element (bijv. Body->OL#mijnlijstje->LI[3]
  * de naam van het element (P, LI, BODY etc)
  * de textinhoud van het aangeklikte element
  
Gebruik voor de eerste bullit een recursieve functie! Maak twee varianten:
  * de eerste begint bij de body en daalt af in de structuur
  * de tweede begint bij het aangeklikte element en gaat omhoog in de structuur
  
  return getPathRecursiveDown([].slice.call(arrItems,1)) + "/" + text;
  

