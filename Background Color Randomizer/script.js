//Select the button and body
const randButton=document.querySelector('.randomizer');
const bkg =document.querySelector('body');

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

function changeColor(){
  bkg.style.backgroundColor=getRandomColor()
}
//Event Listener
randButton.addEventListener('click',changeColor);
