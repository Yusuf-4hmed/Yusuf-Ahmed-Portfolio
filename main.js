// LIGHT  MODE TOGGLE

const lightmodeToggle = document.getElementById('lightmode-toggle');

const lightModeSwitch = () => {
    document.body.classList.toggle('light');
}

// TIME MACHINE TOGGLE

const timeMachineBtn = document.getElementById('time-machine-btn');
const timeMachinePopup = document.getElementById('time-machine-popup');

const timeMachinePopupSwitch = (e) => {
    e.stopPropagation();
 document.querySelector('.time-machine-popup').classList.toggle('active');
}

timeMachineBtn.addEventListener("click", timeMachinePopupSwitch)

document.addEventListener("click", () => {
    if (document.querySelector('.time-machine-popup').classList.contains('active')){
    document.querySelector('.time-machine-popup').classList.remove('active');
}
})



