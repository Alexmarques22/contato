
const meuFormulario = document.getElementById('meuFormulario')

meuFormulario.addEventListener('submit', function (event) {
    event.preventDefault()



    var nome =document.getElementById('nome').value
    var telefone =document.getElementById('telefone').value
    var email =document.getElementById('email').value
    var assunto =document.getElementById('assunto').value
    var mensagem =document.getElementById('mensagem').value


    var nomecodificado = encodeURIComponent(nome)
    var telefonecodificado = encodeURIComponent(telefone)
    var emailcodificado = encodeURIComponent(email)
    var assuntocodificado = encodeURIComponent(assunto)
    var mensagemcodificado = encodeURIComponent(mensagem)

    window.location.href = 'envio.html' +
        '?nome=' + nomecodificado +
        '&telefone=' + telefonecodificado +
        '&email=' + emailcodificado +
        '&assunto=' + assuntocodificado +
        '&mensagem=' + mensagemcodificado 



})