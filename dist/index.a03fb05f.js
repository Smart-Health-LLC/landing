const e=document.getElementById("nav-menu"),t=document.getElementById("nav-toggle"),s=document.getElementById("nav-close");function o(){document.getElementById("nav-menu").classList.remove("show-menu")}t&&t.addEventListener("click",()=>{e.classList.add("show-menu")}),s&&s.addEventListener("click",()=>{e.classList.remove("show-menu")}),document.querySelectorAll(".nav__link").forEach(e=>e.addEventListener("click",o)),window.addEventListener("scroll",function(){let e=document.getElementById("header");this.scrollY>=50?e.classList.add("scroll-header"):e.classList.remove("scroll-header")}),window.addEventListener("scroll",function(){let e=document.getElementById("scroll-up");this.scrollY>=200?e.classList.add("show-scroll"):e.classList.remove("show-scroll")});const n=document.querySelectorAll("section[id]");window.addEventListener("scroll",function(){let e=window.pageYOffset;n.forEach(t=>{let s=t.offsetHeight,o=t.offsetTop-50;sectionId=t.getAttribute("id"),e>o&&e<=o+s?document.querySelector(".nav__menu a[href*="+sectionId+"]").classList.add("active-link"):document.querySelector(".nav__menu a[href*="+sectionId+"]").classList.remove("active-link")})});const a=ScrollReveal({distance:"60px",duration:2500,delay:400});a.reveal(".home__header, .section__title",{delay:600}),a.reveal(".home__footer",{delay:700}),a.reveal(".home__img",{delay:900,origin:"top"}),a.reveal(".sponsor__img, .products__card, .footer__logo, .footer__content, .footer__copy",{origin:"top",interval:100}),a.reveal(".specs__data, .discount__animate",{origin:"left",interval:100}),a.reveal(".specs__img, .discount__img",{origin:"right"}),a.reveal(".case__img",{origin:"top"}),a.reveal(".reveal-top",{origin:"top"}),a.reveal(".case__data");const r=["В активной разработке"],i=document.querySelector(".text"),l=new class{constructor(e){this.el=e,this.chars="!<>-_\\/[]{}—=+*^?#________",this.update=this.update.bind(this)}setText(e){let t=this.el.innerText,s=Math.max(t.length,e.length),o=new Promise(e=>this.resolve=e);this.queue=[];for(let o=0;o<s;o++){let s=t[o]||"",n=e[o]||"",a=Math.floor(40*Math.random()),r=a+Math.floor(40*Math.random());this.queue.push({from:s,to:n,start:a,end:r})}return cancelAnimationFrame(this.frameRequest),this.frame=0,this.update(),o}update(){let e="",t=0;for(let s=0,o=this.queue.length;s<o;s++){let{from:o,to:n,start:a,end:r,char:i}=this.queue[s];this.frame>=r?(t++,e+=n):this.frame>=a?((!i||.28>Math.random())&&(i=this.randomChar(),this.queue[s].char=i),e+=`<span class="dud">${i}</span>`):e+=o}this.el.innerHTML=e,t===this.queue.length?this.resolve():(this.frameRequest=requestAnimationFrame(this.update),this.frame++)}randomChar(){return this.chars[Math.floor(Math.random()*this.chars.length)]}}(i);let c=0;const d=()=>{l.setText(r[c]).then(()=>{setTimeout(d,3800)}),c=(c+1)%r.length};d();
//# sourceMappingURL=index.a03fb05f.js.map
