var tr = gsap.timeline();
tr.from(("nav h3"),{
    y:-100,
    duration:1,
    opacity:0,
    delay:0.5,
    stagger:0.4
})
tr.from("#text h1",{
    x:-400,
    duration:1,
    delay:0.2,
    stagger:0.8,
    opacity:0
})
tr.from("main img",{
    x:100,
    rotate:45,
    duration:0.5,
    stagger:0.5,
    opacity:0
})
tr.from("main h1:nth-child(6)",{
    y:15,
    duration:1,
    opacity:0
})
tr.from("main h1:nth-child(7)",{
    y:15,
    duration:1,
    opacity:0
})