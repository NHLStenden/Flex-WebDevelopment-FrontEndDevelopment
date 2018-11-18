import {MarkdownSupporter} from "./MarkdownSupporter.js";

$( function() {
    var examples = [
        {dir:"Fase01", caption:"Fase 1"},
        {dir:"Fase02", caption:"Fase 2"},
        {dir:"Fase03", caption:"Fase 3"},
        {dir:"Fase04", caption:"Fase 4"},
        {dir:"Fase05", caption:"Fase 5"},
        {dir:"Fase06", caption:"Fase 6"},
        {dir:"Fase07", caption:"Fase 7"},
        {dir:"Fase08", caption:"Fase 8"},
        {dir:"Fase09", caption:"Fase 9"},
        {dir:"Fase10", caption:"Fase 10"},
        {dir:"Fase11", caption:"Fase 11"}
    ];

    var mdSupporter = new MarkdownSupporter("content/examples");

    mdSupporter.LoadMarkDownFiles(examples,    "examples");
} ); // Ready Function
