const resetButtonBackground = () => {
    document.querySelector("#btn1").style.backgroundColor = "#EEE";
    document.querySelector("#btn2").style.backgroundColor = "#EEE";
    document.querySelector("#btn3").style.backgroundColor = "#EEE";
    document.querySelector("#btn4").style.backgroundColor = "#EEE";
}





const makeRed = () => {
    console.log('Change background to red');
    document.querySelector("body").style.backgroundColor = 'red';
    document.querySelector("#btn1").style.backgroundColor = "red";
};

const makeBlue = () => {
    document.querySelector("body").style.backgroundColor = 'blue';
    console.log('Change background to blue');
    document.querySelector("#btn2").style.backgroundColor = "blue";
};

const makePink = () => {
    document.querySelector("body").style.backgroundColor = 'pink';
    console.log('Change background to pink');
    document.querySelector("#btn3").style.backgroundColor = "pink";
};

const makeOrange = () => {
    document.querySelector("body").style.backgroundColor = 'Orange';
    console.log('Change background to orange');
    document.querySelector("#btn4").style.backgroundColor = "orange";
};

