/** @format */

gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
	el: document.querySelector("#main"),
	smooth: true,
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
	scrollTop(value) {
		return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
	}, // we don't have to define a scrollLeft because we're only scrolling vertically.
	getBoundingClientRect() {
		return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
	},
	// LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
	pinType: document.querySelector("#main").style.transform ? "transform" : "fixed",
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

// my code start

var tl = gsap.timeline();

/** @format */

function timeline() {
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
}

function scrolltrigger() {
	gsap.from("#page4", {
		x: -50,
		opacity: 0,
		scrollTrigger: {
			trigger: "#page4",
			scroller: "#main",
			// markers: true,
			start: "top 70%",
			scrub: 2,
		},
	});

	gsap.to("#page2 img", {
		scale: 1,
		scrollTrigger: {
			trigger: "#page2 img",
			scroller: "#main",
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
			scroller: "#main",
			// markers: true,
			scrub: 2,
			start: "top 60%",
			end: "top 15%",
		},
	});

	var slide1 = document.querySelectorAll("#page6 .slide1-of-h1 h1");
	slide1.forEach(function (elem) {
		gsap.to(elem, {
			transform: "translateX(-100%)",
			duration: 4,
			scrollTrigger: {
				trigger: "#page6",
				scroller: "#main",
				start: "top 95%",
				// markers: true,
				scrub: 2,
			},
		});
	});
	var slide2 = document.querySelectorAll("#page6 .slide2-of-h1 h1");
	slide2.forEach(function (elem) {
		gsap.to(elem, {
			transform: "translateX(0)",
			duration: 4,
			scrollTrigger: {
				trigger: "#page6",
				scroller: "#main",
				start: "top 95%",
				// markers: true,
				scrub: 2,
			},
		});
	});
}

timeline();
scrolltrigger();

gsap.to("#part2 #line", {
	width: "100%",
	duration: 2,
	scrollTrigger: {
		trigger: "#line",
		scroller: "#main",
		// markers: true,
		scrub: 2,
		start: "top 90%",
		end: "top 10%",
	},
});
