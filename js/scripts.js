// gsap.to
//   ('.wheel', {rotate: 360, repeat: -1, duration: .15 });

gsap.to 
  ('.hamster', {x: 5, y: -5, rotate: 10, ease:"", repeat:-1, duration: .15, yoyo: true});

gsap.to
 ('#ear', {x: -5, y: 5, rotate: 10, ease:"", repeat: -1, duration: .15, yoyo: true});  

gsap.to
 ('#eye', {x: -5, y: 10, rotate: 10, ease:"", repeat: -1, duration: .15, yoyo: true});

gsap.to( '.wheel', {
  rotate: 360,
  repeat: -1,
  transformOrigin: '50% 50%',
  ease:"linear",
  duration: 1
  });
