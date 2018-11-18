import {MyHttp} from "./MyHttpClass.js";

export class MarkdownSupporter {

    constructor (basedir){
        this.promises = [];
        this.itemList = [];
        this.basedir  = basedir;
    }
    /**
     * Load a list of specified files by retrieving them from the
     * @param itemlist
     * @param idHTML
     */
    LoadMarkDownFiles(itemlist, idHTML) {
        var jqueryID = "#" + idHTML;

        var ul = $("<ul/>");
        $(jqueryID).append(ul);

        for (var obj in itemlist) {
            var li = $("<li/>");
            var link = $("<a/>");
            var idTab = idHTML + "-" + obj;

            $(link).attr("href", "#" + idTab).text(itemlist[obj].caption);
            $(li).append(link);
            $(ul).append(li);

            var newItem = this.LoadMarkDownFile(jqueryID, idTab, itemlist[obj].dir);
            this.itemList.push(newItem);
            this.promises.push(newItem.promise);
        }

        // wacht tot alle promises voldaan zijn, zodat we de Jquery TABS kunnen aanmaken en de code-highlighter aan het werk kunnen zetten
        var allPromises = Promise.all(this.promises);
        allPromises.then(
            values => {
                console.log("All promises fullfilled");

                // create JQueryUI Tabs
                $("#" + idHTML).tabs();

                // enable syntax highlighting on ALL found pre>code blocks
                $('pre code').each(function (i, block) {
                    hljs.highlightBlock(block);
                });
            }//resolve function all promises
        );

        for(var i in this.itemList) this.executePromise(this.itemList[i]);
    }//LoadMarkDownFiles

    LoadMarkDownFile(idHTML, idTab, directory) {
        // eerst elementen maken en toevoegen zodat de kans groter is dat ze in de juiste volgorde in de DOM terecht komen.
        var div = $("<div>");
        $(div).attr("id", idTab)
        $(idHTML).append(div);

        // doe een HTTP request om de README.md files op te halen.
        var http = new MyHttp();
        var prom = http.getDataFromURL('./' + this.basedir + "/" + directory + '/README.md');

        var obj = {
            promise:prom,
            container:div,
            directory:directory
        };

        return obj;

        // return promise
        return prom;
    }//LoadMarkDownFile

    executePromise(promObj){
        var prom      = promObj.promise;
        var div       = promObj.container;
        var directory = promObj.directory;
        var basedir   = this.basedir;

        prom.then(
            content => {
                console.log("retrieved Markdown File for " + directory);

                // maak een nieuwe Markdown converter
                var converter = new showdown.Converter();

                // converteer
                var html = converter.makeHtml(content);

                // voeg resultaat toe aan de DOM
                $(div).html(html);

                // pas relatieve paden aan zodat als ze in de submappen een relatief aanwijzen, we dit absoluut kunnen maken
                var path = window.location.pathname;

                // remove <something.html> from end path (using lazy search from a / up to .html
                path = path.replace(/\/.*?\.html$/g, "");

                // collect all images
                $("img", div).each(function (idx, element) {
                    var src = $(element).attr("src");
                    src = path + basedir +"/" + directory + "/" + src;

                    $(element).attr("src", src);
                });

                // zorg dat de <A>-elementen uit de Markdown een TARGET-attribuut krijgen die de URL in een nieuw tabblad openen.
                $("a", div).each(function (idx, element) {
                    $(element).attr("target", "_blank");
                });

                console.log("Promise finished for " + directory);
            }
        );
    }//executePromise

}