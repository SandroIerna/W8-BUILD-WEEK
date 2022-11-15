console.log("hello");

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "0338074fd7mshc55ec8ce8050d51p1f1e97jsn507294c645ff",
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  },
};

getSomething = async () => {
  let response = await fetch(
    "https://striveschool-api.herokuapp.com/api/deezer/search?q=queen",
    options
  );
  let data = await response.json();
  console.log(data.data[0]);
};
