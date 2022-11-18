console.log("hello");

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "1afa0d0c22msh9ca3c1a4e25e9f1p1e1335jsn5cc8b3896228",
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  },
};

let orderedList = document.querySelector("div#popular-section ol");
let coverArtist = document.querySelector("#cover-artist");
let artistImg = document.getElementById("artist-img");
let artistPickSection = document.getElementById("artist-pick-section");
getSomething = async (artist) => {
  let response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${artist}`, options);
  let data = await response.json();
  let albumArray = data.data;
  console.log(albumArray);
  console.log(albumArray[0].artist.picture);
  let backgroundImage = albumArray[0].artist.picture;
  let number = 1;
  albumArray.forEach((album) => {
    orderedList.innerHTML += `
    <li class="d-flex justify-content-between row" style="
    height: 50px;>
    <p class="col-1">${number}</p>
    <img class="artist-page-fitting-img" src="${album.album.cover_medium}" alt="" />
    <p class="artist-page-ellipsed-text col-4">${album.title}</p>
    <p class="col-2">Views ${album.rank}</p>
    <p class="artist-page-ellipsed-text col-3">${album.duration}</p>
  </li>`;
    number++;
  });
  artistPickSection.innerHTML = `
  <h3 style="font-size: 1.5em;
  font-weight: 600;">Artist pick</h3>
  <div class="d-flex">
    <img id="artist-pick-img" src="${albumArray[3].album.cover}" alt="" />
    <div class="flex-column ml-3">
      <div style="font-size: .7em; color: gray;">Posted By ${artist}</div>
      <div style="font-size: 1.2em;
      font-weight: 600;">Best of</div>
      <div style="font-size: .7em; color: gray;">Playlist</div>
    </div>
  </div>`;
};

getArtist = async (id) => {
  let response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/artist/${id}`, options);
  let data = await response.json();
  console.log(data);
  // let backgroundImage = data.picture_big;
  // artistImg.style.backgroundImage = `url(${backgroundImage})`;
  coverArtist.innerHTML = `
  <div class="my-5 mx-4" style="position: absolute;
  z-index: 1;
  top: 100px;">
  <div>Verified Artist</div>
  <h1 style="font-size: 6.5rem;
  font-weight: 600;
  line-height: 85px;">${data.name}</h1>
  <div> ${data.nb_fan} Monthly listeners</div>
</div>

<div id="artist-img" class="d-flex flex-column justify-content-end" style="background-image: url(${data.picture_big})"></div>
`;
  getSomething(data.name);
};

getAlbumTest = async (id) => {
  let response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/album/${id}`, options);
  let data = await response.json();

  console.log(data);
};

let goToHome = function () {
  window.location.assign("./home.html");
};
