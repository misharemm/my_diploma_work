function authorizeWithGitHub() {
    var clientId = "Ov23liRirD1hC7WI2HEG";
    var redirectUri = "http://localhost:1234/index.html";
    var githubAuthUrl = "https://github.com/login/oauth/authorize?client_id=" + clientId + "&redirect_uri=" + encodeURIComponent(redirectUri) + "&scope=user";
    var popupWindow = window.open(githubAuthUrl, "_blank", "width=600,height=600");
    window.addEventListener("message", function(event) {
        if (event.origin === "http://localhost:1234/index.html") {
            var accessToken = event.data.access_token;
            console.log("Access Token:", accessToken);
            popupWindow.close();
        }
    }, false);
}

//# sourceMappingURL=projects.014b688a.js.map
