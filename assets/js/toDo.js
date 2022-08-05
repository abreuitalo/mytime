const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi() {
   const li = document.createElement('li');
   return li;
}

function limparInput() {
   inputTarefa.value = '';
}

function criaBotaoApagar(li) {
   li.innerText += ` `;

   const btnApagar = document.createElement('button');
   btnApagar.innerText = 'Apagar';
   btnApagar.setAttribute('class', 'apagar');
   btnApagar.setAttribute('title', 'Apagar essa tarefa');
   li.appendChild(btnApagar);
}

function criaTarefa(inputTexto) {
   const li = criaLi();
   li.innerText = inputTexto.toUpperCase();
   tarefas.appendChild(li);
   limparInput();
   criaBotaoApagar(li);
   salvarTarefas();
}

inputTarefa.addEventListener('keypress', function (e) {
   if (!inputTarefa.value) return;
   if (e.keyCode === 13) {
      criaTarefa(inputTarefa.value);
   }
});

btnTarefa.addEventListener('click', function (e) {
   if (!inputTarefa.value) return;
   criaTarefa(inputTarefa.value);
});

document.addEventListener('click', function (e) {
   const el = e.target;

   if (el.classList.contains('apagar')) {
      el.parentElement.remove();
   }
});

/// salvar tarefas

function salvarTarefas() {
   const liTarefas = tarefas.querySelectorAll('li');
   const listaDeTarefas = [];

   for (let tarefa of liTarefas) {
      let tarefaTexto = tarefa.innerText;
      tarefaTexto = tarefa.innerText.replace('Apagar', '').trim(); //retirar a palavra 'apagar' e tirar o espaço
      listaDeTarefas.push(tarefaTexto);
   }

   const tarefasJSON = JSON.stringify(listaDeTarefas); //convertendo para string
   localStorage.setItem('tarefas', tarefasJSON);
}

function adicionaTarefasSalvas() {
   const tarefas = localStorage.getItem('tarefas');
   const listaDeTarefas = JSON.parse(tarefas); //convertendo para um array
   console.log(listaDeTarefas);

   for (let tarefa of listaDeTarefas) {
      criaTarefa(tarefa);
   }
}
adicionaTarefasSalvas();
