console.log('Loaded!');
//moving image

var img = document.getElementById('dragon');
var marginLeft=0;
function moveRight()
{
    marginLeft=marginLeft+10;
    img.style.marginLeft= marginLeft + 'px';
}
img.onclick = function()
{
    var interval=setInterval(moveRight,100);
   
}