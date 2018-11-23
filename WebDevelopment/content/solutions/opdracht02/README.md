# Uitwerkingen bij opdracht 02

In de eerste uitwerking (zie map 'A') gebeurt er iets raars: de CSS file lijkt niet gekoppeld te zijn. De oorzaak ligt
er in dat als je `document.write()` aanroept als alle HTML geladen en verwerkt is, het document leeggemaakt wordt.
Zie onderaan deze pagina een link naar een Stackoverflow waar dit verder wordt uitgelegd.

In de tweede uitwerking (zie map 'B') wordt dit nog eens extra duidelijk. De body in de HTML-file ziet er als volgt uit:
```javascript
<body>
  <P>Deze tekst staat er al. Blijft dat ook zo?</P>
</body>
```
Als je de pagina snel achter elkaar ververst zie je bovenstaande tekst heel even staan, maar daarna verdwijnt deze en
wordt vervangen door de genummerde lijst.

## Verklaring
Waarom werkt dit nu zo anders dan in opdracht 01? Daar hadden we het `<script>`-element letterlijk in de `<body>` staan
en werd deze uitgevoerd als de HTML-verwerking dit element tegen kwam. Het verwerken van het HTML-document was toen 
nog niet klaar, en dus werkt het zoals verwacht.

In deze variant wachten we met het starten van onze code tot alles klaar is. We maken gebruik van de functie
```javascript
window.onload = initPage; 
```
We doen dit om te zorgen dat alles klaar staat qua HTML, maar eigenlijk heeft het een ongewenst effect: het hele document
wordt leeggemaakt. Ook de `<title>`-tag lijkt niet meer gebruikt te worden. 

Tijd dus voor een andere manier van werken! We gaan in de volgende opdrachten kijken naar de DOM en het manipuleren ervan
om niet met zulke ouderwetse functies als `document.write()` te hoeven werken.
 

## Referenties
[Document.write clears document](https://stackoverflow.com/questions/10873942/document-write-clears-page)
