# ComponentCommuncation01
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.3.

# Toelichting
In dit voorbeeld worden twee formulieren aan elkaar gekoppeld in twee verschillende componenten:
  1. MasterComponent
  2. DetailComponent

## Master Component

Het eerste component (Master) wordt opgenomen in het root-component `app.component.html`. Hierin zit een
HTML `form` met één `input`. De waarde van deze `input` wordt via het `[(ngModel)]` gekoppeld aan een variabele.
Dit noemen we een tweeweg binding:
1. als je de waarde van de input veranderd, dan veranderd de variabele mee.
2. als je de waarde van de variabele veranderd, dan veranderd de waarde van de input ook mee.

### Opbouw Master component
In het *Master* component zit het *Detail* component opgenomen. Dit *detail* component ontvangt zijn informatie 
via de `@Input()` constructie.

```javascript
  @Input() invoervariabele: string;
```

Als je deze component dus ergens wilt gebruiken moet je een attribuut `[invoervariabele]` opgeven. Let op de 
blokhaken `[...]`: dit betekent dat je een variabele of expressie kunt opnemen. Laat je deze `[...]` weg dan
gaat het om vaste tekst (bijv. een string).

Voorbeeld met een variabele binding:

```html
  <app-detail [invoervariabele]="naam" (dataHasChanged)="childHasChanged($event)"></app-detail>
```
Voorbeeld met vaste tekst:

```html
<app-detail invoervariabele="vaste tekst die niet mee verandert"></app-detail>
```

## Detail component
Het detail component ontvangt dus informatie van buitenaf, maar kan ook informatie terugsturen. Dit doe je door
een `event` te sturen. In dat `event` kun je gegevens meesturen. 

We gebruiken hiervoor de `EventEmitter` (zie referenties onder aan deze pagina). 
```javascript
  @Output() dataHasChanged = new EventEmitter<string>();
```

We gebruiken weer een decorator `@Output()` gevolgd door een variabelenaam (`dataHasChanged`). We initialiseren
deze meteen met een nieuwe `EventEmitter` die dus een string kan uitsturen (`<string>`). 

Als we nu de `parent` willen informeren dat er nieuwe gegevens zijn, dan gebruiken we de `EventEmitter` om deze 
data te versturen. 
```javascript
  this.dataHasChanged.emit(this.invoervariabele);
```
Met de methode `emit(...)` kun je de data versturen.

### Opvangen van emitted values
Het opvangen van de events doe je net als andere events zoals bijvoorbeeld een 'onClick': in de HTML. Dat is 
wellicht eerst wat vreemd, maar conceptueel klopt het wel. In je ontvangende component neem je dus een `event`
op van het type `dataHasChanged` met als waarde een functie mét parameter `$event`. Angular zorgt er dan voor
dat deze variabele `$event` wordt omgezet naar het juiste type.

```html
  <app-detail (dataHasChanged)="childHasChanged($event)"></app-detail>
```

In je code kun je vervolgens gewoon een parameter van het juiste type (in ons geval een `string`) opnemen:
```javascript
  public childHasChanged(newdata: string): void {
    console.log(newdata);
  }
```


#Combinatie
Als je de invoer en de uitvoer combineert krijg je onderstaande HTML:
```html
  <app-detail [invoervariabele]="naam" (dataHasChanged)="childHasChanged($event)"></app-detail>
```


See also
* [Angular Inputs & Outputs](https://angular.io/guide/inputs-outputs)
* [Tweeweg binding met NgModel](https://angular.io/api/forms/NgModel)
* [Angular EventEmitter](https://angular.io/api/core/EventEmitter)
