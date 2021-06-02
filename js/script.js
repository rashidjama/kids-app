import { numbersAudio } from './numbers.js'
let numbersEl = document.querySelector('.numbers');

//Generating 100 dynamic numbers
function main(nums) {
  for(let i=0; i<=nums;i++) {
    let dynamicDiv = createDiv(i)
    numbersEl.append(dynamicDiv);
  }
}
main(100)

// Creating a dynamic div for numbers cards
function createDiv(text) {
  let newDev = document.createElement('div')
  newDev.textContent = text;
  newDev.classList.add('number')
  return newDev
}

//Generating 100 dynamic numbers for animal cards
function animalCards(nums) {
  for(let i=0; i<=nums;i++) {
    let dynamicDiv = createDivAnimal(i)
    numbersEl.append(dynamicDiv);
  }
}
animalCards(100)

// Creating a dynamic div for animal cards
function createDivAnimal(text) {
  let newDev = document.createElement('div')
  newDev.textContent = text;
  newDev.classList.add('number')
  return newDev
}


