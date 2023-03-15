// For problem 2, change the class name in the html for that paragraph tag to “mess-with-me-paragraph”
// Should be line 14!

let messSpan = document.querySelector(`.mess-with-me`)
messSpan.style.fontSize = "40px"

let messPara = document.querySelector(`.mess-with-me-paragraph`)
messPara.style.background = `green`

let hideimg = document.querySelector(`#hide-me`)
// hideimg.remove()
hideimg.style.display = `none`

let firstdino = document.querySelector(`#triceratops`)
firstdino.style.width = "324px"

messSpan.addEventListener(`click`, function() {
    messSpan.style.color = `orange`
})

firstdino.addEventListener(`click`, function(){
    firstdino.style.border = `10px solid red`
})

let fea = document.querySelector(`#feathers`)
fea.addEventListener(`click`, function(){
    fea.style.opacity = `0.5`
})

let toggle = document.querySelector(`#toggle`)
let row = document.querySelector(`#row`)
toggle.addEventListener(`click`, function(){
    // row.style.backgroundColor = `blue`
    if(row.style.background === ``){
        row.style.background = `blue`
    } else if(row.style.background === `blue`){
        row.style.background = ``
    }
})

let biggify = document.querySelector(`#biggify`)
// biggify.addEventListener(`mousemove`, function(){
//     biggify.style.width = `200px`
// })
biggify.addEventListener(`mouseenter`, function(){
    biggify.style.width = `200px`
})

