const body = document.querySelector(".body");

let header = document.createElement("header");
header.classList.add("header");
body.appendChild(header);

let main = document.createElement("main");
main.classList.add("main");
main.classList.add("main_light");
body.appendChild(main);

let headerTitle = document.createElement("h1");
headerTitle.classList.add("header__title");
headerTitle.classList.add("header__title_light");
headerTitle.innerText = `NONOGRAMS`;
header.appendChild(headerTitle);

let menu = document.createElement("div");
menu.classList.add("menu");
header.appendChild(menu);

let resetButton = document.createElement("button");
resetButton.innerText = `Reset game`;
resetButton.classList.add("button");
resetButton.classList.add("menu___button");
resetButton.classList.add("button_light");
menu.appendChild(resetButton);

let randomButton = document.createElement("button");
randomButton.innerText = `Random`;
randomButton.classList.add("button");
randomButton.classList.add("menu___button");
randomButton.classList.add("button_light");
menu.appendChild(randomButton);

let resultsButton = document.createElement("button");
resultsButton.innerText = `Results`;
resultsButton.classList.add("button");
resultsButton.classList.add("menu___button");
resultsButton.classList.add("button_light");
menu.appendChild(resultsButton);

let solutionButton = document.createElement("button");
solutionButton.innerText = `Solution`;
solutionButton.classList.add("button");
solutionButton.classList.add("menu___button");
solutionButton.classList.add("button_light");
menu.appendChild(solutionButton);

let muteButton = document.createElement("button");
muteButton.classList.add("button");
muteButton.classList.add("menu___button");
muteButton.classList.add("button_light");
menu.appendChild(muteButton);

let themeButton = document.createElement("button");
themeButton.classList.add("button");
themeButton.classList.add("menu___button");
themeButton.classList.add("button_light");
menu.appendChild(themeButton);

let themeImg = document.createElement("img");
themeImg.classList.add("mute__img");
themeImg.src = "images/sun.svg";
themeImg.alt = "theme";
themeButton.appendChild(themeImg);

let muteImg = document.createElement("img");
muteImg.classList.add("mute__img");
muteImg.src = "images/unmute.svg";
muteImg.alt = "mute";
muteButton.appendChild(muteImg);

let gameBlock = document.createElement("div");
gameBlock.classList.add("game");
main.appendChild(gameBlock);

let gameLevel = document.createElement("div");
gameLevel.classList.add("level");
main.appendChild(gameLevel);

gameLevel.innerHTML = `<p class = level__name>Easy</p>`;

let gameField = document.createElement("div");
gameField.classList.add("game__field");
gameBlock.appendChild(gameField);

let watch = document.createElement("div");
watch.innerText = `00:00`;
watch.classList.add("game__watch");
gameBlock.appendChild(watch);

let table = document.createElement("table");
table.classList.add("crossword");

let tbody = document.createElement("tbody");
table.appendChild(tbody);

let modal = document.createElement("div");
modal.classList.add("modal");
body.appendChild(modal);

let modalMain = document.createElement("div");
modalMain.classList.add("modal__main");
modalMain.classList.add("modal__main_light");
modal.appendChild(modalMain);

let modalText = document.createElement("p");
modalText.classList.add("modal__text");
modalMain.appendChild(modalText);

let modalButton = document.createElement("button");
modalButton.classList.add("button");
modalButton.classList.add("button_light");
modalButton.classList.add("modal__button");
modalButton.innerText = `Play Again`;
modalMain.appendChild(modalButton);

let modalResult = document.createElement("div");
modalResult.classList.add("modal");
body.appendChild(modalResult);

let modalMainResult = document.createElement("div");
modalMainResult.classList.add("modal__main");
modalMainResult.classList.add("modal__main_light");
modalResult.appendChild(modalMainResult);

let modalTextResult = document.createElement("p");
modalTextResult.classList.add("modal__text");
modalTextResult.innerText = `Top Games`;
modalMainResult.appendChild(modalTextResult);

let tableResult = document.createElement("table");
let tbodyResult = document.createElement("tbody");
modalMainResult.appendChild(tableResult);
tableResult.appendChild(tbodyResult);

let modalButtonResult = document.createElement("button");
modalButtonResult.classList.add("button");
modalButtonResult.classList.add("button_light");
modalButtonResult.classList.add("modal__button");
modalButtonResult.innerText = `OK`;
modalMainResult.appendChild(modalButtonResult);

let winSound = document.createElement("audio");
winSound.classList.add("winSound");
winSound.src = "audio/win.mp3";
winSound.type = "audio/mpeg";

let blackSound = document.createElement("audio");
blackSound.classList.add("blackSound");
blackSound.src = "audio/black.mp3";
blackSound.type = "audio/mpeg";

