


function openmenu() {
	var flag = 0;
	var menu = document.querySelector("#menu");
	
	var line1 = document.getElementById("line1");
	
	var line2 = document.getElementById("line2");
	

	
	menu.addEventListener("click", () => {
		
		if (flag === 0) {
			document.getElementById("topmenu").style.transform = `translateY(0)`;
			
			document.getElementById("nav").style.color = "#232025";
			flag = 1;
			line1.style.backgroundColor = "#232025";
			line2.style.backgroundColor = "#232025";
			line1.style.transform = `rotate(40deg)`;
			line1.style.width = `70%`;
			line2.style.transform = `rotate(-40deg)`;
		} else {
			document.getElementById("topmenu").style.transform = `translateY(-100%)`;
			document.getElementById("nav").style.color = "#cecece";
			flag = 0;
			line1.style.backgroundColor = "#cecece";
			line2.style.backgroundColor = "#cecece";
			line1.style.transform = `rotate(0deg)`;
			line2.style.transform = `rotate(0deg)`;
			line1.style.width = `100%`;
		}
	});
}
openmenu();

function imghover() {
	document.querySelector("#element1").addEventListener("mousemove", function (dets) {
		document.querySelector("#element1 img").style.opacity = 1;
		document.querySelector("#element1 img").style.left = `${dets.x - 150}px`;
		document.querySelector("#element1 img").style.zIndex = 1;
		document.querySelector("#element1 img").style.top = `${dets.y - 150}px`;
	});
	document.querySelector("#element1").addEventListener("mouseleave", function (dets) {
		document.querySelector("#element1 img").style.opacity = 0;
		document.querySelector("#element1 img").style.zIndex = -22;
	});
	document.querySelector("#element2").addEventListener("mousemove", function (dets) {
		document.querySelector("#element2 img").style.opacity = 1;
		document.querySelector("#element2 img").style.left = `${dets.x - 790}px`;
		document.querySelector("#element2 img").style.zIndex = 1;
		document.querySelector("#element2 img").style.top = `${dets.y - 190}px`;
	});
	document.querySelector("#element2").addEventListener("mouseleave", function (dets) {
		document.querySelector("#element2 img").style.opacity = 0;
		document.querySelector("#element2 img").style.zIndex = -22;
	});
}

imghover();

function list() {
	var mangocard = document.querySelector(".mangocard");
	document.querySelector("#mango h1").addEventListener("mouseenter", function (dets) {
		mangocard.style.opacity = 1;
		mangocard.style.transform = `translate(-50%,-50%) rotate(20deg)`;
		mangocard.style.left = `40%`;
	});
	document.querySelector("#mango").addEventListener("mousemove", function (dets) {
		mangocard.style.left = `${dets.x}px`;
	});
	document.querySelector("#mango").addEventListener("mouseleave", function (dets) {
		mangocard.style.opacity = 0;
		mangocard.style.transform = `translate(-50%,-50%) rotate(0deg)`;
		mangocard.style.left = `20%`;
	});

	var bananacard = document.querySelector(".bananacard");
	document.querySelector("#Banana h1").addEventListener("mouseenter", function (dets) {
		bananacard.style.opacity = 1;
		bananacard.style.transform = `translate(-50%,-50%) rotate(20deg)`;
		bananacard.style.left = `40%`;
	});
	document.querySelector("#Banana").addEventListener("mousemove", function (dets) {
		bananacard.style.left = `${dets.x}px`;
	});
	document.querySelector("#Banana").addEventListener("mouseleave", function (dets) {
		bananacard.style.opacity = 0;
		bananacard.style.transform = `translate(-50%,-50%) rotate(0deg)`;
		bananacard.style.left = `20%`;
	});

	var pinecard = document.querySelector(".pinecard");
	document.querySelector("#PineApple h1").addEventListener("mouseenter", function (dets) {
		pinecard.style.opacity = 1;
		pinecard.style.transform = `translate(-50%,-50%) rotate(20deg)`;
		pinecard.style.left = `40%`;
	});
	document.querySelector("#PineApple").addEventListener("mousemove", function (dets) {
		pinecard.style.left = `${dets.x}px`;
	});
	document.querySelector("#PineApple").addEventListener("mouseleave", function (dets) {
		pinecard.style.opacity = 0;
		pinecard.style.transform = `translate(-50%,-50%) rotate(0deg)`;
		pinecard.style.left = `20%`;
	});

	var pithayacard = document.querySelector(".pithayacard");
	document.querySelector("#Pithaya h1").addEventListener("mouseenter", function (dets) {
		pithayacard.style.opacity = 1;
		pithayacard.style.transform = `translate(-50%,-50%) rotate(20deg)`;
		pithayacard.style.left = `40%`;
	});
	document.querySelector("#Pithaya").addEventListener("mousemove", function (dets) {
		pithayacard.style.left = `${dets.x}px`;
	});
	document.querySelector("#Pithaya").addEventListener("mouseleave", function (dets) {
		pithayacard.style.opacity = 0;
		pithayacard.style.transform = `translate(-50%,-50%) rotate(0deg)`;
		pithayacard.style.left = `20%`;
	});
}

list();
