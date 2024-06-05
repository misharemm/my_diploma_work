let availableKeywords = [
  'Курси',
  'Проекти',
  'Бали',
  'Профіль',
  'Інше',
  'Комп`ютерні науки',
  'Англійська мова',
  'Математика',
  'Лекція',
  'Завдання',
  'Meet',
];

const menuResult = document.querySelector('.menu__results');
const menuinputBox = document.querySelector('.menu__search__input');

menuinputBox.onkeyup = function() {
  let result = [];
  let input = menuinputBox.value;

  if (input.length) {
    result = availableKeywords.filter((keyword) => {
      return keyword.toLocaleLowerCase().includes(input.toLocaleLowerCase());
    });
  }
  display(result);
}

function display(result) {
  const content = result.map((list) => {
    return `<li><a href="${getLinkForKeyword(list)}" onclick="selectInput(this)">${list}</a></li>`;
  });

  menuResult.innerHTML = "<ul>" + content.join('');
}

function selectInput(list) {
  menuinputBox.value = list.innerHTML;
  menuResult.innerHTML = '';
}

function getLinkForKeyword(keyword) {
  switch(keyword) {
    case 'Курси':
      return 'http://localhost:1234/lessons.html';
    case 'Проекти':
      return 'http://localhost:1234/projects.html';
    case 'Бали':
      return 'http://localhost:1234/points.html';
    case 'Профіль':
      return 'http://localhost:1234/profil.html';
    case 'Складання схеми':
      return '#';
    case 'Комп`ютерні мережі':
      return 'http://localhost:1234/computersience.html';
    case 'Англійська мова':
      return 'http://localhost:1234/english.html';
    case 'Математика':
      return 'http://localhost:1234/math.html';
    case 'Лекція':
      return 'http://localhost:1234/lecture.html';
    case 'Завдання':
      return 'http://localhost:1234/task.html';
    case 'Складання схеми':
      return 'http://localhost:1234/network.html';
    case 'Meet':
      return 'http://localhost:1234/meet.html';
      default:
        return '#';
  }
}