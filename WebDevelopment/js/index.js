import {MyHttp} from "./MyHttpClass.js";

$( function() {
    LoadMarkDownFiles();
    $( "#accordion" ).accordion();

    hljs.initHighlightingOnLoad();
    $(document).ready(function() {
        $('pre code').each(function(i, block) {
            hljs.highlightBlock(block);
        });
    });
} ); // Ready Function

function LoadMarkDownFiles(){
    LoadMarkDownFile("Fase%201");
    LoadMarkDownFile("Fase%202");
    LoadMarkDownFile("Fase%203");
    LoadMarkDownFile("Fase%204");
    LoadMarkDownFile("Fase%205");
}//LoadMarkDownFiles

function LoadMarkDownFile(directory){
    var http = new MyHttp();
    var prom = http.getDataFromIMDB('./' + directory + '/README.md');
    prom.then(
      content => {
          console.log("retrieved Markdown File");
          var h3 = $("<h3>");
          var div = $("<div>");
          var converter = new showdown.Converter();
          var html      = converter.makeHtml(content);
          $(h3).html(directory);
          $(div).html(html);

          $("#accordion").append(h3).append(div);
          $("#accordion").accordion("refresh");
      }
    );
}//LoadMarkDownFile