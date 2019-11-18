# Opdracht 05 - DOM & Events 2
In deze opdracht gaan we niet alleen de DOM uitbreiden, we gaan ook gebeurtenissen ('events') koppelen en 
afhandelen. Ditmaal doen we dat slimmer met een queryselecter achteraf, in plaats van bij elk los object

Gebruik de code uit oplossing 04b ([Oplossing 04](../../solutions/opdracht04)). Ditmaal veranderen we de
code om de EventListener te koppelen. Haal onderstaande regel weg.
```javascript
  objListItem.addEventListener("click", clickHandler);
```
Ken nu in één keer achteraf alle eventhandlers toe door middel van een `document.querySelectorAll()`
in combinatie met een for-lus.

De functie die je uit wilt voeren kun je als "anonymous function" implementeren, of als losse functie. Werk beide
varianten uit. 

Als een item uit de bullit-lijst aangeklikt wordt, dan moet je met de functie `alert` een tekst weergeven. Bijvoorbeeld
"ik ben aangeklikt".

Om de GUI extra *intuitief* te maken, gebruik je een stukje CSS om de muis in een handje/aanwijzer te veranderen,
zodat gebruikers snappen dat er iets te klikken valt.

Lees voor meer informatie de onderstaande referenties

## Referenties
  * [Voorbeeld 02](../../examples/Fase02/README.md)
  * [addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
  * [CSS Cursor](https://www.w3schools.com/cssref/pr_class_cursor.asp)