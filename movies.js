
// EXTERNAL OMDB API DATA
function renderMovies(filter) {
const moviesWrapper = document.querySelector('.movies')
const movies = getMovies();   

  if (filter === 'LOW_TO_HIGH') {
   movies.sort((a, b) => a.originalPrice - b.originalPrice)   
  }
  else if (filter === 'HIGH_TO_LOW') {
   movies.sort((a, b) => b.originalPrice - a.originalPrice) 
  }
  else if (filter === 'RATING') {
  movies.sort((a, b) => b.rating - a.rating) 
  }
  

const moviesHtml = movies.map((movie) => {

  return `<div class="movie">
    <figure class="movie__img--wrapper">
        <img class="movie__img" src="${movie.url}">
    </figure>
    <div class="movie_title">
        ${movie.Title}
    </div>
    <div class="movie__ratings">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>                                
        <i class="fa-solid fa-star-half"></i>
    </div>
    <div class="movie__price">
        <span>$${movie.originalPrice.toFixed(2)}</span>
    </div>
</div>`
}).join('')

moviesWrapper.innerHTML = moviesHtml
}

function filterMovies(event) {
renderMovies(event.target.value)
}

setTimeout(() => {
 renderMovies(); 
})
  
function getMovies() { 

    return [
    {
      id: 1,
      Title: "The Fast and the Furious",
      url: "assets/The Fast and the Furious.png",
      Year: "2001",
      originalPrice: 25.35,
      salePrice: 16.66,
      rating: 2.5,      
    },
    {
      id: 2,
      Title: "Fast & Furious 6",
      url: "assets/Fast & Furious 6.png",
      Year: "2013",
      originalPrice: 11.55,
      salePrice: 8.55,
      rating: 5,      
    },
    {
      id: 3,
      Title: "Fast Five",
      url: "assets/Fast Five.png",
      Year: "2011",
      originalPrice: 13.13,
      salePrice: 10.15,
      rating: 5,      
    },
    {
      id: 4,
      Title: "Fast & Furious",
      url: "assets/Fast & Furious.png",
      Year: "2009",
      originalPrice: 20.11,
      salePrice: 18.23,
      rating: 2,      
    },    
    {
      id: 6,
      Title: "2 Fast 2 Furious",
      url: "assets/2 Fast 2 Furious.png",
      Year: "2003",
      originalPrice: 17.11,
      salePrice: 14.20,
      rating: 3.5,
      
    },    
    {
      id: 9,
      Title: "Fast X",
      url: "assets/Fast X.png",
      Year: "2023",
      originalPrice: 32.22,
      salePrice: 26.15,
      rating: 3,      
    },    
    {
      id: 1,
      Title: "The Fast and the Furious",
      url: "assets/The Fast and the Furious.png",
      Year: "2001",
      originalPrice: 25.35,
      salePrice: 16.66,
      rating: 2.5, 
      
    },
    {
      id: 2,
      Title: "Fast & Furious 6",
      url: "assets/Fast & Furious 6.png",
      Year: "2013",
      originalPrice: 11.55,
      salePrice: 8.55,
      rating: 5,      
    },
    {
      id: 3,
      Title: "Fast Five",
      url: "assets/Fast Five.png",
      Year: "2011",
      originalPrice: 13.13,
      salePrice: 10.15,
      rating: 5,      
    },
    {
      id: 4,
      Title: "Fast & Furious",
      url: "assets/Fast & Furious.png",      
      Year: "2009",
      originalPrice: 20.11,
      salePrice: 18.23,
      rating: 2,      
    },    
    {
      id: 6,
      Title: "2 Fast 2 Furious",
      url: "assets/2 Fast 2 Furious.png",
      Year: "2003",
      originalPrice: 17.11,
      salePrice: 14.20,
      rating: 3.5,      
    },    
    {
      id: 9,
      Title: "Fast X",
      url: "assets/Fast X.png",
      Year: "2023",
      originalPrice: 32.22,
      salePrice: 26.15,
      rating: 3,      
    },    
  ];
}

