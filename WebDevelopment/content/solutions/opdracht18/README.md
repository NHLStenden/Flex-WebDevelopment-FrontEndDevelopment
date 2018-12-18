# Uitwerking opdracht 18 

De uitwerking van deze opdracht is relatief eenvoudig. 

### CSS-Styling
Ten eerste de styling. Merk op dat je de kleur, lijndikte en vulling ook als eigenschappen in de HTML kan plaatsen 
zoals we bij de vorige opdracht deden:
```html 
<circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
```
Als je echter de cirkel inspecteert in je browser, dan zul je zien dat de `stroke`, `stroke-width` en `fill` geen eigenschappen
zijn van het DOM-object. Je vind ze terug in de CSS/Styling eigenschappen, en daarom zijn ze ook te besturen via een 
CSS-bestand. 

De juiste declaratie is dus:
```css
#circle1 {
    fill: yellow;
    stroke: green;
    stroke-width: 4;
}
```
### Javascript click-handler
Je maakt een click-handler zoals je deze gewend bent uit de andere opdrachten. We gebruiken in dit geval jQuery om 
het element terug te vinden:

```javascript
  $("#circle1").on("click", circleClickHandler);
```
We kennen meteen via 'chaining' een click-handler toe door de naam van de functie `circleClickHandler` op te geven. Let 
op dat je dus geen haakjes achter die click-handler zet!

In de click-handler krijgen we de variabele `this`, die meteen de waarde heeft gekregen van het aangeklikte element. 

```javascript
function circleClickHandler(evt){
  $(this).css("stroke-width","10").css("fill","grey");
}//circleClickHandler
```

Daarmee kunnen we eenvoudig via 'chaining' twee eigenschappen van de cirkel opnieuw instellen. Merk op dat deze eigenschappen
CSS/Styling eigenschappen zijn! In de vorige opdracht stonden deze nog als eigenschappen genoemd in de HTML. Echter,
deze worden onder water vertaald naar styling-attributen en moeten dus via CSS aangepast worden.


## Extra opdracht
De verkorte uitwerking staat hier onder:

```javascript
$(document).ready( () => $("#circle1").on("click", evt => $(evt.target).css("stroke-width","10").css("fill","grey")));
```

We gebruiken hier een aantal anonieme functies die ook nog eens verkort worden genoteerd:
```javascript
$(document).ready( () => ....);
```
Let op de `()` vlak voor het pijltje. Dit betekent: hier noteren we een anonieme functie in verkorte stijl. Er zijn geen
parameters (daarom dus twee haakjes zonder iets er tussen). De body van de functie is slechts één statement en behoeft
daarom ook geen accolades (`{}`).

De body is in wezen niets meer dan het opvoeren van een click-handler. Je zo het zo kunnen lezen :

```javascript
  $(document).ready(() => $("#circle1").on("click", ...);
```

Op de plek van de puntjes (`...`) moet de click-handler komen. In de eenvoudige variant gebruiken we de verwijzing naar een functie,
maar in deze variant doen we het met opnieuw in anonieme functie. We noteren eerst de parameter (`evt`), dan de pijl (`=>`) gevolgd
door de body van de functie die wederom maar één statement bevat: 
```javascript
  evt => $(evt.target).css("stroke-width","10").css("fill","grey")));
```

### De valkuil
Let goed op welke parameter er aan jQuery wordt meegegeven: `evt.target`  in plaats van `this`. 
```javascript
  evt => $(evt.target) ....
```

In dergelijke verkorte notaties moet je erg uitkijken welke waarde `this` nu precies heeft. In dit geval 
verwijst `this` tijdens de uitvoering van de click-handler **niet** naar het aangeklikte element maar naar `window` 
(het browser-window/tabblad om precies te zijn). We moeten dus op een andere manier naar op zoek naar het aangeklikte 
element, en gebruiken daarvoor weer de `event.target`.

Uit MDN (zie referenties onderaan deze pagina)
> "An arrow function expression has a shorter syntax than a function expression and does not have its own **this**, 
    arguments, super, or new.target. These function expressions are best suited for non-method functions, and they 
    cannot be used as constructors."


## Referenties
[Javascript arrow notation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
[jQuery chaining](https://www.w3schools.com/jquery/jquery_chaining.asp)
[SVG & CSS](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/SVG_and_CSS)
[SVG Tutorial W3Schools](https://www.w3schools.com/graphics/svg_intro.asp)