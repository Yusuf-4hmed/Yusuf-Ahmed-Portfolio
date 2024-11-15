
const meHeader = document.getElementById("me-header-h1");

meHeader.addEventListener("click", () => {
    if (meHeader.textContent === "Yusuf Ahmed"){
        meHeader.textContent = "Yusuf Ahmed 😁";    
    } else {
        meHeader.textContent = "Yusuf Ahmed"
    }
    
});

const unavailableButton = document.getElementById('unavailable');

unavailableButton.addEventListener("click", ()=>{
    unavailableButton.textContent = "CAN U READ?"
})

