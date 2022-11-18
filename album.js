let albumInfo = document.getElementById("trackInfo");

getAlbum = async (id) => {
  const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/album/${id}`, options);
  const data = await response.json();
  console.log(data);
  console.log(data.title);
  console.log(data.cover);
  console.log(data.cover_small);
  console.log(data.artist.name);

  albumInfo.innerHTML = `
  <div class="album-card ml-2 mt-4" style="width: 18rem;box-shadow: 0px 0px 42px 0px rgba(0,0,0,0.57);">
      <img
        src="${data.cover}"
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
   <li>
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
