const addItems = document.querySelector(".add-items");
const delete_item = document.querySelector(".delete-item");

const itemsList = document.querySelector(".plates");
const items = JSON.parse(localStorage.getItem("items")) || [];

function addItem(e) {
  e.preventDefault();
  const text = this.querySelector("[name=item]").value;
  const item = {
    text,
    done: false,
  };

  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem("items", JSON.stringify(items));
  this.reset();
}

function populateList(plates = [], platesList) {
  platesList.innerHTML = plates
    .map((val, i) => {
      return `
        <li>
          <input class="checkBox" type="checkbox" data-index=${i} id="item${i}" ${
        val.done ? "checked" : ""
      } />
          <label for="item${i}">${val.text}</label>
        </li>
      `;
    })
    .join("");
}

function toggleDone(e) {
  if (!e.target.matches("input")) return; // skip this unless it's an input
  const el = e.target;
  const index = el.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem("items", JSON.stringify(items));
  populateList(items, itemsList);
}

function deleteallItems(e) {
  localStorage.clear("items");
}

addItems.addEventListener("submit", addItem);
delete_item.addEventListener("submit", deleteallItems);
itemsList.addEventListener("click", toggleDone);

populateList(items, itemsList);
