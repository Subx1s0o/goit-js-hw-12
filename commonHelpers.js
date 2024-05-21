import{a as P,S,i as n}from"./assets/vendor-bffe7c41.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const L="43901454-2f0f1ad212df2deb6dd93021b";let h=1,y=15;const p=async i=>{try{const t=new URLSearchParams({image_type:"photo",orientation:"horizontal",safesearch:!0,page:h,per_page:y});return(await P.get(`https://pixabay.com/api/?key=${L}&q=${i}&${t}`)).data}catch(t){throw console.error("Помилка при отриманні даних",t),t}};function m(i){h=i}function d(){return h}const C=new S(".card-link",{inlineStyles:!1,captionsData:"alt",captionDelay:250,disableScroll:!0}),g=(i,t)=>{const s=i.map(({largeImageURL:o,likes:e,comments:r,views:a,downloads:b,tags:v,webformatURL:w})=>`<li class="card">
                <a class="card-link" href="${o}">
                    <img  class="card-image" src="${w}" alt="${v}" /> 
                </a>
                <div class="main-content">
                    <ul class="card-list">
                        <li class="card-list-li">
                            <h3>
                                likes
                            </h3>
                            <p>${e}</p>
                        </li>
                        <li class="card-list-li">
                            <h3>
                                views
                            </h3>
                            <p>${a}</p>
                        </li>
                        <li class="card-list-li">
                            <h3>
                                comments
                            </h3>
                            <p>${r}</p>
                        </li>
                        <li class="card-list-li">
                            <h3>
                                downloads
                            </h3>
                            <p>${b}</p>
                        </li>
                    </ul>
                </div>
            </li>`).join("");t.insertAdjacentHTML("beforeend",s),C.refresh()},$=document.querySelector("form"),q=document.querySelector("input[data-search]"),c=document.querySelector(".loader-div"),u=document.querySelector(".list"),l=document.querySelector(".show-more");let f="";$.addEventListener("submit",async i=>{i.preventDefault(),c.style.visibility="visible";const t=q.value.trim();u.innerHTML="",m(1);try{const s=await p(t);f=t;const o=s.hits,e=Math.ceil(s.totalHits/y);o.length!==0&&t!==""?(g(o,u),e>d()?l.style.visibility="visible":l.style.visibility="hidden"):n.show({title:"❌",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",backgroundColor:"#E25757",position:"topRight"})}catch(s){console.error("Помилка при рендері картинок",s),l.style.visibility="hidden",n.show({title:"❌",message:"Sorry, check your internet connection!",messageColor:"white",backgroundColor:"#E25757",position:"topRight",timeout:5e3})}finally{c.style.visibility="hidden",i.target.reset()}});l.addEventListener("click",async()=>{c.style.visibility="visible",m(d()+1);try{const i=await p(f),t=i.hits;g(t,u),Math.ceil(i.totalHits/y)>d()?l.style.visibility="visible":n.show({title:"❌",message:"We're sorry, but you've reached the end of search results.",messageColor:"white",backgroundColor:"#E25757",position:"topRight",timeout:5e3})}catch(i){console.error("Помилка при рендері картинок",i),n.show({title:"❌",message:"Sorry, check your internet connection!",messageColor:"white",backgroundColor:"#E25757",position:"topRight",timeout:5e3})}finally{c.style.visibility="hidden"}});
//# sourceMappingURL=commonHelpers.js.map
