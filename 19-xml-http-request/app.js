// function reqListener () {
//   console.log(this.responseText);
// }

// var oReq = new XMLHttpRequest();
// oReq.addEventListener("load", reqListener);
// oReq.open("GET", "http://www.example.org/example.txt");
// oReq.send();

const firstReq = new XMLHttpRequest();
firstReq.addEventListener("load", function () {
  console.log("First request worked");
  const data = JSON.parse(this.responseText);
  const filmUrl = data.results[0].films[0];
  const filmReq = new XMLHttpRequest();
  filmReq.addEventListener("load", function () {
    console.log("Second request worked");
    const filmData = JSON.parse(this.responseText);
    console.log(filmData.title);
  });
  filmReq.addEventListener("error", () => {
    console.log("Error");
  });
  filmReq.open("GET", `${filmUrl}`);
  filmReq.send();
});
firstReq.addEventListener("error", () => {
  console.log("Error");
});
firstReq.open("GET", "https://swapi.dev/api/planets/");
firstReq.send();

console.log("Request sent");
