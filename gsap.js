let tl = gsap.timeline({scrollTrigger:{

    trigger:".sec-2",
    // markers:true,
    start:"50% 50%",
    end:"100% 50%",
    
    scrub:1,
    pin:true,


}})


tl.to(".div-top",{
    top:"-50%",
},'a')

tl.to(".div-text-1",{
    marginTop:"50%",
},'a')



tl.to(".div-bottom",{
    bottom:"-50%",
},'a')


// gsap.to(".div-top",{

//     scrollTrigger:{

// trigger:".div-top",
// markers:true,
// start:"top 30%",

// scrub:2,
// pin:true,

//     },

//     top:"-100%",
//     duration:5.5,
//     delay:1,
// }) 


// gsap.to(".div-bottom",{

//     scrollTrigger:{

// trigger:".div-bottom",
// scrub:true,
// pin:true,


//     },

//     bottom:"-100%",
//     duration:5.5,
//     delay:1,
// }) 


