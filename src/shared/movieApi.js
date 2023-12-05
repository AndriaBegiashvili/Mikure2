const fetchMovieImages = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1"
      );
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
      const data = await response.json();
      const dataArr = [];
      data.results.forEach((element) => {
        dataArr.push([element.poster_path, element.title, element.overview, element.vote_average]);
      });
      const arr = dataArr.slice(1, 6);
      const cont = dataArr.slice(7,13)
      return { image: dataArr.slice(0, 1), filmData: arr, continueWatching: cont };
    } catch (error) {
      console.error("Error fetching movie images:", error);
      throw error;
    }
  };
  
  export { fetchMovieImages };
  