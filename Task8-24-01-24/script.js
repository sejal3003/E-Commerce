// Task 1: Use querySelector to select the element with id "container" and log it to the console.
function task1() {
  const x = document.querySelector("#container");
  console.log(x);
}
// task1();
// Task 2: Use querySelectorAll to select all paragraphs with class "content" and log them to the console.
function task2() {
  const y = document.querySelectorAll(".content");
  console.log(y);
}
// task2();

// Task 3: Use querySelector to select the span with class "highlight" and change its text content to "New Highlighted Text".
function task3() {
  let z = document.querySelector(".highlight");
  console.log(z);
  z.textContent = "New Highlighted Text";
}
//task3();

// Task 4: Use querySelectorAll to select all list items with class "list-item" and log their text content to the console.
function task4() {
  const items = document.querySelectorAll(".list-item");
  //console.log(items);
  items.forEach((item) => {
    console.log(item.textContent);
  });
}
//task4();

// Task 5: Use querySelector to select the first paragraph with class "content" and add a class "highlighted" to it.
function task5() {
  let input = document.querySelector(".content");

  if (input) {
    input.classList.add("highlighted");
  }
  console.log(input);
}
//task5();

// Task 6: Use querySelector to select the second list item with class "list-item" and change its text content to "Updated Item 2".
function task6() {
  let item = document.querySelectorAll(".list-item");
  item[1].textContent = "Updated Item 2";
  console.log(item[1]);
}
//task6();

// Task7: Create a new paragraph element, set its text content to "This is a new paragraph", and append it to the end of the container.
function task7() {
  const para = document.createElement("p");
  const node = document.createTextNode("This is new paragraph");
  para.appendChild(node);
  const element = document.querySelector("#container");
  element.appendChild(para);
}
task7();

// Task 8: Use querySelector to select all paragraphs with class "content" and add the class "italic" to each of them.
function task8() {
  const element = document.querySelectorAll(".content");
  element.forEach((paragraph) => {
    paragraph.classList.add("italic");
  });
  console.log(element);
}
//task8();

// Task 9: Remove the class "list-item" from all list items
function task9() {
  let items = document.querySelectorAll(".list-item");
  items.forEach((item) => {
    item.classList.remove("list-item");
  });
}
//task9();

//Task 10: Create a new list item with the text "Additional Item" using createElement, set its className to "list-item", and append it to the unordered list.

function task10() {
  let item = document.createElement("li");
  item.className = "list-item";
  item.textContent = "Additional Item";
  const element = document.querySelector("ul");
  if (element) {
    element.append(item);
  }
}
//task10();
