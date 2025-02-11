// LIGHT  MODE TOGGLE

const lightmodeToggle = document.getElementById('lightmode-toggle');

const sunSvg = `<svg width="15" height="15" viewBox="0 0 15 15" preserveAspectRatio="xMidYMid meet" fill="none" xmlns="http://www.w3.org/2000/svg" class="size-4 text-orange-300"><path d="M7.5 0C7.77614 0 8 0.223858 8 0.5V2.5C8 2.77614 7.77614 3 7.5 3C7.22386 3 7 2.77614 7 2.5V0.5C7 0.223858 7.22386 0 7.5 0ZM2.1967 2.1967C2.39196 2.00144 2.70854 2.00144 2.90381 2.1967L4.31802 3.61091C4.51328 3.80617 4.51328 4.12276 4.31802 4.31802C4.12276 4.51328 3.80617 4.51328 3.61091 4.31802L2.1967 2.90381C2.00144 2.70854 2.00144 2.39196 2.1967 2.1967ZM0.5 7C0.223858 7 0 7.22386 0 7.5C0 7.77614 0.223858 8 0.5 8H2.5C2.77614 8 3 7.77614 3 7.5C3 7.22386 2.77614 7 2.5 7H0.5ZM2.1967 12.8033C2.00144 12.608 2.00144 12.2915 2.1967 12.0962L3.61091 10.682C3.80617 10.4867 4.12276 10.4867 4.31802 10.682C4.51328 10.8772 4.51328 11.1938 4.31802 11.3891L2.90381 12.8033C2.70854 12.9986 2.39196 12.9986 2.1967 12.8033ZM12.5 7C12.2239 7 12 7.22386 12 7.5C12 7.77614 12.2239 8 12.5 8H14.5C14.7761 8 15 7.77614 15 7.5C15 7.22386 14.7761 7 14.5 7H12.5ZM10.682 4.31802C10.4867 4.12276 10.4867 3.80617 10.682 3.61091L12.0962 2.1967C12.2915 2.00144 12.608 2.00144 12.8033 2.1967C12.9986 2.39196 12.9986 2.70854 12.8033 2.90381L11.3891 4.31802C11.1938 4.51328 10.8772 4.51328 10.682 4.31802ZM8 12.5C8 12.2239 7.77614 12 7.5 12C7.22386 12 7 12.2239 7 12.5V14.5C7 14.7761 7.22386 15 7.5 15C7.77614 15 8 14.7761 8 14.5V12.5ZM10.682 10.682C10.8772 10.4867 11.1938 10.4867 11.3891 10.682L12.8033 12.0962C12.9986 12.2915 12.9986 12.608 12.8033 12.8033C12.608 12.9986 12.2915 12.9986 12.0962 12.8033L10.682 11.3891C10.4867 11.1938 10.4867 10.8772 10.682 10.682ZM5.5 7.5C5.5 6.39543 6.39543 5.5 7.5 5.5C8.60457 5.5 9.5 6.39543 9.5 7.5C9.5 8.60457 8.60457 9.5 7.5 9.5C6.39543 9.5 5.5 8.60457 5.5 7.5ZM7.5 4.5C5.84315 4.5 4.5 5.84315 4.5 7.5C4.5 9.15685 5.84315 10.5 7.5 10.5C9.15685 10.5 10.5 9.15685 10.5 7.5C10.5 5.84315 9.15685 4.5 7.5 4.5Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></button>`;
const moonSvg = `<svg width="18" height="18" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" class="hidden dark:block group-hover:stroke-black group-hover:dark:stroke-white transition-colors duration-300 ease-in-out"> <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path> </svg>`;

const html = document.querySelector('html');

if (document.body.classList.contains('light')){
    lightmodeToggle.innerHTML = sunSvg;
} else {
    lightmodeToggle.innerHTML = moonSvg;
}; 

function lightModeSwitch() {
    document.body.classList.toggle('light');
    if (document.body.classList.contains('light')){
        lightmodeToggle.innerHTML = sunSvg;
        html.style.background = 'white';
        html.style.transition = '.5s';
        document.body.style.transition = '.5s';
    } else {
        lightmodeToggle.innerHTML = moonSvg;
        html.style.background = ' hsl(246, 100%, 4%)';
        html.style.transition = '.5s';
        document.body.style.transition = '.5s';
    }; 
    saveLightMode();
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

// SAVE DATA(LIGHTMODE)

const saveLightMode = () => {
    localStorage.setItem("lightmode", document.body.className);
    localStorage.setItem("light-svg", lightmodeToggle.innerHTML);
    localStorage.setItem("background", html.style.background);
}

const showLightMode = () => {
    if(localStorage.getItem("lightmode") === null){
        lightmodeToggle.innerHTML = moonSvg;
    } else {
    document.body.className = localStorage.getItem("lightmode");
    lightmodeToggle.innerHTML = localStorage.getItem("light-svg");
    html.style.background = localStorage.getItem("background");
    }
};

showLightMode();

// WORK & EDUCATION TOGGLE

const workButton = document.getElementById("work-btn");
const educationButton = document.getElementById("education-btn");
const experienceContainer = document.getElementById("experience-container");
const educationContainer = document.getElementById("education-container");

workButton.addEventListener("click", () => {
    experienceContainer.style.display = "block"
    educationContainer.style.display = "none";
    workButton.classList.add("active");
    educationButton.classList.remove("active");
})
educationButton.addEventListener("click", () => {
    educationContainer.style.display = "block"
    experienceContainer.style.display = "none";
    educationButton.classList.add("active");
    workButton.classList.remove("active");
})