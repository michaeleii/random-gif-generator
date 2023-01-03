const img = document.querySelector("img");
const input = document.getElementById("search");

const generateImg = () => getImg(input.value);

const getImg = async (searchInput) => {
	try {
		const API_URL = `https://api.giphy.com/v1/gifs/translate?api_key=Eb8S55dwVLwdMI5sv3ObTCsbP9O4Gto0&s=${searchInput}`;
		const res = await fetch(API_URL, { mode: "cors" });
		const imgData = await res.json();
		const imgURL = imgData.data.images.original.url;
		img.src = imgURL;
		img.style.border = "solid 5px var(--secondary-color)";
	} catch (error) {
		img.src = "./error.jpg";
		img.style.border = "solid 5px var(--secondary-color)";
	}
};

input.addEventListener("keyup", (e) => {
	if (e.key == "Enter") {
		generateImg();
	}
});
