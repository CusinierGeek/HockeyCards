var B=Object.defineProperty;var J=(e,n,t)=>n in e?B(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var m=(e,n,t)=>(J(e,typeof n!="symbol"?n+"":n,t),t);(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const V=document.querySelector(".add-card"),H=window.matchMedia("(max-width: 768px)");class y{constructor(n,t,s,i,r,a,o,l,c){m(this,"id");m(this,"position");m(this,"name");m(this,"height");m(this,"age");m(this,"nbPartie");m(this,"nbPoint");m(this,"number");m(this,"pays");this.id=n,this.position=t,this.name=s,this.height=i,this.age=r,this.nbPartie=a,this.nbPoint=o,this.number=l,this.pays=c}}const S=JSON.parse(localStorage.getItem("cardList")??"[]");if(!localStorage.getItem("cardList")){const e=new y("1","Ailier G","Alex Ovechkin",{feet:"6",inches:"3"},"1985-09-17","1140","1140","8","russie"),n=new y("2","Centre","Wayne Gretzky",{feet:"6",inches:"0"},"1961-01-26","1487","2857","99","canada"),t=new y("3","Ailier D","Jaromir Jagr",{feet:"6",inches:"3"},"1972-02-15","1733","1921","68","republiquetcheque"),s=new y("4","Ailier D","Teemu Selanne",{feet:"6",inches:"0"},"1970-07-03","1451","1457","8","finlande"),i=new y("5","Centre","Mario Lemieux",{feet:"6",inches:"4"},"1965-10-05","915","1723","66","canada"),r=new y("6","Défenseur","Bobby Orr",{feet:"6",inches:"0"},"1948-03-20","915","915","2","canada"),a=new y("7","Centre","Sidney Crosby",{feet:"5",inches:"11"},"1987-08-07","1270","1288","51","canada"),o=new y("8","Ailier G","Henrik Lundqvist",{feet:"6",inches:"1"},"1982-03-02","887","887","0","suede"),l=new y("9","Centre","Connor McDavid",{feet:"6",inches:"1"},"1997-01-13","574","574","1","canada"),c=new y("10","Ailier G","Patrick Kane",{feet:"5",inches:"10"},"1988-11-19","1072","1072","0","usa");S.push(e,n,t,s,i,r,a,o,l,c),localStorage.setItem("cardList",JSON.stringify(S))}const T=e=>{const n=e.querySelector("#position"),t=e.querySelector('.name input[type="text"]'),s=e.querySelector('.height input[type="number"]:nth-child(2)'),i=e.querySelector('.height input[type="number"]:nth-child(4)'),r=e.querySelector(".input-date"),a=e.querySelector('.nb-partie input[type="number"]'),o=e.querySelector('.nb-point input[type="number"]'),l=e.querySelector('.number input[type="number"]'),c=e.querySelector(".card"),u=e.querySelector(".card-back"),p=c.querySelector(".position p"),h=c.querySelector(".name span"),f=c.querySelector("#inches"),b=c.querySelector("#feets"),P=c.querySelector(".date-naissance span"),v=c.querySelector(".nb-partie span"),q=c.querySelector(".nb-point span"),C=c.querySelector(".number p"),x=u.querySelector(".moyenne-point span"),L=c.querySelector(".pays"),g=e.querySelector("#pays"),w=L.dataset.pays;n.value=p.textContent||"",t.value=h.textContent||"",i.value=f.textContent||"",s.value=b.textContent||"",r.value=P.textContent||"",a.value=v.textContent||"",o.value=q.textContent||"",l.value=C.textContent||"",g.value=w,o.addEventListener("input",function(){a.value!=="0"?x.textContent=(+o.value/+a.value).toFixed(2):x.textContent="0"}),a.addEventListener("input",function(){a.value!=="0"&&(x.textContent=(+o.value/+a.value).toFixed(2))})},I=e=>{var t;const n=e.querySelector(".card");if(n){const s=n.querySelector(".position p"),i=n.querySelector(".name span"),r=n.querySelector("#inches"),a=n.querySelector("#feets"),o=n.querySelector(".date-naissance span"),l=n.querySelector(".nb-partie span"),c=n.querySelector(".nb-point span"),u=n.querySelector(".number p"),p=e.querySelector("#position"),h=e.querySelector('.name input[type="text"]'),f=e.querySelector('.height input[type="number"]:nth-child(2)'),b=e.querySelector('.height input[type="number"]:nth-child(4)'),P=e.querySelector(".input-date"),v=e.querySelector('.nb-partie input[type="number"]'),q=e.querySelector('.nb-point input[type="number"]'),C=e.querySelector('.number input[type="number"]'),x=n.querySelector(".moyenne-point span"),L=n.querySelector(".pays"),g=e.querySelector("#pays");if(h.value.length<3){alert("Veuillez entrer un nom d'une longueur minimale de 3 caractères");return}if(+f.value<4||+f.value>8){alert("Veuillez entrer une taille en pieds entre 4 et 8");return}if(+b.value<0||+b.value>11){alert("Veuillez entrer une taille en pouces entre 0 et 11");return}if(new Date(P.value)>new Date){alert("Veuillez entrer une date de naissance valide");return}if(+v.value<0){alert("Veuillez entrer un nombre de partie valide");return}if(+q.value<0){alert("Veuillez entrer un nombre de point valide");return}if(+C.value<0||+C.value>99){alert("Veuillez entrer un numéro de maillot entre 0 et 99");return}L.dataset.pays=g.value,L.setAttribute("src",`images/${g.value}.png`),L.setAttribute("alt",g.value),L.textContent=g.value,s.textContent=p.value,i.textContent=h.value,r.textContent=b.value,a.textContent=f.value,o.textContent=P.value,l.textContent=v.value,c.textContent=q.value,u.textContent=C.value,v.value!=="0"?x.textContent=(+q.value/+v.value).toFixed(2):x.textContent="0";const M=e.getAttribute("id"),d=S.find(E=>E.id===M);if(d){d.position=p.value,d.name=h.value,d.height.feet=f.value,d.height.inches=b.value,d.age=P.value,d.nbPartie=v.value,d.nbPoint=q.value,d.number=C.value,d.pays=g.value,localStorage.setItem("cardList",JSON.stringify(S)),e.classList.remove("card-open"),e.style.transform="translateX(0px) translateY(0px) scale(1,1)",(t=e.firstElementChild)==null||t.classList.add("hover-effect"),e.style.zIndex="60";const E=e.querySelector(".close");E==null||E.setAttribute("style","display: none")}}else alert("Erreur lors de la mise à jour de la carte")},A=e=>{const n=e.querySelector(".close");n==null||n.setAttribute("style","display: none"),e.addEventListener("click",function(){var i,r;if(this.classList.contains("card-open"))return;const t=this.querySelector(".close");if(t==null||t.setAttribute("style","display: block"),document.querySelectorAll(".close").forEach(function(a){a!=t&&a&&a.setAttribute("style","display: none")}),!H.matches){const a=document.querySelector(".card-open"),o=this.offsetWidth/2,l=this.offsetHeight/2,c=this.getBoundingClientRect(),u=window.innerWidth,p=window.innerHeight,h=u/2-o-c.left,f=p/2-l-c.top;this.style.transform=`translateX(${h}px) translateY(${f}px) scale(2,2) `,T(this),this.classList.add("card-open"),(i=this.firstElementChild)==null||i.classList.remove("hover-effect"),this.style.zIndex="70",a&&a!=this&&(a.classList.remove("card-open"),a.setAttribute("style","transform: translateX(0px) translateY(0px) scale(1,1)"),(r=a.firstElementChild)==null||r.classList.add("hover-effect"),a.setAttribute("style","z-index: 60"))}})},O=e=>{const n=o=>{var l;o.classList.remove("card-open"),o.style.transform="translateX(0px) translateY(0px) scale(1,1)",(l=o.firstElementChild)==null||l.classList.add("hover-effect"),o.style.zIndex="60",I(o)},t=e.querySelector(".close"),s=e.querySelector(".close-back");t.addEventListener("click",function(o){o.stopPropagation(),t.setAttribute("style","display: none"),n(e)}),s.addEventListener("click",function(o){o.stopPropagation(),n(e),t.setAttribute("style","display: none")}),e.addEventListener("click",function(o){if(o.target.classList.contains("modify")){let c=this.style.transform;this.style.transform=`${c} rotateY(180deg)`,e.querySelector(".name-input").focus()}});const i=o=>{const l=JSON.parse(localStorage.getItem("cardList")??"[]"),c=o.getAttribute("id"),u=l.findIndex(p=>p.id===c);l.splice(u,1),localStorage.setItem("cardList",JSON.stringify(l)),o.remove()};e.querySelector(".delete").addEventListener("click",function(o){o.stopPropagation(),i(e)}),e.querySelector("#valider").addEventListener("click",function(o){o.stopPropagation(),I(e)})},N=e=>{const t={...{id:Math.random().toString(36).substr(2,9)+"-"+Date.now(),name:"Jonh Doe",position:"Centre",pays:"canada",height:{feet:"6",inches:"8"},age:"1994-07-07",nbPartie:"1",nbPoint:"1",number:"23"},...e},s=document.createElement("div");return s.classList.add("flip-card"),s.setAttribute("id",t.id),s.innerHTML=`
        <div class="card hover-effect shadow">
            <div  class="card-top">
                <div>
                    <img class="close" src="images/x-symbol.png" />
                </div>
                <div class="position">
                    <p>${t.position}</p>
                </div>
                <img data-pays="${t.pays}" src="./images/${t.pays}.png" class="pays" />
            </div>
            <div class="card-bottom">
                <div class="name">
                    <p><span>${t.name}</span> <img class="modify" src="images/edit-new-icon-22.png" alt="" /> <img class="delete" src="images/delete.png" alt="" /></p>
                </div>
                <div class="height">
                <p>Grandeur: <span id="feets">${t.height.feet}</span>,<span id="inches">${t.height.inches}</span> '</p>

                </div>
                <div class="date-naissance">
                    <p>Age: <span>${t.age}</span></p>
                </div>
                <div class="nb-partie">
                    <p>Nb partie: <span>${t.nbPartie}</span></p>
                </div>
                <div class="nb-point">
                    <p>Nb points: <span>${t.nbPoint}</span></p>
                </div>
                <div class="moyenne-point">
                <p>Moyenne points/match: <span>${(+t.nbPoint/+t.nbPartie).toFixed(2)}</span></p>
                </div>
                <div class="number">
                    <p>${t.number}</p>
                </div>
            </div>
        </div>
        <div class="card-back shadow">
            <div class="card-top">
                <div>
                    <img class="close-back" src="images/x-symbol.png" />
                </div>
                <div class="position">
                    <p>
                        <select class="position-select" name="position" id="position">
                            <option class="option" value="Centre">Centre</option>
                            <option class="option" value="Ailier G">Ailier G</option>
                            <option class="option" value="Ailier D">Ailier D</option>
                            <option class="option" value="Defenseur D">Defenseur D</option>
                            <option class="option" value="Defenseur G">Defenseur G</option>
                            <option class="option" value="Gardien">Gardien</option>
                        </select>
                    </p>
                </div>
                <select class="pays-select" name="pays" id="pays">
                    <option class="option" value="canada">Canada</option>
                    <option class="option" value="usa">USA</option>
                    <option class="option" value="suede">Suède</option>
                    <option class="option" value="finlande">Finlande</option>
                    <option class="option" value="russie">Russie</option>
                    <option class="option" value="republiquetcheque">République Tchèque</option>
                    <option class="option" value="suisse">Suisse</option>
                </select>

            </div>
            <div class="card-bottom">
                <div class="name">
                    <input class="name-input" type="text" name="name-input"/>
                </div>
                <div class="height">
                    <p>
                        Grandeur: <br />
                        <input type="number" min="4" max="8" />pieds <br /><input type="number" min="0" max="11" /> pouces
                    </p>
                </div>
                <div class="date-naissance">
                    <p>Age: <input class="input-date" type="date" /></p>
                </div>
                <div class="nb-partie">
                    <p>Nb partie: <input type="number" /></p>
                </div>
                <div class="nb-point">
                    <p>Nb points: <input type="number" /></p>
                </div>
                <div class="moyenne-point">
                <p>Moyenne points/match: <span>${t.nbPoint&&t.nbPartie?(+t.nbPoint/+t.nbPartie).toFixed(2):"1"}</span></p>
                </div>
                <div class="number">
                    <p><input type="number" /></p>
                    <button class = "btn btn-2" id="valider">Valider</button>
                </div>
            </div>

        `,s},k=e=>{const n=N(e),t=document.querySelector(".add-card"),s=t==null?void 0:t.parentNode;s==null||s.insertBefore(n,t),O(n),A(n)};S.forEach(e=>{k(e)});const $=function(e){e.addEventListener("click",function(){const n=document.querySelector(".add-card"),t=n.parentNode,s=N({}),i=s.getAttribute("id"),r=s.querySelector(".name .modify"),a=s.querySelector(".position-select"),o=s.querySelector(".pays-select"),l=s.querySelector(".height input"),c=s.querySelector(".date-naissance input"),u=s.querySelector(".nb-partie input"),p=s.querySelector(".nb-point input"),h=s.querySelector(".number input");t.insertBefore(s,n),O(s),A(s),s.click(),s.querySelector(".name .modify").click();const b={id:i||"",name:r.textContent||"",position:a.value,pays:o.value,height:{feet:l.value,inches:l.value},age:c.value,nbPartie:u.value,nbPoint:p.value,number:h.value};S.push(b),localStorage.setItem("cardList",JSON.stringify(S))})};$(V);const F=document.querySelector("#switch");F.addEventListener("change",W);function W(){const e=JSON.parse(localStorage.getItem("cardList")??"[]"),n=F.checked?e.slice().sort((t,s)=>+s.nbPoint-+t.nbPoint):e;G(n)}const z=document.getElementById("search-input");z.addEventListener("input",Y);function Y(){const e=z.value.toLowerCase(),t=JSON.parse(localStorage.getItem("cardList")??"[]").filter(s=>s.name.toLowerCase().includes(e)||s.position.toLowerCase().includes(e)||s.pays.toLowerCase().includes(e));G(t)}function G(e){const n=document.querySelector(".card-container");n.innerHTML=` <div class="add-card hover-effect">
    <span>+</span>
  </div>`;const t=document.querySelector(".add-card");$(t),e.forEach(s=>{k(s)})}
