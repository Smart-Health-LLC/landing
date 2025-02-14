/*=============== SHOW MENU ===============*/ const navMenu = document.getElementById("nav-menu"), navToggle = document.getElementById("nav-toggle"), navClose = document.getElementById("nav-close");
/*===== MENU SHOW =====*/ /* Validate if constant exists */ if (navToggle) navToggle.addEventListener("click", ()=>{
    navMenu.classList.add("show-menu");
});
/*===== MENU HIDDEN =====*/ /* Validate if constant exists */ if (navClose) navClose.addEventListener("click", ()=>{
    navMenu.classList.remove("show-menu");
});
/*=============== REMOVE MENU MOBILE ===============*/ const navLink = document.querySelectorAll(".nav__link");
function linkAction() {
    const navMenu = document.getElementById("nav-menu");
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove("show-menu");
}
navLink.forEach((n)=>n.addEventListener("click", linkAction));
/*=============== CHANGE BACKGROUND HEADER ===============*/ function scrollHeader() {
    const header = document.getElementById("header");
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 50) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);
/*=============== SHOW SCROLL UP ===============*/ function scrollUp() {
    const scrollUp = document.getElementById("scroll-up");
    // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 200) scrollUp.classList.add("show-scroll");
    else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/ const sections = document.querySelectorAll("section[id]");
function scrollActive() {
    const scrollY = window.pageYOffset;
    sections.forEach((current)=>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute("id");
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.add("active-link");
        else document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.remove("active-link");
    });
}
window.addEventListener("scroll", scrollActive);
/*=============== SCROLL REVEAL ANIMATION ===============*/ const sr = ScrollReveal({
    distance: "60px",
    duration: 2500,
    delay: 400
});
sr.reveal(`.home__header, .section__title`, {
    delay: 600
});
sr.reveal(`.home__footer`, {
    delay: 700
});
sr.reveal(`.home__img`, {
    delay: 900,
    origin: "top"
});
sr.reveal(`.sponsor__img, .products__card, .footer__logo, .footer__content, .footer__copy`, {
    origin: "top",
    interval: 100
});
sr.reveal(`.specs__data, .discount__animate`, {
    origin: "left",
    interval: 100
});
sr.reveal(`.specs__img, .discount__img`, {
    origin: "right"
});
sr.reveal(`.case__img`, {
    origin: "top"
});
sr.reveal(`.reveal-top`, {
    origin: "top"
});
sr.reveal(`.case__data`);
// ——————————————————————————————————————————————————
// TextScramble
// ——————————————————————————————————————————————————
class TextScramble {
    constructor(el){
        this.el = el;
        this.chars = "!<>-_\\/[]{}\u2014=+*^?#________";
        this.update = this.update.bind(this);
    }
    setText(newText) {
        const oldText = this.el.innerText;
        const length = Math.max(oldText.length, newText.length);
        const promise = new Promise((resolve)=>this.resolve = resolve);
        this.queue = [];
        for(let i = 0; i < length; i++){
            const from = oldText[i] || "";
            const to = newText[i] || "";
            const start = Math.floor(Math.random() * 40);
            const end = start + Math.floor(Math.random() * 40);
            this.queue.push({
                from,
                to,
                start,
                end
            });
        }
        cancelAnimationFrame(this.frameRequest);
        this.frame = 0;
        this.update();
        return promise;
    }
    update() {
        let output = "";
        let complete = 0;
        for(let i = 0, n = this.queue.length; i < n; i++){
            let { from, to, start, end, char } = this.queue[i];
            if (this.frame >= end) {
                complete++;
                output += to;
            } else if (this.frame >= start) {
                if (!char || Math.random() < 0.28) {
                    char = this.randomChar();
                    this.queue[i].char = char;
                }
                output += `<span class="dud">${char}</span>`;
            } else output += from;
        }
        this.el.innerHTML = output;
        if (complete === this.queue.length) this.resolve();
        else {
            this.frameRequest = requestAnimationFrame(this.update);
            this.frame++;
        }
    }
    randomChar() {
        return this.chars[Math.floor(Math.random() * this.chars.length)];
    }
}
const phrases = [
    "\u0412 \u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0439 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0435",
    "\u041D\u0430 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0439 \u0441\u0442\u0430\u0434\u0438\u0438 \u0442\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F",
    "\u0420\u0435\u043B\u0438\u0437 \u0431\u043B\u0438\u0437\u043E\u043A"
];
const el = document.querySelector(".text");
const fx = new TextScramble(el);
let counter = 0;
const next = ()=>{
    fx.setText(phrases[counter]).then(()=>{
        setTimeout(next, 3800);
    });
    counter = (counter + 1) % phrases.length;
};
next();
// default: light
// if user switched manually: user selected theme
// the setting is stored in the local storage
const btn = document.querySelector("#toggle-theme");
const lightThemeName = "light";
const darkThemeName = "dark";
const themeKeyName = "theme";
let currentTheme = localStorage.getItem(themeKeyName);
// default: light
if (typeof currentTheme === "undefined") currentTheme = lightThemeName;
function toggleTheme() {
    if (currentTheme == lightThemeName) {
        // switch to dark
        document.body.classList.remove(lightThemeName);
        document.body.classList.add(darkThemeName);
        currentTheme = darkThemeName;
    } else {
        // switch do light
        document.body.classList.remove(darkThemeName);
        document.body.classList.add(lightThemeName);
        currentTheme = lightThemeName;
    }
    localStorage.setItem(themeKeyName, currentTheme);
}
toggleTheme();
btn.addEventListener("click", function() {
    console.log("broo");
    toggleTheme(currentTheme);
});

//# sourceMappingURL=index.ddbb3570.js.map
