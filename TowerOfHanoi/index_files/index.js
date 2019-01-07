const xLargeDisc = document.getElementById("xLargeDisc");
const largeDisc = document.getElementById("largeDisc");
const mediumDisc = document.getElementById("mediumDisc");
const smallDisc = document.getElementById("smallDisc");

const towerOne = document.getElementById("startTower");
const towerTwo = document.getElementById("middleTower");
const towerThree = document.getElementById("endTower");

const towers = [towerOne, towerTwo, towerThree];

towers.forEach(function(tower) {
  tower.addEventListener("click", pickUpDisc);
});
let discInHand = null;
resetGrabCursor();

function pickUpDisc(event) {
  const tower = event.currentTarget;
  if (tower.childElementCount > 0) {
    discInHand = tower.lastElementChild;
    setCursorToMove(discInHand);
    tower.removeChild(discInHand);
    for (let i = 0; i < towers.length; i++) {
      towers[i].removeEventListener("click", pickUpDisc);
      towers[i].addEventListener("click", dropDisc);
    }
  }
}

function dropDisc(event) {
  const tower = event.currentTarget;
  let sizeOfTopDisc = 5;
  if (tower.childElementCount > 0) {
    sizeOfTopDisc = parseInt(tower.lastElementChild.dataset.size);
  }
  if (discInHand.dataset.size < sizeOfTopDisc) {
    tower.appendChild(discInHand);
    discInHand = null;
    for (let i = 0; i < towers.length; i++) {
      towers[i].removeEventListener("click", dropDisc);
      towers[i].addEventListener("click", pickUpDisc);
    }
    resetGrabCursor();
  }
  if (towerTwo.childElementCount === 4 || towerThree.childElementCount === 4) {
    function displayOnPage() {
      const message = document.createTextNode("You Win!");
      //const newP = document.createElement("p");
      const destination = document.getElementById("status");
      //newP.appendChild(message);
      destination.innerText = "You Win!";
    }
    displayOnPage();
  }

  const refreshButton = document.getElementById("refresh");
  refreshButton.addEventListener("click", startOver);

  function startOver() {
    console.log("message");
    location.reload();
  }
}

function resetGrabCursor() {
  towers.forEach(function(tower) {
    if (tower.childElementCount > 0) {
      tower.style.cursor = "grab";
    } else {
      tower.style.cursor = "auto";
    }
  });
}

function setCursorToMove(discInHand) {
  let sizeOfDiscInHand = parseInt(discInHand.dataset.size);
  console.log("size Of Disc in hand: " + sizeOfDiscInHand);
  towers.forEach(function(tower) {
    tower.style.cursor = "move";
    if (
      tower.childElementCount > 0 &&
      sizeOfDiscInHand > parseInt(tower.lastElementChild.dataset.size)
    ) {
      tower.style.cursor = "not-allowed";
    }
  });
}
