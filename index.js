// 1
let firstWork = document.body.children[0]

firstWork.classList.add("wraper")

let img = document.createElement("img")
img.src = "burger.jpg"
img.style.width = "700px"

let h2 = document.createElement("h2")
h2.classList.add("title")
h2.textContent = "image title"
h2.style.color = "red"
h2.style.fontSize = "30px"


document.body.children[0].appendChild(img)
document.body.children[0].appendChild(h2)









