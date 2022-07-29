const min = 0;
const size = 4;
let max = size - 1;
let exclude = [];
let score = 0;

const getColor = (value) => {
  let color;
  switch (value) {
    case 0:
      color = '#FFFFFF';
      break;
    case 2:
      color = '#56367d';
      break;
    case 4:
      color = '#526cff';
      break;
    case 8:
      color = '#63ffff';
      break;
    case 16:
      color = '#52ff02';
      break;
    case 32:
      color = '#a0ff27';
      break;
    case 64:
      color = '#fbeb01';
      break;
    case 128:
      color = '#ff9604';
      break;
    case 256:
      color = '#ff9604';
      break;
    case 526:
      color = '#ff4e01';
      break;
    case 1024:
      color = '#ff2203';
      break;
    case 2048:
      color = '#ff0803';
      break;
    default:
      color = '#FFFFFF';
  }
  return color;
};

const createCellOnField = () => {
  for (let i = 0; i <= max; i++) {
    for (let j = 0; j <= max; j++) {
      document
        .getElementById('canvas')
        .appendChild(document.createElement('div')).id = `${i}${j}`;
    }
  }
  for (let i = 0; i <= max; i++) {
    for (let j = 0; j <= max; j++) {
      document.getElementById(`${i}${j}`).classList.add('cell');
    }
  }
};

const setScore = () => {
  document.getElementById('score').innerHTML = score;
};

const randomSpawn = () => {
  let i, j;
  i = Math.floor(Math.random() * size - min);
  j = Math.floor(Math.random() * size - min);
  return `${i}${j}`;
};

const initializeSpawn = () => {
  let firstSpawn = randomSpawn();
  let secondSpawn = randomSpawn();
  while (firstSpawn === secondSpawn) {
    secondSpawn = randomSpawn();
  }

  document.getElementById(`${firstSpawn}`).innerHTML = '2';
  document.getElementById(`${secondSpawn}`).innerHTML = randomValue();
};

const randomValue = () => {
  const value = ['2', '4'];
  let randomValue = value[Math.floor(Math.random() * 2)];
  return randomValue;
};

const setColorCellOnField = () => {
  for (let i = 0; i <= max; i++) {
    for (let j = 0; j <= max; j++) {
      document.getElementById(`${i}${j}`).style.backgroundColor = getColor(
        parseInt(document.getElementById(`${i}${j}`).innerHTML)
      );
    }
  }
};
const load = () => {
  createCellOnField();
  setScore();
  initializeSpawn();
  setColorCellOnField();
};

const getEventKeydown = (event) => {
  event.preventDefault();
  switch (event.keyCode) {
    case 37:
      console.log('left');
      break;
    case 38:
      console.log('up');
      break;
    case 39:
      console.log('right');
      break;
    case 40:
      console.log('down');
      break;
  }
};

load();
