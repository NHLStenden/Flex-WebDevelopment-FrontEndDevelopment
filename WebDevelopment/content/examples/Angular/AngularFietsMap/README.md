# AngularFietsMap
In dit voorbeeld met de fietsenstallingen maken we gebruik van een module om kaartmateriaal weer te 
geven op je website. We maken gebruik van [Leaflet](https://github.com/Asymmetrik/ngx-leaflet)
 en de Leaflet [MarkerCluster](https://github.com/Asymmetrik/ngx-leaflet-markercluster). 

Een van de problemen met deze module (Leaflet) is dat je te maken krijgt met de wijze waarop [Angular
Change Detection](https://www.mokkapps.de/blog/the-last-guide-for-angular-change-detection-you-will-ever-need/) werkt: wanneer worden wijzigingen 'gezien'  door Angular zodat je component opnieuw
getekend wordt.

### Documentatie
Verder gebruiken we [CompoDoc](https://compodoc.app/) om documentatie te genereren. Je installeert deze
plugin via `npm`. Door in je `package.json` een item toe te voegen aan je scripts, kun je deze eenvoudig
starten. Zie de laatste regel met `"doc":`. 

```javascript
{
  "name": "angular-fiets-map",
  "version": "0.0.0",
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e",
    "doc": "compodoc -p tsconfig.json -n 'My app documentation'"
  },
```
Je kunt nu de documentatie genereren door vanaf de commando-regel het commando 

`npm run doc`

te geven. Zorg dat je in de root-folder van je project staat (waar ook de `package.json` staat).
 De documentatie wordt dan in een nieuwe folder genaamd `documentation` gezet. 
 
Wil je de documentatie openen, dan kun je in de browser het bestand `index.html` openen in de folder
`documentation`.


# Angular Info

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.5.

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
