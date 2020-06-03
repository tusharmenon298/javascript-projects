//Select the button and body
const randButton=document.querySelector('.randomizer');
const bkg =document.querySelector('body');
const hexButton=document.querySelector('.hexNumber')
const output=document.querySelector('.hex')
const result=document.querySelector('.result')
var random=""

//functions


function getRandomColor()
{
  let letters='0123456789ABCDEF';
  let colors="#";
  for(let i=0;i<6;i++)
  {
    colors+=letters[Math.floor(Math.random()*16)]
  }
  return colors
}
//Changes background
function changeColor(){
  random=getRandomColor();
  bkg.style.backgroundColor=random;
  output.style.visibility="hidden";
}
//Displays hex number
function answer(){
  output.style.visibility="visible";
  result.innerHTML=random;
}

//Event Listener
randButton.addEventListener('click',changeColor);
hexButton.addEventListener('click',answer);
