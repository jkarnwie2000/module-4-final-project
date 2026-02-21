
// EXTERNAL OMDB API DATA

function priceHTML(originalPrice, salePrice) {
  console.log(originalPrice, salePrice) 
  if (!salePrice) {
    return `$(originalPrice.toFixed(2))`
  }
  else {
    return `<span>$${originalPrice.toFixed(2)}</span>`
  }  
}

async function init () {
  await renderMovies();
  const search = document.getElementById("searchbar");
  search.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase();
    const filtered = movies.filter(m => m.Title.toLowerCase().includes(value));
    renderFilteredMovies(filtered);
  })
}
init()

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
    <img class="movie__img" src="${movie.url}" alt="${movie.Title}">
  </figure>
  <div class="movie__title">${movie.Title}</div>
  <div class="movie__ratings">${ratingsHTML(movie.rating)}</div>
  <div class="movie__price">${priceHTML(movie.originalPrice, movie.salePrice)}</div>
</div>`
}).join('')

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
      Title: "Zz: The Fast and the Furious",
      url: "assets/The Fast and the Furious.png",
      Year: "2001",
      originalPrice: 25.35,
      salePrice: 16.66,
      rating: 2.5,      
    },
    {
      id: 2,
      Title: "Bb: Fast & Furious 6",
      url: "assets/Fast & Furious 6.png",
      Year: "2013",
      originalPrice: 11.55,
      salePrice: 9.99,
      rating: 5,      
    },
    {
      id: 3,
      Title: "Qq: Fast Five",
      url: "assets/Fast Five.png",
      Year: "2011",
      originalPrice: 13.13,
      salePrice: 10.15,
      rating: 5,      
    },
    {
      id: 4,
      Title: "Mm: Fast & Furious",
      url: "assets/Fast & Furious.png",
      Year: "2009",
      originalPrice: 20.11,
      salePrice: 18.23,
      rating: 2,      
    },    
    {
      id: 5,
      Title: "Ll: 2 Fast 2 Furious",
      url: "assets/2 Fast 2 Furious.png",
      Year: "2003",
      originalPrice: 17.11,
      salePrice: 15.87,
      rating: 3.5,
      
    },    
    {
      id: 6,
      Title: "Gg: Fast X",
      url: "assets/Fast X.png",
      Year: "2023",
      originalPrice: 32.22,
      salePrice: 26.15,
      rating: 3,      
    },    
    {
      id: 1,
      Title: "Ss: The Fast and the Furious",
      url: "assets/The Fast and the Furious.png",
      Year: "2001",
      originalPrice: 42.35,
      salePrice: 25.66,
      rating: 5, 
      
    },
    {
      id: 2,
      Title: "Kk: Fast & Furious 6",
      url: "assets/Fast & Furious 6.png",
      Year: "2013",
      originalPrice: 60.55,
      salePrice: 55.55,
      rating: 3.5,      
    },
    {
      id: 3,
      Title: "Tt: Fast Five",
      url: "assets/Fast Five.png",
      Year: "2011",
      originalPrice: 41.13,
      salePrice: 37.15,
      rating: 1.5,      
    },
    {
      id: 4,
      Title: "Pp: Fast & Furious",
      url: "assets/Fast & Furious.png",      
      Year: "2009",
      originalPrice: 70.11,
      salePrice: 65.23,
      rating: 4.5,      
    },    
    {
      id: 6,
      Title: "Ww: 2 Fast 2 Furious",
      url: "assets/2 Fast 2 Furious.png",
      Year: "2003",
      originalPrice: 80.11,
      salePrice: 76.34,
      rating: 1.5,      
    },    
    {
      id: 9,
      Title: "Yy: Fast X",
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


/**SEARCH BAR FUNCTIONALITY CODES**SEARCH BAR FUNCTIONALITY CODES**SEARCH BAR FUNCTIONALITY CODES**/

document.getElementById("searchbar").addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();

  const filtered = movies.filter(movie => movie.Title.toLowerCase().includes(value)
);

renderFilteredMovies(filtered)
})


function renderFilteredMovies(list) {
  const moviesWrapper = document.querySelector(".movies");

  moviesWrapper.innerHTML = list.map(movie => `
    <div class="movie">
    <figure class="movie__img--wrapper">
        <img class="movie__img" src="${movie.url}" alt="${movie.Title}">
    </figure>
    <div class="movie__title">${movie.Title}</div>
    <div class="movie__ratings">${ratingsHTML(movie.rating)}</div>
    <div class="movie__price">${priceHTML(movie.originalPrice, movie.salePrice)}</span>$16.6
    </div>
</div>`).join("");
}

