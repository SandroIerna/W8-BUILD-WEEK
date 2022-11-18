const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "1afa0d0c22msh9ca3c1a4e25e9f1p1e1335jsn5cc8b3896228",
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  },
};

const goToHome = function () {
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

  const albumArray = data.data;
  console.log(albumArray);

  let num = 0;
  albumArray.forEach((album) => {
    if (num < 6) {
      //   console.log(album.album.cover);
      //   console.log(album.album.title);
      //   console.log(album.artist.name);

      const homeAlbumTitle = document.querySelector("#title1");
      homeAlbumTitle.textContent = `Best of ${album.artist.name}`;
      homeAlbumRow.innerHTML += ` 
        <div class="col-sm-6 col-md-4 col-lg-2 col-xl-2">
        <a class="card-link" href="./album.html?albumID=${album.album.id}">
        <div class="card">
        <div class="play-on-hover"><img src="./icons/Menu/PlayOnHover.svg" alt="" onclick="handleSong(${album.album.id},${album.id})"></div>

        <img src=${album.album.cover_medium} alt="" />
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
};

const homeDisplayArtist = async (id, idName) => {
  let randomImage = id;
  for (let i = 0; i < 6; i++) {
    const response = await fetch(
      `https://striveschool-api.herokuapp.com/api/deezer/artist/${randomImage}`,
      options
    );
    const artists = await response.json();
    // console.log(artists);

    const homeArtistRow = document.querySelector(`#${idName}`);
    homeArtistRow.innerHTML += `<div class="col-sm-6 col-md-4 col-lg-2 col-xl-2">
      <a class="card-link" href="./artist.html?artistID=${artists.id}">
       <div id="artist-round" class="card">
       <div class="play-on-hover2"><img src="./icons/Menu/PlayOnHover.svg" alt=""></div>
      <img src=${artists.picture_medium} alt="" />
      <div class="body p-0 my-3">
      <h6 class="card-title">${artists.name}</h6>
      <p class="card-text">${artists.type}</p>

      </div>
    </div>  </a>
      </div>`;
    randomImage++;

    console.log(randomImage);
    console.log(i);
  }
  i = 0;
};

const homeRandomNumber = () => Math.floor(Math.random() * 200);

// -------------------------------------- Artist Page Functions --------------------------------------

let orderedList = document.querySelector("div#popular-section ol");
let artistImg = document.getElementById("artist-img");
let artistPickSection = document.getElementById("artist-pick-section");
let coverArtist = document.querySelector("#cover-artist");

const displayArtist = async (artist) => {
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

const getArtist = async (id) => {
  let response = await fetch(
    `https://striveschool-api.herokuapp.com/api/deezer/artist/${id}`,
    options
  );
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
  console.log(data);
  console.log(data.title);
  console.log(data.cover);
  console.log(data.cover_small);
  console.log(data.artist.name);

  albumInfo.innerHTML = `
  <div class="album-card ml-2 mt-4" style="width: 18rem;box-shadow: 0px 0px 42px 0px rgba(0,0,0,0.57);">
      <img
        src="${data.cover_medium}"
        class="card-img-top"
        alt="album-image"
      />
    </div>
    <div  class="d-flex w-100 align-items-end ml-4">
      <div>
        <h3 style="font-size: 0.9em; font-weight: 600">ALBUM</h3>
        <h1 style="font-size: 4.5em;
        font-weight: 700;
        line-height: 60px;">${data.title}</h1>
        <h3 class="artist-info-banner" style="font-size:0.8em;">
          <img
            class="avatar"
            src="${data.cover_small}"
            alt=""
          />
          <strong >${data.artist.name} </strong> - 2022 - 13 songs, 40 min 53 sec
        </h3>
      </div>
    </div>
    `;

  let trackList = document.getElementById("trackList");

  let trackArray = data.tracks.data;
  console.log(data.tracks.data);
  trackArray.forEach((track, index) => {
    trackList.innerHTML += `
    <ul id="album-list">
   <li onclick="handleSong(${track.album.id},${track.id})">
   <div class="d-flex justify-content-between" style="
   line-height: 5px;
">
   <div class="d-flex align-items-center">
   <div class="mr-4">
     <p class="info-list-paragraph">${index + 1}</p>
    </div>
       <div>
     <p class="info-list-paragraph">
       <strong style="
       font-weight: 600;
       color: white;
       font-size: 1em;">${track.title}</strong>
     </p>
     <p class="info-list-paragraph">${data.artist.name}</p>
   </div>
   </div>
   <div class="mr-4">
   <p class="info-list-paragraph">${track.duration}</p>
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
};

const getArtistID = async (search, idName) => {
  const response = await fetch(
    `https://striveschool-api.herokuapp.com/api/deezer/search?q=${search}`,
    options
  );
  const homeArtistRow = document.querySelector(`#${idName}`);
  homeArtistRow.innerHTML = "";
  const data = await response.json();
  console.log(data);
  let dataArray = data.data;
  let artistID = dataArray[0].artist.id;
  console.log(artistID);
  homeDisplayArtist(artistID, "artist-row");
};

let displaySearch = function () {
  let searchInput = event.target;
  let search = searchInput.value;
  homeAlbumRow.innerHTML = "";
  homeDisplayAlbum(search);
  getArtistID(search, "artist-row");
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
  handlePlaySong();
};

//----------------------------------------------------------------------------------------------------
