// const audio = new Audio(
//   "https://cdns-preview-2.dzcdn.net/stream/c-222c7d6335ba3cfa69585e781bb51946-8.mp3"
// );
// // audio.id = "audio";
// console.log(audio);
// function play() {
//   audio.play();
// }
// function pause() {
//   audio.pause();
// }

// const audio = new Audio(
//   "https://cdns-preview-2.dzcdn.net/stream/c-222c7d6335ba3cfa69585e781bb51946-8.mp3"
// );
handlePlaySong = async (audio) => {
  console.log(audio);
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
};
let audio = "";
playerDisplayAlbum = async (artist) => {
  const response = await fetch(
    `https://striveschool-api.herokuapp.com/api/deezer/search?q=${artist}`
  );
  const data = await response.json();
  //   console.log(data);
  const albumArray = data.data;
  //   console.log(albumArray[0]);
  const song = albumArray[0].preview;
  console.log(song);
  audio = new Audio(`${song}`);
};

// const playerDisplayAlbum = (song) => {
//   async (artist) => {
//     const response = await fetch(
//       `https://striveschool-api.herokuapp.com/api/deezer/search?q=${artist}`
//     );
//     const data = await response.json();

//     const albumArray = data.data;
//     console.log(albumArray[0]);
//     const song = albumArray[0].preview;
//     console.log(song);
//     const audio = new Audio(`${song}`);
//     audio.id = "audio";
//     console.log(audio);
//     function play() {
//       audio.play();
//     }
//     function pause() {
//       audio.pause();
//     }

//     const playbtn = document.querySelector("#play-btn");
//     const playbtnPlay = document.querySelector("#button-element-play");
//     const playbtnPause = document.querySelector("#button-element-pause");
//     playbtnPlay.addEventListener("click", () => {
//       playbtn.innerHTML = `(
//       <button id="button-element-pause">
//         <img src="./icons/pause.svg" alt="" />
//       </button>
//     )`;
//     });
//     playbtnPause.addEventListener("click", () => {
//       playbtn.innerHTML = `(
//       <button id="button-element-play">
//         <img src="./icons/play.svg" alt="" />
//       </button>
//     )`;
//     });
//   };
// };

// playerDisplayAlbum(
//   "https://cdns-preview-2.dzcdn.net/stream/c-222c7d6335ba3cfa69585e781bb51946-8.mp3"
// );
