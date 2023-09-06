const pantalla = document.querySelector('.pantalla');
const botones = document.querySelectorAll('.btn');

pantalla.addEventListener('click', () => {
    pantalla.textContent = '0';
});

botones.forEach(boton => {
    boton.addEventListener('click', () => {
        const botonApretado = boton.textContent;

        if (boton.id === 'c') {
            pantalla.textContent = '0';
            return;
        }

        if (boton.id === 'borrar') {
            if (pantalla.textContent.length === 1 || pantalla.textContent === 'Error') {
                pantalla.textContent = '0';
                return;
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
                return;
            }
        }

        if (boton.id === 'igual') {
            try {
                let resultado = eval(pantalla.textContent);
                resultado = resultado.toString().slice(0, 13); 
                pantalla.textContent = resultado;
                return;
            } catch {
                pantalla.textContent = 'Error';
                return;
            }
        }

        if (pantalla.textContent === '0' || pantalla.textContent === 'Error') {
            pantalla.textContent = botonApretado;
        } else {
            if (pantalla.textContent.length < 13) {
                pantalla.textContent += botonApretado;
            }
        }
    });
});

const cambiarModo = document.getElementById('cambiar-modo');
const stylesClaro = document.getElementById('styles-claro');
let modoClaroActivado = false;

cambiarModo.addEventListener('click', () => {
    modoClaroActivado = !modoClaroActivado;

    if (modoClaroActivado) {
        stylesClaro.removeAttribute('disabled');
        cambiarModo.textContent = '🌙';
    } else {
        stylesClaro.setAttribute('disabled', 'true');
        cambiarModo.textContent = '🔆';
    }
});