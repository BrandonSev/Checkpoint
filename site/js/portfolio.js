const avatar = document.querySelector(".presentation img");
avatar.addEventListener("click", () => {
  avatar.src = "image/avatar-bis.svg";
});

const button = document.querySelector(".presentation button");
const name = document.querySelector("#name");
const descriptionBg = document.querySelector(".description");
console.log(descriptionBg);
button.addEventListener("click", () => {
  const namePrompt = prompt("Enter your name");
  name.innerHtml = namePrompt;
  name.style.color = "#fff";
  descriptionBg.style.backgroundColor = "#750ff7";
});
