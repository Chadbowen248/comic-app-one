const express = require('express');
const axios = require('axios');
const path = require('path');
const compression = require('compression');
const API_KEY = 'b214b2f6cd4cb56d9c0a986a2215d33f'
const app = express();
const port = process.env.PORT || 5000;

app.use(compression());


app.get('/search/:movie', (req, res) => {
  const movie = req.params.movie;
  axios(`http://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${movie}`)
  .then(res => res.data.results.map(item => ({
      id: item.id,
      title: item.title,
      img: item.poster_path,
      desc: item.overview,
      date: item.release_date
  })))
  .then(data => res.json(data))
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