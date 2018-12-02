# Opdracht 11
Gebruik onderstaande body
```html
    <div class="container">
        <ul>
            <li class="color blue   odd" >Dit is een blauwe achtergrond</li>
            <li class="color red    even">Dit is een rode achtergrond</li>
            <li class="color yellow odd" >Dit is een gele achtergrond</li>
            <li class="color grey   even">Dit is een grijze achtergrond</li>
            <li class="color gold   even">Dit is een gouden achtergrond</li>
            <li class="             odd" >Dit is een normale achtergrond</li>
            <li class="color pink   even">Dit is een roze achtergrond</li>
            <li class="             odd" >Dit is een normale achtergrond</li>
        </ul>
    </div>
    <div>
        <P>U heeft geklikt op een item met de volgende classes: </P>
        <ul id="report">

        </ul>
    </div>
</body>
```

Maak door middel van jQuery een click handler die het `<ul>`-element vult met een bullitlist met daarin de 
classnames van het aangeklikte item. Elke bullit krijgt ook de classname toegewezen als nieuwe class. 
Dit kan dan bijvoorbeeld onderstaande resultaat leveren, bij het klikken op de 2e regel:

```html
<ul id="report">
    <li class="color">color</li>
    <li class="red">red</li>
    <li class="even">even</li>
</ul>
```
Gebruik onderstaande CSS:
```css
body {
  font-family: sans-serif;
 }
 
 div.container ul li {
     cursor: pointer;
 }
 
 .red {
     background-color: red;
     color:white;
 }
 
 .blue {
     background-color: blue;
     color:white;
 }
 
 .grey {
     background-color: grey;
     color:white;
 }
 
 .gold {
     background-color: gold;
     color:black
 }
 
 .odd {
   font-style:italic;
 }
 
 .even {
     font-weight:bold;
 }
 
 .color {
     text-decoration: underline;
 }
```

##Referenties
  * [jQuery chaining](https://www.w3schools.com/jquery/jquery_chaining.asp)
  * [jQuery On](http://api.jquery.com/on/)
  * [jQuery toggleClass](https://api.jquery.com/toggleClass/#toggleClass-className)
  * [jQuery removeClass](https://api.jquery.com/removeClass/#removeClass-className)
  * [HTML5 data-attributen (w3schools)](https://www.w3schools.com/tags/att_global_data.asp)
  * [HTML5 data-attributen (MDN 1)](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes)
  * [HTML5 data-attributen name conversion](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset#Name_conversion)
  