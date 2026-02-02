document.querySelectorAll(".robot-card").forEach(card => {
    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 15;
        const rotateY = (x - centerX) / 15;

        card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "rotateX(0) rotateY(0) scale(1)";
    });
});
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
    reveals.forEach(el => {
        const top = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (top < windowHeight - 100) {
            el.classList.add("active");
        }
    });
});
document.addEventListener("mousemove", e => {
    const glow = document.createElement("div");
    glow.className = "cursor-glow";
    glow.style.left = e.pageX + "px";
    glow.style.top = e.pageY + "px";
    document.body.appendChild(glow);

    setTimeout(() => glow.remove(), 300);
});
document.querySelectorAll("button").forEach(btn=>{
    btn.addEventListener("mouseenter", ()=>{
        btn.style.boxShadow = "0 0 40px #00f6ff";
    });
    btn.addEventListener("mouseleave", ()=>{
        btn.style.boxShadow = "0 0 25px #00f6ff";
    });
});
// Neon particle generator
const footer = document.querySelector('.footer');

for(let i=0; i<40; i++){
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random()*100 + '%';
    particle.style.bottom = Math.random()*50 + 'px';
    particle.style.width = particle.style.height = Math.random()*4 + 2 + 'px';
    footer.appendChild(particle);
}
