// -----1----
// Напишіть такий JavaScript, щоб після натискання на кнопку button, елемент
// <div id="text"> зникав.

// const buttonHide = document.querySelector("[name=text-hide]");
// const buttonShow = document.querySelector("[name=text-show]");
// const divElem = document.getElementById("text");

// buttonHide.addEventListener("click", () => (divElem.style.display = "none"));
// buttonShow.addEventListener("click", () => (divElem.style.display = "block"));

// -----2----
// Напишіть такий код, щоб після натискання на кнопку, вона зникала.

// const btnHide = document.querySelector("[name=btn-hide]");
// btnHide.addEventListener("click", () => {
//   btnHide.style.display = "none";
//   setTimeout(() => (btnHide.style.display = "block"), 1000);
// });

// -----3----
// Створіть дерево, яке показує/приховує дочірні вузли при кліці

// const tree = document.querySelector("#container-tree");

// tree.addEventListener("click", (event) => {
//   let item = event.target.querySelector("ul");
//   if (!item) return;
//   else {
//     item.hidden = !item.hidden;
//   }
// });
