let availableKeywords = [
    "\u041A\u0443\u0440\u0441\u0438",
    "\u041F\u0440\u043E\u0435\u043A\u0442\u0438",
    "\u0411\u0430\u043B\u0438",
    "\u041F\u0440\u043E\u0444\u0456\u043B\u044C",
    "\u0406\u043D\u0448\u0435",
    "\u041A\u043E\u043C\u043F`\u044E\u0442\u0435\u0440\u043D\u0456 \u043D\u0430\u0443\u043A\u0438",
    "\u0410\u043D\u0433\u043B\u0456\u0439\u0441\u044C\u043A\u0430 \u043C\u043E\u0432\u0430",
    "\u041C\u0430\u0442\u0435\u043C\u0430\u0442\u0438\u043A\u0430",
    "\u041B\u0435\u043A\u0446\u0456\u044F",
    "\u0417\u0430\u0432\u0434\u0430\u043D\u043D\u044F",
    "Meet"
];
const menuResult = document.querySelector(".menu__results");
const menuinputBox = document.querySelector(".menu__search__input");
menuinputBox.onkeyup = function() {
    let result = [];
    let input = menuinputBox.value;
    if (input.length) result = availableKeywords.filter((keyword)=>{
        return keyword.toLocaleLowerCase().includes(input.toLocaleLowerCase());
    });
    display(result);
};
function display(result) {
    const content = result.map((list)=>{
        return `<li><a href="${getLinkForKeyword(list)}" onclick="selectInput(this)">${list}</a></li>`;
    });
    menuResult.innerHTML = "<ul>" + content.join("");
}
function selectInput(list) {
    menuinputBox.value = list.innerHTML;
    menuResult.innerHTML = "";
}
function getLinkForKeyword(keyword) {
    switch(keyword){
        case "\u041A\u0443\u0440\u0441\u0438":
            return "http://localhost:1234/lessons.html";
        case "\u041F\u0440\u043E\u0435\u043A\u0442\u0438":
            return "http://localhost:1234/projects.html";
        case "\u0411\u0430\u043B\u0438":
            return "http://localhost:1234/points.html";
        case "\u041F\u0440\u043E\u0444\u0456\u043B\u044C":
            return "http://localhost:1234/profil.html";
        case "\u0421\u043A\u043B\u0430\u0434\u0430\u043D\u043D\u044F \u0441\u0445\u0435\u043C\u0438":
            return "#";
        case "\u041A\u043E\u043C\u043F`\u044E\u0442\u0435\u0440\u043D\u0456 \u043C\u0435\u0440\u0435\u0436\u0456":
            return "http://localhost:1234/computersience.html";
        case "\u0410\u043D\u0433\u043B\u0456\u0439\u0441\u044C\u043A\u0430 \u043C\u043E\u0432\u0430":
            return "http://localhost:1234/english.html";
        case "\u041C\u0430\u0442\u0435\u043C\u0430\u0442\u0438\u043A\u0430":
            return "http://localhost:1234/math.html";
        case "\u041B\u0435\u043A\u0446\u0456\u044F":
            return "http://localhost:1234/lecture.html";
        case "\u0417\u0430\u0432\u0434\u0430\u043D\u043D\u044F":
            return "http://localhost:1234/task.html";
        case "\u0421\u043A\u043B\u0430\u0434\u0430\u043D\u043D\u044F \u0441\u0445\u0435\u043C\u0438":
            return "http://localhost:1234/network.html";
        case "Meet":
            return "http://localhost:1234/meet.html";
        default:
            return "#";
    }
}

//# sourceMappingURL=index.52f1d08f.js.map
