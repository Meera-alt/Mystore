var productsData;
var promise = fetch("./products.json");
promise
  .then(response => response.json())
  .then(data => {
    productsData = data;
    displayProducts(data);
  });

// window.onload = function() {
//   name = localStorage.getItem("username");
//   if (name != "undefined" || name != "null") {
//     document.getElementById("welcomeMessage").innerHTML =
//       "Welcome  " + name + "!";
//   } else document.getElementById("welcomeMessage").innerHTML = "Hello!" + name;
// };

// display products
function displayProducts(obj) {
  document.getElementById("welcomeMessage").value = localStorage.getItem(
    "username"
  );
  document.getElementById("welcomeMessage").innerHTML = localStorage.getItem(
    "username"
  );
  document.getElementById("cartItems").value = localStorage.getItem(
    document.getElementById("welcomeMessage").value
  );
  document.getElementById("cartItems").innerHTML = localStorage.getItem(
    document.getElementById("welcomeMessage").value
  );
  for (let value of obj) {
    var div = document.createElement("div");

    var img = document.createElement("img");
    img.setAttribute("src", value.imgurl);
    img.setAttribute("class", "image");
    div.appendChild(img);

    var p1 = document.createElement("p");
    p1.innerHTML = value.name;
    p1.setAttribute("class", "para");
    div.appendChild(p1);

    var p2 = document.createElement("p");
    var button = document.createElement("button");
    button.innerHTML = "Add to cart";
    button.setAttribute("onclick", "incrementCartAmount()");
    p2.appendChild(button);
    div.appendChild(p2);

    document.getElementById("products").appendChild(div);
  }
}

function fillterdProducts() {
  var search_input = document.getElementById("searchBarInput").value;
  document.getElementById("products").innerHTML = "";
  displayProducts(
    productsData.filter(value => {
      var lowerCaseProduct = value.name.toLowerCase();
      return lowerCaseProduct.includes(search_input);
    })
  );
}
function incrementCartAmount() {
  var currentUser = document.getElementById("welcomeMessage").value;
  var currentCount = document.getElementById("cartItems");
  var currentCountParsed = parseInt(currentCount.textContent);
  var NewCount = counter(currentCountParsed);
  currentCount.innerHTML = NewCount;
  localStorage.setItem(currentUser, NewCount);
}
// Counter function used by Increment Cart Amount Function
function counter(counter) {
  return counter + 1;
}
function createProducts(products) {
  for (let value of products) {
    for (let index in value) {
      var div = document.createElement("div");
      div.innerHTML = value[index];
      document.getElementById("container").appendChild(div);
    }
  }
}

function createTable(records) {
  var table = document.createElement("table");
  table.setAttribute("border", 1);
  table.appendChild(createHeading(records[0]));
  for (let record of records) {
    table.appendChild(createRow(record));
  }
  document.getElementById("container").appendChild(table);
}

function createHeading(record) {
  var row = document.createElement("tr");
  for (let prop in record) {
    var heading = document.createElement("th");
    heading.innerHTML = prop.toUpperCase();
    row.appendChild(heading);
  }
  return row;
}

function createRow(record) {
  var row = document.createElement("tr");
  for (let prop in record) {
    var column = document.createElement("td");
    column.innerHTML = record[prop];
    row.appendChild(column);
  }
  return row;
}
