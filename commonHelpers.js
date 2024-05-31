import{a as w,S,i as P}from"./assets/vendor-b0d10f48.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();async function p(e,t,r){var s="44071670-df551d8a467c5c77b993c0d31";return(await w.get("https://pixabay.com/api/",{params:{key:s,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:r}})).data}function m(e){const t=document.querySelector(".gallery"),r=e.map(s=>`
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
        </li>`).join("");t.insertAdjacentHTML("beforeend",r)}const q=document.querySelector("form"),n=document.querySelector("input");let h;const y=new S(".gallery a"),g=document.querySelector(".loader"),f=document.querySelector(".gallery"),d=document.querySelector(".fetchMorePostsBtn");let l=1;const a=15;q.addEventListener("submit",async e=>{if(e.preventDefault(),h===n.value||n.value===""){u("Please, enter another request"),l=1;return}f.innerHTML="",b(),I(),h=n.value;try{let t=await p(n.value,l,a);if($(),t.totalHits<a){u("Sorry, there are no images matching your search query. Please try again!");return}m(t.hits),y.refresh(),v(),L(t.hits.length,t.totalHits)}catch(t){console.log(t)}});d.addEventListener("click",()=>{p(n.value,l,a).then(e=>{m(e.hits),y.refresh(),v(),L(e.hits.length,e.totalHits)}).catch(e=>{console.log(e)})});function v(){const e=f.lastElementChild;if(e){const t=e.getBoundingClientRect();window.scrollBy({top:t.width*2,behavior:"smooth"})}}function L(e,t){e>=a&&t>f.childElementCount?(l+=1,C()):(u("We're sorry, but you've reached the end of search results."),b())}function u(e){P.info({timeout:2e3,position:"topRight",message:`${e}`})}function I(){g.style.display="block"}function $(){g.style.display="none"}function C(){d.style.display="block"}function b(){d.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
