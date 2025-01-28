(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function p(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=p(e);fetch(e.href,o)}})();const i="/assets/cake-sCwW6wCe.svg",c=new URLSearchParams(window.location.search),d=c.get("n"),u=c.get("p"),m=c.get("g"),l=localStorage.getItem("cumpleanero");console.log(d,m,u);if(c.size==0){const t=`
    <body class="fondo">
  <h1>¡Feliz cumpleaños! 🎉</h1>
  <p>Que este nuevo año esté lleno de alegría, amor y muchos momentos especiales.</p>
  <p>Que cada día te brinde nuevas oportunidades para alcanzar tus sueños y que siempre tengas a tu lado a las personas que te quieren y te apoyan.</p>
  <img class="rotate-center" src="${i}" alt="pastelito">
  <p>Disfruta al máximo de tu día y que el próximo año esté lleno de éxitos y bendiciones.</p>
  <p>¡Felicidades y que tengas un excelente cumpleaños!</p>
    </dody>
  `;document.getElementById("app").innerHTML=t}else if(l){const t=l.split(`
`),r=`
      <h1>${t[0]}</h1>
      <p>${t[1]}</p>
      <p>${t[2]}</p>
      <img class="rotate-center" src="${i}" alt="pastelito">
      <p>${t[3]}</p>
      <p>${t[4]}</p>
      <p>${t[5]}</p>
      <p>${t[6]}</p>
      <p>${t[7]}</p>
  `;document.getElementById("app").innerHTML=r}else{const t="generame un mensaje de cumpleanos sencillo, para  "+(m=="h"?"hombre":"mujer")+` que se dedica a ${u} y que se llama ${d}, y que tenga 4 parrafos`,p="https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=undefined",a=new Headers;a.append("Content-Type","application/json");const e=JSON.stringify({contents:[{parts:[{text:t}]}]});fetch(p,{method:"POST",headers:a,body:e,redirect:"follow"}).then(s=>s.json()).then(s=>{const n=s.candidates[0].content.parts[0].text.split(`
`);localStorage.setItem("cumpleanero",n);const f=`
              <h1>${n[0]}</h1>
              <p>${n[1]}</p>
              <p>${n[2]}</p>
              <img class="rotate-center" src="${i}" alt="pastelito">
              <p>${n[3]}</p>
              <p>${n[4]}</p>
              <p>${n[5]}</p>
              <p>${n[6]}</p>
              <p>${n[7]}</p>
          `;document.getElementById("app").innerHTML=f}).catch(s=>{console.error(s)})}
