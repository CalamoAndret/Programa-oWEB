// Função para verificar se a data selecionada está disponível
function isDateAvailable(date) {

    return true;
}

// Função para atualizar os horários disponíveis de acordo com a data
function updateAvailableTimes() {
    const date = document.getElementById('date')

    // Converte a data para o formato YYYY-MM-DD para facilitar a comparação
    const dateString = date
        .value
        .split('-')
        .reverse()
        .join('-');

    // Obtém a lista de horários disponíveis
    const availableTimes = getAvailableTimes(dateString);

    // Obtém o elemento select dos horários
    const timeSelect = document.getElementById('time');

    // Remove todas as opções anteriores
    timeSelect.innerHTML = '';

    // Adiciona as opções de horários disponíveis
    availableTimes.forEach((time) => {
        const option = document.createElement('option');
        option.value = time;
        option.text = time;
        timeSelect.appendChild(option);
    });

}

// Função para obter os horários disponíveis para uma determinada data
function getAvailableTimes(dateString) {
    return [
        '08:00',
        '09:00',
        '10:00',
        '11:00',
        '14:00',
        '15:00',
        '16:00',
        '17:00'
    ];
}

document
    .getElementById('date')
    .addEventListener('change', () => {
        // Verifica se a data selecionada está disponível
        if (!isDateAvailable(document.getElementById('date').value)) {
            alert('Data indisponível. Por favor selecione outra data.');
            return;
        }
        // Atualiza os horários disponíveis
        updateAvailableTimes();
    });

document
    .querySelector('form')
    .addEventListener('submit', (event) => {
        event.preventDefault();

        alert('Consulta agendada com sucesso!');
    });