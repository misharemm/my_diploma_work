function run() {
  let htmlCode = document.getElementById("html-code").value;
  let cssCode = document.getElementById("css-code").value;
  let jsCode = document.getElementById("js-code").value;
  let outputCode = document.getElementById("output-code");

  outputCode.contentDocument.body.innerHTML = htmlCode + "<style>" + cssCode + "</style>";
  outputCode.contentWindow.eval(jsCode);

  saveToLocalStorage("htmlCode", htmlCode);
  saveToLocalStorage("cssCode", cssCode);
  saveToLocalStorage("jsCode", jsCode);
}

function saveToLocalStorage(key, value) {
  localStorage.setItem(key, value);
}

document.getElementById("html-code").addEventListener("keyup", function() {
  saveToLocalStorage("htmlCode", this.value);
});
document.getElementById("css-code").addEventListener("keyup", function() {
  saveToLocalStorage("cssCode", this.value);
});
document.getElementById("js-code").addEventListener("keyup", function() {
  saveToLocalStorage("jsCode", this.value);
});

window.addEventListener("load", function() {
  document.getElementById("html-code").value = localStorage.getItem("htmlCode") || "";
  document.getElementById("css-code").value = localStorage.getItem("cssCode") || "";
  document.getElementById("js-code").value = localStorage.getItem("jsCode") || "";
  run();
});