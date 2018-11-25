import {MarkdownSupporter} from "./MarkdownSupporter.js";

$( function() {
    var solutions = [
        {dir:"opdracht01", caption:"opdracht 1"},
        {dir:"opdracht02", caption:"opdracht 2"},
        {dir:"opdracht03", caption:"opdracht 3"}
        {dir:"opdracht04", caption:"opdracht 4"}
        {dir:"opdracht05", caption:"opdracht 5"}
        {dir:"opdracht06", caption:"opdracht 6"}
        {dir:"opdracht07", caption:"opdracht 7"}
    ];

    var mdSupporter = new MarkdownSupporter("content/solutions");

    mdSupporter.LoadMarkDownFiles(solutions,    "oplossingen");
} ); // Ready Function
