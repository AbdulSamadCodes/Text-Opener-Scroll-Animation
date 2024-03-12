
//===========Function to handle scroll animation===========

function scrollAnimation(){

  let t1 = gsap.timeline({scrollTrigger:{
    trigger:".main-container",
    start:"50% 50%",
    end:"100% 50%",
    pin:true,
    scrub:2,
    markers:2
  }})

  t1.to(".top",{
    top:"-50%"
  },"scroll")

  t1.to(".bottom",{
    bottom:"-50%"
  },"scroll")

  t1.to(".center-content" , {
    bottom:"0"
  },"scroll")
}

scrollAnimation();
