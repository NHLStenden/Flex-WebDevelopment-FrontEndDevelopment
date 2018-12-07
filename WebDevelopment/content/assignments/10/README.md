# Opdracht 10a - jQuery advanced
Maak met jQuery onderstaande `<body>`. Het startpunt is `<div class="container">` in de `<body>`.

```html
<body>
  <div class="container">
    <ol>
      <li class="clickable" data-mijnvolgnr="0" data-mijn-volg-nr="00">Item 0</li>
      <li class="clickable" data-mijnvolgnr="1" data-mijn-volg-nr="01">Item 1</li>
      <li class="clickable" data-mijnvolgnr="2" data-mijn-volg-nr="02">Item 2</li>
      <li class="clickable" data-mijnvolgnr="3" data-mijn-volg-nr="03">Item 3</li>
      <li class="clickable" data-mijnvolgnr="4" data-mijn-volg-nr="04">Item 4</li>
      <li class="clickable" data-mijnvolgnr="5" data-mijn-volg-nr="05">Item 5</li>
      <li class="clickable" data-mijnvolgnr="6" data-mijn-volg-nr="06">Item 6</li>
      <li class="clickable" data-mijnvolgnr="7" data-mijn-volg-nr="07">Item 7</li>
      <li class="clickable" data-mijnvolgnr="8" data-mijn-volg-nr="08">Item 8</li>
      <li class="clickable" data-mijnv**olgnr="9" data-mijn-volg-nr="09">Item 9</li>
    </ol>
  </div>
</body>
</html>
```
 
Maak de elementen aan via onderstaande systeem:
```javascript
  var nieuwDivElement       = $("<div/>");
  var nieuwParagraphElement = $("<p/>");
  var nieuwSpanElement      = $("<span/>");
```
etcetera.

Gebruik daarna het **chaining-mechanisme** van jQuery (zie de referenties onderaan deze pagina) om attributen te zetten. 
Let op dat je wel eerst een element moet maken voordat je alle attributen kunt zetten via het chaining-mechanisme.

# Opdracht 10b
Als je bovenstaande hebt gemaakt, wijzig dan de code dan zodat elke `<li>`-element een click-handler krijgt. Je kunt dit doen 
na het aanmaken van het element. De clickhandler moet de tekst (Bijv. "Item 6") rapporteren dmv een `alert()`;

Geef aan de clickhandler ook de waarde van `i` mee uit de for-loop. Zie de jQuery-functie  `on` voor hoe je dit kunt doen.

Log verder in de console de waarde van 
  * this.dataset
  * this.data
  
Wat valt je op? Kijk eens bij de HTML5 standaard over DATA-attributen. Vooral die over name-conversion.   

# Opdracht 10c
Wijzig de click-handler zodat deze ook de waarde van de data-attributen laat zien. 
  * data-mijnvolgnr
  * data-mijn-volg-nr
en
  * de waarde van i uit de for-loop.

Voorbeeld output:
```text
data-mijnVolgNr = 0
data-mijn-volg-nr = 00
waarde van i was 0  
```  

# Opdracht 10d
Wijzig de click-handler en zorg dat je een element kunt selecteren. Dat doe je door een extra CLASS-name ("SELECTED") toe te voegen
aan een `<li>`-element toe te kennen. Bij nogmaals klikken moet de extra CLASS-name weer verwijderd worden.  Gebruik
hiervoor de functie `toggleClass` van jQuery.

Zorg er vervolgens voor dat het `<LI>`-element met de extra class-name "SELECTED" een grijze achtergrond krijgt. Zie onderstaande voorbeeld:
```html
<li class="clickable SELECTED" data-mijnvolgnr="5" data-mijn-volg-nr="05">Item 5</li>
```

Inspecteer je resultaten via de DevTools van je browser!

# Opdracht 10e
Ga verder met de oplossing van opdracht 10c, maar zorg er nu voor dat er elke keer maar één item geselecteerd is.


##Referenties
  * [jQuery chaining](https://www.w3schools.com/jquery/jquery_chaining.asp)
  * [jQuery On](http://api.jquery.com/on/)
  * [jQuery toggleClass](https://api.jquery.com/toggleClass/#toggleClass-className)
  * [jQuery removeClass](https://api.jquery.com/removeClass/#removeClass-className)
  * [HTML5 data-attributen (w3schools)](https://www.w3schools.com/tags/att_global_data.asp)
  * [HTML5 data-attributen (MDN 1)](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes)
  * [HTML5 data-attributen name conversion](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset#Name_conversion)
  