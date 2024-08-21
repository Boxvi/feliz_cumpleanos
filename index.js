const params = new URLSearchParams(window.location.search);
const nick = params.get('nick');  // 'valor1'

fetch('https://my-json-server.typicode.com/Boxvi/cumpleanios_data/cumpleaneros/' + nick)
    .then(response => response.json())  // Convierte la respuesta a JSON
    .then(data => {

        const informacionHTML = `
        <h1>¡Feliz cumpleaños, ${data.nombre}!</h1>
        <p>${data.texto1profesion}</p>
        <img class="rotate-center" src="${data.imgpersona}" alt="${data.nombre}">
        <p>${data.texto2profesion}</p>
        `

        document.getElementById('container').innerHTML = informacionHTML;

    })
    .catch(error => {
        console.error(error);
    });


