function saveText() {
    alert("\u0417\u043C\u0456\u043D\u0438 \u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043D\u0456");
}
function previewImage(event) {
    const input = event.target;
    const file = input.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const profileImage = document.querySelector(".profil__img");
            profileImage.style.backgroundImage = `url('${e.target.result}')`;
        };
        reader.readAsDataURL(file);
    }
}

//# sourceMappingURL=profil.a1bbcf9e.js.map
