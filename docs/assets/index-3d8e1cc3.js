var J=Object.defineProperty;var M=(e,n,t)=>n in e?J(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var f=(e,n,t)=>(M(e,typeof n!="symbol"?n+"":n,t),t);(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();const V=document.querySelector(".add-card");class b{constructor(n,t,s,o,a,c,i,l,r){f(this,"id");f(this,"position");f(this,"name");f(this,"height");f(this,"age");f(this,"nbPartie");f(this,"nbPoint");f(this,"number");f(this,"pays");this.id=n,this.position=t,this.name=s,this.height=o,this.age=a,this.nbPartie=c,this.nbPoint=i,this.number=l,this.pays=r}}const S=JSON.parse(localStorage.getItem("cardList")??"[]");if(!localStorage.getItem("cardList")){const e=new b("1","Ailier G","Alex Ovechkin",{feet:"6",inches:"3"},"1985-09-17","1140","1140","8","russie"),n=new b("2","Centre","Wayne Gretzky",{feet:"6",inches:"0"},"1961-01-26","1487","2857","99","canada"),t=new b("3","Ailier D","Jaromir Jagr",{feet:"6",inches:"3"},"1972-02-15","1733","1921","68","republiquetcheque"),s=new b("4","Ailier D","Teemu Selanne",{feet:"6",inches:"0"},"1970-07-03","1451","1457","8","finlande"),o=new b("5","Centre","Mario Lemieux",{feet:"6",inches:"4"},"1965-10-05","915","1723","66","canada"),a=new b("6","Défenseur","Bobby Orr",{feet:"6",inches:"0"},"1948-03-20","915","915","2","canada"),c=new b("7","Centre","Sidney Crosby",{feet:"5",inches:"11"},"1987-08-07","1270","1288","51","canada"),i=new b("8","Ailier G","Henrik Lundqvist",{feet:"6",inches:"1"},"1982-03-02","887","887","0","suede"),l=new b("9","Centre","Connor McDavid",{feet:"6",inches:"1"},"1997-01-13","574","574","1","canada"),r=new b("10","Ailier G","Patrick Kane",{feet:"5",inches:"10"},"1988-11-19","1072","1072","0","usa");S.push(e,n,t,s,o,a,c,i,l,r),localStorage.setItem("cardList",JSON.stringify(S))}const H=e=>{const n=e.querySelector("#position"),t=e.querySelector('.name input[type="text"]'),s=e.querySelector('.height input[type="number"]:nth-child(2)'),o=e.querySelector('.height input[type="number"]:nth-child(4)'),a=e.querySelector(".input-date"),c=e.querySelector('.nb-partie input[type="number"]'),i=e.querySelector('.nb-point input[type="number"]'),l=e.querySelector('.number input[type="number"]'),r=e.querySelector(".card"),p=e.querySelector(".card-back"),d=r.querySelector(".position p"),y=r.querySelector(".name span"),m=r.querySelector("#inches"),u=r.querySelector("#feets"),P=r.querySelector(".date-naissance span"),v=r.querySelector(".nb-partie span"),q=r.querySelector(".nb-point span"),C=r.querySelector(".number p"),x=p.querySelector(".moyenne-point span"),L=r.querySelector(".pays"),g=e.querySelector("#pays"),I=L.dataset.pays;n.value=d.textContent||"",t.value=y.textContent||"",o.value=m.textContent||"",s.value=u.textContent||"",a.value=P.textContent||"",c.value=v.textContent||"",i.value=q.textContent||"",l.value=C.textContent||"",g.value=I,i.addEventListener("input",function(){c.value!=="0"?x.textContent=(+i.value/+c.value).toFixed(2):x.textContent="0"}),c.addEventListener("input",function(){c.value!=="0"&&(x.textContent=(+i.value/+c.value).toFixed(2))})},w=e=>{var t;const n=e.querySelector(".card");if(n){const s=n.querySelector(".position p"),o=n.querySelector(".name span"),a=n.querySelector("#inches"),c=n.querySelector("#feets"),i=n.querySelector(".date-naissance span"),l=n.querySelector(".nb-partie span"),r=n.querySelector(".nb-point span"),p=n.querySelector(".number p"),d=e.querySelector("#position"),y=e.querySelector('.name input[type="text"]'),m=e.querySelector('.height input[type="number"]:nth-child(2)'),u=e.querySelector('.height input[type="number"]:nth-child(4)'),P=e.querySelector(".input-date"),v=e.querySelector('.nb-partie input[type="number"]'),q=e.querySelector('.nb-point input[type="number"]'),C=e.querySelector('.number input[type="number"]'),x=n.querySelector(".moyenne-point span"),L=n.querySelector(".pays"),g=e.querySelector("#pays");if(y.value.length<3){alert("Veuillez entrer un nom d'une longueur minimale de 3 caractères");return}if(+m.value<4||+m.value>8){alert("Veuillez entrer une taille en pieds entre 4 et 8");return}if(+u.value<0||+u.value>11){alert("Veuillez entrer une taille en pouces entre 0 et 11");return}if(new Date(P.value)>new Date){alert("Veuillez entrer une date de naissance valide");return}if(+v.value<0){alert("Veuillez entrer un nombre de partie valide");return}if(+q.value<0){alert("Veuillez entrer un nombre de point valide");return}if(+C.value<0||+C.value>99){alert("Veuillez entrer un numéro de maillot entre 0 et 99");return}L.dataset.pays=g.value,L.setAttribute("src",`images/${g.value}.png`),L.setAttribute("alt",g.value),L.textContent=g.value,s.textContent=d.value,o.textContent=y.value,a.textContent=u.value,c.textContent=m.value,i.textContent=P.value,l.textContent=v.value,r.textContent=q.value,p.textContent=C.value,v.value!=="0"?x.textContent=(+q.value/+v.value).toFixed(2):x.textContent="0";const B=e.getAttribute("id"),h=S.find(E=>E.id===B);if(h){h.position=d.value,h.name=y.value,h.height.feet=m.value,h.height.inches=u.value,h.age=P.value,h.nbPartie=v.value,h.nbPoint=q.value,h.number=C.value,h.pays=g.value,localStorage.setItem("cardList",JSON.stringify(S)),e.classList.remove("card-open"),e.style.transform="translateX(0px) translateY(0px) scale(1,1)",(t=e.firstElementChild)==null||t.classList.add("hover-effect"),e.style.zIndex="60";const E=e.querySelector(".close");E==null||E.setAttribute("style","display: none")}}else alert("Erreur lors de la mise à jour de la carte")},A=e=>{const n=e.querySelector(".close");n==null||n.setAttribute("style","display: none"),e.addEventListener("click",function(){var y,m;if(this.classList.contains("card-open"))return;const t=this.querySelector(".close");t==null||t.setAttribute("style","display: block"),document.querySelectorAll(".close").forEach(function(u){u!=t&&u&&u.setAttribute("style","display: none")});const o=document.querySelector(".card-open"),a=this.offsetWidth/2,c=this.offsetHeight/2,i=this.getBoundingClientRect(),l=window.innerWidth,r=window.innerHeight,p=l/2-a-i.left,d=r/2-c-i.top;this.style.transform=`translateX(${p}px) translateY(${d}px) scale(2,2) `,H(this),this.classList.add("card-open"),(y=this.firstElementChild)==null||y.classList.remove("hover-effect"),this.style.zIndex="70",o&&o!=this&&(o.classList.remove("card-open"),o.setAttribute("style","transform: translateX(0px) translateY(0px) scale(1,1)"),(m=o.firstElementChild)==null||m.classList.add("hover-effect"),o.setAttribute("style","z-index: 60"))})},O=e=>{const n=i=>{var l;i.classList.remove("card-open"),i.style.transform="translateX(0px) translateY(0px) scale(1,1)",(l=i.firstElementChild)==null||l.classList.add("hover-effect"),i.style.zIndex="60",w(i)},t=e.querySelector(".close"),s=e.querySelector(".close-back");t.addEventListener("click",function(i){i.stopPropagation(),t.setAttribute("style","display: none"),n(e)}),s.addEventListener("click",function(i){i.stopPropagation(),n(e),t.setAttribute("style","display: none")}),e.addEventListener("click",function(i){if(i.target.classList.contains("modify")){let r=this.style.transform;this.style.transform=`${r} rotateY(180deg)`,e.querySelector(".name-input").focus()}});const o=i=>{const l=JSON.parse(localStorage.getItem("cardList")??"[]"),r=i.getAttribute("id"),p=l.findIndex(d=>d.id===r);l.splice(p,1),localStorage.setItem("cardList",JSON.stringify(l)),i.remove()};e.querySelector(".delete").addEventListener("click",function(i){i.stopPropagation(),o(e)}),e.querySelector("#valider").addEventListener("click",function(i){i.stopPropagation(),w(e)})},N=e=>{const t={...{id:Math.random().toString(36).substr(2,9)+"-"+Date.now(),name:"Jonh Doe",position:"Centre",pays:"canada",height:{feet:"6",inches:"8"},age:"1994-07-07",nbPartie:"1",nbPoint:"1",number:"23"},...e},s=document.createElement("div");return s.classList.add("flip-card"),s.setAttribute("id",t.id),s.innerHTML=`
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

        `,s},k=e=>{const n=N(e),t=document.querySelector(".add-card"),s=t==null?void 0:t.parentNode;s==null||s.insertBefore(n,t),O(n),A(n)};S.forEach(e=>{k(e)});const $=function(e){e.addEventListener("click",function(){const n=document.querySelector(".add-card"),t=n.parentNode,s=N({}),o=s.getAttribute("id"),a=s.querySelector(".name .modify"),c=s.querySelector(".position-select"),i=s.querySelector(".pays-select"),l=s.querySelector(".height input"),r=s.querySelector(".date-naissance input"),p=s.querySelector(".nb-partie input"),d=s.querySelector(".nb-point input"),y=s.querySelector(".number input");t.insertBefore(s,n),O(s),A(s),s.click(),s.querySelector(".name .modify").click();const u={id:o||"",name:a.textContent||"",position:c.value,pays:i.value,height:{feet:l.value,inches:l.value},age:r.value,nbPartie:p.value,nbPoint:d.value,number:y.value};S.push(u),localStorage.setItem("cardList",JSON.stringify(S))})};$(V);const F=document.querySelector("#switch");F.addEventListener("change",T);function T(){const e=JSON.parse(localStorage.getItem("cardList")??"[]"),n=F.checked?e.slice().sort((t,s)=>+s.nbPoint-+t.nbPoint):e;G(n)}const z=document.getElementById("search-input");z.addEventListener("input",W);function W(){const e=z.value.toLowerCase(),t=JSON.parse(localStorage.getItem("cardList")??"[]").filter(s=>s.name.toLowerCase().includes(e)||s.position.toLowerCase().includes(e)||s.pays.toLowerCase().includes(e));G(t)}function G(e){const n=document.querySelector(".card-container");n.innerHTML=` <div class="add-card hover-effect">
    <span>+</span>
  </div>`;const t=document.querySelector(".add-card");$(t),e.forEach(s=>{k(s)})}
