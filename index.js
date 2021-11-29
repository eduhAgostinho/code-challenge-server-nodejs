const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
const port = 8081;

const beers = require('./beers');
const getStatusBeer = require('./getStatusBeer');

app.use(cors());


app.get('/temperatures', async (req, res) => {
  let temperatures = {};

  for(let beer of beers) {
    try {
      const response = await fetch(`https://temperature-sensor-service.herokuapp.com/sensor/${beer.id}`);

      const reponseJson = await response.json();
      
      temperatures = {
        ...temperatures,
        [beer.id]: { id: beer.id, name: beer.name, temperature: reponseJson.temperature, status: getStatusBeer({ ...beer, temperature: reponseJson.temperature })}};
    } catch (e) {
      continue;
    }
  }

  res.send(temperatures);
});

app.listen(port, () => {
  console.log(`SensorTech server at http://localhost:${port}`);
});
