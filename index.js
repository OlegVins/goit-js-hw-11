import{a as u,S as d,i}from"./assets/vendor-CRJeqrVC.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const f="https://pixabay.com/api/",p="54587804-730d69b5b34cc935cc62fa273";function m(s){const o={key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return u.get(f,{params:o}).then(e=>e.data)}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),h=new d(".gallery a",{captionsData:"alt",captionDelay:250});function y(s){const o=s.map(e=>`<li class="gallery-item">
        <a href="${e.largeImageURL}">
        <img
        src="${e.webformatURL}"
        alt="${e.tags}"
        />
        </a>
        <div class="info">
        <p><b>Likes:</b> ${e.likes}</p>
        <p><b>Views:</b> ${e.views}</p>
        <p><b>Comments:</b> ${e.comments}</p>
        <p><b>Downloads:</b> ${e.downloads}</p>
        </div>
        </li>`).join("");c.insertAdjacentHTML("beforeend",o),h.refresh()}function g(){c.innerHTML=""}function b(){l.classList.remove("is-hidden")}function L(){l.classList.add("is-hidden")}const w=document.querySelector(".form");w.addEventListener("submit",S);function S(s){s.preventDefault();const o=s.target.elements["search-text"].value.trim();if(o===""){i.error({message:"Please enter a search query!",position:"topRight"});return}g(),b(),m(o).then(e=>{if(e.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}y(e.hits)}).catch(e=>{i.error({message:"Something went wrong. Try again later.",position:"topRight"})}).finally(()=>{L()})}
//# sourceMappingURL=index.js.map
