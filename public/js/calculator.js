
// const error1 = +document.querySelector(".error1").value;
// const button = document.querySelector("#button");
// const error = +document.querySelector(".error").value;
  //   for (let i = 1; i <= 10; i++) {
  //     if (i !== room) {
  //       roomFinal = roomFinal + 100;
  //      }
  //     else {
  //       roomFinal = 100;
  //       i = 20;
  //     }
  //   }
  // }
  // button.addEventListener(click,todo())
   //console.log(select);


function todo() {
const sqft = +document.querySelector("#sqft").value;
const room = +document.querySelector("#room").value;
const select = document.querySelector("#select").value;
const paint = document.querySelector("#paint").value;
  const ans = document.querySelector("#ans");
  const box1 = document.querySelector("#box1");
  const box2 = document.querySelector("#box2");
  const box3 = document.querySelector("#box3");
  
  if (sqft == 0) {
    box1.style.display = "flex";
    ans.style.display = "none";
  } else {
    box1.style.display = "none";
    ans.style.display = "flex";
  }
   if (room == 0) {
     box2.style.display = "flex";
     ans.style.display = "none";
  } else {
     box2.style.display = "none";
     ans.style.display = "flex";
  }
  // (select.includes("exterior") ? box3.style.display = "flex" : select.style.display = "none");
console.log(select);
  let roomFinal = 0;
  switch (room) {
    case 1: roomFinal = 0;
      break;
    case 2: roomFinal = 200;
      break;
    case 3: roomFinal = 300;
      break;
    case 4: roomFinal = 400;
      break;
    case 5: roomFinal = 500;
      break;
  }
  
  let intExt;
  (select.includes("Exterior") ? intExt = 300 : intExt = 0);

  let paintVal;
(paint.includes("freshPaint") ? paintVal = 300 : paintVal = 0);

  let sqftFinal;
  if (sqft <= 100) {
    sqftFinal = 3;
  }
  else if (sqft > 100 && sqft <= 200) {
    sqftFinal = 6;
  }
  else if (sqft > 200 && sqft <= 300) {
    sqftFinal = 9;
  }
  else if (sqft > 300 && sqft <= 400) {
    sqftFinal = 12;
  }
  else if (sqft > 400 && sqft <= 500) {
    sqftFinal = 15;
  }
  else if (sqft > 500 && sqft <= 600) {
    sqftFinal = 18;
  }
  else if (sqft > 600 && sqft <= 700) {
    sqftFinal = 21;
  }
  else if (sqft > 700 && sqft <= 800) {
    sqftFinal = 24;
  }
  else if (sqft > 800 && sqft <= 900) {
    sqftFinal = 27;
  }
  else if (sqft > 1000 ) {
    sqftFinal = 30;
  }
  else {
    // error.innerHTML = "Enter a value number";
  } 
  let cost;
  switch (sqftFinal) {
    case 3: cost = 450 + intExt + paintVal + roomFinal;
      break;
    case 6: cost = 900 + intExt + paintVal + roomFinal;
      break;
    case 9: cost = 1350 + intExt + paintVal + roomFinal;
      break;
    case 12: cost = 1800 + intExt + paintVal + roomFinal;
      break;
    case 15: cost = 2250 + intExt + paintVal + roomFinal;
      break;
    case 18: cost = 2650 + intExt + paintVal + roomFinal;
      break;
    case 21: cost = 2100 + intExt + paintVal + roomFinal;
      break;
    case 24: cost = 2550 + intExt + paintVal + roomFinal;
      break;
    case 27: cost = 3000 + intExt + paintVal + roomFinal;
      break;
    case 30: cost = 3450 + intExt + paintVal + roomFinal;
      break;
  }
  ans.innerHTML = `<h3>Total No of sqft = ${sqft}</h3>
  <h3>Needed paint ${sqftFinal} lites</h3> <h3>It will cost around ${cost} </h3> <h3>It will variable depends on the colour you choose`
  }
 
  // for (let i = 0; i <= sqftFinal; i++) {
  //   if (sqftFinal == i) {
  //     console.log(cost)
  //   } else {
  //     cost = cost + 200;
  //     console.log("adsgkhj");
  //     console.log(sqftFinal);
  //     // console.log(sri);
  //   }
  //   // switch (sqftFinal) {
  //   //   case i: cost = sri;
  //   //     break;
  //   // }









  

  



