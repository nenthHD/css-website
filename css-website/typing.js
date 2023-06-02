const text = document.querySelector(".sec-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "die CSS erklärt";
    }, 0);
    setTimeout(() => {
        text.textContent = "entwickelt von Marc";
    }, 4000);
     //1s = 1000 milliseconds
}

textLoad();
setInterval(textLoad, 12000);