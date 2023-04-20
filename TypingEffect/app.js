const textChanging = document.querySelector('.text');
const cursorIcon = document.querySelector('.cursor')

const wordArray = ["programmer", "CEO", "stupid man", "monster"];
let arrayIndex = 0; //which word in array
let wordIndex = 0;  //character of a word


function typing(){
    if(wordIndex < wordArray[arrayIndex].length){
        if(!cursorIcon.classList.contains("typing")){
            cursorIcon.classList.add("typing");
        };
        textChanging.textContent += wordArray[arrayIndex].charAt(wordIndex);
        wordIndex++;
        setTimeout(type, 200);
    }else{
        cursorIcon.classList.remove("typing");
        setTimeout(remove, 2000);
    };
};


function remove(){
    if(wordIndex > 0){
        if(!cursorIcon.classList.contains("typing")){
            cursorIcon.classList.add("typing");
        };
        textChanging.textContent = wordArray[arrayIndex].substring(0, wordIndex-1);
        wordIndex--;
        setTimeout(remove, 100);
    }else{
        cursorIcon.classList.remove("typing");
        arrayIndex++;
        if(arrayIndex >=wordArray.length){
            arrayIndex = 0;
        };
        setTimeout(typing, 1300);
    };
};

document.addEventListener("DOMContentLoaded", function(){
    if(wordArray.length){
        setTimeout(typing, 2450);
    };
});