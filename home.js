const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "1afa0d0c22msh9ca3c1a4e25e9f1p1e1335jsn5cc8b3896228",
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  },
};

const homeDisplayAlbum = async (artist) => {
  const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${artist}`, options);
  const data = await response.json();

  const albumArray = data.data;

  let num = 0;
  albumArray.forEach((album) => {
    if (num < 6) {
      //   console.log(album.album.cover);
      //   console.log(album.album.title);
      //   console.log(album.artist.name);

      const homeAlbumRow = document.querySelector("#album-row");
      homeAlbumRow.innerHTML += ` 
        <div class="col-2">
        <a class="card-link" href="./album.html?albumID=${album.id}">
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

  //   song.play();
  console.log(song);
};

const homeDisplayArtist = async (id, idName) => {
  let randomImage = id;
  for (let i = 0; i < 6; i++) {
    const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/artist/${randomImage}`, options);
    const artists = await response.json();
    // console.log(artists);

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

    console.log(randomImage);
    console.log(i);
  }
  i = 0;
};

const homeRandomNumber = () => Math.floor(Math.random() * 200);

homeDisplayAlbum("T-pain");
homeDisplayArtist(homeRandomNumber(), "artist-row");
homeDisplayArtist(homeRandomNumber(), "artist-row2");
