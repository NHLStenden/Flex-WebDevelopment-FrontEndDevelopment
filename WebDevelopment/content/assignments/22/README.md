# Opdracht 22 - WebPack & Babel
We gaan nu aan de slag met het opzetten van WebPack en Babel

## WebPack
WebPack zorgt er voor dat al onze Javascript-code in één bundel wordt samengenomen. Daarmee kunnen
we dus sneller alles in één keer laden, en wordt onze `<head>` korter omdat alle javascript-bestanden 
niet los genoemd hoeven te worden.

Merk op dat als je met Javascript Modules werkt, er ook al minder in de `<head>` komt te staan.

Een ander voordeel van WebPack is TreeShaking: het verwijderen van nutteloze code zoals niet geëxporteerde
functies of nooit geïmporteerde klassen. Zie ook het topic onderaan deze pagina bij Referenties.

## Babel
Het "Babel" package zorgt voor vertaling van javascript naar een lagere standaard (bijv. ECMA2015) zodat
ook oudere browsers jouw code kunnen gebruiken.

## Installatie
Installeer eerst NodeJS en NodePackageManager (NPM). [URL Installatie](https://nodejs.org/en/).

Vervolgens start je een Windows Command prompt (cmd.exe) om via NPM de nodige zaken te installeren.
  * Ga naar je ontwikkel-map op (bijv.) je c:-schijf
```  
> C:
> CD \development\opdracht22
> npm init --y
```

Het commando `npm init --y`  schrijft een basis `package.json` file weg. Deze moet je aanpassen zodat (grofweg)
onderstaande inhoud er in zit:

```json
{
  "name": "opdracht22",
  "version": "1.0.0",
  "description": "Mijn eerste WebPack & Babel Javascript project",
  "main": "webpack.config.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "watch": "webpack --watch"
  },
  "keywords": ["Babel","WebPack","Flex","NHL Stenden HBO-ICT Flex"],
  "author": "Martin Molema",
  "license": "ISC",
  "devDependencies": {
    "@babel/core": "^7.2.2",
    "@babel/preset-env": "^7.2.0",
    "babel-loader": "^8.0.4",
    "webpack": "^4.27.1",
    "webpack-cli": "^3.1.2",
    "webpack-dev-server": "^3.1.10"
  }
}
```
Maak een map genaamde 'dist' waar de uitvoer van Babel en WebPack gaat landen (dist staat voor Distributie).
Maak ook alvast mappen voor
  * css  (Stylesheets)
  * js (javascript)
  * js/lib (javascript libraries/modules)
  * jquery (eventueel jQuery files)
  * ...

 
Je hebt nu een mappenstructuur:
 ```text
 ├───css
 ├───dist
 ├───jquery
 ├───js
 │   └───lib
 └───node_modules
     ├───.bin
     ├───.cache
```

Maak in de map `js` een bestand `index.js`. In dit bestand gaan we aan de slag met onze code.

Maak in de basismap van je project een bestand aan met de naam `webpack.config.js` met onderstaande inhoud:

```javascript
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './js/index.js'
    ,output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: 'my.bundle.js'
    }
    ,mode: 'development'
    ,devServer: {
         contentBase: './dist'
    }
    ,devtool : 'source-map'
    ,module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: path.resolve(__dirname, "node_modules"),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
};
```

Dit bestand geeft aan hoe WebPack en Babel gebruikt gaan worden. Babel wordt hier als 'module' opgenomen. EVentuele
opties voor Babel kun je kwijt in het bestand `.babelrc`. 

## WebPack in "Watch modus"
Om te zorgen dat we niet bij elke wijziging van onze Javascript code in een DOS-venster een commando
moeten intypen, zorgen we dat WebPack onze wijzigingen actief in de gaten houdt. Elke keer dat je in je
ontwikkelomgeving op de Save-knop drukt bij een javascript-bestand, zal WebPack kijken of hij het moet
behandelen of niet.

Ga naar je DOS-venster:

```text  
    > C:
    > CD \development\opdracht22
    > npm run watch
```
Het laatste commando werkt omdat we in onze `package.json` onderstaande regels hebben staan:

```json
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "watch": "webpack --watch"
  },
```

Als je dit niet gebruikt kun je tegenwoordig ook intypen (let op NPX ipv NPM):
```text  
    > npx wepback --watch
```

Als het goed is gaat WebPack nu jouw `index.js` file gebruiken als startpunt voor verwerking en kijken
welke `import` commando's hij tegenkomt om zo verder alle andere javascript code te vinden.

## Opdracht
Gebruik de uitkomsten van opdracht 20 om mee verder te werken. Zorg dat de code werkt met WebPack en Babel.
Tips: 
  * kopieer je code van opdracht 20 in de nieuwe map
  * als je gebruik maakt van een GIT-repository, zet dan de map `node_modules` die in je project ontstaat op 
  de ignore-lijst (`.gitignore`) om te voorkomen dat je enorme hoeveelheden NodeJS bestanden heen en weer pompt. 

## Referenties
  * [Babel](https://babeljs.io/setup#installation) , "Choose your tool" => kies voor CLI
  * [WebPack getting started](https://webpack.js.org/guides/getting-started/)
  * [WebPack - Development](https://webpack.js.org/guides/development/)
  * [WebPack - Development server](https://webpack.js.org/configuration/dev-server/#devserver)
  * [WebPack Tree Shaking](https://webpack.js.org/guides/tree-shaking/)
  * [Google on Tree Shaking](https://developers.google.com/web/fundamentals/performance/optimizing-javascript/tree-shaking/)
  