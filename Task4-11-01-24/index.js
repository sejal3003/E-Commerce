// let div = document.querySelector("div");
// console.dir(div);
// let id = div.getAttribute("id");
// console.log(id);
// let para = document.querySelector("p");
// console.log(para.setAttribute("class", "newclass"));
// div.style.backgroundColor = "purple";
// div.style.fontSize = "20px";
// div.style.visibility = "show";

// let btn1 = document.querySelector("#btn1");

// btn1.onclick = () => {
//   console.log("clicked succesfully");
//   let a = 25;
//   a++;
//   console.log(a);
// };
// let div = document.querySelector("div");

// div.onmouseover = () => {
//   console.log("btn1 was clicked");
// };

// btn1.addEventListener("click", () => {
//   console.log("hello welcome to website!");
// });

let modebtn = document.querySelector("#mode");

let currmode = "light";
let body = document.querySelector("body");

modebtn.addEventListener("click", () => {
  if (currmode === "light") {
    currmode = "dark";
    body.classList.add("dark");
    body.classList.remove("light");
    //document.querySelector("body").style.backgroundColor = "black";
  } else {
    currmode = "light";
    body.classList.add("light");
    body.classList.remove("dark");
    //document.querySelector("body").style.backgroundColor = "white";
  }
  console.log(currmode);
});

let div = document.querySelector("div");
div.addEventListener("mouseover", () => {
  document.querySelector("p").style.color = "purple";
});
