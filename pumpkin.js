function getElementbyId(myImg){
  var x = document.body.offsetHeight-element.clientHeight;
  var y = document.body.offsetWidth-element.clientWidth;
  var randomX = Math.floor(Math.random()*x);
  var randomY = Math.floor(Math.random()*y);
  return [randomX,randomY];
}
