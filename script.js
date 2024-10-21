const CATEGORIES = document.getElementById("categories");
const MOVIES_CONTAINER = document.getElementById("movies-container");

class MovieInfo {
  constructor(name, category) {
    this.name = name;
    this.category = category;
  }
}

class Movies {
  constructor(allMovies) {
    this.allMovies = allMovies;
  }

  // Display Movies
  displayMovies() {
    // Get first instance of the category in an array with set.
    const uniqueCategory = [
      ...new Set(allMoviesArr.map((item) => item.category)),
    ];

    let movies = uniqueCategory.map((uniqueCat) => {
      return `
        <button id="${uniqueCat}" class="filter-btn py-1 px-3 rounded-lg hover:bg-red-800">${uniqueCat}</button>
        `;
    });

    CATEGORIES.innerHTML = movies.join(" ");

    const filterBtn = document.querySelectorAll(".filter-btn");

    filterBtn.forEach((filter) => {
      filter.addEventListener("click", () => {
        let moviesTodisplay = allMoviesArr.filter(
          (item) => item.category === filter.getAttribute("id")
        );

        MOVIES_CONTAINER.innerHTML = moviesTodisplay
          .map((item) => `<p>${item.name}</p>`)
          .join(" ");
      });
    });
  }
}

let allMoviesArr = [
  new MovieInfo("Blade", "Action"),
  new MovieInfo("Titanic", "Drama"),
  new MovieInfo("SAW", "Horror"),
  new MovieInfo("The One", "Action"),
  new MovieInfo("Proposal", "Drama"),
  new MovieInfo("Karashika", "Horror"),
];

const Movies_Holder = new Movies(allMoviesArr);

Movies_Holder.displayMovies();
