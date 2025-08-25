gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// page1==================================================
gsap.fromTo(
  ".page-1-content h2",
  { y: 100, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: "power3.out",
    delay: 0.3
  }
);
gsap.fromTo(
  ".page-1-content span",
  { y: 100, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: "power3.out",
    stagger: 0.2,
    delay: 0.35
  }
);
// page1 end==================================================

// page3 ===================================================
// 초기상태
gsap.set(".page-3-txt-list > li", {
  x: 100,
  opacity: 0
});

// 애니메이션 실행
gsap.to(".page-3-txt-list > li", {
  x: 0,
  opacity: 1,
  duration: 1,
  ease: "power3.out",
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#page-3",
    start: "center center",
    toggleActions: "play reverse play reverse"
    // , markers: true
  }
});
// page3 end===================================================
