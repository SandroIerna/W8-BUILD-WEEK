const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "1afa0d0c22msh9ca3c1a4e25e9f1p1e1335jsn5cc8b3896228",
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  },
};

const homeDisplayAlbum = async (artist) => {
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
  homeDisplayAlbum(search);
};
