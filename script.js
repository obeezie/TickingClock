var currentSecond = new Date().getSeconds();
var currentMinutes = new Date().getMinutes();
var currentHours = new Date().getHours();

console.log(currentSecond, currentMinutes, currentHours);

// function getSecondsSinceStartOfDay() {
//   return (
//     new Date().getSeconds() +
//     new Date().getMinutes() * 60 +
//     new Date().getHours() * 3600
//   );
// }

console.log(new Date().getMinutes());

setInterval(function () {
  // var time = getSecondsSinceStartOfDay();
  var currentSecond = new Date().getSeconds();
  var currentMinutes = new Date().getMinutes();
  var currentHours = new Date().getHours();
  var secondAngle = currentSecond * 360;
  // console.log(currentSecond * 360);
  var seconds = document.getElementById("seconds");
  var hour = document.getElementById("hour");
  var minutes = document.getElementById("minutes");
}, 1000);
