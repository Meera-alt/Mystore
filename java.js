fetch("./products.json")
  .then(response => response.json())
  .then(data => displayProducts(data.products));

function createProducts(products) {
  for (let value of products) {
    for (let index in value) {
      var div = document.createElement("div");
      div.innerHTML = value[index];
      document.getElementById("container").appendChild(div);
    }
  }
}

function displayProducts(obj) {
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
    p2.appendChild(button);
    div.appendChild(p2);

    document.getElementById("products").appendChild(div);
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
