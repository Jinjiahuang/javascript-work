var boxes = document.querySelectorAll(".box");
var leftMargin1 = 0;
var leftMargin2 = 0;
var leftMargin3 = 0;
var leftMargin4 = 0;
var leftMargin5 = 0;

boxes[0].addEventListener("click", boxClickedA);
boxes[1].addEventListener("click", boxClickedB);
boxes[2].addEventListener("click", boxClickedC);
boxes[3].addEventListener("dblclick", boxClickedD);
boxes[4].addEventListener("click", boxClickedE);

boxes[0].style.backgroundColor = "green";

function boxClickedA() {
    console.log("Hey, box clicked!");
    leftMargin1 += 5;
    boxes[0].style.marginLeft = leftMargin1 + "px";
}


boxes[1].style.backgroundColor = "purple";

function boxClickedB() {
    console.log("Hey, box clicked!");
    leftMargin2 += 10;
    boxes[1].style.marginLeft = leftMargin2 + "px";
}


boxes[2].style.backgroundColor = "#191919";

function boxClickedC() {
    console.log("Hey, box clicked!");
    leftMargin3 += 15;
    boxes[2].style.marginLeft = leftMargin3 + "px";
}


boxes[3].style.backgroundColor = "blanchedalmond";

function boxClickedD() {
    console.log("Hey, box clicked!");
    leftMargin4 += 20;
    boxes[3].style.marginLeft = leftMargin4 + "px";
}


function boxClickedE() {
    console.log("Hey, box clicked!");
    leftMargin5 += 25;
    boxes[4].style.marginTop = leftMargin5 + "px";
}


