let num = 0;
let length = document.getElementById("length");
let volume = document.getElementById("volume");
let mass = document.getElementById("mass");
let inputEl = document.getElementById("input-el");

function calc() {
  num = inputEl.value;
  convertMeters();
  convertLiters();
  convertKilo();
}

function convertMeters() {
  let meters = (num * 0.3048).toFixed(2);
  let feet = (num * 3.2808).toFixed(2);
  length.textContent = `${num} meters = ${feet} feet | ${num} feet = ${meters} meters`;
}

function convertLiters() {
  let liters = (num * 0.264172).toFixed(2);
  let gallons = (num * 3.78541).toFixed(2);
  volume.textContent = `${num} liters = ${liters} gallons | ${num} gallons = ${gallons} liters`;
}

function convertKilo() {
  let kilos = (num * 2.20462).toFixed(2);
  let pounds = (num * 0.453592).toFixed(2);
  mass.textContent = `${num} kilos = ${kilos} pounds | ${num} pounds = ${pounds} kilos`;
}