let crossSound = document.createElement("audio");
crossSound.classList.add("crossSound");
crossSound.src = "audio/cross.mp3";
crossSound.type = "audio/mpeg";

let emptySound = document.createElement("audio");
emptySound.classList.add("emptySound");
emptySound.src = "audio/empty.mp3";
emptySound.type = "audio/mpeg";

//сумоист
const matrix = [
  [0,0,1,0,1,0,1],
  [0,0,1,4,2,3,2],
  [0,1,0,0,1,0,0],
  [2,2,1,1,0,1,1],
  [0,3,0,1,1,1,0],
  [0,4,0,1,1,1,1],
  [2,1,1,1,0,0,1]
];
//кнопка
const matrix1 = [
  [0,0,0,3,2,3,0],
  [0,0,1,1,1,1,1],
  [0,3,0,1,1,1,0],
  [0,3,0,1,1,1,0],
  [1,1,0,1,0,1,0],
  [0,1,0,0,1,0,0],
  [2,2,1,1,0,1,1]
  ];
//волейболист
const matrix2 = [
  [0,0,0,0,1,0,2],
  [0,0,1,1,2,4,1],
  [1,1,1,0,0,1,0],
  [0,4,0,1,1,1,1],
  [0,2,0,0,0,1,1],
  [0,2,0,0,1,1,0],
  [1,1,0,0,1,0,1]
  ];
//лошадка
const matrix3 = [
  [0,0,1,3,1,1,1],
  [0,0,1,1,1,1,1],
  [0,1,0,1,0,0,0],
  [2,1,1,1,0,0,1],
  [0,3,0,1,1,1,0],
  [1,1,1,0,0,0,1],
  [0,3,0,1,1,1,0]
  ];
//кораблик
const matrix4 = [
  [0,0,0,0,3,1,0],
  [0,0,1,2,1,2,1],
  [0,1,0,0,1,0,0],
  [0,2,0,0,1,1,0],
  [0,1,0,0,1,0,0],
  [2,2,1,1,0,1,1],
  [0,3,0,1,1,1,0]
  ];

  //котенок
  const matrix5 = [
    [0,0,0,4,0,4,2,0,0,0,0,0],
    [0,0,2,1,9,3,2,1,1,1,3,3],
    [1,1,0,0,0,0,0,0,0,0,0,0],
    [0,3,0,0,0,0,0,0,0,0,0,0],
    [0,5,0,0,0,0,0,0,0,0,0,0],
    [0,5,0,0,0,0,0,0,0,0,0,0],
    [0,1,0,0,0,0,0,0,0,0,0,0],
    [1,1,0,0,0,0,0,0,0,0,0,0],
    [1,1,0,0,0,0,0,0,0,0,0,0],
    [2,2,0,0,0,0,0,0,0,0,0,0],
    [3,1,0,0,0,0,0,0,0,0,0,0],
    [0,8,0,0,0,0,0,0,0,0,0,0]
    ];

const crosswords = [matrix, matrix1, matrix2, matrix3, matrix4];

let selectedButton = null;
function createButton(matrix, name) {
  const button = document.createElement("button");
  button.classList.add("button");
  button.classList.add("button_light");
  button.classList.add("level__button");
  button.textContent = name;
  button.addEventListener("click", () => {
    if (selectedButton) {
      selectedButton.classList.remove("choosed");
      selectedButton.disabled = false;
    }
    selectedButton = button;
    selectedButton.classList.add("choosed");
    selectedButton.disabled = true;
    resetCrossword();
    createTable(matrix);
  });
  return button;
}
const button1 = createButton(matrix, "Sumo");
const button2 = createButton(matrix1, "Button");
const button3 = createButton(matrix2, "Volleyball");
const button4 = createButton(matrix3, "Toy horse");
const button5 = createButton(matrix4, "Boat");

gameLevel.appendChild(button1);
gameLevel.appendChild(button2);
gameLevel.appendChild(button3);
gameLevel.appendChild(button4);
gameLevel.appendChild(button5);

randomCrossword();

function createTable(matrix) {
  gameField.innerHTML = "";
  const table = document.createElement("table");

  for (let i = 0; i < matrix.length; i++) {
    const row = document.createElement("tr");

    for (let j = 0; j < matrix[0].length; j++) {
      const cell = document.createElement("td");

      if (i > 1 && j > 1) {
        cell.addEventListener("click", toggleCellColor);
        cell.addEventListener("contextmenu", toggleCellCross);
        cell.style.cursor = "pointer";
      }
      if (i < 2 && j > 1) {
        cell.textContent = matrix[i][j] === 0 ? "" : matrix[i][j];
      }

      if (i > 1 && j < 2) {
        cell.textContent = matrix[i][j] === 0 ? "" : matrix[i][j];
      }

      if (i === 1) {
        cell.style.borderBottom = "3px solid";
      }

      if (j === 1) {
        cell.style.borderRight = "3px solid";
      }

      row.appendChild(cell);
    }

    table.appendChild(row);
  }

  gameField.appendChild(table);
}

