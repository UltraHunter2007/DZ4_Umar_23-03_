const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')
const btn3 = document.querySelector('.btn3')

btn1.addEventListener('click', () => {
    const request = new XMLHttpRequest()
    request.open("GET", "people.json")
    request.setRequestHeader("Content-type", "application/json")
    request.send()
    request.addEventListener('load', () => {
        const data = JSON.parse(request.response)
        document.querySelector('.name1').innerHTML = data[0].name
        document.querySelector('.age1').innerHTML = data[0].age
        const img = document.querySelector('.photo1')
        img.src = "images/John.jpg"
        img.alt = data[0].name
        img.style.display = 'block'
    })
})

btn2.addEventListener('click', () => {
    const request = new XMLHttpRequest()
    request.open("GET", "people.json")
    request.setRequestHeader("Content-type", "application/json")
    request.send()
    request.addEventListener('load', () => {
        const data = JSON.parse(request.response)
        document.querySelector('.name2').innerHTML = data[1].name
        document.querySelector('.age2').innerHTML = data[1].age
        const img = document.querySelector('.photo2')
        img.src = "images/Steve.jpg"
        img.alt = data[1].name
        img.style.display = 'block'
    })
})

btn3.addEventListener('click', () => {
    const request = new XMLHttpRequest()
    request.open("GET", "people.json")
    request.setRequestHeader("Content-type", "application/json")
    request.send()
    request.addEventListener('load', () => {
        const data = JSON.parse(request.response)
        document.querySelector('.name3').innerHTML = data[2].name
        document.querySelector('.age3').innerHTML = data[2].age
        const img = document.querySelector('.photo3')
        img.src = "images/Light.jpg"
        img.alt = data[2].name
        img.style.display = 'block'
    })
})