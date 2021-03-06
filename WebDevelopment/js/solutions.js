import {MarkdownSupporter} from "./MarkdownSupporter.js";

$( function() {
    var solutions = [
        {dir:"opdracht01", caption:"opdracht 1"},
        {dir:"opdracht02", caption:"opdracht 2"},
        {dir:"opdracht03", caption:"opdracht 3"},
        {dir:"opdracht04", caption:"opdracht 4"},
        {dir:"opdracht05", caption:"opdracht 5"},
        {dir:"opdracht06", caption:"opdracht 6"},
        {dir:"opdracht07", caption:"opdracht 7"},
        {dir:"opdracht08", caption:"opdracht 8"},
        {dir:"opdracht09", caption:"opdracht 9"},
        {dir:"opdracht10", caption:"opdracht 10"},
        {dir:"opdracht11", caption:"opdracht 11"},
        {dir:"opdracht12", caption:"opdracht 12"},
        {dir:"opdracht13", caption:"opdracht 13"},
        {dir:"opdracht14", caption:"opdracht 14"},
        {dir:"opdracht15", caption:"opdracht 15"}
    ];

    var mdSupporter = new MarkdownSupporter("content/solutions");

    mdSupporter.LoadMarkDownFiles(solutions,    "oplossingen");
} ); // Ready Function
