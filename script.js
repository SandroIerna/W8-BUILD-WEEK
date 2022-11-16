console.log("hello")

getSomething = async () => {
  let response = await fetch(
    "https://striveschool-api.herokuapp.com/api/deezer/search?q=queen",
    options
  )
  let data = await response.json()
  console.log(data.data[0])
}
