function saveDescription() {
  let editedText = document.querySelector('.lecture__description__text').innerText;
  localStorage.setItem('lectureDescription', editedText);
  let editedLec = document.querySelector('.lecture__title').innerText;
  localStorage.setItem('lectureTitle', editedLec);
}

window.onload = function() {
  let storedDescription = localStorage.getItem('lectureDescription');
  if (storedDescription) {
      document.querySelector('.lecture__description__text').innerText = storedDescription;
  }
  let storedLectureTitle = localStorage.getItem('lectureTitle');
  if (storedLectureTitle) {
      document.querySelector('.lecture__title').innerText = storedLectureTitle;
  }
};
