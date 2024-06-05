document.addEventListener("DOMContentLoaded", function() {
    const addLectureButton = document.querySelector(".computersienceLectures__addLecture");
    const lecturesContainer = document.querySelector(".computersienceLectures__subjects-subjects");
    addLectureButton.addEventListener("click", function() {
        const newLectureLink = document.createElement("a");
        newLectureLink.href = "lecture.html";
        newLectureLink.textContent = "\u041B\u0435\u043A\u0446\u0456\u044F 4";
        newLectureLink.classList.add("computersienceLectures__subjects__subject");
        lecturesContainer.appendChild(newLectureLink);
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const addLectureButton = document.querySelector(".computersienceLectures__addTask");
    const lecturesContainer = document.querySelector(".computersienceLectures__subjects-homework");
    addLectureButton.addEventListener("click", function() {
        const newLectureLink = document.createElement("a");
        newLectureLink.href = "#";
        newLectureLink.textContent = "\u0417\u0430\u0432\u0434\u0430\u043D\u043D\u044F 4";
        newLectureLink.classList.add("computersienceLectures__subjects__homework");
        lecturesContainer.appendChild(newLectureLink);
    });
});

//# sourceMappingURL=computersience.93530789.js.map