//random

function randomCrossword() {
  if (selectedButton) {
    selectedButton.classList.remove("choosed");
    selectedButton.disabled = false;
    selectedButton = null;
  }
  const randomIndex = Math.floor(Math.random() * crosswords.length);
  const randomCrossword = crosswords[randomIndex];
  createTable(randomCrossword);
  if (randomCrossword === matrix) {
    selectedButton = button1;
  } else if (randomCrossword === matrix1) {
    selectedButton = button2;
  } else if (randomCrossword === matrix2) {
    selectedButton = button3;
  } else if (randomCrossword === matrix3) {
    selectedButton = button4;
  } else if (randomCrossword === matrix4) {
    selectedButton = button5;
  }
  selectedButton.classList.add("choosed");
  selectedButton.disabled = true;
}

randomButton.addEventListener("click", () => {
  resetCrossword();
  randomCrossword()
});

resetButton.addEventListener("click", resetCrossword);


//solution
solutionButton.addEventListener("click", () => {
  if (selectedButton === button1) {
    solutionMatrix(matrix);
  }
  if (selectedButton === button2) {
    solutionMatrix(matrix1);
  }
  if (selectedButton === button3) {
    solutionMatrix(matrix2);
  }
  if (selectedButton === button4) {
    solutionMatrix(matrix3);
  }
  if (selectedButton === button5) {
    solutionMatrix(matrix4);
  }
});

function solutionMatrix(matrix) {
  resetCrossword();
  const rows = gameField.querySelectorAll("tr");
  rows.forEach((row, rowIndex) => {
    const cells = row.querySelectorAll("td");
    cells.forEach((cell, columnIndex) => {
      if (rowIndex > 1 && columnIndex > 1 && matrix[rowIndex][columnIndex] === 1) {
        cell.classList.add("black");
      }
      cell.classList.add("unactive");
    });
  });
};

//change color

function toggleCellColor() {
    if (isFirstClick) {
        isFirstClick = false;
        interval = setInterval(startStopWatch, 1000);
    }
    if (this.classList.contains("black")) {
      this.classList.remove("black");
      emptySound.play();
    } else {
      this.classList.add("black");
      this.classList.remove("cross");
      blackSound.play();
    }
    // this.classList.toggle("black");
    // this.classList.remove("cross");
    // blackSound.play();
    isWin();
}

//add cross
function toggleCellCross(event) {
  event.preventDefault();
  if (isFirstClick) {
    isFirstClick = false;
    interval = setInterval(startStopWatch, 1000);
  }
  if (this.classList.contains("cross")) {
    this.classList.remove("cross");
    emptySound.play();
  } else {
    this.classList.add("cross");
    crossSound.play();
  }
  this.classList.remove("black");
  // this.classList.toggle("cross");
  // this.classList.remove("black");
  // crossSound.play();
  isWin();
}
let isMuted = false;

muteButton.addEventListener("click", function() {
  blackSound.play();
  if (isMuted) {
    crossSound.muted = false;
    emptySound.muted = false;
    blackSound.muted = false;
    winSound.muted = false;
    isMuted = false;
    muteImg.src = "images/unmute.svg";
  } else {
    crossSound.muted = true;
    emptySound.muted = true;
    blackSound.muted = true;
    winSound.muted = true;
    isMuted = true;
    muteImg.src = "images/mute.svg";
  }
});

//crossword check

function isWin() {
  const rows = gameField.querySelectorAll("tr");
  let currentBlack = true;
  for (let i = 2; i < rows.length; i++) {
    const cells = rows[i].querySelectorAll("td");
    let sumRow = 0;
    let countRow = 0;

    for (let j = 0; j < cells.length; j++) {
      const value = parseInt(cells[j].textContent);
      if (!isNaN(value)) {
        sumRow += value;
      }

      if (cells[j].classList.contains("black")) {
        countRow++;
      }
    }

    if (countRow !== sumRow) {
      currentBlack = false;
      break;
    }
  }
  if (currentBlack) {
    for (let j = 2; j < rows[0].querySelectorAll("td").length; j++) {
      let sumCol = 0;
      let countCol = 0;

      for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].querySelectorAll("td");
        const value = parseInt(cells[j].textContent);

        if (!isNaN(value)) {
          sumCol += value;
        }

        if (cells[j].classList.contains("black")) {
          countCol++;
        }
      }

      if (countCol !== sumCol) {
        currentBlack = false;
        break;
      }
    }
  }

  if (currentBlack) {
    openModal();
    winSound.play();
  }
}

