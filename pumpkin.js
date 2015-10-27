function getRandomPosition(element) {
  var x = document.body;
  var y = document.body;
  var randomX = Math.floor(Math.random()*x);
  var randomY = Math.floor(Math.random()*y);
  return[randomX, randomY];
}
