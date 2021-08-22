import React from "react";

function Food(props) {
  // props 대신 {fav} 사용가능
  // component의 이름 첫글자는 대문자로 시작해야함
  return <h1>i like {props.fav}</h1>; // {props.fav}와 {fav}는 같다
}

function App() {
  // App이라는 컴포넌트 컴포넌트는 html을 반환하는 함수
  return (
    <div className="App">
      hello!!
      <Food fav="kimchi" />
      <Food fav="ramen" />
      <Food fav="samgiopsal" />
      <Food fav="chukumi" />
    </div>
  );
}

export default App;
