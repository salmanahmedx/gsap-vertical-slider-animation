window.addEventListener("load", animation)

function animation() {
    const TL = gsap.timeline({
        repeat: -1
    })

    TL
        .from(".vertical-slider p", {
            y: 100,
            autoAlpha: 0,
            duration: 0.75,
            stagger: 0.75
        })
        .to(".vertical-slider p", {
            y: -100,
            autoAlpha: 0,
            duration: 0.75,
            stagger: 0.75
            //absolute value (0.75) because we want to animate the exit animation just after a particular p animation ends. or else one animations fully finished and then the other starts
            //here first p animation ends and and 0.75s stagger starts - on the other hand, after -.75s the second animation completes till its own stagger period when the first animation begins again. repeat.
        }, 0.75)
}