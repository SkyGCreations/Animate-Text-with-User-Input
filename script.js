"use strict";
const backColor = document.querySelector(".changecolor");
const paraType = document.querySelector(".p");

let decadeYear = document.getElementById("decadeyear").value;
let birthYear = 2021 - Number(decadeYear);
let text = ``;
let i = 0;
console.log(birthYear);

// RESET FUNCTION FOR ENTERING AGE
function restart() {
  birthYear = 0; // RESET BIRTHYEAR
  backColor.style.backgroundColor = "#fcffff"; // RESET COLOR TO WHITE
  document.getElementById("p").innerHTML = ""; // RESET TEXT TO EMPTY STRING
  document.getElementById("decadeyear").value = ""; // RESET INPUT VALUE TO EMPTY
  text = ``; // RESET TEXT TO EMPTY TEMPLATE LITERAL
  i = 0; // 
  document.getElementById("decadeyear").style.fontWeight = "normal";
  document.getElementById("decadeyear").style.backgroundColor = "#ffffff";
}

function Calculate() { // THIS FUNCTION IS INVOKED WHEN THE CLICKME BUTTON IS PRESSED
  decadeYear = document.getElementById("decadeyear").value;
  console.log((birthYear = 2021 - Number(decadeYear)));
  console.log((text = `you were born in the year ${birthYear}`));

  

  if (decadeYear === decadeYear) {
    decadeYear = document.getElementById("decadeyear").style.fontWeight =
      "bolder";
    decadeYear = document.getElementById("decadeyear").style.backgroundColor =
      "#FADDDD";
  }
   //console.log(birthYear);
  if (birthYear >= 2000 && birthYear <= 2020) {  // IF CONDITIONS
    backColor.style.backgroundColor = "#fc7f03";
    if (i < text.length) {
      console.log((document.getElementById("p").innerHTML += text.charAt(i)));
      i++;
      setTimeout(Calculate, 100);
    }
  } else if (birthYear >= 1970 && birthYear <= 2000) {
    backColor.style.backgroundColor = "#9a5df5";
    if (i < text.length) {
      document.getElementById("p").innerHTML += text.charAt(i);
      ++i;
      setTimeout(Calculate, 100);
    }
    console.log(`${text.charAt(i)}`);
  }
}
