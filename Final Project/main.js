let currentIndex = 0;

const images = [
    'images/fam1.jpeg',
    'images/rwdo.JPG',
    'images/grad1.jpeg',
    'images/grad2.jpeg',
    'images/rwd.JPG',
    'images/rwm.JPG',
    'images/rwy.JPG',
    'images/thanks.JPG'
];

const initScreen = () => {
    images.forEach((image, idx) => {
        document.querySelector('.cards').innerHTML += `
        <li class="card">
            <button class="image" 
                onclick="handleThumbnailClick(event)"
                style="background-image:url('${image}')"
                data-index="${idx}"
                aria-label="Displays image ${idx} in the main panel."></button>
        </li>`;
    });
};

initScreen();

const showImage = (ev) =>{
    const elem=ev.currentTarget;
    currentIndex = parseInt(elem.dataset.index);
}

const handleThumbnailClick = ev =>{
    const elem = ev.currentTarget;
    console.log(ev);
    currentIndex = parseInt(elem.dataset.index);
    const bgImage = elem.style.backgroundImage;
    document.querySelector('.featured_image').style.backgroundImage =bgImage;
    currentIndex = Number(elem.getAttribute('data-index'));
    console.log(currentIndex)
}

const handleNextClick = ev =>{
    if (currentIndex<7) {
        currentIndex +=1;
    }
    else {
        currentIndex=0;
    }
    console.log("next")
    console.log(currentIndex)
    document.querySelector('.featured_image').style.backgroundImage = 
    `url("${images[currentIndex]}")`;
}

const handlePrevClick = ev =>{
    if (currentIndex>0) {
        currentIndex -=1;
    }
    else {
        currentIndex=7;
    }
    console.log("prev")
    console.log(currentIndex)
    document.querySelector('.featured_image').style.backgroundImage = 
    `url("${images[currentIndex]}")`;
}

document.querySelector(".next").onclick = handleNextClick;
document.querySelector(".featured_image").onclick = handleNextClick;
document.querySelector(".prev").onclick = handlePrevClick;


