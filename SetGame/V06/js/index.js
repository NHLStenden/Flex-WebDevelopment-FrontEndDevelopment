"use strict"

const colors = ["red", "green", "violet"];
const fills = ["solid", "hollow", "striped"];
const shapes = ["diamond", "pill", "wave"]
const nrOfShapes = [1, 2, 3];
let cardset ;
let randomCards;


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
                    const cardTemplate = `<div id="${items.length+1}" class="card ${shape}">${shapes}</div>`;
                    items.push({
                        id: items.length + 1,
                        shape,
                        fill,
                        color,
                        nrOfShapes: shapesToPlace,
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
        // remove the item at random position from the list. the spliced-off items are returned as a new array
        const item = copyOfList.splice(pos,1);

        // unpack the resulted items (one at most) and add it to the result list
        results.push(...item);
    }
    return results;
} // GetRandomItems

function setup() {
  setupBoard();
  manageBoard();
}// setup

function setupBoard() {
    // get the container from the HTML
    const container = document.getElementById("shapes");

    cardset = GetFullSet();
    randomCards = GetRandomItems(cardset, 12);

    let i=1;
    for (const card of cardset) {
        container.innerHTML += card.html;
        if (i % 4 === 0) {
            container.innerHTML += "<br>";
        }
        i++;
    }
}// setupBoard

function manageBoard() {

    const cardsOnTable = document.querySelectorAll("div.card");
    console.log(cardsOnTable.length);
    for (const card of cardsOnTable){
        card.addEventListener('click' , function(evt) {
            const clickedCard         = this;
            const selectedCardClasses = clickedCard.classList;
            const cardsSelected = document.querySelectorAll('div.card.selected');

            if (selectedCardClasses.contains('selected')) {
                card.classList.remove('selected');
            }
            else{

                if (cardsSelected.length < 3 ) {
                    console.log(`Clicked on a card! ${card.id}`);
                    card.classList.toggle('selected');
                }
            }

            const cardsNewSelected = document.querySelectorAll('div.card.selected');

            if (cardsNewSelected.length === 3 && isSelectionASet()) {
                alert('Een set gevonden!');
            }
        });
    }// for each card

}// manageBoard

function isSelectionASet() {
    const selectedCardsGUI = document.querySelectorAll('div.card.selected');
    const cardsInfo = [];

    const setColor      = new Map();
    const setShape      = new Map();
    const setFill       = new Map();
    const setNrOfShapes = new Map();


    // collect info on selected cards
    for(const card of selectedCardsGUI) {
        const id = parseInt(card.id, 10);
        const cardInfo = cardset.find(c => c.id === id);
        if (cardInfo) {
            cardsInfo.push(cardInfo);
            console.log(cardInfo);

            // Register COLOR as new or update count
            if (!setColor.has(cardInfo.color)) {
                setColor.set(cardInfo.color, 1);
            }
            else {
                const curValue = setColor.get(cardInfo.color);
                setColor.set(cardInfo.color, curValue + 1);
            }

            // Register FILL as new or update count
            if (!setFill.has(cardInfo.fill)) {
                setFill.set(cardInfo.fill, 1);
            }
            else{
                const curValue = setFill.get(cardInfo.fill);
                setFill.set(cardInfo.fill, curValue + 1);
            }

            // Register SHAPE as new or update count
            if (!setShape.has(cardInfo.shape)) {
                setShape.set(cardInfo.shape, 1);
            }
            else{
                const curValue = setShape.get(cardInfo.shape);
                setShape.set(cardInfo.shape, curValue + 1);
            }

            // Register NROFSHAPES as new or update count
            if (!setNrOfShapes.has(cardInfo.nrOfShapes)) {
                setNrOfShapes.set(cardInfo.nrOfShapes, 1);
            }
            else{
                const curValue = setNrOfShapes.get(cardInfo.nrOfShapes);
                setNrOfShapes.set(cardInfo.nrOfShapes, curValue + 1);
            }

        }
    }

    const allDiffColors      = setColor.size === 3;
    const allDiffShapes      = setShape.size === 3;
    const allDiffFills       = setFill.size === 3;
    const allDiffNrOfShapes  = setNrOfShapes.size === 3;

    const allSameColors = setColor.size === 1;
    const allSameShapes = setShape.size === 1;
    const allSameFills  = setFill.size === 1;
    const allSameNrOfShapes = setNrOfShapes.size === 1;

    const itIsASet = (allDiffColors || allSameColors) &&
        (allDiffFills || allSameFills) &&
        (allDiffNrOfShapes || allSameNrOfShapes) &&
        (allDiffShapes || allSameShapes);

    // TODO: yield real result
    return itIsASet;
}// isSelectionASet

window.onload = () => {
    setup();
}
