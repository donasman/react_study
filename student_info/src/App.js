import logo from './logo.svg';
import './App.css';
import InfoInput from './components/InfoInput';
import StudentInfo from './components/StudentInfo';
import { useEffect, useRef, useState } from 'react';

  function App() {
  
    const studentObj = {
    name: "",
    age: "",
    address: ""
  };

  const [ student, setStudent ] = useState(studentObj)
  const [ inputValues, setInputValues ] = useState(studentObj)
  const [ refresh, setRefresh ] = useState(false);
  const nameInputRef = useRef();
  
  // html 변화 인지 -> 무조건 1회는 동작[] -> 값이 바뀌면 동작 -> 순서가 필요할때 사용
  useEffect(() => {
    console.log(nameInputRef.current);
  });


  /*
  js객체 특징
  1. 키값은 문자열이어도 된다
  2. 변수의 문자열 값을 키값으로 쓰고 싶을 때 []대괄호를 묶어서 참조할 수 있다.
  3. 변수명만 입력하면 객체의 속성과 value로 한번에 정의할 수 있다.
  */

  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    setInputValues({
      // 키값은 하나만
      ...inputValues,
      [name]: value
    });
}


  const handleOnOk = () => {
    setStudent(inputValues);
  }

  const handleDeleteClick = () => {
    setStudent(studentObj);
  }

  return (
    
    <>
    <StudentInfo title="이름" text={student.name}/>
    <StudentInfo title="나이" text={student.age}/>
    <StudentInfo title="주소" text={student.address}/>
    
    <InfoInput name={"name"}
      placeholder={"이름"}
      onChange={handleInputChange}
      value={inputValues.name}
      ref={nameInputRef}
    />
    <InfoInput name={"age"}
      placeholder={"나이"}
      onChange={handleInputChange}
      value={inputValues.age}
      ref={nameInputRef}
    />
    <InfoInput name={"address"}
      placeholder={"주소"}
      onChange={handleInputChange}
      value={inputValues.address}
      ref={nameInputRef}
    />
    
    {/* children - 자식요소 */}
      <button onClick={handleOnOk}>확인</button>
      <button onClick={handleDeleteClick}>비우기</button>
    </>
  );
}

export default App;
