const downloadButton = document.querySelector('.btn-download');
const linkToFile = "https://drive.google.com/uc?export=download&id=1KHZA-95JLIOPh71yNnFG1KzctUDlmeto";

const startTimer = () => {
    if(downloadButton.classList.contains("disable-timer")) {
        return location.href = linkToFile;
    }
    let timer = downloadButton.dataset.timer;
    downloadButton.classList.add("timer");
    downloadButton.style.boxShadow = "None";
    downloadButton.innerHTML = `Your download will begin in <b>${timer}</b> seconds...`;
    const startTimer = setInterval(() => {
        if(timer > 0){
            timer--;
            return downloadButton.innerHTML = `Your download will begin in <b>${timer}</b> seconds`;
        }
        clearInterval(startTimer);
        location.href = linkToFile;
        downloadButton.innerText = "Your file is downloading...";
        setTimeout(() => {
            downloadButton.classList.replace("timer", "disable-timer");
            downloadButton.innerHTML = `<span class="icon material-symbols-rounded">vertical_align_bottom</span>
                                        <span class="text">Download even MORE RAM</span>`
        }, 3000);
    }, 1000);
};

downloadButton.addEventListener('click', startTimer);