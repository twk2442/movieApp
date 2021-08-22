import React from "react";

function Food(props) {
  // props 대신 {name,image} 사용가능
  // component의 이름 첫글자는 대문자로 시작해야함
  // props 객체의 변수를 사용할때는 {}안에다가 사용
  return (
    // 이미지를 나타낼때는 img 태그 사용
    // alt 는 시각장애인들을위한 태그 사진의 정보를 나타내줌 이런것들이 있을때 좀더 고급스런
    // 코드를 만들 수 있다.
    <div>
      <h1>i like {props.name}</h1>
      <img src={props.image} alt={props.name} />
    </div>
  ); // {props.fav}와 {fav}는 같다
}

const foodILike = [
  {
    id: 1,
    name: "kimchi",
    image:
      "https://cdn.shopify.com/s/files/1/1071/7482/files/043001000039.jpg?v=1475177400",
  },
  {
    id: 2,
    name: "ramen",
    image: "https://i.ytimg.com/vi/hU0e8k-USXk/maxresdefault.jpg",
  },
  {
    id: 3,
    name: "samgiopsal",
    image:
      "https://lonelyplanet.co.kr/upload/articleInfo/8158522e-6242-41de-a1b5-93b7522941fc.jpg",
  },
  {
    id: 4,
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
        //key prop은 react내부에서 필요하기때문에 정의
        return <Food key={dish.id} name={dish.name} image={dish.image} />;
      })}
    </div>
  );
}

export default App;
