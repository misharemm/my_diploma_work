const VRButton = document.querySelector(".lessons__VR");
const VRWindow = document.querySelector(".VR__message");
const showMessage = ()=>{
    VRWindow.style.opacity = "1";
    VRWindow.style.pointerEvents = "all";
    setTimeout(()=>{
        VRWindow.style.opacity = "0";
        VRWindow.style.pointerEvents = "none";
    }, 3000);
};
VRButton.addEventListener("click", showMessage);

//# sourceMappingURL=lessons.7d5bedf7.js.map
