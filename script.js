var crsr = document.querySelector("#cursor");
document.addEventListener("mousemove", function(dts){
    crsr.style.left = dts.x + "px"
    crsr.style.top = dts.y + "px"
})

var crsrblr = document.querySelector("#cursor-blur");
document.addEventListener("mousemove", function(dts){
    crsrblr.style.left = dts.x - 200 + "px"
    crsrblr.style.top = dts.y - 200 + "px"
})

var h4all = document.querySelectorAll("#nav h4");
h4all.forEach( (elem) => {
    elem.addEventListener("mouseenter", function(){
        crsr.style.scale = 3
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave", function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid #95c11e"
        crsr.style.backgroundColor = "#95c11e"
    })
});
gsap.to('#nav',{
    backgroundColor: "#000",
    height: "110px",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1,
    }
})

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger:{
        trigger: "#main",
        scroller: "body",
        // markers: true,
        start: "top -30%",
        end: "top -80%",
        scrub: 2
    }
})

gsap.from("#about-us img, #about-us-in",{
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.4,
    scrollTrigger: {
        trigger: "#about-us",
        scroller: "body",
        start: "top 60%",
        end: "top 58%",
        scrub: 3,
    }
})

gsap.from(".cards",{
    scale: 0.8,
    opacity: 0,
    duration: 1,
    stagger: 0.4,
    scrollTrigger: {
        trigger: ".cards",
        scroller: "body",
        start: "top 60%",
        end: "top 58%",
        scrub: 3,
    }
})

gsap.from("#page4 h1", {
    y:50,
    scrollTrigger: {
        trigger: "#page4 h1",
        scroller: "body",
        start: "top 98%",
        end: "top 94%",
        scrub: 3,
    }
})