import {MarkdownSupporter} from "./MarkdownSupporter.js";

$( function() {
    var assignments = [
        {dir:"01", caption:"Opdracht 01"},
        {dir:"02", caption:"Opdracht 02"}
        {dir:"03", caption:"Opdracht 03"}
        {dir:"04", caption:"Opdracht 04"},
        {dir:"05", caption:"Opdracht 05"},
        {dir:"06", caption:"Opdracht 06"},
        {dir:"07", caption:"Opdracht 07"}
    ];

    var mdSupporter = new MarkdownSupporter("content/assignments");

    mdSupporter.LoadMarkDownFiles(assignments, "assignments");
} ); // Ready Function
