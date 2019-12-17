document.addEventListener("DOMContentLoaded", function(){
  createGrid()
  renderBot(currentPosition)
let list = document.getElementById("moves-container")
document.addEventListener("keydown", function(e) {
console.log("pressed button",e)
let newLi = document.createElement('li')
  switch (e.key) {
    case "ArrowUp":
      newLi.innerText = "Up"
      list.appendChild(newLi)
        break;
    case "ArrowDown":
        newLi.innerText = "Down"
        list.appendChild(newLi)
      break;
    case "ArrowLeft":
        newLi.innerText = "Left"
        list.appendChild(newLi)
      break;
    case "ArrowRight":
        newLi.innerText = "Right"
        list.appendChild(newLi)
      break;
    default:
      null
      break;
     }
 })


let moveButton = document.getElementById('move-button')

let moveRobot = moveButton.addEventListener("click", function () {
  list = document.getElementById("moves-container")
  let robot = document.getElementById("robot")
  let firstLi = list.getElementsByTagName('li')[0]
  console.log(firstLi)
  console.log("firstLi.innerText: ", firstLi.innerText)
  let board = document.getElementById("board")

  let robotX = parseInt(robot.dataset.x)
  let robotY = parseInt(robot.dataset.y)

  console.log("Robot X: ", robotX)
  console.log("Robot Y: ", robotY)
  
  let newLi = document.createElement('li')


  switch (firstLi.innerText) {
    case "Down":
      console.log(firstLi.innerText)
      if (robotY < 9) {
        newRobot = document.querySelector(`[data-x='${robotX}'][data-y='${robotY + 1}']`)
        robot.id = ''
        newRobot.id = "robot"
        firstLi.remove() 
       } else {
         firstLi.remove()
       }

    break;
  
    case "Right":
        if (robotX < 9) {
          newRobot = document.querySelector(`[data-x='${robotX + 1}'][data-y='${robotY}']`)
          robot.id = ''
          newRobot.id = "robot"
          firstLi.remove() 
         } else {
           firstLi.remove()
         }
  
    break;
  
    case "Up":
        if (robotY > 0) {
          newRobot = document.querySelector(`[data-x='${robotX}'][data-y='${robotY - 1}']`)
          robot.id = ''
          newRobot.id = "robot"
          firstLi.remove() 
         } else {
           firstLi.remove()
         }
    break;

    case "Left":
        if (robotX > 0) {
          newRobot = document.querySelector(`[data-x='${robotX - 1}'][data-y='${robotY}']`)
          robot.id = ''
          newRobot.id = "robot"
          firstLi.remove() 
         } else {
           firstLi.remove()
         }
    break;
  
    default:
      null
      break;
  }
})

})