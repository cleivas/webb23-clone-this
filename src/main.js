import anime from "animejs";

anime({
    targets: 'div',
    backgroundColor: 'hsl(0, 70%, 50%)',
    borderRadius: '50%',
    rotate: 360,
    duration: 1000,
    easing: 'easeInOutSine',
    direction: 'alternate',
    loop: true
});


// console.log('funkar?')