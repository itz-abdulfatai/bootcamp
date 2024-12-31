//  input
// text
//  button

const input = document.getElementById('my-input')

const text = document.getElementById('text')

let button = document.getElementById('submit-btn')


console.log(input)
console.log(text)
console.log(button)

button.addEventListener('click', function () {
    const content = input.value
    const currentValue = text.innerText

    text.innerText = currentValue + content


})