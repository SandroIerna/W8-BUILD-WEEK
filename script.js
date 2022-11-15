console.log("hello");

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "0338074fd7mshc55ec8ce8050d51p1f1e97jsn507294c645ff",
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  },
};

let orderedList = document.querySelector("div#popular-section ol");
let artistImg = document.getElementById("artist-img");
getSomething = async (artist) => {
  let response = await fetch(
    `https://striveschool-api.herokuapp.com/api/deezer/search?q=${artist}`,
    options
  );
  let data = await response.json();
  let albumArray = data.data;
  console.log(data.data);
  // artistImg.style.backgroundImage = albumArray[0].artist.picture
  albumArray.forEach((album) => {
    orderedList.innerHTML += `
    <li class="d-flex justify-content-between">
    <p>n°</p>
  <img src="${album.album.cover}" alt="" />
    <p>${album.title}</p>
    <p>Views</p>
    <p>${album.duration} seconds</p>
  </li>`;
  });
};
