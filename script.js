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
        markers: true,
        start: "top -30%",
        end: "top -80%",
        scrub: 2
    }
})