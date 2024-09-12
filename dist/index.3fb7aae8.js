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

//# sourceMappingURL=index.3fb7aae8.js.map
