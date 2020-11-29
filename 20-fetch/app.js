fetch("https://swapi.dev/api/planetssadad/")
  .then((res) => {
    if (!res.ok) {
      throw new Error(`Status code error: ${res.status}`);
    } else {
      res.json().then((data) => {
        for (let planet of data.results) {
          console.log(planet.name);
        }
      });
    }
  })
  .catch((err) => {
    console.log("Error");
    console.log(err);
  });
