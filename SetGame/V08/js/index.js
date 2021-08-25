"use strict"

const colors = ["red", "green", "purple"];
const fills = ["solid", "hollow", "striped"];
const shapes = ["diamond", "pill", "wave"]
const nrOfShapes = [1, 2, 3];
let fullSetOfCards ;
let randomCards;

window.onload = () => {
    setup();
    findAllSets(randomCards);
}


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

function GetRandomItems(fullSetOfCards, nrOfItemsToTake) {
    // in this version we take items from the full set, thereby reducing the full set

    // define result set
    const results = [];

    // loop to get number of items required
    for (let i = 0; i < nrOfItemsToTake; i++) {
        // get a new random number that is maximum the length of the list
        const pos = Math.floor( Math.random() * fullSetOfCards.length );
        // remove the item at random position from the list. the spliced-off items are returned as a new array
        const item = fullSetOfCards.splice(pos,1);

        // unpack the resulted items (one at most) and add it to the result list
        results.push(...item);
    }
    return results;
} // GetRandomItems

function setup() {
  setupBoard();
  manageBoard();
  setupHinting();
}// setup

function setupBoard() {
    // get the container from the HTML
    const container = document.getElementById("shapes");

    fullSetOfCards = GetFullSet();
    randomCards = GetRandomItems(fullSetOfCards, 12);

    for (const card of randomCards) {
        container.innerHTML += card.html;
    }
}// setupBoard

function manageBoard() {

    const container = document.getElementById("shapes");
    container.addEventListener('click', handleClickEvent);

}// manageBoard

function handleClickEvent(evt) {

    const clickedElement = isClickedElementACard(evt);

    // check if a div.shape element was clicked
    if (clickedElement !== undefined){

        const selectedCardClasses = clickedElement.classList;
        const cardsSelected       = document.querySelectorAll('div.card.selected');

        if (selectedCardClasses.contains('selected')) {
            clickedElement.classList.remove('selected');
        }
        else{
            if (cardsSelected.length < 3 ) {
                console.log(`Clicked on a card! ${clickedElement.id}`);
                clickedElement.classList.toggle('selected');
            }
        }

        const cardsNewSelected = document.querySelectorAll('div.card.selected');

        if (cardsNewSelected.length === 3 ) {
            if (isSelectionASet()){
                console.log('Een set gevonden!');

                RemoveSelectedCards();
                AddThreeNewCards();
                clearTableWithSelectionInfo();
            }
        }
        else{
            clearTableWithSelectionInfo();
        }

    }
    else{
        console.log('Clicked something else');
        clearTableWithSelectionInfo();
    }
}// handleClickEvent

/**
 * Investigates the item clicked whether it is a card
 * @param evt
 */
function isClickedElementACard(evt) {
    let element = evt.target;

    while (element.id !== 'shapes') {
        if (element.tagName === 'DIV' && element.classList.contains('card')) {
            return element;
        }
        else {
            element = element.parentElement;
        }

    }
    if (element.id === 'shapes') {
        return undefined;
    }
}

function RemoveSelectedCards(){
    const cardsNewSelected = document.querySelectorAll('div.card.selected');

    // remove cards in the set
    for (const card of cardsNewSelected) {
        card.parentElement.removeChild(card);
    }
}// RemoveSelectedCards

/**
 * Find 3 new random items and add them to the DOM. The general CLICK-eventhandler on the parent (div.container)
 * can handle the clicks
 * @constructor
 */
function AddThreeNewCards() {
    // pick 3 new cards
    const container = document.getElementById("shapes");
    const newCardsToPlace = GetRandomItems(fullSetOfCards, 3);

    randomCards.push(...newCardsToPlace);

    for (const card of newCardsToPlace) {
        container.innerHTML += card.html;
    }
}// AddThreeNewCards

function isSelectionASet() {
    const selectedCardsGUI = document.querySelectorAll('div.card.selected');
    const cardsInfo = [];

    // collect info on selected cards
    for (const card of selectedCardsGUI) {
        const id = parseInt(card.id, 10);
        const cardInfo = randomCards.find(c => c.id === id);
        if (cardInfo) {
            cardsInfo.push(cardInfo);
        }
    }
    return isCardsetASet(cardsInfo, true);
}

