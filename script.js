const draggable_list = document.getElementById("draggble-list");
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
    .forEach((person, index) => {
      // console.log(person);
      const listItem = document.createElement("li");

      listItem.setAttribute("data-index", index);

      listItem.innerHTML = `
    <span class="number">${index + 1}</span>
    <div class="draggable" draggable="true">
      <p clas="person-name">${person.value}</p>
      <i class="fas fa-grid-lines"></i>
    </div>
    `;

      listItems.push(listItem);

      draggable_list.appendChild(listItem);
    });
}
