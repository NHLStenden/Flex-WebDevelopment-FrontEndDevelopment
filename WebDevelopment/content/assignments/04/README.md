# Opdracht 04 - DOM & Events
In deze opdracht gaan we niet alleen de DOM uitbreiden, we gaan ook gebeurtenissen ('events') koppelen en 
afhandelen.

Gebruik de code uit oplossing 03 ([Oplossing 03](../../solutions/opdracht03)) en breidt deze uit door 
een elk item uit de bullit list een event-handler te koppelen voor het click-event. Je kunt dat doen
via het commando
```javascript
  mijnobject.addEventListener("click", function)
```

De functie die je uit wilt voeren kun je als "anonymous function" implementeren, of als losse functie. Werk beide
varianten uit. 

Als een item uit de bullit-lijst aangeklikt wordt, dan moet je met de functie `alert` een tekst weergeven. Bijvoorbeeld
"ik ben aangeklikt".

Om de GUI extra *intuitief* te maken, gebruik je een stukje CSS om de muis in een handje/aanwijzer te veranderen,
zodat gebruikers snappen dat er iets te klikken valt.

Lees voor meer informatie de onderstaande referenties

## Referenties
  * [Voorbeeld 02](../../examples/Javascript/Example02/README.md)
  * [addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
  * [CSS Cursor](https://www.w3schools.com/cssref/pr_class_cursor.asp)
