const changeLocation = (location, destination) => {
		document.querySelector(location).classList.add("hide");
		document.querySelector(destination).classList.remove("hide");
};


Array.from(document.querySelectorAll("[data-destination]")).map((button) =>
		button.addEventListener("click", (event) => {
			changeLocation(button.dataset.location, button.dataset.destination);
		}))
