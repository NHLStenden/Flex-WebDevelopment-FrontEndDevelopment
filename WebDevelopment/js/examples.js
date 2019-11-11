import {MarkdownSupporter} from "./MarkdownSupporter.js";

$( function() {
    var examples = [
        {dir:"Fase01", caption:"1. Javascript start"},
        {dir:"Fase02", caption:"2. DOM"},
        {dir:"Fase03", caption:"3. JQuery 1"},
        {dir:"Fase04", caption:"4. JQuery 2"},
        {dir:"Fase05", caption:"5. Asynchroon Promises"},
        {dir:"Fase06", caption:"6. Promises 2"},
        {dir:"Fase07", caption:"7. Boostrap"},
        {dir:"Fase08", caption:"8. Animaties"},
        {dir:"Fase09", caption:"9. "},
        {dir:"Fase10", caption:"Fase 10"},
        {dir:"Fase11", caption:"Fase 11"},
        {dir:"MyFirstSimpleApp01", caption:"Angular 1"},
        {dir:"MyFirstSimpleApp02", caption:"Angular 2"},
        {dir:"MyFirstAngularApp", caption:"Angular 3"},
        {dir:"MyFirstAngularAppV2", caption:"Angular 4"},
        {dir:"MyFirstDataEntry", caption:"Angular Data Entry"},
    ];

    var mdSupporter = new MarkdownSupporter("content/examples");

    mdSupporter.LoadMarkDownFiles(examples,    "examples");
} ); // Ready Function
