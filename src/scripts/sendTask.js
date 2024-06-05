const urlParams = new URLSearchParams(window.location.search);
const changeColor = urlParams.get('changeColor');

document.addEventListener('DOMContentLoaded', (event) => {
  const deadlineInput = document.getElementById('deadline');

  const savedDeadline = localStorage.getItem('deadline');
  if (savedDeadline) {
    deadlineInput.value = savedDeadline;
  }

  document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault();
    localStorage.setItem('deadline', deadlineInput.value);
    alert('Дата збережена!');
  });
});

if (changeColor === 'true') {
    const sendedBlock = document.querySelector('.points__task__sended');
    sendedBlock.style.backgroundColor = '#00bc1c';

    setTimeout(function() {
        sendedBlock.style.backgroundColor = '#fa4646';
    }, 10000);
}
document.getElementById('sendTaskButton').addEventListener('click', function() {
  window.location.href = 'points.html?changeColor=true';
});

function preventArrowKeys(event) {
  const key = event.keyCode || event.which;

  if (key === 37 || key === 39) {
      event.preventDefault();
  }
}
