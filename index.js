import{S as y,i as n}from"./assets/vendor-BrddEoy-.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const d="30127977-afd00810882476e7ef9a8a757",h=`https://pixabay.com/api/?key=${d}&per_page=15`,w=s=>{const r=`${h}&q=${s}`;return fetch(r).then(i=>i.json()).catch(i=>console.log(i))},L=document.querySelector(".gallery"),q=new y(".gallery a",{captionsData:"alt",captionDelay:250}),v=s=>{const r=s.map(({webformatURL:o,largeImageURL:i,tags:e,views:t,likes:a,comments:u,downloads:g})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${i}">
            <img
              class="gallery-image"
              src="${o}"
              alt="${e}"
            />
            <ul class="gallery-info">
              <li class="gallery-item-info">
                <p class="info-item-title">
                Likes
                </p>
                <p class="info-item-value">
                  ${a}
                </p>
              </li>
              <li class="gallery-item-info">
                <p class="info-item-title">
                  Views
                </p>
                <p class="info-item-value">
                  ${t}
                </p>
              </li>
              <li class="gallery-item-info">
                <p class="info-item-title">
                  Comments
                </p>
                <p class="info-item-value">
                  ${u}
                </p>
              </li>
              <li class="gallery-item-info">
                <p class="info-item-title">
                  Downloads
                </p>
                <p class="info-item-value">
                  ${g}
                </p>
              </li>
            </ul>
          </a>
        </li>
      `).join("");L.innerHTML=r,q.refresh()},m=document.querySelector(".search-form"),l=document.querySelector(".loader-wrapper"),c=new URL(window.location),P=c.searchParams,p=P.get("q");p&&f(p);m.addEventListener("submit",s=>{s.preventDefault();const o=new FormData(m).get("query").trim();if(o.length<1){n.error({title:"Error",position:"topRight",message:"Query field cannot be empty!"});return}c.searchParams.set("q",o),window.history.pushState({},"",c),f(o)});function f(s){l.classList.add("show"),w(s).then(r=>{l.classList.remove("show"),r.hits.length<1&&n.error({title:"Error",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),v(r.hits)}).catch(r=>{l.classList.remove("show"),n.error({title:"Error",position:"topRight",message:"Failed to load images. Please try again!"})})}
//# sourceMappingURL=index.js.map
