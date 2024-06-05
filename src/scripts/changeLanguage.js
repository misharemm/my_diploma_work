document.addEventListener('DOMContentLoaded', function () {
  const ukrBtn = document.querySelector('.header__change__languages-ukranian');
  const engBtn = document.querySelector('.header__change__languages-english');

  const translations = {
    ukr: {
      'header__buttons-register': 'РЕЄСТРАЦІЯ',
      'header__buttons-logIn': 'УВІЙТИ',
      'registerWin__title': 'Реєстрація',
      'registerWin__names-email': 'Пошта',
      'registerWin__names-password': 'Пароль',
      'registerWin__names-user': "Ім'я користувача",
      'buttonSend': 'Відправити',
      'logInWin__title': 'Увійти',
      'logInWin__names-email': 'Пошта',
      'logInWin__names-password': 'Пароль',
      'menu__search__input': 'Пошук',
      'menu__block-courses': 'Курси',
      'menu__block-projects': 'Проекти',
      'main__name': 'Вітаємо у StudyBridge',
      'menu__block-points': 'Бали',
      'menu__block-profile': 'Профіль',
      'menu__block-other': 'Складання схеми',
      'menu__contact__text': 'Контакти',
      'main__button-create': 'СТВОРИТИ',
      'main__button-join': 'ПРИЄДНАТИСЯ',
      'createWin__title': 'Створити',
      'createWin__names': 'Назва дисципліни',
      'createWin__names-admin': 'Адмін',
      'buttonNext-create': 'Далі',
      'joinWin__title': 'Приєднатися',
      'joinWin__names-code': 'Код дисципліни',
      'join__text': 'Введіть код, який отримали від адміністратора дисципліни',
      'buttonNext-join': 'Далі',
      'calendar__currentData': 'Травень 2024',
      'calendar__weeks': ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
      'lessons__main__text': 'Курси',
      'lessons__disciplines': 'Мої дисципліни',
      'lessons__courses-computerscience': "Комп'ютерні мережі",
      'lessons__courses-english': 'Англійська мова',
      'lessons__courses-math': 'Технології мобільного зв`язку',
      'lessons__AI': 'AI помічник',
      // 'lessons__VR': 'VR кімната',
      'VR__message-text': 'Пристрій VR не під\'єднаний!',
      'AI__assistent': 'AI помічник',
      'AI__text-greeting': 'Привіт! Задай своє питання',
      'AI__typing-placeholder': 'Введіть повідомлення...',
      'projects__main__text': 'Проекти',
      'projects__disciplines': 'Мої роботи',
      'projects__courses': 'Завдання',
      'points__main__text': 'Бали',
      'points__courses': 'Завдання',
      'points__text-status': 'Статус',
      'points__text-deadline':'Потрібно здати',
      'points__deadline__button': 'Зберегти',
      'points__text-points': 'Бали',
      'points__comment__text': 'Коментар',
      'computersience__title': 'Комп`ютерні мережі',
      'computersienceLectures__subjects__title': 'Лекції',
      'computersienceLectures__addLecture': 'Додати лекцію',
      'computersienceLectures__subjects__subject': 'Лекція',
      'computersienceLectures__lectures__title-task': 'Завдання',
      'computersienceLectures__addTask': 'Додати завдання',
      'computersienceLectures__subjects__homework': 'Завдання',
      'lecture__title': 'Лекція 1',
      'lecture__description__save': 'Зберегти',
      'fileUpload': 'Завантажити файл:',
      'lecture__addLecture': 'Додати',
      'lecture__addLecture-cansel': 'Відмінити',
      'lecture__dropfile': 'Перетягніть сюди файл для завантаження',
      'task__description__saveTitle': 'Зберегти',
      'task__description__save': 'Зберегти',
      'task__answer__save': 'Зберегти',
      'task__title': 'Вступне завдання',
      'task__continueCoding': 'Написати код',
      'task__build': 'Проектування',
      'task__saveAndSend': 'Здати',
      'task__description__text': 'Опис',
      'profil__header__text': 'Студентський Профіль',
      // 'profil__boxText__limitation': 'Користувачі зареєстровані, як студенти мають обмеження у функціоналі платформи аби дізнатись більше <a href="limits.html">натисніть</a>',
      // 'click': 'Натисніть'
      'profil__boxText__second__names-label-name': 'Ім`я користувача',
      'profil__boxText__second__names-label-group': 'Група',
      'profil__boxText__second__names-label-email': 'Електронна пошта',
      'profil__boxText__second__names-label-change': 'Змінити пароль',
      'profil__boxText__second__names-label-new': 'Новий пароль',
      'profil__boxText__second__names-label-y': 'Підтвердження пароля',
      'profil__save': 'Зберегти',
      'profil__header__text-n': 'Профіль'
    },
    eng: {
      'header__buttons-register': 'REGISTER',
      'header__buttons-logIn': 'LOG IN',
      'registerWin__title': 'Registration',
      'registerWin__names-email': 'Email',
      'registerWin__names-password': 'Password',
      'registerWin__names-user': 'Username',
      'buttonSend': 'Send',
      'logInWin__title': 'Log In',
      'logInWin__names-email': 'Email',
      'logInWin__names-password': 'Password',
      'menu__search__input': 'Search',
      'menu__block-courses': 'Courses',
      'menu__block-projects': 'Projects',
      'main__name': 'Welcome StudyBridge',
      'menu__block-points': 'Points',
      'menu__block-profile': 'Profile',
      'menu__block-other': 'Building',
      'menu__contact__text': 'Contacts',
      'main__button-create': 'CREATE',
      'main__button-join': 'JOIN',
      'createWin__title': 'Create',
      'createWin__names': 'Discipline Name',
      'createWin__names-admin': 'Admin',
      'buttonNext-create': 'Next',
      'joinWin__title': 'Join',
      'joinWin__names-code': 'Discipline Code',
      'join__text': 'Enter the code received from the discipline admin',
      'buttonNext-join': 'Next',
      'calendar__currentData': 'May 2024',
      'calendar__weeks': ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      'lessons__main__text': 'Courses',
      'lessons__disciplines': 'My Disciplines',
      'lessons__courses-computerscience': 'Computer Networks',
      'lessons__courses-english': 'English',
      'lessons__courses-math': 'Technologies of mobile communication',
      'lessons__AI': 'AI Assistant',
      // 'lessons__VR': 'VR Room',
      'VR__message-text': 'VR device is not connected!',
      'AI__assistent': 'AI Assistant',
      'AI__text-greeting': 'Hello! Ask your question',
      'AI__typing-placeholder': 'Enter your message...',
      'projects__main__text': 'Projects',
      'projects__disciplines': 'My projects',
      'projects__courses': 'Task',
      'points__main__text': 'Points',
      'points__courses': 'Task',
      'points__text-status': 'Status',
      'points__text-deadline':  'It is necessary to pass',
      'points__deadline__button': 'Save',
      'points__text-points': 'Points',
      'points__comment__text': 'Comment',
      'computersience__title': 'Computer networs',
      'computersienceLectures__subjects__title': 'Lectures',
      'computersienceLectures__addLecture': 'Add lecture',
      'computersienceLectures__subjects__subject': 'Lecture',
      'computersienceLectures__lectures__title-task': 'Task',
      'computersienceLectures__addTask': 'Add task',
      'computersienceLectures__subjects__homework': 'Task',
      'lecture__title': 'Lecture',
      'lecture__description__save': 'Save',
      'fileUpload': 'Upload file:',
      'lecture__addLecture': 'Add',
      'lecture__addLecture-cansel': 'Cancel',
      'lecture__dropfile': 'Drop file here to download',
      'task__description__saveTitle': 'Save',
      'task__description__save': 'Save',
      'task__answer__save': 'Save',
      'task__title': 'Introductory Task',
      'task__continueCoding': 'Coding',
      'task__build': 'Designing',
      'task__saveAndSend': 'Send',
      'task__description__text': 'Description',
      'profil__header__text': 'Student Profil',
      // 'profil__boxText__limitation': 'Users registered as students have limitations in the functionality of the platform to learn more',
      // 'click': 'click'
      'profil__boxText__second__names-label-name': 'User`s name',
      'profil__boxText__second__names-label-group': 'Group',
      'profil__boxText__second__names-label-email': 'Email',
      'profil__boxText__second__names-label-change': 'Change password',
      'profil__boxText__second__names-label-new': 'New password',
      'profil__boxText__second__names-label-y': 'Password confirmation',
      'profil__save': 'Save',
      'profil__header__text-n': 'Profil'
    }
  };

  function changeLanguage(lang) {
    document.querySelectorAll('[data-translate-key]').forEach(element => {
      const key = element.getAttribute('data-translate-key');
      if (translations[lang][key]) {
        element.textContent = translations[lang][key];
      }
    });
    
    const placeholders = document.querySelectorAll('[data-translate-placeholder]');
    placeholders.forEach(element => {
      const key = element.getAttribute('data-translate-placeholder');
      if (translations[lang][key]) {
        element.placeholder = translations[lang][key];
      }
    });

    // Save selected language to localStorage
    localStorage.setItem('selectedLanguage', lang);
  }

  // Load the selected language from localStorage
  const savedLanguage = localStorage.getItem('selectedLanguage') || 'ukr';
  changeLanguage(savedLanguage);

  if (ukrBtn) ukrBtn.addEventListener('click', () => changeLanguage('ukr'));
  if (engBtn) engBtn.addEventListener('click', () => changeLanguage('eng'));
});