import{a as S,S as P,i as c}from"./assets/vendor-bffe7c41.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const C="43901454-2f0f1ad212df2deb6dd93021b";let h=1,y=15;const m=async s=>{try{const t=new URLSearchParams({image_type:"photo",orientation:"horizontal",safesearch:!0,page:h,per_page:y});return(await S.get(`https://pixabay.com/api/?key=${C}&q=${s}&${t}`)).data}catch(t){throw console.error("Помилка при отриманні даних",t),t}};function p(s){h=s}function g(){return h}const L=new P(".card-link",{inlineStyles:!1,captionsData:"alt",captionDelay:250,disableScroll:!0}),f=(s,t)=>{const o=s.map(({largeImageURL:i,likes:e,comments:r,views:l,downloads:b,tags:v,webformatURL:w})=>`<li class="card">
                <a class="card-link" href="${i}">
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
                            <p>${l}</p>
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
            </li>`).join("");t.insertAdjacentHTML("beforeend",o),L.refresh()},$=document.querySelector("form"),q=document.querySelector("input[data-search]"),d=document.querySelector(".loader-div"),u=document.querySelector(".list"),a=document.querySelector(".show-more");$.addEventListener("submit",async s=>{s.preventDefault(),d.style.display="flex",localStorage.removeItem("search");const t=q.value.trim();u.innerHTML="",p(1),a.style.visibility="hidden";try{const o=await m(t);localStorage.setItem("search",t);const i=o.hits,e=Math.ceil(o.totalHits/y);i.length!==0&&t!==""?(f(i,u),e>g()?a.style.visibility="visible":a.style.visibility="hidden"):c.show({title:"❌",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",backgroundColor:"#E25757",position:"topRight"})}catch(o){console.error("Помилка при рендері картинок",o),a.style.visibility="hidden",c.show({title:"❌",message:"Sorry, check your internet connection!",messageColor:"white",backgroundColor:"#E25757",position:"topRight",timeout:5e3})}finally{d.style.display="none",s.target.reset()}});let n=0;a.addEventListener("click",async()=>{d.style.display="flex";const s=localStorage.getItem("search"),t=g()+1;if(n&&t>n){c.show({title:"❌",message:"We're sorry, but you've reached the end of search results.",messageColor:"white",backgroundColor:"#E25757",position:"topRight",timeout:5e3}),d.style.display="none";return}p(t);try{const o=await m(s),i=o.hits;n||(n=Math.ceil(o.totalHits/y)),f(i,u),n>t?a.style.visibility="visible":(c.show({title:"❌",message:"We're sorry, but you've reached the end of search results.",messageColor:"white",backgroundColor:"#E25757",position:"topRight",timeout:5e3}),a.style.visibility="hidden");const e=document.querySelector(".card"),r=Math.floor(e.getBoundingClientRect().height);scrollBy(0,r*2)}catch(o){console.error("Помилка при рендері картинок",o),c.show({title:"❌",message:"Sorry, check your internet connection!",messageColor:"white",backgroundColor:"#E25757",position:"topRight",timeout:5e3})}finally{d.style.display="none"}});
//# sourceMappingURL=commonHelpers.js.map
