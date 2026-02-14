
// EXTERNAL OMDB API DATA

let movies; 

async function renderMovies(filter) {
const moviesWrapper = document.querySelector('.movies')

if (!movies) {
movies = await getMovies();
}
moviesWrapper.classList.remove('movies__loading')

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
        ${ratingsHTML(movie.rating)}
    </div>
    <div class="movie__price">
      <span>${movie.originalPrice.toFixed(2)}</span>
    <div>
</div>`
}).join('')

function priceHTML(originalPrice, salePrice) {
  console.log(originalPrice, salePrice) 
  if (!salePrice) {
    return `$$(originalPrice.toFixed(2))`
  }
  else {
    return `<span class="movie__price--normal">$${originalPrice.toFixed(2)}</span>$${salePrice.toFixed(2)}`
  }  
}

priceHTML(originalPrice, salePrice)

moviesWrapper.innerHTML = moviesHtml
}
function ratingsHTML(rating) {
let ratingHTML = '';
for (let i = 0; i < Math.floor(rating); ++i) {
  ratingHTML += `<i class="fas fa-star"></i>\n`
}
if (!Number.isInteger(rating)) {
ratingHTML += `<i class="fa-solid fa-star-half"></i>`
}
return ratingHTML;
}

function filterMovies(event) {
renderMovies(event.target.value)
}

setTimeout(() => {
 renderMovies(); 
})
  
function getMovies() { 
  return new Promise ((resolve) => {
    setTimeout(() => {
      resolve ([
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
      salePrice: null,
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
      id: 5,
      Title: "2 Fast 2 Furious",
      url: "assets/2 Fast 2 Furious.png",
      Year: "2003",
      originalPrice: 17.11,
      salePrice: null,
      rating: 3.5,
      
    },    
    {
      id: 6,
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
      originalPrice: 42.35,
      salePrice: 25.66,
      rating: 5, 
      
    },
    {
      id: 2,
      Title: "Fast & Furious 6",
      url: "assets/Fast & Furious 6.png",
      Year: "2013",
      originalPrice: 60.55,
      salePrice: null,
      rating: 3.5,      
    },
    {
      id: 3,
      Title: "Fast Five",
      url: "assets/Fast Five.png",
      Year: "2011",
      originalPrice: 41.13,
      salePrice: 37.15,
      rating: 1.5,      
    },
    {
      id: 4,
      Title: "Fast & Furious",
      url: "assets/Fast & Furious.png",      
      Year: "2009",
      originalPrice: 70.11,
      salePrice: 65.23,
      rating: 4.5,      
    },    
    {
      id: 6,
      Title: "2 Fast 2 Furious",
      url: "assets/2 Fast 2 Furious.png",
      Year: "2003",
      originalPrice: 80.11,
      salePrice: null,
      rating: 1.5,      
    },    
    {
      id: 9,
      Title: "Fast X",
      url: "assets/Fast X.png",
      Year: "2023",
      originalPrice: 98.22,
      salePrice: 81.15,
      rating: 1,      
    },    
  ])
    }, 1000)
  })

  }

