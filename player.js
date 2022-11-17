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
