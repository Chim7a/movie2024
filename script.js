const CATEGORIES = document.getElementById("categories");
const MOVIES_CONTAINER = document.getElementById("movies-container");

class MovieInfo {
  constructor(id, category) {
    this.id = id;
    this.category = category;
  }
}

class Movies {
  constructor(allMovies) {
    this.allMovies = allMovies;
  }

  // Display Movies
  displayMovies() {
    let movies = allMoviesArr.map((movie) => {
      return `
        <button id="${movie.category}" class="filter-btn py-1 px-3 rounded-lg hover:bg-red-800">${movie.category}</button>
        `;
    });

    CATEGORIES.innerHTML = movies.join(" ");

    const filterBtn = document.querySelectorAll(".filter-btn");

    filterBtn.forEach((filter) => {
      filter.addEventListener("click", () => {
        if (filter.getAttribute("id") === "Action") {
          MOVIES_CONTAINER.innerHTML = `Action Movies`;
        } else if (filter.getAttribute("id") === "Drama") {
          MOVIES_CONTAINER.innerHTML = `Drama Movies`;
        } else {
          MOVIES_CONTAINER.innerHTML = `Horror Movies`;
        }
      });
    });
  }
}

let allMoviesArr = [
  new MovieInfo(1, "Action"),
  new MovieInfo(2, "Drama"),
  new MovieInfo(3, "Horror"),
];

const Movies_Holder = new Movies(allMoviesArr);

Movies_Holder.displayMovies();
// MOVIES_CONTAINER.filterMovies();
