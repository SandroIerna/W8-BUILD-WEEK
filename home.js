const homeDisplayAlbum = async (artist) => {
  const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${artist}`, options);
  const data = await response.json();

  const albumArray = data.data;
  console.log(albumArray);

  let num = 0;
  albumArray.forEach((album) => {
    if (num < 6) {
      //   console.log(album.album.cover);
      //   console.log(album.album.title);
      //   console.log(album.artist.name);

      const homeAlbumRow = document.querySelector("#album-row");
      homeAlbumRow.innerHTML += ` 
        <div class="col-2">
        <a class="card-link" href="./album.html?albumID=${album.album.id}">
        <div class="card">
        <div class="play-on-hover"><img src="./icons/Menu/PlayOnHover.svg" alt=""></div>

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
       <div id="artist-round" class="card">
       <div class="play-on-hover2"><img src="./icons/Menu/PlayOnHover.svg" alt=""></div>
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

homeDisplayAlbum("eminem");
homeDisplayArtist(homeRandomNumber(), "artist-row");
homeDisplayArtist(homeRandomNumber(), "artist-row2");
