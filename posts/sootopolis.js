function findSolutions(puzzle) {
  const start = [puzzle.length - 1, (puzzle[0].length - 1) / 2];

  const solutions = [];
  traverse(puzzle, start, [], solutions);

  return solutions;
}

function traverse(board, place, path, solutions) {
  const newBoard = [];
  board.forEach(row => newBoard.push([].concat(row)));
  newBoard[place[0]][place[1]] = 1;

  if (validate(newBoard, place))
    solutions.push(path);

  const newPlaces = [], newSteps = [];

  if (place[0] > 0 && newBoard[place[0] - 1][place[1]] !== 1) {
    newPlaces.push([place[0] - 1, place[1]]);                     // check space above
    newSteps.push('up');
  }

  if (place[1] > 0 && newBoard[place[0]][place[1] - 1] !== 1) {
    newPlaces.push([place[0], place[1] - 1]);                     // check space to the left
    newSteps.push('left');
  }

  if (place[1] + 1 < newBoard[0].length && newBoard[place[0]][place[1] + 1] !== 1) {
    newPlaces.push([place[0], place[1] + 1]);                     // check space to the right
    newSteps.push('right');
  }

  if (place[0] + 1 < newBoard.length && newBoard[place[0] + 1][place[1]] !== 1) {
    newPlaces.push([place[0] + 1, place[1]]);                     // check space below
    newSteps.push('down');
  }

  for (let i = 0; i < newPlaces.length; i++)
    traverse(newBoard, newPlaces[i], path.concat(newSteps[i]), solutions);
}

function validate(board, place) {
  for (let row = 0; row < board.length; row++)
    if (board[row].includes(0)) return false;

  return place[0] === 0 && place[1] === (board[0].length - 1) / 2;
}

const firstPuzzle = [
  [0, 0, 1],
  [0, 0, 0],
  [1, 0, 0],
];

const secondPuzzle = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0],
];

const thirdPuzzle = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
];

const firstEmeraldPuzzle = [
  [1, 0, 0],
  [0, 0, 0],
  [0, 0, 1],
];

const secondEmeraldPuzzle = [
  [0, 0, 0, 0, 0, 0, 0,],
  [0, 1, 0, 0, 0, 1, 0,],
  [0, 0, 0, 0, 0, 0, 0,],
];

const thirdEmeraldPuzzle = [
  [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0,],
  [0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0,],
  [0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0,],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0,],
];
