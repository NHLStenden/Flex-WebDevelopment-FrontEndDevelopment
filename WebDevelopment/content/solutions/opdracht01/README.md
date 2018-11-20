# Uitwerkingen opdracht 01

Voor deze opdracht zijn er 3 uitwerkingen.

## Uitwerking 1
Dit is de eenvoudigste versie waarbij het &lt;script>-element in de body staat. Kijk goed naar de document.write waarbij
het e-mail adres als URL (&lt;a>-element) wordt gebruikt:

```javascript
document.write("<p><a href='mailto:martin.molema@nhl.nl'>martin.molema@nhl.nl</a></p>");
```
Je mag in Javascript dubbele quotes (") en enkele qoutes (') mengen. Dat kan handig zijn als je één van beide in een
string moet gebruiken. Wat verder handig is, is dat je in HTML ook dubbele en enkele quotes mag mixen.

## Uitwerking 2
In de tweede uitwerking is het &lt;script>-element verhuisd achter bestaande elementen. Wat gebeurt er met die bestaande
tekst? Open het bestand in je browser en kijk wat er gebeurt.

## Uitwerking 3
In de derde uitwerking is het &lt;script>-element verplaatst naar de header. Dit is de meest gebruikte plek (al zijn 
er valide redenen om dat helemaal aan het einde te doen). Doordat we nu de Javascript-code rechtstreek in de HTML
opnemen wordt deze meteen uitgevoerd. Wat is het effect op de bestaande tekst?

Open het bestand [versie03.html](versie03.html)  in je browser en zet een breakpoint op de javascript-code en ververs
de pagina. Als het breakpoint de uitvoering stopt, kijk dan eens bij de HTML-code. Je zult zien dat er géén body is.

Voer nu de javascript code uit en zie wat er gebeurt. Het zal je opvallen dat de tekst die in de body staat
```html
<body>
<p>Ik ben vast tekst. Wat gebeurt er met mij?</p>
</body>
```
achter de HTML-elementen staat die in de Javascript code toegevoegd is. Dit komt doordat de Javascript-code meteen bij het
ophalen van de HTML meteen wordt uitgevoerd.

Let op: in toekomstige voorbeelden gaan we de Javascript uit een bestand halen. Het ophalen van die Javascript bestanden
kost tijd. Echter, er is geen garantie dat de body van je HTML al volledig verwerkt is als jouw code gaat lopen. Om 
dat te garanderen gaan we in toekomstige voorbeelden eenvoudige maatregelen hier voor nemen. 

