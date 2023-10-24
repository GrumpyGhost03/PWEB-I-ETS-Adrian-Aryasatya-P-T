$(document).ready(function () {

    $.ajax({
        url: 'https://it-its.id/api/movies',
        method: 'GET',
        success: function (data) {
            renderMovies(data);
        },
        error: function (error) {
            console.error("An error occurred while fetching data: ", error);
        }
    });
  
    // Function to display movies
    function renderMovies(movies) {
        let movieList = '';
  
        $.each(movies, function (key, movie) {
            movieList += `
            <div class="col-lg-6 col-12 mb-4">
                <div class="card shadow p-3 bg-white rounded">
                    <div class="card-body ">
                        <h5 class="card-title">${movie.Title}</h5>
                        <p class="card-text">${movie.Plot}</p>
                    </div>
                </div>
            </div>
            `;
        });
  
        $('#moviesList').html(movieList);
    }
  });
  