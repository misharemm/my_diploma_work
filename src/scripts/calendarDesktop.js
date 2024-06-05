const currentData = document.querySelector('.calendar__currentData');
daysTag = document.querySelector('.calendar__days');
prevIcon = document.querySelectorAll('.chevron');
const closeCalendar = document.querySelector('.closeCalendar');
const calendar = document.querySelector('.calendar');
const openCalendar = document.querySelector('.header__icon__calendar');

openCalendar.addEventListener('click', (event) => {
  if (event.target === openCalendar || openCalendar.contains(event.target)) {
    calendar.style.opacity = '1';
    calendar.style.pointerEvents  = 'all';
  }
});

closeCalendar.addEventListener('click', (event) => {
  event.preventDefault();

  calendar.style.opacity = '0';
  calendar.style.pointerEvents  = 'none';
});

closeCalendar.addEventListener('click', function() {
  notesSection.style.display = 'none';
});


let date = new Date(),
currentYear = date.getFullYear(),
currentMonth = date.getMonth();

const months = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'];

const renderCalendar = () => {
  let firstDateOfMonth = new Date(currentYear, currentMonth, 1).getDay(),
  lastDateOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate(),
  lastDateOfLastMonth = new Date(currentYear, currentMonth, 0).getDate(),
  lastDayMonth = new Date(currentYear, currentMonth, lastDateOfMonth).getDay();
  let liTag = '';

  for (let i = firstDateOfMonth; i > 0; i--) {
    liTag += `<li class="calendar__days__inactive">${lastDateOfLastMonth - i + 1}</li>`;
  }

  for (let i = 1; i <= lastDateOfMonth; i++) {
    let today = i === date.getDate()
    && currentMonth === new Date().getMonth() 
    && currentYear === new Date().getFullYear() ? "calendar__days__active" : "";
    liTag += `<li class="${today}">${i}</li>`;
  }

  for (let i = lastDayMonth; i < 6; i++) {
    liTag += `<li class="calendar__days__inactive">${i - lastDayMonth + 1}</li>`;
  }

  currentData.innerText = `${months[currentMonth]} ${currentYear}`;
  daysTag.innerHTML = liTag;
}

renderCalendar();

prevIcon.forEach(icon => {
  icon.addEventListener("click", () => {
    currentMonth = icon.id === "prev" ? currentMonth - 1 : currentMonth + 1;

    if (currentMonth < 0 || currentMonth > 11) {
      date = new Date(currentYear, currentMonth);
      currentYear = date.getFullYear();
      currentMonth = date.getMonth();
    } else {
      date = new Date();
    }
    renderCalendar();
  })
})



  const days = document.querySelectorAll('.calendar__days li');
  const notesSection = document.getElementById('notes');

  days.forEach(day => {
    day.addEventListener('click', function() {
      const dayPosition = day.getBoundingClientRect();
        const notesPosition = notesSection.getBoundingClientRect();

        const newYPosition = dayPosition.top - notesPosition.height - 10; // Змінна "10" визначає відступ між днем і вікном з нотатками

        notesSection.style.top = `${newYPosition}px`;

        notesSection.style.display = 'block';
    });
  });

  const closeNotesBtn = document.querySelector('.callendar__notes__closeNotes');
  const sendNotesBtn = document.querySelector('.callendar__notes__notesBox__send');
  closeNotesBtn.addEventListener('click', function() {
    notesSection.style.display = 'none';
  });
  sendNotesBtn.addEventListener('click', function() {
    notesSection.style.display = 'none';
    alert('Нотатки збережені');
  });

