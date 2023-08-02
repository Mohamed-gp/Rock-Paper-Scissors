

let rules = document.querySelector(".rules");
let rulesTitle = document.querySelector(".rules-title");
let xBar = document.querySelector(".x-bar");
rulesTitle.onclick = function () {
  rules.style.display = "block";
};
xBar.onclick = function () {
  rules.style.display = "none";
};

// start step one
let game = document.querySelector(".game");
let stepOne = document.querySelector(".step-one");
let you = document.querySelector(".step-one > .user");
let result = document.querySelector(".result");
let retry = document.querySelector(".retry");
let opportunities = document.querySelectorAll(".paper,.scissors,.rock");
let youTitle = document.querySelector(".step-one > div:nth-child(1) > .name");
let mohamedTitle = document.querySelector(
  ".step-one > div:nth-child(2) > .name"
  );
  let decision = document.querySelector(".step-one .decision .decision-title")
  
  if(localStorage.score != null){
    result.innerHTML = localStorage.score
  }
for (let i = 0; i < opportunities.length; i++) {
  opportunities[i].addEventListener("click", function () {
    game.style.display = "none";
    stepOne.style.display = "flex";
    rulesTitle.style.display = "none";
    opportunities[i].style.cursor = "unset";
    stepOne.children[0].append(opportunities[i].cloneNode(true));
    stepOne.children[1].append(
      opportunities[Math.floor(Math.random() * 3)].cloneNode(true)
    );
    stepOne.children[1].children[1].style.cursor = "unset";
    let yourChose = stepOne.children[0].children[1].className;
    let mohamedChose = stepOne.children[1].children[1].className;
    // win case
    if (
      (yourChose == "rock" && mohamedChose == "scissors") ||
      (yourChose == "paper" && mohamedChose == "rock") ||
      (yourChose == "scissors" && mohamedChose == "paper")
    ) {
      result.innerHTML = +result.innerHTML + 1;
      retry.style.color = "#8080ff";
      decision.innerHTML = "YOU WIN"
    }
    //lose
    else if (
      (mohamedChose == "rock" && yourChose == "scissors") ||
      (mohamedChose == "paper" && yourChose == "rock") ||
      (mohamedChose == "scissors" && yourChose == "paper")
      ) {
        result.innerHTML = +result.innerHTML - 1;
        retry.style.color = "#ff0000b3";
        decision.innerHTML = "YOU LOSE"
      }else{
        decision.innerHTML = "DRAW"
    }
    // draw
    // local storage
    localStorage.score = +result.innerHTML;

    // style names

    let yourChosebefore = window.getComputedStyle(opportunities[i], "::before");
    let mohamedChosebefore = window.getComputedStyle(
      stepOne.children[1].children[1],
      "::before"
    );
    youTitle.style = `background-image: ${yourChosebefore.backgroundImage}`;
    mohamedTitle.style = `background-image: ${mohamedChosebefore.backgroundImage}`;
    retry.onclick = function(e){
      location.reload()
    }
  });
}
