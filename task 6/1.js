class Movie {
    constructor(title, genre, year) {
      this.title = title;
      this.genre = genre;
      this.year = year;
    }
  
    toString() {
      return `Title: ${this.title}, Genre: ${this.genre}, Year: ${this.year}`;
    }
  }
  
  const movie1 = new Movie("The Shawshank Redemption", "Drama", 1994);
  const movie2 = new Movie("The Godfather", "Crime", 1972);
  const movie3 = new Movie("The Dark Knight", "Action", 2008);
  
  console.log(movie1);
  console.log(movie2);
  console.log(movie3);