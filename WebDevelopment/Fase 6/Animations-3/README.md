#Front End Website met basic SVG - Animations 3
Animaties via SVG

In dit voorbeeld worden eenvoudige rechthoeken bewogen over het scherm. We maken gebruik van een SVG model (Scalable Vector Graphics).
Dat is een standaard die gebaseerd is op XML, en de mogelijkheid biedt om te tekenen. Het grote voordeel hiervan is dat
de browser het tekenen voor zijn rekening neemt, maar vooral dat als je bijvoorbeeld gaat inzoomen er geen kwaliteitverlies is.
Een voorbeeld:

```xml
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <rect x="0" y="0" width="50" height="50" stroke="black" fill="red"></rect>
    <rect x="100" y="0" width="50" height="50" stroke="blue" fill="yellow" class="rectangle"></rect>
</svg>
```

Deze code kan je eenvoudig in de body van je web pagina zetten. Er worden dan twee rechthoeken getekend:
  * de eerste staat op (x,y) = (0,0) en heeft een hoogte en breedte van 50 punten. Er zit een zwarte lijn omheen en hij 
  wordt opgevuld in rood
  * de tweede staat op (x,y) = (100,0) en heeft een hoogte en breedte van 50 punten. Er zit een blauwe lijn omheen en hij 
  wordt opgevuld in geel
  
De tweede rechthoek heeft ook een attribuut `class` zodat we vanuit een stylesheet (CSS) er naar kunnen verwijzen.

In het voorbeeld van deze directory zie je de zaken samenkomen. Welke twee zaken vallen op als je de code start vanuit je browser? 
(hint: let op de kleuren en het resultaat van de animatie).
  

## Referenties
  * [Kan ik SVG gebruiken?](https://caniuse.com/#feat=svg)
  * [SVG tutorial 1 (w3 schools)](https://www.w3schools.com/graphics/svg_intro.asp)
  * [SVG tutorial 2 (MDN)](https://developer.mozilla.org/nl/docs/Web/SVG/Tutorial)
  * [SVG Animaties]
  * [SVG Transformaties](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Transformations)

