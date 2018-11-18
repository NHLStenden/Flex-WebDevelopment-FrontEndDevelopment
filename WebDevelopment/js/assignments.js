import {MarkdownSupporter} from "./MarkdownSupporter.js";

$( function() {
    var assignments = [
        {dir:"01", caption:"Opdracht 01"},
        {dir:"02", caption:"Opdracht 02"}
    ];

    var mdSupporter = new MarkdownSupporter("content/assignments");

    mdSupporter.LoadMarkDownFiles(assignments, "assignments");
} ); // Ready Function
