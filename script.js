const img = document.querySelector("img");
const input = document.getElementById("search");

const generateImg = () => getImg(input.value);

const getImg = (searchInput) => {
	const API_URL = `https://api.giphy.com/v1/gifs/translate?api_key=Eb8S55dwVLwdMI5sv3ObTCsbP9O4Gto0&s=${searchInput}`;
	fetch(API_URL, { mode: "cors" })
		.then((res) => res.json())
		.then((res) => {
			const imgURL = res.data.images.original.url;
			img.src = imgURL;
			img.style.border = "solid 5px var(--secondary-color)";
		})
		.catch(() => {
			img.src = "./error.jpg";
			img.style.border = "solid 5px var(--secondary-color)";
		});
};

input.addEventListener("keyup", (e) => {
	if (e.key == "Enter") {
		generateImg();
	}
});
