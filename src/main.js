/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function length(arr) {
  return Math.floor(Math.random() * arr.length);
}

window.onload = function() {
  let number = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "A",
    "J",
    "K"
  ];

  let sig = [
    '<p class="text-danger">&#9830;</p>',
    '<p class="text-danger">&#9829;</p>',
    '<p class="text-body">&#9827;</p>',
    '<p class="text-body">&#9824;</p>'
  ];

  var rand = length(number);
  var rand2 = length(sig);
  document.querySelector("#quote2").innerHTML = number[rand];
  document.querySelector("#quote1").innerHTML = sig[rand2];
  document.querySelector("#quote3").innerHTML = sig[rand2];
};
