#Front End Website met basic JQuery - Fase 4
In deze variant gaan we een stapje verder met JQuery. We gebruiken weer de functie 
```javascript
$(document).ready() 
```
maar dan met de naam van een functie (initPage).

om door een lijst met strings heen te lopen gebruiken we de JQuery [each](https://api.jquery.com/each/)
functie.  In deze 'for-each' loop maken we nieuwe P-elementen en wijzen er een getal
als text-element aan toe. 

Aan het einde verzamelen we in één keer alle nieuwe P-elementen in de geselecteerde
container, door een dubbele selector te gebruiken: de eerste is het gezochte element, de
tweede is de scope (reikweidte, start) waarbinnen gezocht moet worden.
