const schemeSvg = document.querySelector(".scheme-svg");
const totalPriceTag = document.querySelector(".price-total");
const menuBottom = document.querySelector(".menu-m");
const menu = document.querySelector(".menu");
let cost = 800;
let totalPrice = 0;
schemeSvg.addEventListener("click", (event) => {
  if (!event.target.classList.contains("booked")) {
    event.target.classList.toggle("activ");
    let totalSeats = schemeSvg.querySelectorAll(".activ").length;
    totalPrice = totalSeats * cost;
    totalPriceTag.textContent = totalPrice;
  }
});
menuBottom.addEventListener("click", () => {
  console.log("Шлеп по мамке Артема");
  menu.classList.toggle("is-open");
});
