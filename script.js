const draggable_list = document.getElementById("draggable-list");
const check = document.getElementById("check");

// The correct order itmes
const richestPeople = [
  "Jeff Bezos",
  "Bill Gates",
  "Warren Buffett",
  "Bernard Arnault",
  "Carlos Slim Helu",
  "Amancio Ortega",
  "Larry Ellison",
  "Mark Zuckerberg",
  "Michael Bloomberg",
  "Larry Page",
];

// store list items
let listItems = [];

let dragStartIndex;

createList();

// Insert list item into DOM
function createList() {
  [...richestPeople]
    .map((personName) => {
      return { value: personName, sort: Math.random() };
    })
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value)
    .forEach((person, index) => {
      // console.log(person);
      const listItem = document.createElement("li");

      listItem.setAttribute("data-index", index);

      listItem.innerHTML = `
      <span class="number">${index + 1}</span>
      <div class="draggable" draggable="true">
        <p class="person-name">${person}</p>
        <i class="fas fa-grip-lines"></i>
      </div>
    `;

      listItems.push(listItem);

      draggable_list.appendChild(listItem);
    });

  addEventListeners();
}

function dragStart() {
  // console.log("drag star");
  dragStartIndex = +this.closest("li").getAttribute("data-index");
}
function dragEnter() {
  // console.log("drag enter");
  this.classList.add("over");
}
function dragLeave() {
  // console.log("drag leave");
  this.classList.remove("over");
}
function dragDrop() {
  // console.log("drag drop");
  const dragEndIndex = +this.getAttribute("data-index");
  console.log(dragEndIndex);

  swapItem(dragStartIndex, dragEndIndex);

  this.classList.remove("over");
}
function dragOver(e) {
  e.preventDefault();
  // console.log("drag over");
}

function swapItem(fromIndex, toIndex) {
  const itemOne = listItems[fromIndex].querySelector(".draggable");
  const itemTwo = listItems[toIndex].querySelector(".draggable");

  listItems[fromIndex].appendChild(itemTwo);
  listItems[toIndex].appendChild(itemOne);
}

function addEventListeners() {
  const draggables = document.querySelectorAll(".draggable");
  const dragListItems = document.querySelectorAll(".draggable-list li");

  draggables.forEach((draggable) => {
    draggable.addEventListener("dragstart", dragStart);
  });

  dragListItems.forEach((item) => {
    item.addEventListener("dragover", dragOver);
    item.addEventListener("drop", dragDrop);
    item.addEventListener("dragenter", dragEnter);
    item.addEventListener("dragleave", dragLeave);
  });
}
