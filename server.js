const express = require('express');
const axios = require('axios');
const path = require('path');
const cors = require('cors');
const compression = require('compression');
const API_KEY = 'b214b2f6cd4cb56d9c0a986a2215d33f'
const app = express();
const port = process.env.PORT || 5000;

app.use(compression());
app.use(cors());

app.get("/comicvine_api", (req, res) => {
  const searchTerm = req.query.search_term
  const apiKey = "2736f1620710c52159ba0d0aea337c59bd273816"
  const URL = `https://comicvine.gamespot.com/api/search/?api_key=${apiKey}&format=json&query=${searchTerm}&resources=volume`
  Axios.get(URL).then(response => res.send(response.data.results))
})

app.get("/saveImage/:imageUrl/:id", (req, res) => {
  const imageData = req.params.imageUrl
  res.writeHead(200, {
    'Content-Type': 'image/jpeg' ,
    'Cache-Control': 'max-age=31536000',
    'etag': `${Date.now()}`

  });
  const imgUrl = decodeURIComponent(imageData);
  request.get({
    url: imgUrl,
    headers:{
      'User-Agent': 'request'
    }
  })
  .pipe(res)
})

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));