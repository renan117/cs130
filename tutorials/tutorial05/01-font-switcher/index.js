let currentFontSize = 1.4;

const makeBigger = () => {
   currentFontSize += 0.2;
   console.log(currentFontSize);
   document.querySelector('.content').style.fontSize = `${currentFontSize}em`;
   document.querySelector('h1').style.fontSize = `${currentFontSize+0.5}em`;
};

const makeSmaller = () => {
   currentFontSize = currentFontSize - 0.2;
   console.log(currentFontSize)
   document.querySelector('.content').style.fontSize = `${currentFontSize}em`;
   document.querySelector('h1').style.fontSize = `${currentFontSize+0.5}em`;
};


document.querySelector('#a1').addEventListener('click', makeBigger);
document.querySelector('#a2').addEventListener('click', makeSmaller);

