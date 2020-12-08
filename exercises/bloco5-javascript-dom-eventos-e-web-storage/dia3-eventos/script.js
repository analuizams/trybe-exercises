function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
/* Exercício 1:
O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Segunda-feira e Terça-feira.
- Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
- Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
- Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>
*/
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDaysOfMonth() {
  let daysList = document.querySelector('#days');

  for (let index = 0; index < dezDaysList.length; index +=1) {
    const day = dezDaysList[index];
    const dayItem = document.createElement('li');

    if (day === 24 | day === 31) {
      dayItem.className = 'day holiday';
      dayItem.innerHTML = day;
      daysList.appendChild(dayItem);
    } else if (day === 4 | day === 11 | day === 18) {
      dayItem.className = 'day friday-day';
      dayItem.innerHTML = day;
      daysList.appendChild(dayItem);
    } else if (day === 25) {
      dayItem.className = 'day holiday friday-day';
      dayItem.innerHTML = day;
      daysList.appendChild(dayItem);
    } else {
      dayItem.className = 'day';
      dayItem.innerHTML = day;
      daysList.appendChild(dayItem);
    }
  }
}

createDaysOfMonth();


/* Exercício 2:
Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
- Adicione a este botão a ID "btn-holiday" .
- Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
*/
function createHolidayButton(buttonName) {
  const buttonContainer = document.querySelector('.buttons-container');
  const holidayButton = document.createElement('button');

  holidayButton.id = 'btn-holiday';
  holidayButton.innerHTML = buttonName;
  buttonContainer.appendChild(holidayButton);
}

createHolidayButton('Feriados');


/* Exercício 3:
Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
- É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .
*/
const holidayButton = document.querySelector('#btn-holiday');
const holidays = document.querySelectorAll('.holiday');
const bgColor = 'rgb(238, 238, 238)';
const changeColor = 'lightgreen'

function displayHoliday() {
  for (let index = 0; index < holidays.length; index +=1) {
    if (holidays[index].style.backgroundColor === changeColor) {
    holidays[index].style.backgroundColor = bgColor;
    } else {
    holidays[index].style.backgroundColor = changeColor
    }
  }
}

holidayButton.addEventListener('click', displayHoliday);


/* Exercício 4:
Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
- Adicione a este botão o ID "btn-friday" .
- Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
*/
function createFridayButton(buttonName) {
  const fridayButton = document.createElement('button');
  const buttonContainer = document.querySelector('.buttons-container');

  fridayButton.id = 'btn-friday';
  fridayButton.innerHTML = buttonName
  buttonContainer.appendChild(fridayButton);
}

createFridayButton('Sexta-feira');


/* Exercício 5:
Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
- É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.
*/
function displayFriday(fridaysArray) {
  let fridayButton = document.querySelector('#btn-friday');
  let fridays = document.getElementsByClassName('friday-day');
  let sextouText = 'SEXTOU!'

  fridayButton.addEventListener('click', function() {
      for (let index = 0; index < fridays.length; index +=1) {
        const previousDay = fridays[index].previousElementSibling.innerText;
        if (fridays[index].innerText == sextouText) {
        fridays[index].innerText = parseInt(previousDay) + 1;
        } else {
        fridays[index].innerText = sextouText;
      }
    }
  });
}

let dezFridays = [4, 11, 18, 25];
displayFriday(dezFridays);


/* Exercício 6:
Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
*/
function dayZoomIn() {
  const days = document.querySelectorAll('#days li');
  for (let index = 0; index < days.length; index += 1) {
      days[index].addEventListener('mouseover', function(event) {
      event.target.style.fontSize = '30px';
      event.target.style.fontWeight = '600';
    })
  }
}

function dayZoomOut() {
  const days =  document.querySelectorAll('#days li');
  for (let index = 0; index < days.length; index += 1) {
      days[index].addEventListener('mouseout', function(event) {
      event.target.style.fontSize = '20px';
      event.target.style.fontWeight = '200';
    })
  }
}

dayZoomIn();
dayZoomOut();


/* Exercício 7:
Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .
*/
function addTask(taskName) {
  let taskContainer = document.querySelector('.my-tasks');
  let task = document.createElement('span');

  task.innerText = taskName;
  taskContainer.appendChild(task);
}

addTask('Projeto');


/* Exercício 8
Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task.
O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".
*/
function colorTask(color) {
  let taskContainer = document.querySelector('.my-tasks');
  let taskColor = document.createElement('div');

  taskColor.className = 'task';
  taskColor.style.backgroundColor = color;
  taskContainer.appendChild(taskColor);
}

colorTask('green');


/* Exercício 9:
Implemente uma função que adiciona um evento que ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected ela estará selecionada.
Ao clicar novamente no elemento a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de ser uma tarefa selecionada.
*/
function setTaskClass() {
  let selectedTask = document.getElementsByClassName('task selected');
  let tasks = document.querySelector('.task');

  tasks.addEventListener('click', function(event) {
    if (selectedTask.length === 0) {
      event.target.className = 'task selected';
      console.log(event.target.className);
    } else {
      event.target.className = 'task';
      console.log(event.target.className);
    }
  })
}

setTaskClass();


/* Exercício 10:
Implemente uma função que adiciona um evento que ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.
Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119) .
*/
function colorDay() {
  let monthDay = document.querySelectorAll('.day');
  // let taskDiv = document.querySelector('.task li');
  let initialColor = 'rgb(119, 119, 119)';

  for (let index = 0; index < monthDay.length; index +=1) {

    monthDay[index].addEventListener('click', function(event) {
      let selectedTask = document.querySelector('.task.selected');

      if (selectedTask == null) {
        return
      }

      let taskColor = selectedTask.style.backgroundColor;

      if (event.target.style.color == initialColor) {
        event.target.style.color = initialColor;
      } else {
        event.target.style.backgroundColor = taskColor;
      }
    })
  }
}

colorDay();


/* Bônus
Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar um compromisso na caixa de texto "COMPROMISSOS", adiciona o item à lista "MEUS COMPROMISSOS" ao clicar no botão "ADICIONAR".
- Se nenhum caractere for inserido no campo input, a função deve retornar um alert com uma mensagem de erro ao clicar em "ADICIONAR".
- Ao pressionar a tecla "enter" o evento também deverá ser disparado.
*/
function addNewTask() {
  let inputField = document.querySelector('#task-input');;
  let inputButton = document.querySelector('#btn-add');
  let taskList = document.querySelector('.task-list');
  let newTask = document.createElement('li');

  inputButton.addEventListener('click', function() {
    if (inputField.value.length > 0) {
      newTask.innerText = inputField.value;
      taskList.appendChild(newTask);
      inputField.value = '';
    } else {
      alert('Error: Digite ao menos 1 caractere.');
    }
  })

  inputField.addEventListener('keyup', function(event) {
    if (event.keyCode === 13 && inputField.value.length > 0) {
      newTask.innerText = inputField.value;
      taskList.appendChild(newTask);
      inputField.value = '';
    }
  })
}

addNewTask();


