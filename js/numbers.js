//Cache the DOM
let numbersEl = document.querySelector('.numbers');

//generating random motivation words using random index
let randomWords = _ => {
  let randomIndex = Math.floor(Math.random() * emojis.length)
  return emojis[randomIndex]
}

// Numbers Audio
let sounds = [
  './numbersSrc/0.m4a', './numbersSrc/1.m4a', './numbersSrc/2.m4a', './numbersSrc/3.m4a', './numbersSrc/4.m4a', './numbersSrc/5.m4a', './numbersSrc/6.m4a', './numbersSrc/7.m4a','./numbersSrc/8.m4a', './numbersSrc/9.m4a', './numbersSrc/10.m4a', './numbersSrc/11.m4a', './numbersSrc/12.m4a', './numbersSrc/13.m4a', './numbersSrc/14.m4a', './numbersSrc/15.m4a','./numbersSrc/16.m4a', './numbersSrc/17.m4a', './numbersSrc/18.m4a', './numbersSrc/19.m4a','./numbersSrc/20.m4a', './numbersSrc/21.m4a', './numbersSrc/22.m4a', './numbersSrc/23.m4a', './numbersSrc/24.m4a', './numbersSrc/25.m4a', './numbersSrc/26.m4a', './numbersSrc/27.m4a', './numbersSrc/28.m4a', './numbersSrc/29.m4a', './numbersSrc/30.m4a', './numbersSrc/31.m4a','./numbersSrc/32.m4a','./numbersSrc/33.m4a', './numbersSrc/34.m4a', './numbersSrc/35.m4a', './numbersSrc/36.m4a', './numbersSrc/37.m4a', './numbersSrc/38.m4a', './numbersSrc/39.m4a', './numbersSrc/40.m4a', './numbersSrc/41.m4a', './numbersSrc/42.m4a', './numbersSrc/43.m4a', './numbersSrc/44.m4a', './numbersSrc/45.m4a','./numbersSrc/46.m4a', './numbersSrc/47.m4a', './numbersSrc/48.m4a', './numbersSrc/49.m4a', './numbersSrc/50.m4a', './numbersSrc/51.m4a', './numbersSrc/52.m4a', './numbersSrc/53.m4a', './numbersSrc/54.m4a', './numbersSrc/55.m4a', './numbersSrc/56.m4a', './numbersSrc/57.m4a', './numbersSrc/58.m4a','./numbersSrc/59.m4a', './numbersSrc/60.m4a', './numbersSrc/61.m4a', './numbersSrc/62.m4a', './numbersSrc/63.m4a', './numbersSrc/64.m4a', './numbersSrc/65.m4a', './numbersSrc/66.m4a', './numbersSrc/67.m4a', './numbersSrc/68.m4a', './numbersSrc/69.m4a', './numbersSrc/70.m4a', './numbersSrc/71.m4a', './numbersSrc/72.m4a', './numbersSrc/73.m4a', './numbersSrc/74.m4a', './numbersSrc/75.m4a', './numbersSrc/76.m4a', './numbersSrc/77.m4a', './numbersSrc/78.m4a', './numbersSrc/79.m4a','./numbersSrc/80.m4a', './numbersSrc/81.m4a', './numbersSrc/82.m4a', './numbersSrc/83.m4a', './numbersSrc/84.m4a', './numbersSrc/85.m4a', './numbersSrc/86.m4a', './numbersSrc/87.m4a','./numbersSrc/88.m4a', './numbersSrc/89.m4a', './numbersSrc/90.m4a', './numbersSrc/91.m4a', './numbersSrc/92.m4a', './numbersSrc/93.m4a', './numbersSrc/94.m4a', './numbersSrc/95.m4a', './numbersSrc/96.m4a', './numbersSrc/97.m4a', './numbersSrc/98.m4a', './numbersSrc/99.m4a' , './numbersSrc/100.m4a',
];

//main function for triggering numbers sounds
let numbersAudio = numbersEl.addEventListener('click', event => {
  new Audio(sounds[event.target.textContent]).play()
  if(event.target.classList.contains('number')) {
    event.target.style.backgroundColor = 'gray';
    event.target.style.opacity = '0.3';
  }
})

export {
  numbersAudio
}


