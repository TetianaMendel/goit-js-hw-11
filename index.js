import{a as m,S as d,i}from"./assets/vendor-dNBuWDsd.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const h="55002165-1e4f2080ce8b2f6cba85ff2b5",g="https://pixabay.com/api/";function y(s){const r={key:h,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return m.get(g,{params:r}).then(o=>o.data)}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),b=new d(".gallery a",{captionsData:"alt",captionDelay:250});function L(s){const r=s.map(({webformatURL:o,largeImageURL:n,tags:e,likes:t,views:a,comments:p,downloads:f})=>`
<li class="gallery-item">
<a href="${n}">
<img src="${o}" alt="${e}" />
</a>
<div class="info">
    <p><b>Likes</b><br><span class="value">${t}</span></p>
    <p><b>Views</b><br><span class="value">${a}</span></p>
    <p><b>Comments</b><br><span class="value">${p}</span></p>
    <p><b>Downloads</b><br><span class="value">${f}</span></p>
  </div>
</li>
`).join("");c.insertAdjacentHTML("beforeend",r),b.refresh()}function v(){c.innerHTML=""}function w(){l.classList.add("show")}function S(){l.classList.remove("show")}const u=document.querySelector(".form");u.addEventListener("submit",q);function q(s){s.preventDefault();const r=s.target.elements["search-text"].value.trim();if(!r){i.warning({message:"Please enter a search query!",position:"topRight"});return}v(),w(),y(r).then(o=>{if(o.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(o.hits)}).catch(o=>{i.error({message:"Something went wrong. Try again later.",position:"topRight"})}).finally(()=>{S(),u.reset()})}
//# sourceMappingURL=index.js.map
