import React from "react";
import PropTypes from "prop-types";

// PropTypes 사용하는이유:
//작업하는 프로젝트의 규모가 커질 수록 생각지 못한 곳에서 에러가 발생하는 일이 잦아진다.
//이를 방지하기 위한 방법으로, PropTypes를 활용하여 타입(type)을 확인하는 것이 대표적이다.
// PropTypes장점1 이것만 봐도 대략적인 props의 타입을 알 수있다.(컴포넌트.propTypes만 봐도 )
// props의 보호를위해 propTypes를써서 검사한다.
function Food(props) {
  //==Food({name,image})
  // props 대신 {name,image} 사용가능
  // component의 이름 첫글자는 대문자로 시작해야함
  // props 객체의 변수를 사용할때는 {}안에다가 사용
  return (
    // 이미지를 나타낼때는 img 태그 사용
    // alt 는 시각장애인들을위한 태그 사진의 정보를 나타내줌 이런것들이 있을때 좀더 고급스런
    // 코드를 만들 수 있다.
    <div>
      <h1>i like {props.name}</h1>
      <h4>평점:{props.rating}</h4>
      <img src={props.image} alt={props.name} />
    </div>
  ); // {props.fav}와 {fav}는 같다
}
Food.propTypes = {
  // propTypes를 통한 Prop의 타입 검사(체크,오류발견위해) 개발자도구에서만 확인가능
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

const foodILike = [
  {
    id: 1,
    name: "kimchi",
    image:
      "https://cdn.shopify.com/s/files/1/1071/7482/files/043001000039.jpg?v=1475177400",
    rating: 4.9,
  },
  {
    id: 2,
    name: "ramen",
    image: "https://i.ytimg.com/vi/hU0e8k-USXk/maxresdefault.jpg",
    rating: 4.8,
  },
  {
    id: 3,
    name: "samgiopsal",
    image:
      "https://lonelyplanet.co.kr/upload/articleInfo/8158522e-6242-41de-a1b5-93b7522941fc.jpg",
    rating: 5.0,
  },
  {
    id: 4,
    name: "chiken",
    image:
      "https://img.insight.co.kr/static/2016/03/17/2000/hu460u8t6hso9p84016m.jpg",
    rating: 4.9,
  },
];

function Foodfunc() {
  // Foodfunc이라는 컴포넌트, 컴포넌트는 html을 반환하는 함수
  // 리엑트는 props를 통해 컴포넌트에 정보를 전달 가능
  return (
    <div className="App">
      <h1>hello react</h1>
      {foodILike.map((dish) => {
        //key prop은 react내부에서 필요하기때문에 정의
        //map 함수에서는 id 필요ㄹ
        return (
          <Food
            key={dish.id}
            name={dish.name}
            image={dish.image}
            rating={dish.rating}
          />
        );
      })}
    </div>
  );
}

export default Foodfunc;
