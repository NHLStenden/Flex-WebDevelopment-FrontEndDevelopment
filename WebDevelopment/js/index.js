import {MyHttp} from "./MyHttpClass.js";

$( function() {
    LoadMarkDownFiles();
} ); // Ready Function

function LoadMarkDownFiles(){
    var promises = [];
    var files = [
        {dir:"Fase%201", caption:"Fase 1"},
        {dir:"Fase%202", caption:"Fase 2"},
        {dir:"Fase%203", caption:"Fase 3"},
        {dir:"Fase%204", caption:"Fase 4"},
        {dir:"Fase%205", caption:"Fase 5"},
        {dir:"Fase%205b", caption:"Fase 5b"},
        {dir:"Fase%206", caption:"Fase 6"},
        {dir:"Fase%207", caption:"Fase 7"},
        {dir:"Fase%208", caption:"Fase 8"},
        {dir:"Fase%209", caption:"Fase 9"},
        {dir:"Fase%2010", caption:"Fase 10"},
    ];

    for(var obj in files){
        promises.push(LoadMarkDownFile(files[obj].dir, files[obj].caption));
    }

    // wacht tot alle promises voldaan zijn, zodat we de Jquery Accordion kunnen aanmaken en de code-highlighter aan het werk kunnen zetten
    Promise.all(promises).then(function(values){
        $( "#accordion" ).accordion({
            collapsible: true,
            heightStyle: "content"
        });
        $('pre code').each(function(i, block) {
            hljs.highlightBlock(block);
        });
    });

}//LoadMarkDownFiles

function LoadMarkDownFile(directory, caption){
    // eerst elementen maken en toevoegen zodat de kans groter is dat ze in de juiste volgorde in de DOM terecht komen.
    var h3 = $("<h3>");
    var div = $("<div>");

    $(h3).html(caption);
    $("#accordion").append(h3).append(div);

    // doe een HTTP request om de README.md files op te halen.
    var http = new MyHttp();
    var prom = http.getDataFromIMDB('./' + directory + '/README.md');
    prom.then(
      content => {
          console.log("retrieved Markdown File");

          // maak een nieuwe Markdown converter
          var converter = new showdown.Converter();

          // converteer
          var html      = converter.makeHtml(content);

          // voeg resultaat toe aan de DOM
          $(div).html(html);

          // pas relatieve paden aan zodat als ze in de submappen een relatief aanwijzen, we dit absoluut kunnen maken
          var path = window.location.pathname;
          path = path.replace(/index.html/g, "");
          $("img", div).each(function(idx, element){
              var src = $(element).attr("src");
              src = path + directory + "/" + src;

              $(element).attr("src", src);
          });

          // zorg dat de <A>-elementen uit de Markdown een TARGET-attribuur krijgen die de URL in een nieuw tabblad openen.
          $("a", div).each(function(idx, element){
              $(element).attr("target","_blank");
          });
      }
    );
    // return promise
    return prom;
}//LoadMarkDownFile