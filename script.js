/** @format */
// logic section

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
