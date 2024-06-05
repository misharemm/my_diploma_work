function changeIcon() {
  let icon = document.querySelector('.meet__icon-microphone');

  if (icon.src.match("images/microphone-alt-1-svgrepo-com.png")) {
    icon.src = "images/microphone-slash-alt-1-svgrepo-com.png";
  } else {
    icon.src = "images/microphone-alt-1-svgrepo-com.png";
  }
}