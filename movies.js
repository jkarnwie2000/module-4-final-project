
// EXTERNAL OMDB API DATA


function renderMovies() {
const moviesWrapper = document.querySelector('.movies')
console.log(getMovies) 
moviesWrapper.innerHTML =
`<div class="movie">
    <figure class="movie__img--wrapper">
        <img class="movie__img" src="./assets/movieimg.png" alt="">
    </figure>
    <div class="movie__title">
        The Fast and the Furious
    </div>
    <div class="movie__ratings">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fa-solid fa-star-half"></i>
    </div>
    <div class="movie__price">
        <span class="movie__price--normal">$25.35</span>$16.66
    </div>
</div>`
}

setTimeout(() => {
 renderMovies(); 
})


  
  function getMovies() { 

    return [
    {
      id: 1,
      Title: "The Fast and the Furious",
      Year: "2001",
      originalPrice: 25.35,
      salePrice: 16.66,
      rating: 2.5, 
      Poster: "https://m.media-amazon.com/images/M/MV5BZGRiMDE1NTMtMThmZS00YjE4LWI1ODQtNjRkZGZlOTg2MGE1XkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
      id: 2,
      Title: "Fast & Furious 6",
      Year: "2013",
      originalPrice: 11.55,
      salePrice: 8.55,
      rating: 5,
      Poster: "https://m.media-amazon.com/images/M/MV5BMTM3NTg2NDQzOF5BMl5BanBnXkFtZTcwNjc2NzQzOQ@@._V1_SX300.jpg"
    },
    {
      id: 3,
      Title: "Fast Five",
      Year: "2011",
      originalPrice: 13.13,
      salePrice: 10.15,
      rating: 5,
      Poster: "https://m.media-amazon.com/images/M/MV5BMTUxNTk5MTE0OF5BMl5BanBnXkFtZTcwMjA2NzY3NA@@._V1_SX300.jpg"
    },
    {
      id: 4,
      Title: "Fast & Furious",
      Year: "2009",
      originalPrice: 20.11,
      salePrice: 18.23,
      rating: 2,
      Poster: "https://m.media-amazon.com/images/M/MV5BM2Y1YzhkNzUtMzhmZC00OTFkLWJjZDktMWYzZmQ0Y2Y5ODcwXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
      id: 5,
      Title: "The Fast and the Furious: Tokyo Drift",
      Year: "2006",
      originalPrice: 17.20,
      salePrice: 13.23,
      rating: 4.5,
      Poster: "https://m.media-amazon.com/images/M/MV5BMTQ2NTMxODEyNV5BMl5BanBnXkFtZTcwMDgxMjA0MQ@@._V1_SX300.jpg"
    },
    {
      id: 6,
      Title: "2 Fast 2 Furious",
      Year: "2003",
      originalPrice: 17.11,
      salePrice: 14.20,
      rating: 3.5,
      Poster: "https://m.media-amazon.com/images/M/MV5BOTQzYzEwNWMtOTAwYy00YWYwLWE1NTEtZTkxOGQxZTM0M2VhXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
      id: 7,
      Title: "Fast & Furious Presents: Hobbs & Shaw",
      Year: "2019",
      originalPrice: 24.10,
      salePrice: 19.13,
      rating: 5,
      Poster: "https://m.media-amazon.com/images/M/MV5BNmU4OTA5NGYtMTFjMS00MzgxLWFjNTMtYjdlMThlYzc4M2M4XkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
      id: 8,
      Title: "F9: The Fast Saga",
      Year: "2021",
      originalPrice: 27.13,
      salePrice: 23.12,
      rating: 2.5,      
      Poster: "https://m.media-amazon.com/images/M/MV5BODJkMTQ5ZmQtNzQxYy00ZWNlLWI0ZGYtYjU1NzdiMjcyNDRmXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
      id: 9,
      Title: "Fast X",
      Year: "2023",
      originalPrice: 32.22,
      salePrice: 26.15,
      rating: 3,
      Poster: "https://m.media-amazon.com/images/M/MV5BYzEwZjczOTktYzU1OS00YjJlLTgyY2UtNWEzODBlN2RjZDEwXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
      id: 10,
      Title: "Fast Times at Ridgemont High",
      Year: "1982",
      originalPrice: 40.21,
      salePrice: 36.17,
      rating: 4.5,
      Poster: "https://m.media-amazon.com/images/M/MV5BMWM4NTc3N2YtMjk2Ny00MTRmLWE4YzItNTVhMTRlODVkNmE5XkEyXkFqcGc@._V1_SX300.jpg"
    },
  ];
}