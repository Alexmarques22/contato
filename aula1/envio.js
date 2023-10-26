var paramentro = new URLSearchParams (window.location.search)

nome = paramentro.get('nome')
telefone = paramentro.get('telefone')
email = paramentro.get('email')
assunto = paramentro.get('assunto')
mensagem = paramentro.get('mensagem')

elementoNome = document.createElement('h1')
elementoNome.textContent = nome


document.getElementById('spanNome').innerHTML = '<h1>'+ nome + '<h1>';
document.getElementById('spanTelefone').innerHTML = '<h1>'+nome+'<h1>';
document.getElementById('spanEmail').innerHTML = '<h1>'+ email +'<h1>';
document.getElementById('spanAssunto').innerHTML = '<h1>'+ assunto +'<h1>';
document.getElementById('spanMensagem').innerHTML = '<h1>'+ mensagem +'<h1>';