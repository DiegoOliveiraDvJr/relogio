
function getTimerFromSeconds(seconds){
    const data = new Date(seconds * 1000);

    return data.toLocaleTimeString('pt-BR',{
        hour12: false,
        timeZone: 'GMT'
    });
}

var segundos = 0;

var timer;

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

iniciar.addEventListener('click', function(e){
    clearInterval(timer);
    relogio.classList.remove("parar");
    timer = setInterval(()=>{
        segundos++;
        relogio.innerText = getTimerFromSeconds(segundos);
    }, 1000)
});
pausar.addEventListener('click', function(e){
    clearInterval(timer);
    relogio.classList.add("parar");
});
zerar.addEventListener('click', function(e){
    relogio.innerText = '00:00:00';
    segundos = 0;
});

