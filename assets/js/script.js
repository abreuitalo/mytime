function criaHoraDosSegundos(segundos) {
   const data = new Date(segundos * 1000);

   return data.toLocaleTimeString('pt-BR', {
      timeZone: 'GMT'
   }); //retorno a data 00:00:01
}

///ligações com tags HTML
const relogio = document.querySelector('.relogio');

let segundos = 0;
let timer;

function iniciarRelogio() {
   timer = setInterval(function () {
      segundos++;
      relogio.innerText = criaHoraDosSegundos(segundos);
   }, 1000);
}

document.addEventListener('click', function (e) {
   const elemento = e.target;

   if (elemento.classList.contains('iniciar')) {
      relogio.classList.remove('pausado');
      clearInterval(timer);
      iniciarRelogio();
   }

   if (elemento.classList.contains('pausar')) {
      relogio.classList.add('pausado');
      clearInterval(timer);
   }

   if (elemento.classList.contains('zerar')) {
      clearInterval(timer);
      relogio.innerText = '00:00:00';
      relogio.classList.remove('pausado');
      segundos = 0;
   }
});
