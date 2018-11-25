# Uitwerking opdracht 06
Voor deze opdracht weer twee uitwerkingen met verschillende aanpak.

### Variant A
In de eerste variant gebruiken we de informatie uit de variabele `this`. Dat is verreweg het handigste en de
reden hiervoor is als volgt:

Als je een eventhandler hebt gekoppeld aan een element, en het event "vuurt" (vindt plaats), dan zal de betreffende
functie worden aangeroepen. Om de ontwikkelaar van dienst te zijn, wordt automatisch een variabele genaamd
`this` aangemaakt, met als waarde een verwijzing naar het bijbehorende element (object) in de DOM.
```javascript
    var text = this.textContent;
    alert(text);
```

Lekker simpel. In de tweede variant gaan we kijken naar de waarde van de functie parameter `evt`.

### Variant B
Als de event-handler (= functie die je hebt opgegeven bij het koppelen van een specifiek event aan een object
uit de DOM) vuurt, dan krijg je meestal minimaal één parameter mee die het event beschrijft. Door deze in
de console te dumpen (`console.log`) krijg je een aanklikbare datastructuur die veel informatie geeft. Je
kunt ook een breakpoint zetten en dan de variabelen inspecteren ('watch' of 'local' variables).

Om te achterhalen op welk element het event is gestart, kijk je naar het attribuut `target`. De code wordt
dan als volgt: 
```javascript
    var text = evt.target.textContent;
    alert(text);
```

Andere nuttige event-attributen zijn:
  * *pageX* en *pageY* die de (x,y) locatie op de pagina weergeven
  * *path* die aangeeft wat de DOM parent tree is (welke elementen kom ik tegen op mijn pad als ik de boom achterstevoren doorloop?)

Zie ook onderstaande referenties voor meer uitleg.

## Referenties:
  * [Document Object Model](https://nl.wikipedia.org/wiki/Document_Object_Model)
  * [addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
  * [MouseEvent](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent)
  * [Event](https://developer.mozilla.org/en-US/docs/Web/API/Event)
  * [this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)