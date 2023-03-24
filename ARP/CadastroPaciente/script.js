const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  // Obter os valores dos campos do formulário
  const nome = document.querySelector('#nome').value;
  const dataNasc = document.querySelector('#data-nasc').value;
  const cpf = document.querySelector('#cpf').value;
  const endereco = document.querySelector('#endereco').value;
  const telefone = document.querySelector('#telefone').value;
  const email = document.querySelector('#email').value;
  const convenio = document.querySelector('#convenio').value;
  
  // Validar os campos do formulário
  if (!nome || !dataNasc || !cpf || !endereco || !telefone || !email) {
    alert('Por favor, preencha todos os campos obrigatórios.');
    return;
  }
  
  // Criar objeto paciente com os valores do formulário
  const paciente = {
    nome,
    dataNasc,
    cpf,
    endereco,
    telefone,
    email,
    convenio
  };
  
  // Limpar os campos do formulário
  form.reset();
  
  // Enviar o objeto paciente para o servidor (ou fazer outra ação desejada)
  console.log(paciente);
});
