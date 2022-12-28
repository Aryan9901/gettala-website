/** @format */

var tl = gsap.timeline();

tl.from("#page1 h1", {
	y: 100,
	opacity: 0,
	duration: 0.6,
	ease: Expo.easeInOut.power3,
})
	.from("#page1 h2", {
		y: 50,
		opacity: 0,
		duration: 0.5,
		delay: -0.1,
		ease: Expo.easeInOut.power2,
	})
	.from("#page1 h3", {
		y: 50,
		opacity: 0,
		duration: 0.5,
		delay: -0.2,
		ease: Expo.easeInOut.power2,
	});

gsap.to("#page2 img", {
	scale: 1,
	scrollTrigger: {
		trigger: "#page2 img",
		scroller: "body",
		end: "bottom 30%",
		start: "top 80%",
		scrub: 2,
	},
});
gsap.to("#page2 h1", {
	rotateX: 0,
	opacity: 1,
	duration: 1,
	scrollTrigger: {
		trigger: "#page2 h1",
		scroller: "body",
		// markers: true,
		scrub: 2,
		start: "top 60%",
		end: "top 15%",
	},
});
