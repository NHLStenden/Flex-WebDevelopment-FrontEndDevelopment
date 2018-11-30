# Uitwerking opdracht 07

### Variant A
De eerste oplossing is redelijk voor de hand liggend. Door onderstaande code toe te voegen krijgen we een
click-handler op de `<body>`.
```javascript
    var body = document.querySelector("body");
    body.addEventListener("click", function(evt){alert("click on body")});
```

Het ongewenste effect is dat als we op een `<li>`-item klikken, we óók nog een melding krijgen dat we op de 
`<body>` hebben geklikt. Hoe kan dat nu? Wat je hier ervaart heet 'event bubbling'. Bij de referenties 
onderaan de pagina krijg je een nette uitleg.

Met event-bubbling regelt de browser dat elk element dat op elkaar gestapeld is in de DOM, het event 
aangeboden krijgt. Wederom onderstaande afbeelding. 
![DOM](../../examples/Fase02/doc/FrontEndDevelopment-DOM%202.png)

Stel dat één van de blauwe  `<li>`-elementen aangeklikt wordt met de muis. De volgende elementen
krijgen dan allemaal het event aangeboden:

  * html > body > div.container > UL.mylist > li
  * html > body > div.container > UL.mylist 
  * html > body > div.container 
  * html > body 

Waarschijnlijk is dat onnodig en wil je dat de browser stopt bij het afhandelen van het event als jij klaar
bent met de event-handler voor de gekozen `<li>`. In de tweede variant gaan we dat regelen.

### Variant B
Om het event-bubbling af te wenden gebruiken we de functies `stopPropagation` en / of `preventDefault`.
Zie weer de referenties onderaan deze pagina voor de uitgebreide informatie. 

De functie `stopPropagation()` zorgt er voor dat het event niet naar boven bubbelt. Dat is normaliter voldoende. Echter,
als je bijvoorbeeld een aankruisvakje (`<input type="checkbox" />`) gebruikt, dan kun je met `preventDefault` voorkomen
dat als iemand het vakje aanklikt, het vinkje niet verschijnt (het standaard of 'default' gedrag).  


## Referenties:
  * [Document Object Model](https://nl.wikipedia.org/wiki/Document_Object_Model)
  * [MouseEvent](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent)
  * [Event](https://developer.mozilla.org/en-US/docs/Web/API/Event)
  * [this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
  * [stopPropagation](https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation)
  * [preventDefault](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)
  * [event bubbling](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#Event_bubbling_and_capture)
  * [Event Delegation](https://davidwalsh.name/event-delegate)