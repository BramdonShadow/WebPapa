const inico = document.querySelector('.iniclink')
const ej = document.querySelector('.ejLink')
const final = document.querySelector('.finallink')
const contPort = document.querySelector('.contPort')
const contacSec3 = document.querySelector('.contacSec3')
const diricArea = document.querySelector('.diricArea')

const article = document.querySelector('article')
const footer = document.querySelector('footer')


inico.addEventListener('click', () => {
    article.scrollIntoView({block: "center", behavior: "smooth"})
})
ej.addEventListener('click', () => {
    article.scrollIntoView({block: "center", behavior: "smooth"})
})
final.addEventListener('click', () => {
    footer.scrollIntoView({block: "center", behavior: "smooth"})
})
contPort.addEventListener('click', () => {
    footer.scrollIntoView({block: "center", behavior: "smooth"})
})
contacSec3.addEventListener('click', () => {
    footer.scrollIntoView({block: "center", behavior: "smooth"})
})
diricArea.addEventListener('click', () => {
    article.scrollIntoView({block: "center", behavior: "smooth"})
})

function SendFormGoogleSheets (){
    $.ajax({
      url:'https://script.google.com/macros/s/AKfycbzIeF5mV0p3gX36Z0zw0zCZKifl4Dth8WRNae6XrcHHtwFxM2CWQtkl-19xN1odjOwZ/exec',
      type:'post',
      data:$("#my-google-sheet").serializeArray(),
      success: function(){
        alert("Registro exitoso")
      },
      error: function(){
        alert("Error en el Registro :(")
      }
    });
}