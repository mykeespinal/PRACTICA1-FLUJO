// 1. Seleccionamos el elemento del párrafo usando su ID
        const saludo = document.getElementById('texto-saludo');

        // 2. Función para generar un color hexadecimal aleatorio
        function generarColorAleatorio() {
            const letras = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letras[Math.floor(Math.random() * 16)];
            }
            return color;
        }

        // 3. Escuchamos el evento 'click' en el párrafo
        saludo.addEventListener('click', () => {
            // Generamos el color nuevo
            const nuevoColor = generarColorAleatorio();
            
            // Se lo aplicamos directamente al estilo del texto
            saludo.style.color = nuevoColor;
            
            // Mensaje divertido en la consola del navegador (F12)
            console.log(`%c ¡Cambiaste el color a: ${nuevoColor}! `, `background: ${nuevoColor}; color: #000; font-weight: bold;`);
        });