# Uitwerking opdracht 08
In deze uitwerking wordt gebruik gemaakt van bepaalde informatie uit het Event-object dat de browser aanmaakt
als je een click-handler laat uitvoeren bij een event. De clickHandler installeren we eenvoudig zo:

```javascript
    var body = document.querySelector("body");
    body.addEventListener("click", clickHandler);
```

Let op dat je bij het toewijzen van de functie voor een click-handler dus geen haakjes gebruikt! Onderstaande is dus **fout**:
```javascript
    var body = document.querySelector("body");
    body.addEventListener("click", clickHandler());
```
en ook **niet**:
```javascript
    var body = document.querySelector("body");
    body.addEventListener("click", clickHandler(evt));
```

Je geeft dus alleen de naam van de functie op. De click-handler zelf ziet er als volgt uit:

```javascript
function clickHandler(evt){
    var text = evt.target.textContent;
    var elType = evt.target.tagName;

    alert("U heeft geklikt op een element van het type " + elType + " met inhoud :: " + text );

    var path = evt.path;
    var upText = getPathRecursiveUp(path);
    var downText = getPathRecursiveDown(path);

    alert("Up : " + upText  + " -------------- Down: " + downText);

}//clickHandler()
```
Ik gebruik hier twee functies om het path (`evt.path`) om te zetten naar een leesbare tekst. Bijvoorbeeld:
```text
Up : LI > OL > BODY > HTML > {Document} > {Window} >  
-------------- 
Down:  / /{Window}/{Document}/HTML/BODY/OL/LI
```

De recursieve functies zijn op een haar na gelijk. Het verschil zit hem in de aanroep van de recursie:

Variant 1: eerst het huidige element noemen, en dan recursie
```javascript
  return text + " > " + getPathRecursiveUp([].slice.call(newPath,1));
```
Variant 2: eerst recursie en dan het huidige element noemen.

```javascript
  return getPathRecursiveDown([].slice.call(arrItems,1)) + "/" + text;
 ```

## Referenties:
  * [MouseEvent](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent)
  * [Event](https://developer.mozilla.org/en-US/docs/Web/API/Event)
  * [this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
  * [event bubbling](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#Event_bubbling_and_capture)
  * [Event Delegation](https://davidwalsh.name/event-delegate)