//results

function saveResult(matrixName, time) {
  const results = localStorage.getItem("results");
  let resultsArray = [];

  if (results) {
    resultsArray = JSON.parse(results);
  }

  resultsArray.push({ matrixName, time });

  if (resultsArray.length > 5) {
    resultsArray.shift();
  }

  localStorage.setItem("results", JSON.stringify(resultsArray));
}

function showResults() {
  const results = localStorage.getItem("results");
  let resultsArray = [];

  if (results) {
    resultsArray = JSON.parse(results);
  }

  resultsArray.sort((a, b) => parseInt(a.time) - parseInt(b.time));

  modalResult.classList.add("active");
  body.classList.add("lock");
  
  tbodyResult.innerHTML = "";

  for (let i = 0; i < resultsArray.length; i++) {
    const row = document.createElement("tr");
    const matrixNameCell = document.createElement("td");
    const timeCell = document.createElement("td");
    const levelName = document.createElement("td");
    matrixNameCell.classList.add("table-result__td");
    timeCell.classList.add("table-result__td");
    levelName.classList.add("table-result__td");

    matrixNameCell.textContent = resultsArray[i].matrixName;
    const timeInSeconds = resultsArray[i].time;
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    timeCell.textContent = formattedTime;
    levelName.textContent = "Easy";

    row.appendChild(matrixNameCell);
    row.appendChild(timeCell);
    row.appendChild(levelName);

    tbodyResult.appendChild(row);
  }
  modalButtonResult.addEventListener("click", () => {
    modalResult.classList.remove("active");
    body.classList.remove("lock");
    blackSound.play();
  });
}

resultsButton.addEventListener("click", () => {
  showResults();
  blackSound.play();
});

//modal

function openModal() {
  clearInterval(interval);
  setTimeout(function() {
    modal.classList.add("active");
    body.classList.add("lock");
    modalText.innerHTML = `Great! <br> You have solved the nonogram in ${(minutes * 60) + seconds} seconds!`;
    modalButton.addEventListener("click", resetCrossword);
    const matrixName = selectedButton.textContent;
    const time = (minutes * 60) + seconds;
    saveResult(matrixName, time);
  }, 400);
}

//reset crossword

function resetCrossword() {
  modal.classList.remove("active");
  body.classList.remove("lock");
  isFirstClick = true;
  clearInterval(interval);
  seconds = 0;
  minutes = 0;
  watch.textContent = `00:00`;
  const rows = gameField.querySelectorAll("tr");
  rows.forEach(row => {
    const cells = row.querySelectorAll("td");
    cells.forEach(cell => {
      cell.classList.remove("black");
      cell.classList.remove("cross");
      cell.classList.remove("unactive");
    });
  });
  emptySound.play();
}


//stop-watch

let isFirstClick = true;
let seconds = 0;
let minutes = 0;
let interval = 0;

function startStopWatch() {
  seconds++;
  if (seconds === 60) {
    minutes++;
    seconds = 0;
  }
  watch.textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

//theme

themeButton.addEventListener('click', function() {
  blackSound.play();
  const isDarkTheme = body.classList.contains("dark");
  const buttons = document.querySelectorAll(".button");
  if (isDarkTheme) {
    body.classList.remove("dark");
    body.classList.add("light");
    main.classList.remove("main_dark");
    main.classList.add("main_light");
    headerTitle.classList.add("header__title_light");
    headerTitle.classList.remove("header__title_dark");
    modalMain.classList.add("modal__main_light");
    modalMain.classList.remove("modal__main_dark");
    modalMainResult.classList.add("modal__main_light");
    modalMainResult.classList.remove("modal__main_dark");
    themeImg.src = "images/sun.svg";
    buttons.forEach(button => {
      button.classList.add("button_light");
      button.classList.remove("button_dark");
    })
  } else {
    body.classList.remove("light");
    body.classList.add("dark");
    main.classList.remove("main_light");
    main.classList.add("main_dark");
    headerTitle.classList.remove("header__title_light");
    headerTitle.classList.add("header__title_dark");
    modalMain.classList.remove("modal__main_light");
    modalMain.classList.add("modal__main_dark");
    modalMainResult.classList.remove("modal__main_light");
    modalMainResult.classList.add("modal__main_dark");
    themeImg.src = "images/moon.svg";
    buttons.forEach(button => {
      button.classList.remove("button_light");
      button.classList.add("button_dark");
    })
  }
});