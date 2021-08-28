import React from "react";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }
  //data fetching
  getMovies = async () => {
    // async 는 이함수가 비동기라고 알려주는것
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading } = this.state; //js  es6표현
    return <div>{isLoading ? "Loading" : "we are ready"}</div>;
  }
}

export default App;
