const min = 0;
const size = 4;
let max = size - 1;
let exclude = [];
let score = 0;
let isMove = false;

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

const moveUp = (id) => {
  let i = parseInt(id[0]);
  let j = parseInt(id[1]);
  if (i === min) {
    console.log(`not up = ${i}${j}`);
    return false;
  } else {
    for (let move = i - 1; move >= min; move--) {
      if (document.getElementById(`${move}${j}`).innerHTML === '') {
        document.getElementById(`${move}${j}`).innerHTML =
          document.getElementById(`${i}${j}`).innerHTML;
        document.getElementById(`${i}${j}`).innerHTML = '';
      } else if (
        document.getElementById(`${move}${j}`).innerHTML ===
        document.getElementById(`${i}${j}`).innerHTML
      ) {
        let change =
          parseInt(document.getElementById(`${move}${j}`).innerHTML) +
          parseInt(document.getElementById(`${i}${j}`).innerHTML);
        if (
          exclude.indexOf(
            document.getElementById(`${move}${j}`).innerHTML === -1
          )
        ) {
          document.getElementById(`${move}${j}`).innerHTML = `${change}`;
          document.getElementById(`${i}${j}`).innerHTML = '';
          exclude.push(`${change}`);
        }
      }
      console.log(`exclude = ${exclude}`);
      console.log(`up = ${i}${j} to ${move}${j}`);
      i--;
    }
    setColorCellOnField();
  }
};

const up = () => {
  exclude = [];
  for (let i = min; i <= max; i++) {
    for (let j = min; j <= max; j++) {
      console.log(`send = ${i}${j}`);
      moveUp(`${i}${j}`);
    }
  }
};

const moveDown = (id) => {
  let i = parseInt(id[0]);
  let j = parseInt(id[1]);
  if (i === max) {
    console.log(`not down = ${i}${j}`);
    return (isMove = false);
  } else {
    for (let move = i + 1; move <= max; move++) {
      if (document.getElementById(`${move}${j}`).innerHTML === '') {
        document.getElementById(`${move}${j}`).innerHTML =
          document.getElementById(`${i}${j}`).innerHTML;
        document.getElementById(`${i}${j}`).innerHTML = '';
      } else if (
        document.getElementById(`${move}${j}`).innerHTML ===
        document.getElementById(`${i}${j}`).innerHTML
      ) {
        let change =
          parseInt(document.getElementById(`${move}${j}`).innerHTML) +
          parseInt(document.getElementById(`${i}${j}`).innerHTML);
        if (
          exclude.indexOf(document.getElementById(`${move}${j}`).innerHTML) ===
          -1
        ) {
          document.getElementById(`${move}${j}`).innerHTML = `${change}`;
          document.getElementById(`${i}${j}`).innerHTML = '';
          exclude.push(`${change}`);
        }
      }
      console.log(`exclude = ${exclude}`);
      console.log(`down = ${i}${j} to ${move}${j}`);
      i++;
    }
    setColorCellOnField();
  }
};

const down = () => {
  exclude = [];
  for (let i = max; i >= min; i--) {
    for (let j = min; j <= max; j++) {
      console.log(`send = ${i}${j}`);
      moveDown(`${i}${j}`);
    }
  }
};

const moveLeft = (id) => {
  let i = parseInt(id[0]);
  let j = parseInt(id[1]);
  if (j === min) {
    console.log(`not left = ${i}${j}`);
    return false;
  } else {
    for (let move = j - 1; move >= min; move--) {
      if (document.getElementById(`${i}${move}`).innerHTML === '') {
        document.getElementById(`${i}${move}`).innerHTML =
          document.getElementById(`${i}${j}`).innerHTML;
        document.getElementById(`${i}${j}`).innerHTML = '';
      } else if (
        document.getElementById(`${i}${move}`).innerHTML ===
        document.getElementById(`${i}${j}`).innerHTML
      ) {
        let change =
          parseInt(document.getElementById(`${i}${move}`).innerHTML) +
          parseInt(document.getElementById(`${i}${j}`).innerHTML);
        if (
          exclude.indexOf(document.getElementById(`${i}${move}`).innerHTML) ===
          -1
        ) {
          document.getElementById(`${i}${move}`).innerHTML = `${change}`;
          document.getElementById(`${i}${j}`).innerHTML = '';
          exclude.push(`${change}`);
        }
      }
      console.log(`exclude = ${exclude}`);
      console.log(`left = ${i}${j} to ${i}${move}`);
      j--;
    }
    setColorCellOnField();
  }
};

const left = () => {
  exclude = [];
  for (let i = min; i <= max; i++) {
    for (let j = min; j <= max; j++) {
      console.log(`send = ${i}${j}`);
      moveLeft(`${i}${j}`);
    }
  }
};
const moveRight = (id) => {
  let i = parseInt(id[0]);
  let j = parseInt(id[1]);
  if (j === max) {
    console.log(`not Right = ${i}${j}`);
    return false;
  } else {
    for (let move = j + 1; move <= max; move++) {
      if (document.getElementById(`${i}${move}`).innerHTML === '') {
        document.getElementById(`${i}${move}`).innerHTML =
          document.getElementById(`${i}${j}`).innerHTML;
        document.getElementById(`${i}${j}`).innerHTML = '';
      } else if (
        document.getElementById(`${i}${move}`).innerHTML ===
        document.getElementById(`${i}${j}`).innerHTML
      ) {
        let change =
          parseInt(document.getElementById(`${i}${move}`).innerHTML) +
          parseInt(document.getElementById(`${i}${j}`).innerHTML);
        if (
          exclude.indexOf(document.getElementById(`${i}${move}`).innerHTML) ===
          -1
        ) {
          document.getElementById(`${i}${move}`).innerHTML = `${change}`;
          document.getElementById(`${i}${j}`).innerHTML = '';
          exclude.push(`${change}`);
        }
      }
      console.log(`exclude = ${exclude}`);
      console.log(`right = ${i}${j} to ${i}${move}`);
      j++;
    }
    setColorCellOnField();
  }
};

const right = () => {
  exclude = [];
  for (let i = min; i <= max; i++) {
    for (let j = max; j >= min; j--) {
      console.log(`send = ${i}${j}`);
      moveRight(`${i}${j}`);
    }
  }
};

document.addEventListener('keydown', (event) => {
  event.preventDefault();
  switch (event.keyCode) {
    case 37:
      left();
      break;
    case 38:
      up();
      break;
    case 39:
      right();
      break;
    case 40:
      down();
      break;
  }
});

load();
