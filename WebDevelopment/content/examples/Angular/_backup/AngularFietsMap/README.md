# AngularFietsMap

In dit voorbeeld wordt met behulp van `Leaflet.js` een kaart getekend van de fietsenstallingen in Amsterdam. 
Hiervoor wordt informatie opgehaald via een AJAX-call naar een OpenData bron van de overheid. 

Dit voorbeeld laat zien hoe een traditionele Javascript bibliotheek gebruikt kan worden met Angular. Er zijn de 
nodige aanpassingen gedaan om te zorgen dat dit werkt.  

##  Assets
Zaken als plaatjes, Javascript en CSS die niet aan een component gebonden zijn moet je opnemen in de map
`src/assets`. In ons geval ziet dat er zo uit: 
```text
├── css
│   ├── images
│   │   ├── layers-2x.png
│   │   ├── layers.png
│   │   ├── marker-icon-2x.png
│   │   ├── marker-icon.png
│   │   └── marker-shadow.png
│   ├── leaflet.css
│   ├── MarkerCluster.css
│   └── MarkerCluster.Default.css
└── js
    ├── leaflet.js
    └── leaflet.markercluster.js
```

Let goed op hoe je je directory structureert. Voor `Leaflet.js` geldt bijvoorbeeld dat de afbeeldingen in 
een submap `images` van de CSS-file moeten zitten.

## index.html
Om te zorgen dat deze bestanden ook daadwerkelijk bruikbaar zijn moet je ze opnemen in de `src/index.html`.

```html
<head>
  <script src="assets/js/leaflet.js"></script>
  <script src="assets/js/leaflet.markercluster.js"></script>
  <link rel="stylesheet" href="assets/css/leaflet.css">
  <link rel="stylesheet" href="assets/css/MarkerCluster.css">
  <link rel="stylesheet" href="assets/css/MarkerCluster.Default.css">
</head>
```
## angular.json
In de root van je project staat een bestand `angular.json`. Hier moeten de bestanden ook op de juiste manier in
opgenomen worden.

```json
    "styles": [
      "src/styles.css",
      "src/assets/css/leaflet.css",
      "src/assets/css/MarkerCluster.css",
      "src/assets/css/MarkerCluster.Default.css"
    ],
    "scripts": [
      "src/assets/js/leaflet.js",
      "src/assets/js/leaflet.markercluster.js"
    ]
```

## Globale variabelen uit bibliotheek gebruiken
Het komt veel voor dat bibliotheken een global variabele publiceren die cruciaal is voor de werking van de 
bibliotheek. Bij JQuery is dat bijvoorbeeld de variabele met naam `$`. In Leaflet is dat de variabele (hoofdletter)
`L`. Als je deze wilt gebruiken doe je dat als volgt. Voeg je volgende regel aan je component toe (bijv. 
`src/app/app.compontent.ts`).

```typescript
declare let L;
```

Nu kun je deze variabele gebruiken in je Typescript code:
```typescript
export class AppComponent {
  title = 'AngularFietsMap';
  Leaflet = L;
}
```

## Angular information

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.19.

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

## Creating Documentation
Run `ng compodoc -p tsconfig.app.json` in root folder or create a run config in WebStorm

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

