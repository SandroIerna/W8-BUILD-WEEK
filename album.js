let albumInfo = document.getElementById("trackInfo")

getAlbum = async (id) => {
  const response = await fetch(
    `https://striveschool-api.herokuapp.com/api/deezer/album/${id}`,
    options
  )
  const data = await response.json()
  console.log(data)
  console.log(data.title)
  console.log(data.cover)
  console.log(data.cover_small)
  console.log(data.artist.name)

  albumInfo.innerHTML = `
  <div class="card ml-4 mt-5" style="width: 18rem">
      <img
        src=${data.cover}
        class="card-img-top"
        alt="album-image"
      />
    </div>
    <div  class="d-flex w-100 align-items-end ml-4">
      <div>
        <h3>ALBUM</h3>
        <h1>${data.title}</h1>
        <h3 class="artist-info-banner">
          <img
            class="avatar"
            src=${data.cover_small}
            alt=""
          />
          <strong>${data.artist.name} </strong> - 2022 - 13 songs, 40 min 53 sec
        </h3>
      </div>
    </div>
    `

  let trackList = document.getElementById("trackList")

  let trackArray = data.tracks.data
  console.log(data.tracks.data)
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
   <p class="info-list-paragraph">${
     (track.data.duration - (track.data.duration %= 60)) / 60 +
     (9 < track.data.duration ? ":" : ":0") +
     track.data.duration
   } seconds</p>
    </div>
   </div>
    </li>`
  })
}

// {(tracks.data.duration - (tracks.data.duration %= 60))/60 + (9 < tracks.data.duration ? ":" : ":0") + tracks.data.duration}
