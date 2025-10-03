let smallCursor = document.querySelector('.smallCursor');
let shadowCursor = document.querySelector('.shadowCursor')

let mouseX;
let mouseY;
let animationId = null;
let timer
document.addEventListener('mousemove', function (eventObj) {
  mouseX = eventObj.clientX;
  mouseY = eventObj.clientY;
  smallCursor.style.left = eventObj.clientX + "px";
  smallCursor.style.top = eventObj.clientY + "px";
  console.log(eventObj.clientX, eventObj.clientY)
  if (!animationId) {
    animateShadowCursor()
  }

  clearTimeout(timer)

  timer = setTimeout(() => {

    cancelAnimationFrame(animationId)
    animationId = null

  }, 2000)
})


function animateShadowCursor() {
  let currentX = parseFloat(shadowCursor.style.left) || 0
  let currentY = parseFloat(shadowCursor.style.top) || 0

  let distanceX = mouseX - currentX;
  let distanceY = mouseY - currentY;

  shadowCursor.style.left = currentX + distanceX * 0.01 + "px"
  shadowCursor.style.top = currentY + distanceY * 0.01 + "px"
  // console.log(mouseX, mouseY)
  animationId = requestAnimationFrame(animateShadowCursor)
}











