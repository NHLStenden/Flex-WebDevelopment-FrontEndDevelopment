# Opdracht 09 
We gaan nu aan de slag met jQuery. Download jQuery (zie onderstaande link) en zet de gedownloade file in je project.

Maak gebruik van onderstaande `<body>`

```html
<body>
  <h1>Welkom bij opdracht 9</h1>
  <P>In onderstaande lijst staan 10 items</P>
  <ol id="mijnlijstje">
      <li>at1</li>
      <li>bs2</li>
      <li>cr3</li>
      <li>dq4</li>
      <li>ep5</li>
      <li>fo6</li>
      <li>gn7</li>
      <li>hm8</li>
      <li>il9</li>
      <li>jk0</li>
  </ol>

  <P>Dit is een stuk bestaande tekst.</P>
</body>
```
Schrijf een nieuwe javascript functie:
  * gebruik de `$(document).ready(function(){ .... });` - constructie voor het starten van je code in plaat van
  via `window.onload()`.
  * zoek het eerste `<p>`-element op en rapporteer via `alert()` wat de inhoud is van dit element
  
Een tweede variant kan zijn om alle `<p>`-elementen te verzamelen die tekst te laten zien.   
  
##Referenties
  * [JQuery](http://jquery.com/)
  * [JQuery installatie en Download](https://jquery.com/download/)
  * [JQuery Document Ready Function](https://api.jquery.com/ready/#ready-handler)
