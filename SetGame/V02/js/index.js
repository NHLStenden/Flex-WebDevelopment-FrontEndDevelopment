"use strict"

const colors = ["red", "green", "violet"];
const fills = ["solid", "hollow", "striped"];
const shapes = ["diamond", "pill", "wave"]
const nrOfShapes = [1, 2, 3];

const items = [];

window.onload = () => {
    // get the container from the HTML
    const container = document.getElementById("shapes");

    // Permutate all colors, fills and shapes
    for (const color of colors) {
        for (const fill of fills) {
            for (const shape of shapes) {
                for (let shapesToPlace of nrOfShapes) {
                    let shapes = '';

                    for (let i = 0; i < shapesToPlace; i++) {
                        items.push({
                            shape, fill, color, nrOfShapes: i+1
                        });

                        const template2 = `
                        <svg 
                                viewBox="0 0 150 120" 
                                width="150px" height="120px">
                                <use xlink:href="#svg_defs"/>
                                <use xlink:href="#card_${shape}" class="shape ${fill} ${color}"/>
                        </svg>`;
                        shapes += template2;
                    }
                    const template1 = `<div class="card">${shapes}</div>`;
                    container.innerHTML += template1;
                }
                container.innerHTML += '<br>';
            }
        }
    }

    console.log(JSON.stringify(items));


}
