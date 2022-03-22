const submit = document.querySelector(".btn");
const ratings = document.querySelectorAll(".card__ratings--btn");
const status = document.querySelector(".status");
const card = document.querySelector(".card");
const thanksCard = document.querySelector(".thanks__card");

let selectedValue = "";
ratings.forEach((ratingBtn) => {
  ratingBtn.addEventListener("click", () => {
    selectedValue = ratingBtn.textContent;
    if (ratingBtn.classList.contains("checked")) {
      ratingBtn.classList.remove("checked");
      selectedValue = "";
    } else {
      ratings.forEach((ratingBtn) => {
        ratingBtn.classList.remove("checked");
      });
      ratingBtn.classList.add("checked");
    }
  });
});

submit.addEventListener("click", function () {
  if (selectedValue === "") {
    return;
  } else {
    status.textContent = selectedValue;
    thanksCard.style.display = "block";
    card.style.display = "none";
  }
});
