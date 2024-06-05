const button = document.querySelector(".lecture__button");
const addFileWindow = document.querySelector(".lecture__add");
const closeWindow = document.querySelector(".lecture__addLecture");
const closeWindowCans = document.querySelector(".lecture__addLecture-cansel");
const fileDropArea = document.getElementById("fileDropArea");
const fileInfo = document.getElementById("fileInfo");
const fileIcon = document.getElementById("fileIcon");
button.addEventListener("click", (event)=>{
    if (event.target === button || button.contains(event.target)) {
        addFileWindow.style.opacity = "1";
        addFileWindow.style.pointerEvents = "all";
    }
});
closeWindow.addEventListener("click", (event)=>{
    event.preventDefault();
    addFileWindow.style.opacity = "0";
    addFileWindow.style.pointerEvents = "none";
});
closeWindowCans.addEventListener("click", (event)=>{
    event.preventDefault();
    addFileWindow.style.opacity = "0";
    addFileWindow.style.pointerEvents = "none";
});
fileDropArea.addEventListener("dragover", (e)=>{
    e.preventDefault();
    fileDropArea.classList.add("highlight");
});
fileDropArea.addEventListener("dragleave", ()=>{
    fileDropArea.classList.remove("highlight");
});
fileDropArea.addEventListener("drop", (e)=>{
    e.preventDefault();
    fileDropArea.classList.remove("highlight");
    const file = e.dataTransfer.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const fileUrl = event.target.result;
            fileIcon.src = fileUrl;
            fileInfo.style.display = "block";
        };
        reader.readAsDataURL(file);
    }
});

//# sourceMappingURL=lecture.82888d33.js.map
