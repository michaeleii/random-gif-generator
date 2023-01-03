const img = document.querySelector("img");
const search = document.getElementById("search");

const searchImage = () => getImage(search.value);

const getImage = (searchInput) => {
	const API_URL = `https://api.giphy.com/v1/gifs/translate?api_key=Eb8S55dwVLwdMI5sv3ObTCsbP9O4Gto0&s=${searchInput}`;
	console.log(searchInput);
	fetch(API_URL)
		.then((res) => res.json())
		.then((res) => {
			img.src = res.data.images.original.url;
			img.style.border = "solid 5px var(--secondary-color)";
		});
};
