# Uitwerking opdracht 05
Voor deze opdracht weer twee uitwerkingen met verschillende aanpak.

### Variant A
In deze variant gebruiken we een "anonymous function":
```javascript
objListItem.addEventListener("click", function(evt){alert("ik ben aangeklikt.")});
```

Het wordt iets leesbaarder als we het als volgt coderen:
```javascript
objListItem.addEventListener("click", function(evt){
    alert("ik ben aangeklikt.");
  }//einde anonymous function for click handler
);
```


### Variant B
In de tweede variant gebruiken we een losse functie:

```javascript

  objListItem.addEventListener("click", clickHandler);

```

Deze functie wordt verderop geimplementeerd:
```javascript
function clickHandler(evt){
    alert("ik ben aangeklikt.")
}//clickHandler()
```

Het effect is exact hetzelfde. Er is niet per sé een goed of fout. Een mogelijke overweging is dat als je 
zeer weinig te doen hebt, een anonieme functie past (of later een lambda functie). Heb je veel te doen
dan kan een losse functie leesbaardere code opleveren.
 

## Referenties:
  * [Document Object Model](https://nl.wikipedia.org/wiki/Document_Object_Model)
  * [GetElementByID](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)
  * [CreateElement](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
  * [addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)