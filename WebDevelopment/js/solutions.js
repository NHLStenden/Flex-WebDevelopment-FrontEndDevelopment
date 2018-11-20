import {MarkdownSupporter} from "./MarkdownSupporter.js";

$( function() {
    var solutions = [
        {dir:"opdracht01", caption:"opdracht 1"}
    ];

    var mdSupporter = new MarkdownSupporter("content/solutions");

    mdSupporter.LoadMarkDownFiles(solutions,    "oplossingen");
} ); // Ready Function
