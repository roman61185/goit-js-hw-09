const buttonStart = document.querySelector('button[data-start]');
console.log(buttonStart);

const buttonStop = document.querySelector('button[data-stop]');
console.log(buttonStop);

let timerId = null;

buttonStart.addEventListener('click', (evt) => {
    timerId = setInterval(() => {
        console.log('click')
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    buttonStart.disabled = true;
    //buttonStart.disabled = !evt.target.button;
})

buttonStop.addEventListener('click', (evt) => {
    clearInterval(timerId);
    console.log('click');
    buttonStart.disabled = false;

})
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
