(function() {

var colors = ["#4BDB32", "#2170ef", "#f7ff28", "#f98304", "#f73f27", "#a520d6"]
var idx = 0;
var timer;

  function changeColor() {
    css('color', colors[idx++ % colors.length]);
    idx = 0;
    changeColor();
    timer = setInterval(changeColor, 250);

  }
}());