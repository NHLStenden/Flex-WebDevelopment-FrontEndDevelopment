"use strict"

const colors = ["red", "green", "violet"];
const fills = ["solid", "hollow", "striped"];
const shapes = ["diamond", "pill", "wave"]
const nrOfShapes = [1, 2, 3];


function GetFullSet() {
    const items = [];

    // Permutate all colors, fills and shapes
    for (const color of colors) {
        for (const fill of fills) {
            for (const shape of shapes) {
                for (let shapesToPlace of nrOfShapes) {
                    let shapes = '';

                    for (let i = 0; i < shapesToPlace; i++) {
                        const shapeTemplate = `
                        <svg 
                                viewBox="0 0 150 120" 
                                width="150px" height="120px">
                                <use xlink:href="#svg_defs"/>
                                <use xlink:href="#card_${shape}" class="shape ${fill} ${color}"/>
                        </svg>`;
                        shapes += shapeTemplate;

                    }// for items on card
                    const cardTemplate = `<div id="${items.length+1}" class="card">${shapes}</div>`;
                    items.push({
                        id: items.length + 1,
                        shape,
                        fill,
                        color,
                        nrOfShapes,
                        html:  cardTemplate
                    });
                }// for nr of shapes
            }// for shapes
        }// for fills
    }//for colors
    return items;
}// GetFullSet()

function GetRandomItems(list, nrOfItemsToTake) {
    // make a copy of the list to make picking unique items easier
    const copyOfList = [...list];
    console.log(copyOfList.length);

    // define result set
    const results = [];

    // loop to get number of items required
    for (let i = 0; i < nrOfItemsToTake; i++) {
        // get a new random number that is maximum the length of the list
        const pos = Math.floor( Math.random() * copyOfList.length );
        console.log(pos);

        // remove the item at random position from the list. the spliced-off items are returned as a new array
        const item = copyOfList.splice(pos,1);

        // unpack the resulted items (one at most) and add it to the result list
        results.push(...item);
    }
    return results;
}

window.onload = () => {
    // get the container from the HTML
    const container = document.getElementById("shapes");

    const cardset = GetFullSet();
    const randomCards = GetRandomItems(cardset, 12);
    console.log(randomCards);

    let i=1;
    for (const card of randomCards) {
        container.innerHTML += card.html;
        if (i % 4 === 0) {
            container.innerHTML += "<br>";
        }
        i++;
    }
}
