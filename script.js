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
let artistPickSection = document.getElementById("artist-pick-section");
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

getArtist = async (id) => {
  let response = await fetch(
    `https://striveschool-api.herokuapp.com/api/deezer/artist/${id}`,
    options
  );
  let data = await response.json();
  console.log(data);
  let backgroundImage = data.picture_big;
  artistImg.style.backgroundImage = `url(${backgroundImage})`;
  artistImg.innerHTML = `
  <div class="my-5 mx-4">
  <div>Verified Artist</div>
  <h1>${data.name}</h1>
  <div>Monthly listeners ${data.nb_fan}</div>
</div>
`;
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
