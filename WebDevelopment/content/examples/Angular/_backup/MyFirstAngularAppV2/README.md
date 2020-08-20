# MyFirstAngularAppV2
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.6.


## Toelichting
De code is gebaseerd om V1, maar nu zijn alle onderdelen daadwerkelijk omgezet in componenten:
* app-component
  * app-release-list
    * app-release-details
      * app-image-list
      * app-image-details

De component `app-image-list` heeft een  output (EventEmitter) zodat de geselecteerde afbeelding doorgegeven kan worden 
aan de bovenliggende component (`app-release-details`). Dergelijke events worden opgevangen in HTML en verbonden met de code:
```html
  <app-image-list [images$]="images$"   
    (onSelectImage)="imageSelected($event)">
  </app-image-list>
```

Let op de tekst (in bovenstaande code-snippet) tussen de haakjes:  `(onSelectImage)="imageSelected($event)`. Het deel tussen de haakjes
bevat de aanduiding voor het event, de code er achter (`imageSelected($event) `) bevat de functie naam en de parameters die het event
afhandelen. Let op: eventuele extra parameters die de EventEmitter uitstuurt worden automatisch toegevoegd aan de functie.

De EventEmitter ziet er als volgt uit:
```typescript
  // declaratie
  @Output() onSelectImage: EventEmitter<CoverArtArchiveImage> = new EventEmitter<CoverArtArchiveImage>();
 
  // als er op een afbeelding geklikt is wordt onderstaande functie aangereoepen.
  selectImage(event: MouseEvent, image: CoverArtArchiveImage){
    this.onSelectImage.emit(image);
  }
``` 

De daadwerkelijke functie ziet er dus als volgt uit:
```typescript
  imageSelected(image: CoverArtArchiveImage){
    this.selectedImage = image;
  }
```
Merk op dat het $event niet hoeft worden opgenomen in de functie declaratie. We kunnen meteen de data gebruiken uit het event
om een nieuwe component aan te sturen (zie hier onder). Door het toewijzen van `this.selectedImage` wordt onderstaande component
van informatie voorzien.

```typescript
  <app-image-details [image]="selectedImage"></app-image-details>
```


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
