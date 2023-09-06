const pantalla = document.querySelector('.pantalla');
const botones = document.querySelectorAll('.btn');

botones.forEach(boton => {

    pantalla.addEventListener('click', () => {
        pantalla.textContent = '0';
    })
    
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
                pantalla.textContent = eval(pantalla.textContent);
                return;
            }
            catch {
                pantalla.textContent = 'Error';
                return;
            }

        }

        if (pantalla.textContent === '0' || pantalla.textContent === 'Error') {
            pantalla.textContent = botonApretado;
        } else {
        pantalla.textContent += botonApretado;
        }

        if (pantalla.textContent.length > 13) {
            pantalla.textContent = 'Error';
            return;
        }
    })
})