function isCardsetASet(cardsInfo, showInTable) {

    const setColor      = new Map();
    const setShape      = new Map();
    const setFill       = new Map();
    const setNrOfShapes = new Map();

    // collect info on selected cards
    for(const cardInfo of cardsInfo) {
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

    const allDiffColors      = setColor.size === 3;
    const allDiffShapes      = setShape.size === 3;
    const allDiffFills       = setFill.size === 3;
    const allDiffNrOfShapes  = setNrOfShapes.size === 3;

    const allSameColors     = setColor.size === 1;
    const allSameShapes     = setShape.size === 1;
    const allSameFills      = setFill.size === 1;
    const allSameNrOfShapes = setNrOfShapes.size === 1;

    const itIsASet = (allDiffColors || allSameColors) &&
        (allDiffFills || allSameFills) &&
        (allDiffNrOfShapes || allSameNrOfShapes) &&
        (allDiffShapes || allSameShapes);

    if (showInTable){
        fillTableWithSelectionInfo(allDiffColors, allDiffShapes, allDiffFills,allDiffNrOfShapes,
            allSameColors, allSameShapes, allSameFills, allSameNrOfShapes);
    }

    return itIsASet;
}// isSelectionASet

function clearTableWithSelectionInfo(){
    const tds = document.querySelectorAll("div.selectionInfo td.indicator");
    tds.forEach(element => element.innerHTML = '');
}

function fillTableWithSelectionInfo(allDiffColors, allDiffShapes, allDiffFills,allDiffNrOfShapes,
                                    allSameColors, allSameShapes, allSameFills, allSameNrOfShapes) {

    const trColors    = document.querySelectorAll("div.selectionInfo .colors td");
    const trShapes    = document.querySelectorAll("div.selectionInfo .shapes td");
    const trFills     = document.querySelectorAll("div.selectionInfo .fills td");
    const trNrOfItems = document.querySelectorAll("div.selectionInfo .nrOfshapes td");

    trColors[1].innerHTML = allDiffColors ? "✅" : "-";
    trColors[2].innerHTML = allSameColors ? "✅" : "-";

    trShapes[1].innerHTML = allDiffShapes ? "✅" : "-";
    trShapes[2].innerHTML = allSameShapes ? "✅" : "-";

    trFills[1].innerHTML = allDiffFills ? "✅" : "-";
    trFills[2].innerHTML = allSameFills ? "✅" : "-";

    trNrOfItems[1].innerHTML = allDiffNrOfShapes ? "✅" : "-";
    trNrOfItems[2].innerHTML = allSameNrOfShapes ? "✅" : "-";

}


function findAllSets(cards) {
    const setsFound = findAllSet(cards, []);
    return setsFound;
}

function setupHinting() {
    const btn = document.getElementById("showHint");
    if (btn) {
        btn.addEventListener('click', function (evt) {
           const setsFound = findAllSets(randomCards);
           showHintsInTable(setsFound);
        });
    }
}

function showHintsInTable(hints) {
    const hintsTableBody = document.querySelector("#hints tbody");
    hintsTableBody.innerHTML = '';

    let i = 1;
    for(const hint of hints){
        let parts = '';
        for (const card of hint) {
            const oneLine = `<td class="vshape">${card.shape}</td>
                             <td class="vcolor">${card.color}</td>
                             <td class="vfill">${card.fill}</td>
                             <td class="vnrOfShapes">${card.nrOfShapes}</td>`;
            const newLine = `<tr><td>${i}</td>${oneLine}</tr>`;
            hintsTableBody.innerHTML += newLine;
        }
        i++;

    }
}

function findAllSet(cards, currentSet){

    const setsFound = [];

    const otherCards = cards.filter(c => currentSet.find(c2 => c2.id === c.id) === undefined);

    if (currentSet.length < 3) {
        if (otherCards.length >0){
            for (let i = 0; i < otherCards.length-1; i++) {
                const newcard = otherCards[i];
                let remainingToCheck;
                if (otherCards.length > 1) {
                    remainingToCheck = otherCards.slice(i+1);
                }
                else{
                    remainingToCheck = [];
                }
                const setsFoundBelow = findAllSet(remainingToCheck, [...currentSet, newcard]);
                setsFound.push(...setsFoundBelow);
            }
        }
    }
    else {
        if (isCardsetASet(currentSet, false)) {
            return [currentSet];
        }
    }
    return setsFound;
}

