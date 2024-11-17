import { useState } from 'react';
import './App.css';

function App() {
  let [title, setTitle] = useState(["남자 케이스 추천", "포트폴리오 메인 색 추천", "남자 코트 추천"]);
  // let posts = "수원 돈까스 맛집";
  let [good, setGood] = useState(0);
  return (
    <>
      <div className="black-nav">
        <h4>ReactBLOG</h4>
      </div>
      <div className='list'>
        <h4>글제목 : {title[0]} <span onClick={() => {
          //JSX onclick 방법
          // 1. Click C가 대문자
          // 2. {} 사용
          // 3. 그냥 코드가 아니라 함수를 넣어야 한다.

          //state변경함수(새로운 state)

          setGood(++good);
          //setGood(good + 1);

        }}>😍</span> {good} </h4>
        <p>발행 날짜 : 2024.11.17</p>
        <button onClick={() => {
          let copy = [...title];
          console.log(copy);
          copy[0] = "여자 코트 추천";
          console.log(copy);

          setTitle(copy);
        }}>글제목변경</button>
      </div>
      <div className='list'>
        <h4>글제목 : {title[1]}</h4>
        <p>발행 날짜 : 2024.11.17</p>
      </div>
      <div className='list'>
        <h4>글제목 : {title[2]}</h4>
        <p>발행 날짜 : 2024.11.17</p>
      </div>
    </>
  );
}

export default App;
