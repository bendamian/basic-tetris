document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".grid");
  let squares = Array.from(document.querySelectorAll(".grid div"));
  const ScoreDisply = document.querySelector("#score-disply");
  const StartBtn = document.querySelector("#start-btn");
  const width = 10;

  //The ltetromino
  const lTetromino = [
    [1, width + 1, width * 2 + 1, 2],
    [width, width + 1, width * 2 + 1, width * 2 + 2],
    [1, width + 1, width * 2 + 1, width * 2],
    [width, width * 2, width * 2 + 1, width * 2 + 2]
  ];

  const tTetromino = [
    [1, width, width + 1, width + 2],
    [1, width + 1, width + 2, width * 2 + 1],
    [width, width + 1, width + 2, width * 2 + 1],
    [1, width, width + 1, width * 2 + 1]
  ];

  const oTetromino = [
    [0, 1, width, width + 1],
    [0, 1, width, width + 1],
    [0, 1, width, width + 1],
    [0, 1, width, width + 1]
  ];

  const iTetromino = [
    [1, width + 1, width * 2 + 1, width * 3 + 1],
    [width, width + 1, width + 2, width + 3],
    [1, width + 1, width * 2 + 1, width * 3 + 1],
    [width, width + 1, width + 2, width + 3]
  ];
  const theTetrominos = [lTetromino, tTetromino, oTetromino, iTetromino];
  let currentPosition = 4;
  let currentLocation = 0;
  // select the tetromino randomly
  let randm = Math.floor(Math.random() * theTetrominos.length);

  let current = theTetrominos[randm][currentLocation];

  // drow the tetrominos
  function drow() {
    current.forEach(index => {
      squares[currentPosition + index].classList.add("tetromino");
    });
  }
// Un drow the tetrominos

function unDrow() {
  current.forEach(index => {
    squares[currentPosition + index].classList.remove("tetromino");
  });
}
  drow();
  
});
