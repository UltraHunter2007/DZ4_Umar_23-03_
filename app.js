const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')
const btn3 = document.querySelector('.btn3')

function loadData(button, i, imageSrc, info) {
    const request = new XMLHttpRequest()
    request.open("GET", "people.json")
    request.setRequestHeader("Content-type", "application/json")
    request.send()
    request.addEventListener('load', () => {
        const data = JSON.parse(request.response)
        document.querySelector(`.name${info}`).innerHTML = data[i].name
        document.querySelector(`.age${info}`).innerHTML = data[i].age
        const img = document.querySelector(`.photo${info}`)
        img.src = imageSrc
        img.alt = data[i].name
        img.style.display = 'block'
    })
}

btn1.addEventListener('click', () => {
    loadData(btn1, 0, "images/John.jpg", 1)
})

btn2.addEventListener('click', () => {
    loadData(btn2, 1, "images/Steve.jpg", 2)
})

btn3.addEventListener('click', () => {
    loadData(btn3, 2, "images/Light.jpg", 3)
})