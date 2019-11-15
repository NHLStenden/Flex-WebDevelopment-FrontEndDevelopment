# Opdracht 07 - DOM & Click events - Event Bubbling
In de vorige opdracht hebben we een event-handler gebouwd voor elk `<LI>`-item. Stel dat we ook voor de bovenliggende
pagina (`<body>`) een click-handler bouwen. Wat gebeurt er dan?

Gebruik de oplossing van opdracht 06 en voeg een eventhandler toe voor de `<body>`. Geef weer een alert
met de mededeling "click body".

Om te testen klik je op de `<h1>` titel, of bijvoorbeeld op het `<p>`-element boven het `<ol>`-element.

Waarschijnlijk zie je nu vreemd gedrag als je op een `<li>`-item klikt. Hoe zou dat komen? En hoe kun je dat
oplossen? 

Kijk eens bij onderstaande referenties of daar een oplossing bij zit.

## Referenties
  * [Voorbeeld 02](../../examples/Fase02/README.md)
  * [addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
  * [stopPropagation](https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation)
  * [preventDefault](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)
