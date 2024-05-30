import{a as b,S,i as P}from"./assets/vendor-b0d10f48.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function l(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=l(o);fetch(o.href,n)}})();async function p(e,t,l){var s="44071670-df551d8a467c5c77b993c0d31";return(await b.get("https://pixabay.com/api/",{params:{key:s,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:l}})).data}function m(e){const t=document.querySelector(".gallery"),l=e.map(s=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${s.largeImageURL}">
            <img class="gallery-img" src="${s.webformatURL}" alt="${s.tags}">
          </a>
          <ul class="info">
            <li class="info-item">
              <h2 class="info-title">Likes</h2>
              <p class="info-value">${s.likes}</p>
            </li>
            <li class="info-item">
              <h2 class="info-title">Views</h2>
              <p class="info-value">${s.views}</p>
            </li>
            <li class="info-item">
              <h2 class="info-title">Comments</h2>
              <p class="info-value">${s.comments}</p>
            </li>
            <li class="info-item">
              <h2 class="info-title">Downloads</h2>
              <p class="info-value">${s.downloads}</p>
            </li>
          </ul>
        </li>`).join("");t.insertAdjacentHTML("beforeend",l)}const q=document.querySelector("form"),r=document.querySelector("input");let h;const g=new S(".gallery a"),y=document.querySelector(".loader"),f=document.querySelector(".gallery"),d=document.querySelector(".fetchMorePostsBtn");let i=1;const a=15;q.addEventListener("submit",async e=>{if(e.preventDefault(),h===r.value||r.value===""){u("Please, enter another request"),i=1;return}f.innerHTML="",v(),O(),h=r.value;try{let t=await p(r.value,i,a);if(E(),t.totalHits<a){u("Sorry, there are no images matching your search query. Please try again!");return}m(t.hits),g.refresh(),w(),L(t.hits.length,t.totalHits)}catch(t){console.log(t)}});d.addEventListener("click",()=>{p(r.value,i,a).then(e=>{m(e.hits),g.refresh(),w(),L(e.hits.length,e.totalHits)}).catch(e=>{console.log(e)})});function w(){const e=f.lastElementChild;if(e){const t=e.getBoundingClientRect(),l=window.pageYOffset||document.documentElement.scrollTop,s=window.pageXOffset||document.documentElement.scrollLeft,o=t.top+l-window.pageYOffset,n=t.left+s-window.pageXOffset;window.scrollBy({top:o,left:n,behavior:"smooth"})}}function L(e,t){e>=a&&t>f.childElementCount?(i+=1,I()):(u("We're sorry, but you've reached the end of search results."),v())}function u(e){P.info({timeout:2e3,position:"topRight",message:`${e}`})}function O(){y.style.display="block"}function E(){y.style.display="none"}function I(){d.style.display="block"}function v(){d.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
