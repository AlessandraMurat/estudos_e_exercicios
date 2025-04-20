function toClick () {
    var principal = window.document.getElementById('principal')
    principal.style.backgroundColor = 'rgb(12, 112, 242)'
    principal.innerHTML = 'Clicou!'
    principal.style.color = 'white'
    
}
function enter () {
    var principal = window.document.getElementById('principal')
    principal.style.backgroundColor = 'yellow'
    principal.innerHTML = 'Entrou!'
    
}
function exit () {
    var principal = window.document.getElementById('principal')
    principal.style.backgroundColor = 'red'
    principal.innerHTML = 'Saiu!'
    
}
