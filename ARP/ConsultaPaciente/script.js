const patients = [
    { name: "João Silva", cpf: "111.222.333-44" },
    { name: "Maria Souza", cpf: "222.333.444-55" },
    { name: "Antônio Santos", cpf: "333.444.555-66" },
    { name: "Aline Oliveira", cpf: "444.555.666-77" },
  ];
  
  const form = document.querySelector("form");
  const input = document.querySelector("#search");
  const ul = document.querySelector("ul");
  
  const renderPatients = patients => {
    const html = patients.map(patient => `
      <li>
        <strong>Nome:</strong> ${patient.name}<br>
        <strong>CPF:</strong> ${patient.cpf}
      </li>
    `).join("");
    ul.innerHTML = html;
  };
  
  form.addEventListener("submit", event => {
    event.preventDefault();
    const query = input.value.trim().toLowerCase();
    const filteredPatients = patients.filter(patient => {
      const name = patient.name.toLowerCase();
      const cpf = patient.cpf.replace(/\D/g, "");
      return name.includes(query) || cpf.includes(query);
    });
    renderPatients(filteredPatients);
  });
  
  renderPatients(patients);
  