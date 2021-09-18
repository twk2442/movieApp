import React from "react";
import axios from "axios";
import Movie from "./movie";

//axios는  Promise API를 활용하는 HTTP 비동기 통신 라이브러리이다
class App extends React.Component {
  constructor(props) {
    // constructor 컴포넌트를 만들때 처음으로 실행된다. 이 메서드에는 초기 state설정가능
    super(props);
    this.state = {
      isLoading: true,
      movies: [],
    };
  }
  //data fetching
  getMovies = async () => {
    // async 는 이함수가 비동기라고 알려주는것 async 키워드를 사용해야지만 await 사용가능
    const {
      data: {
        data: { movies },
      },
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    this.setState({ movies, isLoading: false });
  }; // async 와 await를 쓰는것은 기본적으로 js에게 getMovies function이 시간을 좀 필요로하고 그걸 기다려야한다고 말하는 것

  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state; //js  es6표현
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => {
              return (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres} // 장르추가
                />
              );
            })}
          </div>
        )}
      </section>
    );
  }
}

export default App;
