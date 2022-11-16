console.log("hello");

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "1afa0d0c22msh9ca3c1a4e25e9f1p1e1335jsn5cc8b3896228",
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
  console.log(albumArray);
  console.log(albumArray[0].artist.picture);
  let backgroundImage = albumArray[0].artist.picture;
  let number = 1;
  albumArray.forEach((album) => {
    orderedList.innerHTML += `
    <li class="d-flex justify-content-between row">
    <p class="col-1">${number}</p>
    <img class="artist-page-fitting-img" src="${album.album.cover}" alt="" />
    <p class="artist-page-ellipsed-text col-4">${album.title}</p>
    <p class="col-2">Views ${album.rank}</p>
    <p class="artist-page-ellipsed-text col-3">${album.duration} seconds</p>
  </li>`;
    number++;
  });
};

getArtist = async (id) => {
  let response = await fetch(
    `https://striveschool-api.herokuapp.com/api/deezer/artist/${id}`,
    options
  );
  let data = await response.json();
  console.log(data);
  let backgroundImage = data.picture_big;
  artistImg.style.backgroundImage = `url(${backgroundImage})`;
  getSomething(data.name);
};

getAlbumTest = async (id) => {
  let response = await fetch(
    `https://striveschool-api.herokuapp.com/api/deezer/album/${id}`,
    options
  );
  let data = await response.json();

  console.log(data);
};

let goToHome = function () {
  window.location.assign("./home.html");
};
