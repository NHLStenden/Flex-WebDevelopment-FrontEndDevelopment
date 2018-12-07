import {MarkdownSupporter} from "./MarkdownSupporter.js";

$( function() {
    var assignments = [
        {dir:"01", caption:"Opdracht 01"},
        {dir:"02", caption:"Opdracht 02"},
        {dir:"03", caption:"Opdracht 03"},
        {dir:"04", caption:"Opdracht 04"},
        {dir:"05", caption:"Opdracht 05"},
        {dir:"06", caption:"Opdracht 06"},
        {dir:"07", caption:"Opdracht 07"},
        {dir:"08", caption:"Opdracht 08"},
        {dir:"09", caption:"Opdracht 09"},
        {dir:"10", caption:"Opdracht 10"},
        {dir:"11", caption:"Opdracht 11"},
        {dir:"12", caption:"Opdracht 12"},
        {dir:"13", caption:"Opdracht 13"},
        {dir:"14", caption:"Opdracht 14"},
        {dir:"15", caption:"Opdracht 15"}
    ];

    var mdSupporter = new MarkdownSupporter("content/assignments");

    mdSupporter.LoadMarkDownFiles(assignments, "assignments");
} ); // Ready Function
