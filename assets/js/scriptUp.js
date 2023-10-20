function relogioDate() {
   function criaHora() {
      let data = new Date();
      const msg = `${data.toLocaleTimeString('pt-br')}`;
      relogio.innerHTML = msg;
   }

   function criaP() {
      const p = document.createElement('p');
      const data = new Date();
      p.innerText = data.toLocaleDateString('pt-br', {timeZone: 'GMT', dateStyle: 'long'});
      p.classList.add('p2');
      return p;
   }

   const relogio = document.querySelector('.relogioDate');
   const container = document.querySelector('.container');
   const p = criaP();

   setInterval(function () {
      const data = criaHora();
      relogio.appendChild(p);
   }, 1000);
}

relogioDate();

// timer
// timer

function relogioTimer() {
   function criaHoraDosSegundos(segundos) {
      const data = new Date(segundos * 1000);

      return data.toLocaleTimeString('pt-br', {
         timeZone: 'GMT',
      }); //retorno a data 00:00:01
   }

   ///ligações com tags HTML
   const relogio = document.querySelector('.relogioTimer');

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
}

relogioTimer();
