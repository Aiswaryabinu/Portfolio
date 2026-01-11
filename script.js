// Cartoon Portfolio Scripts

document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    // 1. Hero Avatar Bounce (Idle Animation)
    gsap.to("#hero-avatar", {
        y: -20,
        duration: 0.8,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
    });

    // 2. Comic Panels Entrance
    // Pop them in one by one when scrolling
    const panels = document.querySelectorAll(".panel");

    panels.forEach((panel, i) => {
        gsap.from(panel, {
            scrollTrigger: {
                trigger: panel,
                start: "top 80%",
                toggleActions: "play none none reverse"
            },
            scale: 0.5,
            opacity: 0,
            rotation: Math.random() * 10 - 5, // Random tilt
            duration: 0.5,
            delay: i * 0.1,
            ease: "back.out(1.7)"
        });
    });

    // 3. Project Cards Hover Effect (JS enhanced tilt optional, but CSS handles hard shadow well)
    // Let's add a "Pow!" visual effect on click perhaps?
    const btns = document.querySelectorAll(".btn-comic");
    btns.forEach(btn => {
        btn.addEventListener("mousedown", () => {
            gsap.to(btn, { scale: 0.9, duration: 0.1 });
        });
        btn.addEventListener("mouseup", () => {
            gsap.to(btn, { scale: 1, duration: 0.1 });
        });
    });
});
