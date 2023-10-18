// URL of the API
const apiUrl = 'https://it-its.id/api/movies';

// Fetch the API data
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Process the data
    data.forEach(movie => {
      console.log('Title:', movie.Title);
      console.log('Director:', movie.Director);
      console.log('Genre:', movie.Genre);
      console.log('Plot:', movie.Plot);
      console.log('Poster:', movie.Poster);
      console.log('----------------------');
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });