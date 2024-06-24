const url = "https://dog.ceo/api/breeds/image/random"

const myform = document.getElementById("myform")

// add event listener to the form
const submit = document.getElementById("submit")


submit.addEventListener("click", (event) =>{
    event.preventDefault()

// fetch the data from the API
fetch(url)
    .then(response => response.json())
    .then(data => {
        const img = document.getElementById("image")
        img.src = data.message
        img.style.width = "400px"
        img.style.height = "400px"
        img.style.borderRadius = "20%"
        img.style.border = "5px solid black"
        img.style.boxShadow = "0px 0px 10px black"
        img.style.margin = "40px"
        img.style.textAlign = "center"
    })
    .catch(error => console.error(error))
    .finally(() => {
        myform.reset()
    })

})













