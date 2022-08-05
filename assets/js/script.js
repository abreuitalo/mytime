function criaHoraDosSegundos(segundos) {
   const data = new Date(segundos * 1000);

   return data.toLocaleTimeString('pt-BR', {
      timeZone: 'GMT'
   }); //retorno a data 00:00:01
}

///ligações com tags HTML
const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
const zeros = document.querySelector('.zero');
let segundos = 0;
let timer;

function iniciarRelogio() {
   timer = setInterval(function () {
      segundos++;
      relogio.innerText = criaHoraDosSegundos(segundos);
   }, 1000);
}

iniciar.addEventListener('click', function (e) {
   relogio.classList.add('circle');
   clearInterval(timer);
   iniciarRelogio();
});

pausar.addEventListener('click', function (e) {
   clearInterval(timer);
});

zerar.addEventListener('click', function (e) {
   clearInterval(timer);
   relogio.classList.add('circle');
   relogio.innerText = '00:00:00';
   segundos = 0;
});
