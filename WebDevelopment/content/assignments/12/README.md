# Opdracht 12 - Asynchrone functies 1

We gaan in deze opdracht werken met asynchrone functies. Dat zijn functies die in de achtergrond hun werk doen en 
als ze klaar zijn, een stuk code aanroepen die voor afronding en verwerking zorgen. Zo'n stuk code voor afronding
gaat vaak via een *call-back functie*. Een voorbeeld is het ophalen van informatie van het internet via een REST-API.

Bekijk onderstaande code eens:

```javascript
        // create an object to call a REST API
        var xhr = new XMLHttpRequest();

        // set the URL to be opened
        xhr.open('GET', url);

        // set a function that is called when the API call is completed without errors
        xhr.onload = function () {
            //callback 1
            console.log("URL information retrieved");
            console.log(xhr.response);
        };

        // set a function that is called when the API call cannot be completed.
        xhr.onerror = function () {
            // callback 2
            console.log("ooops, error : " + xhr.response + "/" + xhr.status);
        };

        // do the actual call to the REST API
        xhr.send();
        
        console.log("thank you");

```

Pas bij het aanroepen van `xhr.send();`  wordt de URL daadwerkelijk opgevraagd. Dat kost even tijd, waardoor het bericht
"thank you" eerder zal verschijnen in de console dan de tekst "URL information retrieved".

##Opdracht
Gebruik bovenstaande code om informatie over een film op te halen via onderstaande URL:
```text
http://www.omdbapi.com/?i=tt3896198&apikey=89f91ba6
```

Plak de URL eerst eens simpelweg in een browser en kijk wat er terugkomt. Maak daarna een werkende pagina die deze gegevens 
netjes toont. 

## Referenties
[XML HTTP Request (XHR)](https://developer.mozilla.org/nl/docs/Web/API/XMLHttpRequest)
