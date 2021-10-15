const avatar = document.querySelector(".presentation img");
avatar.addEventListener("click", () => {
  avatar.src = "image/avatar-bis.svg";
});

const button = document.querySelector(".presentation button");
const name = document.querySelector("#name");
const descriptionBg = document.querySelectorAll(".pink-bg");
const pinkText = document.querySelectorAll(".pink-text");
button.addEventListener("click", () => {
  const namePrompt = prompt("Enter your name");
  name.innerHtml = namePrompt;
  name.style.color = "#fff";
  descriptionBg.forEach((item) => {
    item.style.backgroundColor = "#750ff7";
  });
  pinkText.forEach((item) => {
    item.style.color = "#750ff7";
  });
});
const link = document.querySelectorAll("a");
link.forEach((item) => {
  item.style.color = "#750ff7";
});
const buttonModifyMe = document.querySelector("#modify-me");
const listDevTools = document.querySelector("#front-dev-tools");
buttonModifyMe.addEventListener("click", () => {
  listDevTools.innerHTML = "<li>VSCode</li><li>Github</li><li>Terminal</li>";
});
const addDevTools = document.querySelector("#add-tools");
const devToolsList = document.querySelector("#dev-tools-back-list");
const toolsName = document.querySelector("#tools-name");
addDevTools.addEventListener("click", () => {
  const item = document.createElement("li");
  item.innerText = toolsName.value;
  devToolsList.appendChild(item);
  toolsName.value = "";
});
