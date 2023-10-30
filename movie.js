 
const apiKey = '7093977d064ec82b305fa05ea102b202';
const url = 'https://api.themoviedb.org/3/trending/movie/week';

const movieContainer = document.getElementById('movie-container');

fetch(`${url}?api_key=${apiKey}`)
    .then(res => res.json())
    .then(data => {
        const movies = data.results;
        console.log(movies);

        movies.forEach(movie => {
            const movieCard = document.createElement('div');
            movieCard.classList.add('movie-card');
            movieCard.innerHTML = `
                <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.title} Poster">
                <h2>${movie.title}</h2>
                <p>${movie.overview}</p>
                <i class="fa-solid fa-star"></i> 
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i> 
                <i class="fa-solid fa-star-half-stroke"></i>
                <i class="fa-regular fa-star"></i>
            `;
            movieContainer.appendChild(movieCard);
        });
    })





































    
    // .catch(error => {
    //     console.error('Error fetching data:', error);
    // });
