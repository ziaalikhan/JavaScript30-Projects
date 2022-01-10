const addItems = document.querySelector(".add-items");
const delete_item = document.querySelector(".delete-item");

const itemsList = document.querySelector(".plates");
const items = JSON.parse(localStorage.getItem("items")) || [];

function addItem(e) {
  e.preventDefault();
  const text = this.querySelector("[name=item]").value;
  const item = {
    id: Math.floor(Math.random() * 10000),
    text,
    done: false,
  };

  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem("items", JSON.stringify(items));
  this.reset();
}

function populateList(plates, platesList) {
  platesList.innerHTML = plates
    .map((val, i) => {
      return `
        <li>
          <label for="item${i}">${val.text}</label>
          <button id="${i}">Delete</button>
        </li>
      `;
    })
    .join("");
}

function deleteallItems(e) {
  localStorage.clear("items");
}

function removeTodo(index) {
  let res = index.target.id;
  items.splice(res, 1);
  localStorage.setItem("items", JSON.stringify(items));
  populateList(items, itemsList);
}

addItems.addEventListener("submit", addItem);
delete_item.addEventListener("submit", deleteallItems);
itemsList.addEventListener("click", removeTodo);

populateList(items, itemsList);
