
// Catch the dom
let animalEl = document.querySelector('.animal_number');


//Animal sounds
let animalSounds = ['/animalSrc/butterfly0.m4a', '/animalSrc/cat1.m4a','/animalSrc/cow2.m4a','/animalSrc/deer3.m4a','/animalSrc/donkey4.m4a','/animalSrc/duck5.m4a','/animalSrc/eagle6.m4a','/animalSrc/elephant7.m4a','/animalSrc/fish8.m4a','/animalSrc/fox9.m4a','/animalSrc/giraffe10.m4a','/animalSrc/goat11.m4a','/animalSrc/hen12.m4a','/animalSrc/horse13.m4a','/animalSrc/hyna14.m4a','/animalSrc/lion15.m4a','/animalSrc/ostrich16.m4a','/animalSrc/peacock17.m4a','/animalSrc/rabbi18.m4a','/animalSrc/sheep19.m4a','/animalSrc/squirrel20.m4a','/animalSrc/tiger21.m4a','/animalSrc/tortoise22.m4a','/animalSrc/zebra23.m4a'];

// Animal Images
let animalImages = ['/images/butterfly.png', '/images/cat.png','/images/cow2.png','/images/deer.jpeg','/images/donkey.png','/images/duck.png','/images/eagle.png','/images/elephant.png','/images/fish.png','/images/fox.jpeg','/images/giraffe.png','/images/goat.jpeg','/images/hen.png','/images/horse.png','/images/hyena.jpeg','/images/lion.png','/images/ostrich.jpeg','/images/peacock.png','/images/rabbit.png','/images/sheep.png','/images/squirrel.png','/images/tiger.png','/images/turtle.png','/images/zebra.jpeg','/images/more-comming-soon.jpeg'];

// Animal Names
let animalNames = ['Butterfly', 'Cat','Cow','Deer','Donkey','Duck','Eagle','Elephant','Fish','Fox','Giraffe','Goat','Hen','Horse','Hyena','Lion','Ostrich','Peacock','Rabbit','Sheep','Squirrel','Tiger','Turtle','Zebra','See you again!']

//Generating dynamic cards for animal cards
function animalCards(nums) {
  for(let i=0; i<=nums;i++) {
    let dynamicDiv = createDivAnimal(i)
    dynamicDiv.style.backgroundImage = `url(${animalImages[i]})`;
    dynamicDiv.setAttribute('id', i)
    dynamicDiv.innerHTML = `${animalNames[i]}`
    animalEl.append(dynamicDiv);
  }
}
animalCards(24)

// Creating a dynamic div for animal cards
function createDivAnimal(text) {
  let newDev = document.createElement('div')
  newDev.textContent = text;
  newDev.classList.add('animal_card')
  return newDev
}

// Catch the dynamic DOM Element
let animalCardEl = document.querySelectorAll('.animal_card');
// Main function for playing animal sound when icon is clicked
let playSound = () => {
  for(let i=0; i<animalCardEl.length;i++) {
    animalCardEl[i].addEventListener('click', event => {
      let currentAnimalId = event.target.getAttribute('id');
      new Audio(animalSounds[currentAnimalId]).play();
    })
  }
}
playSound();