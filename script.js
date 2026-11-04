// get the next and previous buttons
let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

// add event listeners to the buttons
next.addEventListener('click', function () {
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

// add event listener to the previous button
prev.addEventListener('click', function () {
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1])
})