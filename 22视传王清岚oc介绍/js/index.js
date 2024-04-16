let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");
let btn4 = document.querySelector("#btn4");
let btn5 = document.querySelector("#btn5");
let btn6 = document.querySelector("#btn6");
let iconHome = document.querySelectorAll(".icon-Home");
iconHome.forEach((item) => {
  item.addEventListener("click", () => {
    window.location.href = "./Home.html";
  });
});
console.log(iconHome);
btn1.addEventListener("click", () => {
  window.location.href = "./index.html";
});
btn2.addEventListener("click", () => {
  window.location.href = "./ouxiang.html";
});
btn3.addEventListener("click", () => {
  window.location.href = "./xuexiao.html";
});
btn4.addEventListener("click", () => {
  window.location.href = "./lvyou.html";
});
// btn5.addEventListener("click", () => {
//   window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
// });
// btn6.addEventListener("click", () => {
//   window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
// });
iconHome.addEventListener("click", () => {
  window.location.href = "./Home.html";
});
