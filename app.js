const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
    const request = new XMLHttpRequest()
    request.open("GET", "people.json")
    request.setRequestHeader("Content-type", "application/json")
    request.send()
    request.addEventListener('load', () => {
        const data = JSON.parse(request.response)
        document.querySelector('.name1').innerHTML = data[0].name
        document.querySelector('.age1').innerHTML = data[0].age
        const img1 = document.querySelector('.photo1')
        img1.src = 'images/John.jpg'
        img1.alt = data[0].name
        img1.style.display = 'block'

        document.querySelector('.name2').innerHTML = data[1].name
        document.querySelector('.age2').innerHTML = data[1].age
        const img2 = document.querySelector('.photo2')
        img2.src = 'images/Steve.jpg'
        img2.alt = data[1].name
        img2.style.display = 'block'

        document.querySelector('.name3').innerHTML = data[2].name
        document.querySelector('.age3').innerHTML = data[2].age
        const img3 = document.querySelector('.photo3')
        img3.src = 'images/Light.jpg'
        img3.alt = data[2].name
        img3.style.display = 'block'
    })
})