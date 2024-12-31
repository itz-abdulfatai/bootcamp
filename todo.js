const input = document.getElementById('input')
const submit =  document.getElementById('btn')
const list = document.getElementById('list')



submit.addEventListener('click', function () {
    const i = input.value 

    list.insertAdjacentHTML('beforeend', '<li>' + i + '</li>' )


})

const myObj = {
    myName: 'abdul is my name',
    myAge: 23,
    myHobbies: ['reading', 'painting', 'cooking'],
    myAddress: {
        street: '123 Main St',
        city: 'New York',
        myState: 'NY'
    },
    myFunction: function() {
        console.log('I am a function')
    }

}

