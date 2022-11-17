const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "1afa0d0c22msh9ca3c1a4e25e9f1p1e1335jsn5cc8b3896228",
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  },
};

let goToHome = function () {
  window.location.assign("./home.html");
};

// --------------------------------------- Home Page Functions ---------------------------------------

const homeAlbumRow = document.querySelector("#album-row");

const homeDisplayAlbum = async (artist) => {
  const response = await fetch(
    `https://striveschool-api.herokuapp.com/api/deezer/search?q=${artist}`,
    options
  );
  const data = await response.json();
  homeAlbumRow.innerHTML = "";
  const albumArray = data.data;
  let num = 0;
  albumArray.forEach((album) => {
    if (num < 6) {
      homeAlbumRow.innerHTML += ` 
        <div class="col-2">
        <a class="card-link" href="./album.html?albumID=${album.album.id}">
        <div class="card">
        <img src=${album.album.cover} alt="" />
        <div class="body p-0 my-3">
        <h6 class="card-title">${album.album.title}</h6>
        <p class="card-text">${album.artist.name}</p>
        <p class="card-text">${album.title_short}</p>
        </div>
        </div>  </a> 
        </div>`;
      num++;
    }
  });
  const song = albumArray[0].preview;
};

const homeDisplayArtist = async (id, idName) => {
  let randomImage = id;
  for (let i = 0; i < 6; i++) {
    const response = await fetch(
      `https://striveschool-api.herokuapp.com/api/deezer/artist/${randomImage}`,
      options
    );
    const artists = await response.json();
    const homeArtistRow = document.querySelector(`#${idName}`);
    homeArtistRow.innerHTML += `<div class="col-2">
      <a class="card-link" href="./artist.html?artistID=${artists.id}">
       <div class="card">
      <img src=${artists.picture} alt="" />
      <div class="body p-0 my-3">
      <h6 class="card-title">${artists.name}</h6>
      <p class="card-text">${artists.type}</p>
      </div>
    </div>  </a>
      </div>`;
    randomImage++;
  }
  i = 0;
};

const homeRandomNumber = () => Math.floor(Math.random() * 200);

// -------------------------------------- Artist Page Functions --------------------------------------

let orderedList = document.querySelector("div#popular-section ol");
let artistImg = document.getElementById("artist-img");
let artistPickSection = document.getElementById("artist-pick-section");

const displayArtist = async (artist) => {
  let response = await fetch(
    `https://striveschool-api.herokuapp.com/api/deezer/search?q=${artist}`,
    options
  );
  let data = await response.json();
  let albumArray = data.data;
  let backgroundImage = albumArray[0].artist.picture;
  albumArray.forEach((album, index) => {
    orderedList.innerHTML += `
    <li class="d-flex justify-content-between row">
    <p class="col-1">${index + 1}</p>
    <img class="artist-page-fitting-img" src="${album.album.cover}" alt="" />
    <p class="artist-page-ellipsed-text col-4">${album.title}</p>
    <p class="col-2">Views ${album.rank}</p>
    <p class="artist-page-ellipsed-text col-3">${album.duration} seconds</p>
  </li>`;
  });
  artistPickSection.innerHTML = `
  <h3>Artist pick</h3>
  <div class="d-flex">
    <img id="artist-pick-img" src="${albumArray[3].album.cover}" alt="" />
    <div class="flex-column ml-3">
      <div>Posted By ${artist}</div>
      <div>Best of</div>
      <div>Playlist</div>
    </div>
  </div>`;
};

const getArtist = async (id) => {
  let response = await fetch(
    `https://striveschool-api.herokuapp.com/api/deezer/artist/${id}`,
    options
  );
  let data = await response.json();
  let backgroundImage = data.picture_big;
  artistImg.style.backgroundImage = `url(${backgroundImage})`;
  artistImg.innerHTML = `
  <div class="my-5 mx-4">
  <div>Verified Artist</div>
  <h1>${data.name}</h1>
  <div>Monthly listeners ${data.nb_fan}</div>
</div>
`;
  displayArtist(data.name);
};

// -------------------------------------- Albums Page Functions --------------------------------------

let albumInfo = document.getElementById("trackInfo");

const getAlbum = async (id) => {
  const response = await fetch(
    `https://striveschool-api.herokuapp.com/api/deezer/album/${id}`,
    options
  );
  const data = await response.json();
  albumInfo.innerHTML = `
  <div class="card ml-4 mt-5" style="width: 18rem">
      <img
        src="${data.cover}"
        class="card-img-top"
        alt="album-image"
      />
    </div>
    <div  class="d-flex w-100 align-items-end ml-4">
      <div>
        <h3>ALBUM</h3>
        <h1>"${data.title}"</h1>
        <h3 class="artist-info-banner">
          <img
            class="avatar"
            src="${data.cover_small}"
            alt=""
          />
          <strong>${data.artist.name}" </strong> - 2022 - 13 songs, 40 min 53 sec
        </h3>
      </div>
    </div>
    `;
  let trackList = document.getElementById("trackList");
  let trackArray = data.tracks.data;
  trackArray.forEach((track, index) => {
    trackList.innerHTML += `
    <ul id="album-list">
   <li>
   <div class="d-flex justify-content-between">
   <div class="d-flex align-items-center">
   <div class="mr-5">
     <p class="info-list-paragraph">${index + 1}</p>
    </div>
       <div>
     <p class="info-list-paragraph">
       <strong>${track.title}</strong>
     </p>
     <p class="info-list-paragraph">${data.artist.name}</p>
   </div>
   </div>
   <div class="mr-4">
   <p class="info-list-paragraph">${track.duration} seconds</p>
    </div>
   </div>
    </li>`;
  });
};

// ----------------------------------------- search function -----------------------------------------

const searchDisplayAlbum = async (artist) => {
  const response = await fetch(
    `https://striveschool-api.herokuapp.com/api/deezer/search?q=${artist}`,
    options
  );
  const data = await response.json();
  console.log(data);
};

let displaySearch = function () {
  let searchInput = event.target;
  let search = searchInput.value;
  searchDisplayAlbum(search);
};

// -------------------------------------------- mp3player --------------------------------------------

const handlePlaySong = async (audio) => {
  console.log(audio);
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
};

const handleSong = async (albumID, trackID) => {
  const response = await fetch(
    `https://striveschool-api.herokuapp.com/api/deezer/album/${albumID}`
  );
  const data = await response.json();
  let tracksArray = data.tracks.data;
  console.log(tracksArray[0].id);
  let filteredArray = tracksArray.filter((track) => track.id === trackID);
  console.log(tracksArray);
  console.log(filteredArray);
  song = filteredArray[0].preview;
  console.log(song);
  audio = new Audio(`${song}`);
};

//----------------------------------------------------------------------------------------------------
