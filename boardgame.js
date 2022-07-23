const size = 4;
const min = 0;
const max = size - 1;

let isMoved = false;
let score = 0;

let excludeIds = [];

const load = () => {
  let html = '<table border="1">';
  for (let row = 0; row < size; row++) {
    html += '<tr>';
    for (let col = 0; col < size; col++) {
      let id = row + '' + col;
      html += '<td align="center" height="80" width="80" id="' + id + '"></td>';
    }
    html += '</tr>';
  }
  html += '</table>';
  //alert(html);
  document.getElementById('canvas').innerHTML = html;

  let id1 = getId();
  let id2 = '';
  while (true) {
    id2 = getId();
    if (id1 != id2) break;
  }
  //Set initial 2 values
  document.getElementById(id1).innerHTML = '2';
  document.getElementById(id2).innerHTML = '2';

  document.getElementById(id1).style.backgroundColor = getColor(2);
  document.getElementById(id2).style.backgroundColor = getColor(2);

  score = 0;
  document.getElementById('score').innerHTML = score;

  return false;
};

const getRandom = () => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const getId = () => {
  var i = getRandom();
  var j = getRandom();
  return i + '' + j;
};

const up = () => {
  isMoved = false;
  excludeIds = [];
  for (let j = min; j <= max; j++) {
    for (let i = min; i <= max; i++) {
      let id = i + '' + j;
      if (document.getElementById(id).innerHTML != '') {
        moveUp(id);
      }
    }
  }
  if (isMoved) {
    update();
  }
  return false;
};

const moveUp = (id) => {
  if (!id.startsWith(min)) {
    let arr = id.split('');
    let i = parseInt(arr[0]);
    let j = parseInt(arr[1]);
    for (let k = i - 1; k >= min; k--) {
      let nId = k + '' + j;
      if (document.getElementById(nId).innerHTML != '') {
        let val = parseInt(document.getElementById(k + 1 + '' + j).innerHTML);
        let nVal = parseInt(document.getElementById(nId).innerHTML);
        if (val == nVal) {
          if (excludeIds.indexOf(nId) == -1) {
            excludeIds.push(nId);
            document.getElementById(nId).innerHTML = val + nVal;
            document.getElementById(nId).style.backgroundColor = getColor(
              val + nVal
            );
            document.getElementById(k + 1 + '' + j).innerHTML = '';
            document.getElementById(k + 1 + '' + j).style.backgroundColor =
              '#ffffff';
            isMoved = true;
            score += val + nVal;
          }
        }
        break;
      } else {
        document.getElementById(nId).innerHTML = document.getElementById(
          k + 1 + '' + j
        ).innerHTML;
        document.getElementById(nId).style.backgroundColor =
          document.getElementById(k + 1 + '' + j).style.backgroundColor;
        document.getElementById(k + 1 + '' + j).innerHTML = '';
        document.getElementById(k + 1 + '' + j).style.backgroundColor =
          '#ffffff';
        isMoved = true;
      }
    }
  }
  return false;
};

const left = () => {
  isMoved = false;
  excludeIds = [];
  for (let i = min; i <= max; i++) {
    for (let j = min; j <= max; j++) {
      let id = i + '' + j;
      if (document.getElementById(id).innerHTML != '') {
        moveLeft(id);
      }
    }
  }
  if (isMoved) {
    update();
  }
  return false;
};

const moveLeft = (id) => {
  if (!id.endsWith(min)) {
    let arr = id.split('');
    let i = parseInt(arr[0]);
    let j = parseInt(arr[1]);
    for (let k = j - 1; k >= min; k--) {
      let nId = i + '' + k;
      if (document.getElementById(nId).innerHTML != '') {
        let val = parseInt(document.getElementById(i + '' + (k + 1)).innerHTML);
        let nVal = parseInt(document.getElementById(nId).innerHTML);
        if (val == nVal) {
          if (excludeIds.indexOf(nId) == -1) {
            excludeIds.push(nId);
            document.getElementById(nId).innerHTML = val + nVal;
            document.getElementById(nId).style.backgroundColor = getColor(
              val + nVal
            );
            document.getElementById(i + '' + (k + 1)).innerHTML = '';
            document.getElementById(i + '' + (k + 1)).style.backgroundColor =
              '#ffffff';
            isMoved = true;
            score += val + nVal;
          }
        }
        break;
      } else {
        document.getElementById(nId).innerHTML = document.getElementById(
          i + '' + (k + 1)
        ).innerHTML;
        document.getElementById(nId).style.backgroundColor =
          document.getElementById(i + '' + (k + 1)).style.backgroundColor;
        document.getElementById(i + '' + (k + 1)).innerHTML = '';
        document.getElementById(i + '' + (k + 1)).style.backgroundColor =
          '#ffffff';
        isMoved = true;
      }
    }
  }
  return false;
};

const down = () => {
  isMoved = false;
  excludeIds = [];
  for (let i = min; i <= max; i++) {
    for (let j = max; j >= min; j--) {
      let id = j + '' + i;
      if (document.getElementById(id).innerHTML != '') {
        moveDown(id);
      }
    }
  }
  if (isMoved) {
    update();
  }
  return false;
};

