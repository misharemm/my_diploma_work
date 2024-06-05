function saveDescription() {
    let editedText = document.querySelector(".task__description__text").innerText;
    let editedTextAns = document.querySelector(".task__answer__text").innerText;
    let editedTask = document.querySelector(".task__title").innerText;
    let editedLec = document.querySelector(".lecture__title").innerText;
// localStorage.setItem('taskDescription', editedText);
// localStorage.setItem('taskAnswer', editedTextAns);
// localStorage.setItem('taskTitle', editedTask);
// localStorage.setItem('lectureTitle', editedLec);
}
window.onload = function() {
    let storedDescription = localStorage.getItem("taskDescription");
    let storedDescriptionAns = localStorage.getItem("taskAnswer");
    let storedDescriptionTitle = localStorage.getItem("taskTitle");
    let storedLectureTitle = localStorage.getItem("lectureTitle");
    // if (storedDescription) {
    //   document.querySelector('.task__description__text').innerText = storedDescription;
    // }
    if (storedDescriptionAns) document.querySelector(".task__answer__text").innerText = storedDescriptionAns;
    // if (storedDescriptionTitle) {
    //   document.querySelector('.task__title').innerText = storedDescriptionTitle;
    // }
    if (storedLectureTitle) document.querySelector(".lecture__title").innerText = storedLectureTitle;
};

//# sourceMappingURL=task.64f541cb.js.map
