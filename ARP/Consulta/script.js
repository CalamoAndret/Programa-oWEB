const ulConsultas = document.querySelector("#lista-consultas");

const consultas = [
  {
    paciente: "João Silva",
    medico: "Dr. Carlos",
    data: "2023-04-10",
    horario: "14:00"
  },
  {
    paciente: "Maria Santos",
    medico: "Dr. Fernanda",
    data: "2023-04-12",
    horario: "10:30"
  },
  {
    paciente: "José Oliveira",
    medico: "Dr. Paulo",
    data: "2023-04-15",
    horario: "16:00"
  },
  {
    paciente: "Ana Souza",
    medico: "Dr. Ana",
    data: "2023-04-18",
    horario: "08:45"
  }
];

function exibirConsultas() {
  ulConsultas.innerHTML = "";
  
  for (const consulta of consultas) {
    const li = document.createElement("li");
    
    li.textContent = `Paciente: ${consulta.paciente} | Médico: ${consulta.medico} | Data: ${consulta.data} | Horário: ${consulta.horario}`;
    
    ulConsultas.appendChild(li);
  }
}

exibirConsultas();
