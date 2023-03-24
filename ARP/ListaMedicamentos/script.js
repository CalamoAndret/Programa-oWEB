const form = document.querySelector('form');
const tableBody = document.querySelector('tbody');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const medicamentoInput = document.querySelector('#medicamento');
  const medicamento = medicamentoInput.value;
  
  if (medicamento.trim()) {
    const row = tableBody.insertRow();
    const cell1 = row.insertCell();
    const cell2 = row.insertCell();
    const removeButton = document.createElement('button');
    
    cell1.textContent = medicamento;
    removeButton.textContent = 'Remover';
    removeButton.className = 'remove-button';
    cell2.appendChild(removeButton);
    
    removeButton.addEventListener('click', () => {
      row.remove();
    });
    
    medicamentoInput.value = '';
  }
});
