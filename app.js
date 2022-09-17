//? Pick a random number from 1-100.
let randomNumber = Math.round(Math.random() * 100);
console.log(randomNumber);

//? Variables
let score = 10;
// let topScore = 0;

//? Create a variable with the name topScore in localStorage.
let topScore = localStorage.getItem("topScore") || 0;

//? Update the top-score value in the DOM by reading it from localStorage.
document.querySelector(".top-score").textContent = topScore;

//? Do the checks when CheckBtn is pressed
document.querySelector(".check-btn").addEventListener("click", () => {
  const guessInput = Number(document.querySelector(".guess-input").value);
  const msg = document.querySelector(".msg");
  const body = document.querySelector("body");

  //? Warn User if no input is entered.
  if (!guessInput) {
    msg.innerText = "Please enter a number";
    //! if random == input.value
  } else if (randomNumber === guessInput) {
    msg.innerHTML = `Congrats You Win <i class="fa-solid fa-face-grin-hearts fa-2x"></i> `;
    body.className = "bg-success";
    document.querySelector(".check-btn").disabled = true;
    if (score > topScore) {
      // topScore = score;

      //? Update topScore variable in localStorage
      localStorage.setItem("topScore", score);
      //? Update top-score value in DOM
      document.querySelector(".top-score").textContent = score;
    }
    document.querySelector(".secret-number").textContent = randomNumber;

    //! if random!= input.value
  } else {
    score--;
    if (score > 0) {
      guessInput > randomNumber
        ? (msg.innerHTML = `<i class="fa-solid fa-arrow-trend-down fa-2x"></i> DECREASE `)
        : (msg.innerHTML = `<i class="fa-solid fa-arrow-trend-up fa-2x"></i> INCREASE `);
    } else {
      msg.innerHTML = `You Lost <i class="fa-regular fa-face-sad-tear fa-2x"></i>`;
      document.querySelector(".secret-number").textContent = randomNumber;
      body.className = "bg-danger";
      document.querySelector(".check-btn").disabled = true;
    }

    document.querySelector(".score").textContent = score;
  }
});

//? Install the game to the initial values when pressing again
document.querySelector(".again-btn").addEventListener("click", () => {
  score = 10;
  document.querySelector(".score").textContent = score;
  randomNumber = Math.round(Math.random() * 100);
  document.querySelector(".secret-number").textContent = "?";
  console.log(randomNumber);
  document.querySelector(".check-btn").disabled = false;
  document.querySelector("body").classList.remove("bg-success", "bg-danger");
  document.querySelector(".guess-input").value = "";
  document.querySelector(".msg").innerText = `Starting..`;
});

document.querySelector(".guess-input").addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    document.querySelector(".check-btn").click();
  }
});

//! LOCALSTORAGE- SESSIONSTORAGE
// myObj = { a: 1, b: 2, c: 3 };
// localStorage.setItem("OBJ", JSON.stringify(myObj));
// const readObj = localStorage.getItem("OBJ");
// const readOBJ = JSON.parse(localStorage.getItem("OBJ"));
// console.log(typeof readObj);
// console.log(typeof readOBJ);
// console.log(readOBJ);
