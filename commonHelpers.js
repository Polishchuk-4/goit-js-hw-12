import{S as u,i as f}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&e(s)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function e(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();function d(i){var r="44071670-df551d8a467c5c77b993c0d31",n=`https://pixabay.com/api/?key=${r}&q=${i}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(n,{method:"GET"}).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>e).catch(e=>console.log("--Error--:",e))}function m(i){const r=document.querySelector(".gallery"),n=i.map(e=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${e.largeImageURL}">
            <img class="gallery-img" src="${e.webformatURL}" alt="${e.tags}">
          </a>
          <ul class="info">
            <li class="info-item">
              <h2 class="info-title">Likes</h2>
              <p class="info-value">${e.likes}</p>
            </li>
            <li class="info-item">
              <h2 class="info-title">Views</h2>
              <p class="info-value">${e.views}</p>
            </li>
            <li class="info-item">
              <h2 class="info-title">Comments</h2>
              <p class="info-value">${e.comments}</p>
            </li>
            <li class="info-item">
              <h2 class="info-title">Downloads</h2>
              <p class="info-value">${e.downloads}</p>
            </li>
          </ul>
        </li>`).join("");r.innerHTML=n}const h=document.querySelector("form"),a=document.querySelector("input"),y=new u(".gallery a"),c=document.querySelector(".loader"),g=document.querySelector(".gallery");h.addEventListener("submit",i=>{if(i.preventDefault(),a.value===""){l("Please, enter the query value");return}g.innerHTML="",p(),d(a.value).then(r=>{if(L(),r.totalHits==0){l("Sorry, there are no images matching your search query. Please try again!");return}m(r.hits),y.refresh()}).catch(r=>{l("Server is not responding. Please try again later."),console.log("--Error:--",r)})});function l(i){f.info({timeout:2e3,position:"topRight",message:`${i}`})}function p(){c.style.display="block"}function L(){c.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
