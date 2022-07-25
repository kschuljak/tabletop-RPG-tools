//Dice Roller JS

//sets value range and randomizer for dice
function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
let rollD4 = () => randomNum(1, 4);
let rollD6 = () => randomNum(1, 6);
let rollD8 = () => randomNum(1, 8);
let rollD10 = () => randomNum(1, 10);
let rollD12 = () => randomNum(1, 12);
let rollD20 = () => randomNum(1, 20);
let rollD100 = () => randomNum (1, 100);

//creates placeholder and output for roll result for each dice value

//D4
  function print4(rollD4) {
    var placeholderD4 = document.getElementById('placeholderD4');
    placeholderD4.innerHTML = rollD4;
  }
  var button4 = document.getElementById('btn4');
  button4.onclick = function() {
    var result = rollD4();
    print4(result);
  }

//D6
  function print6(rollD6) {
    var placeholderD6 = document.getElementById('placeholderD6');
    placeholderD6.innerHTML = rollD6;
  }
  var button6 = document.getElementById('btn6');
  button6.onclick = function() {
    var result = rollD6();
    print6(result);
  }

//D8
  function print8(rollD8) {
    var placeholderD8 = document.getElementById('placeholderD8');
    placeholderD8.innerHTML = rollD8;
  }
  var button8 = document.getElementById('btn8');
  button8.onclick = function() {
    var result = rollD8();
    print8(result);
  }

//D10
  function print10(rollD10) {
    var placeholderD10 = document.getElementById('placeholderD10');
    placeholderD10.innerHTML = rollD10;
  }
  var button10 = document.getElementById('btn10');
  button10.onclick = function() {
    var result = rollD10();
    print10(result);
  }

//D12
  function print12(rollD12) {
    var placeholderD12 = document.getElementById('placeholderD12');
    placeholderD12.innerHTML = rollD12;
  }
  var button12 = document.getElementById('btn12');
  button12.onclick = function() {
    var result = rollD12();
    print12(result);
  }

//D20
  function print20(rollD20) {
    var placeholderD20 = document.getElementById('placeholderD20');
    placeholderD20.innerHTML = rollD20;
  }
  var button20 = document.getElementById('btn20');
  button20.onclick = function() {
    var result = rollD20();
    print20(result);
  }

//D100
  function print100(rollD100) {
    var placeholderD100 = document.getElementById('placeholderD100');
    placeholderD100.innerHTML = rollD100;
  }
  var button100 = document.getElementById('btn100');
  button100.onclick = function() {
    var result = rollD100();
    print100(result);
  }
