var UsersData;
var promise = fetch("./users.json");
promise
  .then(response => response.json())
  .then(data => {
    UsersData = data;
  });

function validate() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  for (value of UsersData) {
    if (value.username == username && value.password == password) {
      localStorage.setItem("username", username);
      if (
        localStorage.getItem(username) == null ||
        localStorage.getItem(username) == "NaN"
      ) {
        localStorage.setItem(username, 0);
      } else {
        localStorage.setItem(username, localStorage.getItem(username));
      }
      window.open("products.html");
    }
  }
}
function logout() {
  alert("You are about to logout");
  window.location.assign("index.html");
}
