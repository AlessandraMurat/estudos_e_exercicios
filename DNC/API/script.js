console.log('API Star Wars')

fetch('https://swapi.dev/api/people/4/')
.then(function(response) {
    return response.json()
})
.then(function(data) {
    console.log(data.name)
    console.log(data.eye_color)
})