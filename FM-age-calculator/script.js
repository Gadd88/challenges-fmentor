let day = document.getElementById('day')
let month = document.getElementById('month')
let year = document.getElementById('year')
let date = new Date()
let boton = document.getElementById('boton')
let anios = document.querySelector('.anios')
let meses = document.querySelector('.meses')
let dias = document.querySelector('.dias')


boton.addEventListener('click', calculateAge)
function calculateAge(){
    let birthDate = new Date(`${month.value}/${day.value}/${year.value}`).getTime() 
    
    let actualDate = date.getTime()
    
    let diferencia = Math.abs(actualDate - birthDate)

    let diasPasadosTotal = Math.floor(diferencia / (1000*3600*24))
    let diasPasados = Math.floor((diferencia - (diasPasadosTotal * 3600))/(1000*3600*24))
    let mesesPasadosTotal = Math.floor(diferencia / (1000*3600*24*30))
    let mesesPasados = diferencia - (mesesPasadosTotal * 3600)
    let aniosPasadosTotal = Math.floor(diferencia / (1000*3600*24*30*12))
    let aniosPasados = diferencia - (aniosPasadosTotal * 3600)

    anios.innerHTML = `${aniosPasados}`
    meses.innerHTML = `${mesesPasados}`
    dias.innerHTML = `${diasPasados}`
}