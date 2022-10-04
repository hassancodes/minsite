const burger = document.querySelector("nav svg");
burger.addEventListener('click' , ()=>{
    burger.classList.toggle('active');
    if(burger.classList.contains("active")){
        gsap.to(".links", {x:"100%"});
        gsap.to(".link", {stroke:"white"})
        gsap.set("body", {overflow:"auto"});
        gsap.set("body", {overflowX:"hidden"});

    }else{
        gsap.to(".links", {x:"0%"});
        gsap.to(".line", {stroke:"black", y:"0"})
        gsap.fromTo(".links a", {opacity:0} , {opacity:1,y:"25",delay:0.15, stagger:0.35})
        gsap.set("body", {overflow:"hidden"});
    }

});

const videos = gsap.utils.toArray(".video");
gsap.set(videos,{opacity:0})
videos.forEach(video =>{
    ScrollTrigger.create({
        trigger : video,
        start : "top center",
        end : "bottom center",
        // markers : true,

        onEnter: () =>{
            gsap.to(video,{opacity:1});
            video.play();
        },

        onEnterBack: ()=>video.play(),
        onLeave: ()=>video.pause(),
        onLeaveBack: ()=> video.pause(),
    })

})