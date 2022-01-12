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
        <li class="items" id="item-${i}">
          <label >${val.text}</label>
          <button class="deleteOne_Btn" onClick="removeTodo(${i})" id="${i}">Delete</button>
        </li>
      `;
    })
    .join("");
}

function deleteallItems() {
  localStorage.clear("items");
}

function removeTodo(index) {
  items.splice(index, 1);
  localStorage.setItem("items", JSON.stringify(items));
  populateList(items, itemsList);
}

addItems.addEventListener("submit", addItem);
delete_item.addEventListener("submit", deleteallItems);

populateList(items, itemsList);
