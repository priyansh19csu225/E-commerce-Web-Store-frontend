function login() {
  var http = new XMLHttpRequest();
  var details = {
    email: document.querySelector("#email").value,
    pwd: document.querySelector("#pwd").value,
  };
  var data = JSON.stringify(details);
  var url = "https://shopping-webdev.herokuapp.com/login";
  http.onreadystatechange = function () {
    if (http.readyState == 4 && http.status == 200) {
      console.log(http.responseText);
      var json = JSON.parse(this.responseText);
      localStorage.setItem("token", json.token);
      location.href = "index.html";
    }
  };
  http.open("post", url, true);
  http.setRequestHeader("Content-Type", "application/json");
  http.send(data);
}
