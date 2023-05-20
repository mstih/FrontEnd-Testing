const container = document.querySelector('.container');
input = container.querySelector('.form-container input');
generateQrButton = container.querySelector('.form-container button');
qrImage = container.querySelector('.result img');
let valueBefore;

generateQrButton.addEventListener('click', clickedButton);
input.addEventListener('keyup', keyUpFunction);
window.addEventListener('keypress', (e) =>{
    if(e.key === 'Enter'){
        generateQrButton.click();
    };
});

function clickedButton(){
    let valueOfQr = input.value.trim();
    if(!valueOfQr || valueBefore === valueOfQr)return;
    valueBefore = valueOfQr;
    generateQrButton.innerHTML = "Your QR code is being generated...";
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${valueOfQr}`;
    qrImage.addEventListener('load', () => {
        container.classList.add("active");
        generateQrButton.innerHTML = "Generate another QR code";
    });
};

function keyUpFunction(){
    if(!input.value.trim()){
        container.classList.remove("active");
        valueBefore = "";
    };
};