import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }
  //data fetching
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false }); // js 함수
    }, 5000);
  }
  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading" : "we are ready"}</div>;
  }
}

export default App;
