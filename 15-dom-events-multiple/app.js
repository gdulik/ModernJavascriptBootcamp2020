const colors = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "purple",
  "indigo",
  "violet",
];

const changeColor = function (e) {
  console.log(e);
  const h1 = document.querySelector("h1");
  h1.style.color = this.style.backgroundColor;
};

const container = document.querySelector("#boxes");

for (let color of colors) {
  const box = document.createElement("div");
  box.style.backgroundColor = color;
  box.classList.add("box");
  container.append(box);
  box.addEventListener("click", changeColor);
}

const input = document.querySelector("#username");

input.addEventListener("keypress", function (e) {
  console.log(e.key);
});

input.addEventListener("keydown", function (e) {
  console.log("Key pushed");
});

input.addEventListener("keyup", function (e) {
  console.log("Key released");
});

const addItemInput = document.querySelector("#addItem");
const itemsUl = document.querySelector("#items");

addItemInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    if (!this.value) return;
    const newItemText = this.value;
    const newItem = document.createElement("li");
    newItem.innerText = newItemText;
    itemsUl.append(newItem);
    this.value = "";
  }
});
