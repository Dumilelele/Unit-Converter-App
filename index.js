/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input-el");
const convertBtn = document.getElementById("btn-el");
const meterEl = document.getElementById("meter-el");
const volumeEl = document.getElementById("volume-el");
const massEl = document.getElementById("mass-el");
const errorEl = document.getElementById("error-el");

convertBtn.addEventListener("click", function () {
  lengthCalc();
  volumeCalc();
  massCalc();
  inputEl.value = "";
});

function lengthCalc() {
  let currentNumber = parseFloat(inputEl.value);
  const meterCalc = currentNumber.toFixed(3);
  const feetCalc = (currentNumber * 3.281).toFixed(3);
  meterEl.textContent = `${currentNumber} meters = ${feetCalc} feet | ${currentNumber} feet = ${meterCalc} meters`;
}

function volumeCalc() {
  let currentNumber = parseFloat(inputEl.value);
  const gallonCalc = (currentNumber * 0.264).toFixed(3);
  const literCalc = (currentNumber / 0.264).toFixed(3);
  volumeEl.textContent = `${currentNumber} liters = ${gallonCalc} gallons | ${currentNumber} gallons = ${literCalc} liters`;
  errorEl.textContent = "";
}

function massCalc() {
  let currentNumber = parseFloat(inputEl.value);
  const poundCalc = (currentNumber * 2.204).toFixed(3);
  const kiloCalc = (currentNumber / 2.204).toFixed(3);
  massEl.textContent = `${currentNumber} kilograms = ${poundCalc} pounds | ${currentNumber} pounds = ${kiloCalc} kilograms`;
  errorEl.textContent = "";
}
