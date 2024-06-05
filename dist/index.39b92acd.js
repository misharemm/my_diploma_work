document.addEventListener("DOMContentLoaded", function() {
    const logInButton = document.querySelector(".header__buttons-logIn");
    const logInWindow = document.querySelector(".logInWin");
    const registerButton = document.querySelector(".header__buttons-register");
    const registerWindow = document.querySelector(".registerWin");
    const menuButton = document.querySelector(".header__icon__menu");
    const menuWindow = document.querySelector(".menu");
    const createWindow = document.querySelector(".createWin");
    const createButton = document.querySelector(".main__button-create");
    const joinWindow = document.querySelector(".joinWin");
    const joinButton = document.querySelector(".main__button-join");
    const closeButtonLogIn = logInWindow.querySelector(".buttonSend");
    const closeButtonReg = registerWindow.querySelector(".buttonSend");
    const closeButtonCreate = createWindow.querySelector(".buttonNext");
    const closeButtonJoin = joinWindow.querySelector(".buttonNext");
    const closeMenu = menuWindow.querySelector(".menu__icon");
    logInButton.addEventListener("click", (event)=>{
        if (event.target === logInButton || logInButton.contains(event.target)) {
            logInWindow.style.opacity = "1";
            logInWindow.style.pointerEvents = "all";
        }
    });
    registerButton.addEventListener("click", (event)=>{
        if (event.target === registerButton || registerButton.contains(event.target)) {
            registerWindow.style.opacity = "1";
            registerWindow.style.pointerEvents = "all";
        }
    });
    menuButton.addEventListener("click", (event)=>{
        if (event.target === menuButton || menuButton.contains(event.target)) {
            menuWindow.style.opacity = "1";
            menuWindow.style.pointerEvents = "all";
        }
    });
    createButton.addEventListener("click", (event)=>{
        if (event.target === createButton || createButton.contains(event.target)) {
            createWindow.style.opacity = "1";
            createWindow.style.pointerEvents = "all";
        }
    });
    joinButton.addEventListener("click", (event)=>{
        if (event.target === joinButton || joinButton.contains(event.target)) {
            joinWindow.style.opacity = "1";
            joinWindow.style.pointerEvents = "all";
        }
    });
    document.addEventListener("click", (event)=>{
        const targetElement = event.target;
        if (!logInWindow.contains(targetElement) && targetElement !== logInButton) {
            logInWindow.style.opacity = "0";
            logInWindow.style.pointerEvents = "none";
        }
        if (!registerWindow.contains(targetElement) && targetElement !== registerButton) {
            registerWindow.style.opacity = "0";
            registerWindow.style.pointerEvents = "none";
        }
        if (!menuWindow.contains(targetElement) && targetElement !== menuButton) {
            menuWindow.style.opacity = "0";
            menuWindow.style.pointerEvents = "none";
        }
        if (!createWindow.contains(targetElement) && targetElement !== createButton) {
            createWindow.style.opacity = "0";
            createWindow.style.pointerEvents = "none";
        }
        if (!joinWindow.contains(targetElement) && targetElement !== joinButton) {
            joinWindow.style.opacity = "0";
            joinWindow.style.pointerEvents = "none";
        }
    });
    closeButtonLogIn.addEventListener("click", (event)=>{
        event.preventDefault();
        logInWindow.style.opacity = "0";
        logInWindow.style.pointerEvents = "none";
    });
    closeButtonReg.addEventListener("click", (event)=>{
        event.preventDefault();
        registerWindow.style.opacity = "0";
        registerWindow.style.pointerEvents = "none";
    });
    closeButtonCreate.addEventListener("click", (event)=>{
        event.preventDefault();
        createWindow.style.opacity = "0";
        createWindow.style.pointerEvents = "none";
    });
    closeButtonJoin.addEventListener("click", (event)=>{
        event.preventDefault();
        joinWindow.style.opacity = "0";
        joinWindow.style.pointerEvents = "none";
    });
});

//# sourceMappingURL=index.39b92acd.js.map
