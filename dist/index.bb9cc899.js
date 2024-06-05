const currentData = document.querySelector(".calendar__currentData");
daysTag = document.querySelector(".calendar__days");
prevIcon = document.querySelectorAll(".chevron");
const closeCalendar = document.querySelector(".closeCalendar");
const calendar = document.querySelector(".calendar");
const openCalendar = document.querySelector(".header__icon__calendar");
openCalendar.addEventListener("click", (event)=>{
    if (event.target === openCalendar || openCalendar.contains(event.target)) {
        calendar.style.opacity = "1";
        calendar.style.pointerEvents = "all";
    }
});
closeCalendar.addEventListener("click", (event)=>{
    event.preventDefault();
    calendar.style.opacity = "0";
    calendar.style.pointerEvents = "none";
});
closeCalendar.addEventListener("click", function() {
    notesSection.style.display = "none";
});
let date = new Date(), currentYear = date.getFullYear(), currentMonth = date.getMonth();
const months = [
    "\u0421\u0456\u0447\u0435\u043D\u044C",
    "\u041B\u044E\u0442\u0438\u0439",
    "\u0411\u0435\u0440\u0435\u0437\u0435\u043D\u044C",
    "\u041A\u0432\u0456\u0442\u0435\u043D\u044C",
    "\u0422\u0440\u0430\u0432\u0435\u043D\u044C",
    "\u0427\u0435\u0440\u0432\u0435\u043D\u044C",
    "\u041B\u0438\u043F\u0435\u043D\u044C",
    "\u0421\u0435\u0440\u043F\u0435\u043D\u044C",
    "\u0412\u0435\u0440\u0435\u0441\u0435\u043D\u044C",
    "\u0416\u043E\u0432\u0442\u0435\u043D\u044C",
    "\u041B\u0438\u0441\u0442\u043E\u043F\u0430\u0434",
    "\u0413\u0440\u0443\u0434\u0435\u043D\u044C"
];
const renderCalendar = ()=>{
    let firstDateOfMonth = new Date(currentYear, currentMonth, 1).getDay(), lastDateOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate(), lastDateOfLastMonth = new Date(currentYear, currentMonth, 0).getDate(), lastDayMonth = new Date(currentYear, currentMonth, lastDateOfMonth).getDay();
    let liTag = "";
    for(let i = firstDateOfMonth; i > 0; i--)liTag += `<li class="calendar__days__inactive">${lastDateOfLastMonth - i + 1}</li>`;
    for(let i = 1; i <= lastDateOfMonth; i++){
        let today = i === date.getDate() && currentMonth === new Date().getMonth() && currentYear === new Date().getFullYear() ? "calendar__days__active" : "";
        liTag += `<li class="${today}">${i}</li>`;
    }
    for(let i = lastDayMonth; i < 6; i++)liTag += `<li class="calendar__days__inactive">${i - lastDayMonth + 1}</li>`;
    currentData.innerText = `${months[currentMonth]} ${currentYear}`;
    daysTag.innerHTML = liTag;
};
renderCalendar();
prevIcon.forEach((icon)=>{
    icon.addEventListener("click", ()=>{
        currentMonth = icon.id === "prev" ? currentMonth - 1 : currentMonth + 1;
        if (currentMonth < 0 || currentMonth > 11) {
            date = new Date(currentYear, currentMonth);
            currentYear = date.getFullYear();
            currentMonth = date.getMonth();
        } else date = new Date();
        renderCalendar();
    });
});
const days = document.querySelectorAll(".calendar__days li");
const notesSection = document.getElementById("notes");
days.forEach((day)=>{
    day.addEventListener("click", function() {
        const dayPosition = day.getBoundingClientRect();
        const notesPosition = notesSection.getBoundingClientRect();
        const newYPosition = dayPosition.top - notesPosition.height - 10; // Змінна "10" визначає відступ між днем і вікном з нотатками
        notesSection.style.top = `${newYPosition}px`;
        notesSection.style.display = "block";
    });
});
const closeNotesBtn = document.querySelector(".callendar__notes__closeNotes");
const sendNotesBtn = document.querySelector(".callendar__notes__notesBox__send");
closeNotesBtn.addEventListener("click", function() {
    notesSection.style.display = "none";
});
sendNotesBtn.addEventListener("click", function() {
    notesSection.style.display = "none";
    alert("\u041D\u043E\u0442\u0430\u0442\u043A\u0438 \u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043D\u0456");
});

//# sourceMappingURL=index.bb9cc899.js.map
