export class MyHttp {
    getDataFromURL(url){
        console.log(">>getDataFromURL");

        // create a promise that will be returned as the function's result
        // the calling function can supply the resolve and reject function.

        var prom = new Promise(function(resolve, reject) {
            console.log("getDataFromURL::Promise body");

            // create an object to call a REST API
            var xhr = new XMLHttpRequest();

            // set the URL to be opened
            xhr.open('GET', url);

            // set (a lot of) options to prevent caches pages
            xhr.setRequestHeader('cache-control', 'no-cache, must-revalidate, post-check=0, pre-check=0');
            xhr.setRequestHeader('cache-control', 'max-age=0');
            xhr.setRequestHeader('expires', '0');
            xhr.setRequestHeader('expires', 'Tue, 01 Jan 1980 1:00:00 GMT');
            xhr.setRequestHeader('pragma', 'no-cache');

            // set a function that is called when the API call is completed without errors
            xhr.onload = function () {
                console.log("Data retrieved; now calling resolve function");
                resolve(xhr.response);
            };

            // set a function that is called when the API call cannot be completed.
            xhr.onerror = function () {
                console.log("#ERROR reaching URL " + url);
                console.log("#ERROR response" + xhr.response);
                console.log("#ERROR now calling REJECT function");
                reject(xhr.response);
            };

            // do the actual call to the REST API
            xhr.send();

        });
        console.log("<<getDataFromURL");
        return prom;
    }//getDataFromURL

}//class MyHttpClass