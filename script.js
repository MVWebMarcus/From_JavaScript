// Adiciona um ouvinte de evento para o envio do formulário
document.getElementById('formulario').addEventListener('submit', function(event) {
    // Impede que o formulário seja enviado imediatamente
    event.preventDefault();

    // Validação de entrada simples
    if (document.getElementById('nome').value == '') {
        alert('Por favor, digite seu nome.');
        return;
    }

    if (document.getElementById('email').value == '') {
        alert('Por favor, digite seu endereço de e-mail.');
        return;
    }

    if (document.getElementById('telefone').value == '') {
        alert('Por favor, digite seu número de telefone.');
        return;
    }

    // Se a validação for bem-sucedida, envie o formulário
    document.getElementById('botao-enviar').disabled = true;
    document.getElementById('botao-enviar').innerHTML = 'Enviando...';
    document.getElementById('formulario').submit();
});