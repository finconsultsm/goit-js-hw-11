import{S as f,i as n}from"./assets/vendor-BrddEoy-.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const u="30127977-afd00810882476e7ef9a8a757",y=`https://pixabay.com/api/?key=${u}&per_page=15`,g=o=>{const s=`${y}&q=${o}`;return fetch(s).then(r=>r.json()).catch(r=>console.log(r))},d=document.querySelector(".gallery"),h=new f(".gallery a",{captionsData:"alt",captionDelay:250}),L=o=>{const s=o.map(({webformatURL:i,largeImageURL:r,tags:e,views:t,likes:a,comments:p,downloads:m})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${r}">
            <img
              class="gallery-image"
              src="${i}"
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
                  ${p}
                </p>
              </li>
              <li class="gallery-item-info">
                <p class="info-item-title">
                  Downloads
                </p>
                <p class="info-item-value">
                  ${m}
                </p>
              </li>
            </ul>
          </a>
        </li>
      `).join("");d.innerHTML=s,h.refresh()},c=document.querySelector(".search-form"),l=document.querySelector(".loader-wrapper");c.addEventListener("submit",o=>{o.preventDefault();const i=new FormData(c).get("query");l.classList.add("show"),g(i).then(r=>{if(l.classList.remove("show"),r.hits.length<1){n.error({title:"Error",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});return}L(r.hits)}).catch(r=>{l.classList.remove("show"),n.error({title:"Error",position:"topRight",message:"Failed to load images. Please try again!"})})});
//# sourceMappingURL=index.js.map
