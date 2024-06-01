import{a as b,S as P,i as S}from"./assets/vendor-b0d10f48.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function i(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=i(o);fetch(o.href,r)}})();async function g(t,e,i){var s="44071670-df551d8a467c5c77b993c0d31";return(await b.get("https://pixabay.com/api/",{params:{key:s,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:i}})).data}function p(t){const e=document.querySelector(".gallery"),i=t.map(s=>`
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
        </li>`).join("");e.insertAdjacentHTML("beforeend",i)}const q=document.querySelector("form"),n=document.querySelector("input");let h;const m=new P(".gallery a"),y=document.querySelector(".loader"),v=document.querySelector(".gallery"),d=document.querySelector(".fetchMorePostsBtn");let l=1;const a=15;q.addEventListener("submit",async t=>{if(t.preventDefault(),h===n.value||n.value===""){c("Please, enter another request");return}l=1,v.innerHTML="",w(),I(),h=n.value;try{let e=await g(n.value,l,a);if(console.log(e),$(),e.hits.length==0){f(e.hits.length,e.totalHits);return}p(e.hits),m.refresh(),L(),f(e.hits.length,e.totalHits),console.log("-- "+l)}catch(e){console.log(e),c("An error occurred while fetching images. Please try again later.")}});d.addEventListener("click",()=>{g(n.value,l,a).then(t=>{p(t.hits),m.refresh(),L(),f(t.hits.length,t.totalHits)}).catch(t=>{console.log(t),c("An error occurred while fetching more images. Please try again later.")})});function L(){const t=v.lastElementChild;if(t){const e=t.getBoundingClientRect();window.scrollBy({top:e.width*2,behavior:"smooth"})}}function f(t,e){t>=a&&e>a?(l+=1,M()):(w(),c("We're sorry, but you've reached the end of search results."))}function c(t){S.info({timeout:2e3,position:"topRight",message:`${t}`})}function I(){y.style.display="block"}function $(){y.style.display="none"}function M(){d.style.display="block"}function w(){d.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
