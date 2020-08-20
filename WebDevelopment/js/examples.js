import {MarkdownSupporter} from "./MarkdownSupporter.js";

$( function() {
    const examples = [
        {dir:"Javascript/Example01", caption:"1. Javascript start"},
        {dir:"Javascript/Example02", caption:"2. DOM"},
        {dir:"Javascript/Example03", caption:"3. JQuery 1"},
        {dir:"Javascript/Example04", caption:"4. JQuery 2"},
        {dir:"Javascript/Example05", caption:"5. Asynchroon Promises"},
        {dir:"Javascript/Example06", caption:"6. Promises 2"},
        {dir:"Javascript/Example07", caption:"7. Boostrap"},
        {dir:"Javascript/Example08", caption:"8. Animaties"},
        {dir:"Javascript/Example09", caption:"9. JQuery UI"},
        {dir:"Javascript/Example10", caption:"10. Async HTTP"},
        {dir:"Javascript/Example11", caption:"11. OpenStreetMap"},
        {dir:"Angular/MyFirstSimpleApp01", caption:"Angular 1"},
        {dir:"Angular/MyFirstSimpleApp02", caption:"Angular 2"},
        {dir:"Angular/MyFirstAngularApp", caption:"Angular 3"},
        {dir:"Angular/MyFirstAngularAppV2", caption:"Angular 4"},
        {dir:"Angular/MyFirstDataEntry", caption:"Angular Data Entry"},

        {dir:"Angular/AngularFiets1", caption:"Angular met fietsinfo"},
        {dir:"Angular/AngularFiets2", caption:"Angular met fietsinfo 2"},
        {dir:"Angular/AngularFiets3", caption:"Angular met fietsinfo 3"},
        {dir:"Angular/AngularFietsMap", caption:"Angular met kaart"},
    ];

    const mdSupporter = new MarkdownSupporter("content/examples");

    mdSupporter.LoadMarkDownFiles(examples,    "examples");
} ); // Ready Function
