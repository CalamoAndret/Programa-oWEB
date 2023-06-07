class PacienteView {
    static renderListaPacientes(pacientes) {
      // Lógica para renderizar a lista de pacientes em HTML
      return pacientes.map(paciente => `<p>${paciente.nome}</p>`).join('');
    }
  
    static renderPaciente(paciente) {
      // Lógica para renderizar os detalhes de um paciente em HTML
      return `<p>Nome: ${paciente.nome}</p><p>Idade: ${paciente.idade}</p>`;
    }
  }
  
  module.exports = PacienteView;
  