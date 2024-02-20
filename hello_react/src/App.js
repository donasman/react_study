import logo from './logo.svg';
import './App.css';
import { Fragment, useState } from 'react';

/*
https://doishalf.tistory.com/59 - 기본설정

react component 특징
1. 파일명과 함수명을 일치시킨다.
2. 하나의 컴포넌트 함수는 하나의 태그 묶음만 리턴할 수 있다.
3. 함수를 꼭 export 해야한다 -default 하나만 정의 -> 기본값(우선순위)
*/ 

export default function App() {
  let names = ["홍길동", "홍길서", "홍홍홍"];
  // const jsxNames = names.map(name => <h1>{name}</h1>); 
  const [ nameArrayState, setNameArrayState ] = useState(["홍길동", "홍길서", "홍홍홍"]);
  // 상태관리 
  // 상태가 변하면 렌더링이 다시 된다. 
  // -> useState() 함수안에 값이 변하면 다시 렌더링 
  // -> useState() 값이 유지


  // 비구조할당
  const {name, age} = {name: "서창현", age: 27};
  const [num1, num2, num3, num4] = [1, 2, 3, 4]; // 0, 1 인덱스
  
  console.log("콘솔 호출?");
  
  const handleClick = () => {
    setNameArrayState([...nameArrayState, "사사사"]);
    console.log(names);
  }

  // jsx ( 렌더링 부분 )
  return <>
    <button onClick={ handleClick }>추가</button>
    <div>
      {nameArrayState.map(name => <h1>{ name }</h1>)}
    </div>
  </>;
}
