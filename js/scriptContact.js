/*
Script para envio de email de contato
com validação e acessibilidade.
Utilizando API EmailJS

*/

// Referencia o formulário
const form = document.getElementById('contatoForm');
// Referencia 
const msgSucesso = document.getElementById('msg-sucesso');
// Escutando click no botão de submit - evento
form.addEventListener('submit', async(e) => {
    e.preventDefault();
    limparErros();
    // Captura de erro
    try {
        const dados = {
            titulo: document.getElementById('titulo'),
            email: document.getElementById('email'),
            mensagem: document.getElementById('mensagem')
        };

        // Validação com Exceções
        if (dados.titulo.value.trim() === "") {
            throw { id: 'titulo', msg: "Por favor, informe um título para a mensagem." };
        }
        // Validação de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(dados.email.value.trim())) {
            throw { id: 'email', msg: "Insira um formato de e-mail válido (ex: nome@site.com)." };
        }
        // Validação da mensagem
        if (dados.mensagem.value.trim().length < 10) {
            throw { id: 'mensagem', msg: "A mensagem deve ser um pouco mais longa (mínimo 10 caracteres)." };
        }
        // Envia o formulário usando o Service ID e Template ID
        // Usamos await para que o código "espere" o envio antes de continuar
        try {
            const templateParams = {
                title: dados.titulo.value,
                reply_to: dados.email.value,
                message: dados.mensagem.value
            };

            await emailjs.send('service_holctee', 'template_bbll5b7', templateParams);
            
            // Sucesso
            exibirSucesso("Mensagem enviada com sucesso!");
            form.reset();

        } catch (error) {
            // Se o EmailJS falhar (erro de rede ou API), lançamos um erro para o catch principal
            throw { id: 'global', msg: "Erro ao conectar com o servidor. Tente novamente mais tarde." };
        }

    } catch (erro) {
        // Tratamento de erro com acessibilidade
        if (erro.id === 'global') {
            // Caso o erro não seja em um campo específico, exibimos na div de mensagem
            msgSucesso.style.color = "red";
            msgSucesso.textContent = erro.msg;
            msgSucesso.focus();
        } else {
            exibirErro(erro.id, erro.msg);
        }
    }
});
// Tratamentod e erro com acessibilidade
function exibirErro(campoId, mensagem) {
    const input = document.getElementById(campoId);
    const spanErro = document.getElementById(`erro-${campoId}`);

    input.setAttribute('aria-invalid', 'true');
    spanErro.textContent = mensagem;
    input.focus(); // Acessibilidade: move o foco para o erro
}

function exibirSucesso(mensagem) {
    msgSucesso.textContent = mensagem;
    // O leitor de tela anunciará o texto devido ao role="status" no HTML
}
// Função que limpa os erros
function limparErros() {
    msgSucesso.textContent = "";
    const campos = ['titulo', 'email', 'mensagem'];
    campos.forEach(id => {
        const input = document.getElementById(id);
        input.setAttribute('aria-invalid', 'false');
        document.getElementById(`erro-${id}`).textContent = "";
    });
}