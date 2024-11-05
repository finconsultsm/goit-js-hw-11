import{S as d,i as c}from"./assets/vendor-BrddEoy-.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const w="30127977-afd00810882476e7ef9a8a757",L=`https://pixabay.com/api/?key=${w}`,P=(o,s)=>{const t=`${L}&q=${o}&per_page=${s}`;return fetch(t).then(e=>e.json()).catch(e=>console.log(e))},q=document.querySelector(".gallery"),$=new d(".gallery a",{captionsData:"alt",captionDelay:250}),v=o=>{const s=o.map(({webformatURL:t,largeImageURL:a,tags:e,views:r,likes:i,comments:y,downloads:h})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${a}">
            <img
              class="gallery-image"
              src="${t}"
              alt="${e}"
            />
            <ul class="gallery-info">
              <li class="gallery-item-info">
                <p class="info-item-title">
                Likes
                </p>
                <p class="info-item-value">
                  ${i}
                </p>
              </li>
              <li class="gallery-item-info">
                <p class="info-item-title">
                  Views
                </p>
                <p class="info-item-value">
                  ${r}
                </p>
              </li>
              <li class="gallery-item-info">
                <p class="info-item-title">
                  Comments
                </p>
                <p class="info-item-value">
                  ${y}
                </p>
              </li>
              <li class="gallery-item-info">
                <p class="info-item-title">
                  Downloads
                </p>
                <p class="info-item-value">
                  ${h}
                </p>
              </li>
            </ul>
          </a>
        </li>
      `).join("");q.innerHTML=s,$.refresh()},m=document.querySelector(".search-form"),n=document.querySelector(".loader-wrapper"),l=new URL(window.location),p=l.searchParams,f=p.get("q"),u=p.get("per_page")?p.get("per_page"):15;f&&g(f);m.addEventListener("submit",o=>{o.preventDefault();const t=new FormData(m).get("query").trim();if(t.length<1){c.error({title:"Error",position:"topRight",message:"Query field cannot be empty!"});return}l.searchParams.set("q",t),l.searchParams.set("per_page",u),window.history.pushState({},"",l),g(t,u)});function g(o,s){n.classList.add("show"),P(o,s).then(t=>{n.classList.remove("show"),t.hits.length<1&&c.error({title:"Error",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),v(t.hits)}).catch(t=>{n.classList.remove("show"),c.error({title:"Error",position:"topRight",message:"Failed to load images. Please try again!"})})}
//# sourceMappingURL=index.js.map
