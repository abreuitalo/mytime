function criaHora() {
   let data = new Date();
   console.log(data.toLocaleTimeString('pt-BR'));
   console.log(data.toDateString());
   const msg = `${data.toLocaleTimeString('pt-BR')}`;
   relogio.innerHTML = msg;
}

function criaP() {
   const p = document.createElement('p');
   const data = new Date();
   p.innerHTML = data.toDateString('pt-BR');
   p.classList.add('p2');
   return p;
}

const relogio = document.querySelector('.relogio');
const container = document.querySelector('.container');
const p = criaP();

setInterval(function () {
   const data = criaHora();
   relogio.appendChild(p);
}, 1000);
