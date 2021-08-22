import React from "react";

function Food(props) {
  // props 대신 {name,image} 사용가능
  // component의 이름 첫글자는 대문자로 시작해야함
  // props 객체의 변수를 사용할때는 {}안에다가 사용
  return (
    // 이미지를 나타낼때는 img 태그 사용
    <div>
      <h1>i like {props.name}</h1>
      <img src={props.image} />
    </div>
  ); // {props.fav}와 {fav}는 같다
}

const foodILike = [
  {
    name: "kimchi",
    image:
      "https://cdn.shopify.com/s/files/1/1071/7482/files/043001000039.jpg?v=1475177400",
  },
  {
    name: "ramen",
    image: "https://i.ytimg.com/vi/hU0e8k-USXk/maxresdefault.jpg",
  },
  {
    name: "samgiopsal",
    image:
      "https://lonelyplanet.co.kr/upload/articleInfo/8158522e-6242-41de-a1b5-93b7522941fc.jpg",
  },
  {
    name: "chiken",
    image:
      "https://img.insight.co.kr/static/2016/03/17/2000/hu460u8t6hso9p84016m.jpg",
  },
];

function App() {
  // App이라는 컴포넌트 컴포넌트는 html을 반환하는 함수
  // 리엑트는 props를 통해 컴포넌트에 정보를 전달 가능
  return (
    <div className="App">
      <h1>hello react</h1>
      {foodILike.map((dish) => {
        return <Food name={dish.name} image={dish.image} />;
      })}
    </div>
  );
}

export default App;
