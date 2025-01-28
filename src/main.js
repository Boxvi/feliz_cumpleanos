import './style.css'
import cake from './cake.svg'

const params = new URLSearchParams(window.location.search);
const nombre = params.get('n');  // 'valor1'
const profesion = params.get('p');  // 'valor2'
const genero = params.get('g');  // 'valor3'

const storedResponse = localStorage.getItem('cumpleanero');

console.log(nombre, genero, profesion)

if (params.size == 0) {
    const informacionHTML = `
    <body class="fondo">
  <h1>¡Feliz cumpleaños! 🎉</h1>
  <p>Que este nuevo año esté lleno de alegría, amor y muchos momentos especiales.</p>
  <p>Que cada día te brinde nuevas oportunidades para alcanzar tus sueños y que siempre tengas a tu lado a las personas que te quieren y te apoyan.</p>
  <img class="rotate-center" src="${cake}" alt="pastelito">
  <p>Disfruta al máximo de tu día y que el próximo año esté lleno de éxitos y bendiciones.</p>
  <p>¡Felicidades y que tengas un excelente cumpleaños!</p>
    </dody>
  `
    document.getElementById('app').innerHTML = informacionHTML;
} else if (storedResponse) {
    // Si hay datos en el localStorage, los usamos
    const separatedText = storedResponse.split('\n');
    const informacionHTML = `
      <h1>${separatedText[0]}</h1>
      <p>${separatedText[1]}</p>
      <p>${separatedText[2]}</p>
      <img class="rotate-center" src="${cake}" alt="pastelito">
      <p>${separatedText[3]}</p>
      <p>${separatedText[4]}</p>
      <p>${separatedText[5]}</p>
      <p>${separatedText[6]}</p>
      <p>${separatedText[7]}</p>
  `;
    document.getElementById('app').innerHTML = informacionHTML;
} else {
    // Si no hay datos en el localStorage, hacemos la solicitud a la API
    const quest = `generame un mensaje de cumpleanos sencillo, para  ` + ('h' == genero ? 'hombre' : 'mujer') + ` que se dedica a ${profesion} y que se llama ${nombre}, y que tenga 4 parrafos`;
//    const key = import.meta.env.VITE_API_KEY;
    const key = process.env.VITE_API_KEY;
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${key}`;
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "contents": [{
            "parts": [{ "text": quest }]
        }]
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    fetch(url, requestOptions)
        .then(res => res.json())
        .then(res => {
            const separatedText = res.candidates[0].content.parts[0].text.split('\n');

            // Guardar la respuesta en el localStorage
            localStorage.setItem('cumpleanero', separatedText);

            const informacionHTML = `
              <h1>${separatedText[0]}</h1>
              <p>${separatedText[1]}</p>
              <p>${separatedText[2]}</p>
              <img class="rotate-center" src="${cake}" alt="pastelito">
              <p>${separatedText[3]}</p>
              <p>${separatedText[4]}</p>
              <p>${separatedText[5]}</p>
              <p>${separatedText[6]}</p>
              <p>${separatedText[7]}</p>
          `;
            document.getElementById('app').innerHTML = informacionHTML;
        })
        .catch(error => {
            console.error(error);
        });
}