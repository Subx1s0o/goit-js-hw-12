import{a as w,S,i as c}from"./assets/vendor-bffe7c41.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const P="43901454-2f0f1ad212df2deb6dd93021b";let l=1,h=15;const y=async i=>{try{const t=new URLSearchParams({image_type:"photo",orientation:"horizontal",safesearch:!0,page:l,per_page:h});return(await w.get(`https://pixabay.com/api/?key=${P}&q=${i}&${t}`)).data}catch(t){throw console.error("Помилка при отриманні даних",t),t}};function p(i){l=i}function L(){return l}const C=new S(".card-link",{inlineStyles:!1,captionsData:"alt",captionDelay:250,disableScroll:!0}),m=(i,t)=>{const s=i.map(({largeImageURL:o,likes:e,comments:r,views:a,downloads:f,tags:b,webformatURL:v})=>`<li class="card">
                <a class="card-link" href="${o}">
                    <img  class="card-image" src="${v}" alt="${b}" /> 
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
                            <p>${f}</p>
                        </li>
                    </ul>
                </div>
            </li>`).join("");t.insertAdjacentHTML("beforeend",s),C.refresh()},$=document.querySelector("form"),q=document.querySelector("input[data-search]"),d=document.querySelector(".loader-div"),u=document.querySelector(".list"),n=document.querySelector(".show-more");let g="";$.addEventListener("submit",async i=>{i.preventDefault(),d.style.visibility="visible";const t=q.value.trim();u.innerHTML="",p(1);try{const s=await y(t);g=t;const o=s.hits,e=Math.ceil(s.totalHits/h);o.length!==0&&t!==""?(m(o,u),e>l?n.style.visibility="visible":n.style.visibility="hidden",console.log(e-l)):c.show({title:"❌",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",backgroundColor:"#E25757",position:"topRight"})}catch(s){console.error("Помилка при рендері картинок",s),n.style.visibility="hidden",c.show({title:"❌",message:"Sorry, check your internet connection!",messageColor:"white",backgroundColor:"#E25757",position:"topRight",timeout:5e3})}finally{d.style.visibility="hidden",i.target.reset()}});n.addEventListener("click",async()=>{d.style.visibility="visible",p(L()+1);try{const i=await y(g),t=i.hits;m(t,u);const s=Math.ceil(i.totalHits/h);console.log(s-l),s>l?n.style.visibility="visible":c.show({title:"❌",message:"We're sorry, but you've reached the end of search results.",messageColor:"white",backgroundColor:"#E25757",position:"topRight",timeout:5e3})}catch(i){console.error("Помилка при рендері картинок",i),c.show({title:"❌",message:"Sorry, check your internet connection!",messageColor:"white",backgroundColor:"#E25757",position:"topRight",timeout:5e3})}finally{d.style.visibility="hidden"}});
//# sourceMappingURL=commonHelpers.js.map
