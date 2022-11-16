console.log("hello");

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "11199b50e3msh52a2017ab11122fp1bbd9cjsn6087fc9ee287",
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  },
};
let trackList = document.getElementById("trackInfo");

getAlbum = async (id) => {
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

  trackList.innerHTML = `
//   <div class="card ml-4 mt-5" style="width: 18rem">
//       <img
//         src="${data.cover}"
//         class="card-img-top"
//         alt="album-image"
//       />
//     </div>
//     <div  class="d-flex w-100 align-items-end ml-4">
//       <div>
//         <h3>ALBUM</h3>
//         <h1>"{data.title}"</h1>
//         <h3 class="artist-info-banner">
//           <img
//             class="avatar"
//             src="${data.cover_small}"
//             alt=""
//           />
//           <strong>${data.artist.name}" </strong> - 2022 - 13 songs, 40 min 53 sec
//         </h3>
//       </div>
//     </div>
    `;
};
