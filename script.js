var currentSecond = new Date().getSeconds();
var currentMinutes = new Date().getMinutes();
var currentHours = new Date().getHours();

//Sets starting time
var seconds = document.getElementById("seconds");
var hour = document.getElementById("hour");
var minutes = document.getElementById("minutes");
var secondAngle = (currentSecond - 30) * 6;
var hourAngle = (12 - 30) * 30;
var minuteAngle = (currentMinutes - 30) * 6;
seconds.style.setProperty("transform", `rotate(${secondAngle}deg)`);
hour.style.setProperty("transform", `rotate(${hourAngle}deg)`);
minutes.style.setProperty("transform", `rotate(${minuteAngle}deg)`);

setInterval(function () {
  // var time = getSecondsSinceStartOfDay();
  var currentSecond = new Date().getSeconds();
  var currentMinutes = new Date().getMinutes();
  var currentHours = new Date().getHours();
  var secondAngle = (currentSecond - 30) * 6;
  var hourAngle = (currentHours - 30) * 30;
  var minuteAngle = (currentMinutes - 30) * 6;
  // console.log(currentSecond * 360);
  var seconds = document.getElementById("seconds");
  var hour = document.getElementById("hour");
  var minutes = document.getElementById("minutes");
  seconds.style.setProperty("transform", `rotate(${secondAngle}deg)`);
  hour.style.setProperty("transform", `rotate(${hourAngle}deg)`);
  minutes.style.setProperty("transform", `rotate(${minuteAngle}deg)`);
}, 1000);