const moveDown = (id) => {
  if (!id.startsWith(max)) {
    var arr = id.split('');
    var i = parseInt(arr[0]);
    var j = parseInt(arr[1]);
    for (var k = i + 1; k <= max; k++) {
      var nId = k + '' + j;
      if (document.getElementById(nId).innerHTML != '') {
        var val = parseInt(document.getElementById(k - 1 + '' + j).innerHTML);
        var nVal = parseInt(document.getElementById(nId).innerHTML);
        if (val == nVal) {
          if (excludeIds.indexOf(nId) == -1) {
            excludeIds.push(nId);
            document.getElementById(nId).innerHTML = val + nVal;
            document.getElementById(nId).style.backgroundColor = getColor(
              val + nVal
            );
            document.getElementById(k - 1 + '' + j).innerHTML = '';
            document.getElementById(k - 1 + '' + j).style.backgroundColor =
              '#ffffff';
            isMoved = true;
            score += val + nVal;
          }
        }
        break;
      } else {
        document.getElementById(nId).innerHTML = document.getElementById(
          k - 1 + '' + j
        ).innerHTML;
        document.getElementById(nId).style.backgroundColor =
          document.getElementById(k - 1 + '' + j).style.backgroundColor;
        document.getElementById(k - 1 + '' + j).innerHTML = '';
        document.getElementById(k - 1 + '' + j).style.backgroundColor =
          '#ffffff';
        isMoved = true;
      }
    }
  }
  return false;
};

const right = () => {
  isMoved = false;
  excludeIds = [];
  for (var i = min; i <= max; i++) {
    for (var j = max; j >= min; j--) {
      var id = i + '' + j;
      if (document.getElementById(id).innerHTML != '') {
        moveRight(id);
      }
    }
  }
  if (isMoved == true) {
    update();
  }
  return false;
};

const moveRight = (id) => {
  if (!id.endsWith(max)) {
    var arr = id.split('');
    var i = parseInt(arr[0]);
    var j = parseInt(arr[1]);

    for (var k = j + 1; k <= max; k++) {
      var nId = i + '' + k;
      if (document.getElementById(nId).innerHTML != '') {
        var val = parseInt(document.getElementById(i + '' + (k - 1)).innerHTML);
        var nVal = parseInt(document.getElementById(nId).innerHTML);
        if (val == nVal) {
          if (excludeIds.indexOf(nId) == -1) {
            excludeIds.push(nId);
            document.getElementById(nId).innerHTML = val + nVal;
            document.getElementById(nId).style.backgroundColor = getColor(
              val + nVal
            );
            document.getElementById(i + '' + (k - 1)).innerHTML = '';
            document.getElementById(i + '' + (k - 1)).style.backgroundColor =
              '#ffffff';
            isMoved = true;
            score += val + nVal;
          }
        }
        break;
      } else {
        document.getElementById(nId).innerHTML = document.getElementById(
          i + '' + (k - 1)
        ).innerHTML;
        document.getElementById(nId).style.backgroundColor =
          document.getElementById(i + '' + (k - 1)).style.backgroundColor;
        document.getElementById(i + '' + (k - 1)).innerHTML = '';
        document.getElementById(i + '' + (k - 1)).style.backgroundColor =
          '#ffffff';
        isMoved = true;
      }
    }
  }
  return false;
};

const update = () => {
  let ids = [];
  for (let i = min; i <= max; i++) {
    for (let j = min; j <= max; j++) {
      let id = i + '' + j;
      if (document.getElementById(id).innerHTML == '') {
        ids.push(id);
      }
    }
  }
  id = ids[Math.floor(Math.random() * ids.length)];
  document.getElementById(id).innerHTML = '2';
  document.getElementById(id).style.backgroundColor = getColor(2);

  //Check if no move space available
  let allFilled = true;
  for (let i = min; i <= max; i++) {
    for (let j = min; j <= max; j++) {
      let id = i + '' + j;
      if (document.getElementById(id).innerHTML == '') {
        allFilled = false;
        break;
      }
    }
  }
  //Update score
  document.getElementById('score').innerHTML = score;
  if (allFilled) {
    checkGameOver();
  }
};

const checkGameOver = () => {
  let isOver = true;
  for (let j = min; j <= max; j++) {
    for (let i = min; i <= max - 1; i++) {
      //alert(i+" "+j);
      let val = parseInt(document.getElementById(i + '' + j).innerHTML);
      let nVal = parseInt(document.getElementById(i + 1 + '' + j).innerHTML);
      if (val == nVal) {
        isOver = false;
        break;
      }
    }
  }
  if (isOver == true) {
    for (let i = min; i <= max; i++) {
      for (let j = min; j <= max - 1; j++) {
        //alert(i+" "+j);
        let val = parseInt(document.getElementById(i + '' + j).innerHTML);
        let nVal = parseInt(
          document.getElementById(i + '' + (j + 1)).innerHTML
        );
        if (val == nVal) {
          isOver = false;
          break;
        }
      }
    }
  }
  if (isOver) {
    alert('Game over!');
  }
  return false;
};

const getColor = (val) => {
  let color = '#ffffff';
  switch (val) {
    case 2:
      color = '#F6CED8';
      break;
    case 4:
      color = '#F7BE81';
      break;
    case 8:
      color = '#F3F781';
      break;
    case 16:
      color = '#BEF781';
      break;
    case 32:
      color = '#81F7D8';
      break;
    case 64:
      color = '#58D3F7';
      break;
    case 128:
      color = '#FA58F4';
      break;
    case 256:
      color = '#A901DB';
      break;
    case 512:
      color = '#01DF3A';
      break;
    case 1024:
      color = '#D7DF01';
      break;
    case 2048:
      color = '#D7DF01';
      break;
    default:
      color = '#ffffff';
  }
  return color;
};

if (typeof String.prototype.startsWith != 'function') {
  String.prototype.startsWith = (string) => {
    return this.substring(0, string.length) === string;
  };
}
if (typeof String.prototype.endsWith != 'function') {
  String.prototype.endsWith = (string) => {
    return this.substring(this.length - string.length, this.length) === string;
  };
}
document.onkeydown = function (e) {
  e.preventDefault(); //to prevent scroll of screen
  switch (e.keyCode) {
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
};

load();
