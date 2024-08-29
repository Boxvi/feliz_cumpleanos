const params = new URLSearchParams(window.location.search);
const nombre = params.get('n');  // 'valor1'
const profesion = params.get('p');  // 'valor2'
const genero = params.get('g');  // 'valor3'

const storedResponse = localStorage.getItem('cumpleanero');

if (params.size == 0) {
    const informacionHTML = `
    <h1>¡Feliz cumpleaños! 🎉</h1>
    <p>Que este nuevo año esté lleno de alegría, amor y muchos momentos especiales.</p>
    <p>Que cada día te brinde nuevas oportunidades para alcanzar tus sueños y que siempre tengas a tu lado a las personas que te quieren y te apoyan.</p>
    <img class="rotate-center" src="cake.svg" alt="pastelito">
    <p>Disfruta al máximo de tu día y que el próximo año esté lleno de éxitos y bendiciones.</p>
    <p>¡Felicidades y que tengas un excelente cumpleaños!</p>
    `
    document.getElementById('container').innerHTML = informacionHTML;
} else if (storedResponse) {
    // Si hay datos en el localStorage, los usamos
    const separatedText = storedResponse.split('\n');
    const informacionHTML = `
        <h1>${separatedText[0]}</h1>
        <p>${separatedText[1]}</p>
        <p>${separatedText[2]}</p>
        <img class="rotate-center" src="cake.svg" alt="pastelito">
        <p>${separatedText[3]}</p>
        <p>${separatedText[4]}</p>
        <p>${separatedText[5]}</p>
        <p>${separatedText[6]}</p>
        <p>${separatedText[7]}</p>
    `;
    document.getElementById('container').innerHTML = informacionHTML;
} else {
    // Si no hay datos en el localStorage, hacemos la solicitud a la API
    const quest = `escribeme un mensaje de cumpleanos para ` + ('h' == genero ? 'hombre' : 'mujer') + ` que se dedica a ${profesion} que se llama ${nombre}`;

    fetch(`https://gemini-rest.vercel.app/api/?prompt=${encodeURIComponent(quest)}`)
        .then(res => res.json())
        .then(res => {
            const responseText = res.response;
            const separatedText = responseText.split('\n'); // Separa el texto por cada salto de línea

            // Guardar la respuesta en el localStorage
            localStorage.setItem('cumpleanero', responseText);

            const informacionHTML = `
                <h1>${separatedText[0]}</h1>
                <p>${separatedText[1]}</p>
                <p>${separatedText[2]}</p>
                <img class="rotate-center" src="cake.svg" alt="pastelito">
                <p>${separatedText[3]}</p>
                <p>${separatedText[4]}</p>
                <p>${separatedText[5]}</p>
                <p>${separatedText[6]}</p>
                <p>${separatedText[7]}</p>
            `;
            document.getElementById('container').innerHTML = informacionHTML;
        })
        .catch(error => {
            console.error(error);
        });
}
