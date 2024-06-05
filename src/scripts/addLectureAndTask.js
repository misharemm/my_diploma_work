document.addEventListener('DOMContentLoaded', function() {
  const addLectureButton = document.querySelector('.computersienceLectures__addLecture');
  const lecturesContainer = document.querySelector('.computersienceLectures__subjects-subjects');

  addLectureButton.addEventListener('click', function() {

      const newLectureLink = document.createElement('a');
      newLectureLink.href = 'lecture.html';

      newLectureLink.textContent = 'Лекція 4';
      newLectureLink.classList.add('computersienceLectures__subjects__subject');

      lecturesContainer.appendChild(newLectureLink);
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const addLectureButton = document.querySelector('.computersienceLectures__addTask');
  const lecturesContainer = document.querySelector('.computersienceLectures__subjects-homework');

  addLectureButton.addEventListener('click', function() {

      const newLectureLink = document.createElement('a');
      newLectureLink.href = '#';

      newLectureLink.textContent = 'Завдання 4';
      newLectureLink.classList.add('computersienceLectures__subjects__homework');

      lecturesContainer.appendChild(newLectureLink);
  });
});