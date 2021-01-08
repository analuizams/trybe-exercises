const states = document.getElementById('state');
function createStates() {
  const stateOptions = ['Selecione seu estado', 'AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
  let value = 1;
  for (let index = 0; index < stateOptions.length; index += 1) {
    const = createdState = document.createElement('stateOption');
    states.appendChild(createdState).innerText = stateOptions[index];
    states.appendChild(createdState).value = stateOptions[index];
  }
}

window.onload = function () {
  createStates();
}
