import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "./Pagination";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [watchlist, setWatchList] = useState([]);
  const [hovered, setHovered] = useState("");

  //Pagination Methods
  const onNext = () => {
    setPageNum(pageNum + 1);
  };

  const onPrev = () => {
    if (pageNum > 1) {
      setPageNum(pageNum - 1);
    } else {
      setPageNum(1);
    }
  };

  const movieClick = () => {
  };

  //watchlist handlers
  const addToWatchlist = (movie) => {
    const newWatchList = [...watchlist, movie];
    setWatchList(newWatchList);
    localStorage.setItem("imdb", JSON.stringify(newWatchList));
  };

  const removeFromWatchlist = (movie) => {
    const filteredWatchlist = watchlist.filter((element) => {
      return element.id != movie.id;
    });
    setWatchList(filteredWatchlist);
    localStorage.setItem("imdb", JSON.stringify(filteredWatchlist));
  };

  const showButton = (id) => {
    setHovered(id);
  };

  const hideButton = () => {
    setHovered("");
  };

  useEffect(() => {
    (function () {
      if (localStorage.getItem("imdb") === null) {
        localStorage.setItem("imdb", JSON.stringify([]));
      }
      let moviesFromLS = localStorage.getItem("imdb");
      moviesFromLS = JSON.parse(moviesFromLS) || [];
      setWatchList(moviesFromLS);

      axios
        .get(
          `https://api.themoviedb.org/3/trending/movie/day?api_key=59f69e70e740d082549b7d38236b697b&page=${pageNum}`
        )
        .then((res) => {
          setMovies(res.data.results);
        });
    })();
  }, [pageNum]);

  // console.log(movies);
  // console.log(watchlist);

  return (
    <div className="bg-zinc-800">
      <div className="text-2xl mb-8 font-bold text-center text-white">
        Trending Movies
      </div>

      <div className="flex flex-wrap">
        {movies.map((movie) => {
          return (
            <div
              onClick={movieClick}
              onMouseOver={() => showButton(movie.id)}
              onMouseLeave={() => hideButton()}
              key={movie.id}
              className="w-[200px] h-[35vh] bg-center bg-cover rounded-xl m-4 md:h[40vh] md:w[200px] hover:scale-110 duration-300 relative flex items-end"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original/t/p/w500/${movie.poster_path})`,
              }}
            >
              <div
                className="text-white text-center bg-gray-900 bg-opacity-50 rounded-xl absolute w-full top-0 text-1xl hover:scale-110 duration-300 cursor-pointer"
                style={{ display: hovered == movie.id ? "block" : "none" }}
              >
                {watchlist.includes(movie) == false ? (
                  <div onClick={() => addToWatchlist(movie)}>
                    Add to Watchlist
                  </div>
                ) : (
                  <div onClick={() => removeFromWatchlist(movie)}>
                    Remove from WatchList
                  </div>
                )}
              </div>

              <div className="text-white font-bold text-center w-full bg-gray-900 bg-opacity-50 rounded-xl">
                {movie.title}
              </div>
            </div>
          );
        })}
      </div>
      <Pagination
        pageNumProp={pageNum}
        onNextProp={onNext}
        onPrevProp={onPrev}
      />
    </div>
  );
}

export default Movies;
