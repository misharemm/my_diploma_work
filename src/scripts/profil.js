function saveText() {
  alert('Зміни збережені');
}

function previewImage(event) {
  const input = event.target;
  const file = input.files[0];

  if (file) {
      const reader = new FileReader();

      reader.onload = function(e) {
          const profileImage = document.querySelector('.profil__img');
          profileImage.style.backgroundImage = `url('${e.target.result}')`;
      };

      reader.readAsDataURL(file);
  }
}