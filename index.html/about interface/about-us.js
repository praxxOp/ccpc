const tl = gsap.timeline({ defaults: { ease: "power1.out" } }); //to create a timeline
tl.to('.text', { y: "0%", duration: 1, stagger: 0.25 }); //here we tell that how y-axis is gonna move {1st:text, 2nd:background,3rd:showing website}

tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo(".mainlogo", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".points", { opacity: 0 }, { opacity: 1, duration: 1 } , "-=1");
tl.fromTo("h2", { opacity: 0 }, { opacity: 1, duration: 1 } , "-=1");
tl.to(".logo",{ position : "sticky"},)



