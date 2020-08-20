# MyFirstDataEntry

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.8.

## Material Design
Gebruik maken van Material Design via de Terminal:
```shell script
$ ng add @angular/material
```

Beantwoord de vragen:
* `Choose a prebuilt theme name, or "custom" for a custom theme` :: kies een thema
* `Set up HammerJS for gesture recognition` :: kies Yes
* `Set up browser animations for Angular Material` :: kies Yes

## Setup van je project
* Run `ng serve` of gebruik je IDE (Bijv. Jetbrains WebStorm ziet dat het een Angular project is).
* Verwijder de inhoud van het bestand `src/app/app.component.html`
* Start met bouwen

Bekijk je site op [http://localhost:4200](http://localhost:4200).

## Aanpassingen
Als je WebStorm gebruikt kun je imports eenvoudig laten toevoegen. Gebruik in het geval dat je Angular/Material gebruikt
altijd de juiste import:
* MatFormFieldModule
* MatSelectModule
* MatInputModule

Deze imports voeg je toe aan de `app.module.ts`. Deze ziet er dan als volgt uit:
```typescript
@NgModule({
  declarations: [
    AppComponent,
    DataEntry01Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
```
* Zet het thema in je `src/styles.css`:
    @import '@angular/material/prebuilt-themes/deeppurple-amber.css';
