const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');
const slider = document.getElementById('slider');
const images = document.querySelectorAll('.image');
const bottom = document.getElementById('bottom');

let currentIndex = 1;
const length = images.length;

for (let i = 0; i < length; i++) {
    const newDiv = document.createElement('div');
    newDiv.className = "button";
    bottom.appendChild(newDiv);
}


const buttons = document.querySelectorAll('.button');
buttons[0].style.backgroundColor = 'white';

const resetBg = () => {
    buttons.forEach(button => {
        button.style.backgroundColor = 'transparent';
    });
};

buttons.forEach((button, i) => {
    button.addEventListener('click', () => {
        resetBg();
        slider.style.transform = `translateX(-${i * 900}%)`;
        currentIndex = i + 1;
        buttons.style.backgroundColor = 'white';
    });
});

const nextImage = () => {
    slider.style.transform = `translateX(-${currentIndex * 900}px)`;
    currentIndex++;
};

const prevImage = () => {
    slider.style.transform = `translateX(-${(currentIndex - 2) * 900}px)`;
    currentIndex--;
};

const getFirstImage = () => {
    slider.style.transform = `translateX(0px)`;
    currentIndex = 1;
}

const getLastImage = () => {
    slider.style.transform = `translateX(-${(length - 1) * 900}px)`;
    currentIndex = length;
};

const changeColor = () => {
    resetBg();
    buttons[currentIndex - 1].style.backgroundColor = 'white';
}

rightArrow.addEventListener('click', () => {
    sliderIndex < length ? nextImage() : getFirstImage();
    changeColor();
});

leftArrow.addEventListener('click', () => {
    sliderIndex > 1 ? prevImage() : getLastImage();
    changeColor();
});