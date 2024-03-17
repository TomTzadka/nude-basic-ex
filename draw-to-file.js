import { utilService } from "./services/util.service.js";

drawSquareToFile()

function drawSquareToFile() {
  const str = getSquare(utilService.getRandomIntInclusive(3, 20));
  utilService.drawToFile(str).then(() => {
    setTimeout(drawSquareToFile, 200);
  });
}

function getSquare(size) {
  var str = "*".repeat(size) + "\n";
  for (let i = 0; i < size; i++) {
    str += "*" + " ".repeat(size - 2) + "*\n";
  }
  str += "*".repeat(size) + "\n";
  console.log(str);
  return str;
}


