import React from 'react';
import { useEffect, useRef, useState } from "react";
import StudentInfo from "../components/StudentInfo";
import InfoInput from "../components/InfoInput";
import InfoButtons from "../components/InfoButtons";


function StudentPage(props) {
    const studentObj = {
        name: "",
        age: "",
        address: ""
      }
    
      const [ student, setStudent ] = useState(studentObj);
    
      const [ inputvalues, setInputValues ] = useState(studentObj);
    
      const inputRef = {
        name: useRef(),
        age: useRef(),
        address: useRef()
      }
    
    
      useEffect(() => {
        console.log(inputRef.name.current);
      }, []);
      useEffect(() => {
        console.log(inputRef.age.current);
      }, []);
      useEffect(() => {
        console.log(inputRef.address.current);
      }, []);
      
      useEffect(() => {
        setInputValues(studentObj);    
      }, [student]);
    
    
      // let email = "email";
      // let phone = "01035485084"
    
      // let user = {
      //   "username": "test",
      //   "password": "1234",
      //   [email]: test,
      //   phone
      // }
    
    
      
      // js객체 특징
      // 1. key값은 문자열이어도 된다
      // 2. 변수의 문자열 값을 키값으로 값을 쓰고 싶을 때 [] 대괄호로 묶어서 참조할 수 있다.
      // 3. 변수명만 입력하면 객체의 속성과 value로 한번에 정의할 수 있다.
    
      
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        
        // switch(name) {
        //   case "name":
        //     inputvalues.name = value;
        //     break;
        //   case "age":
        //     inputvalues.age = value;
        //     break;
        //   case "address":
        //     inputvalues.address = value;
        //     break;
        //   default:
        // }
    
        setInputValues ({
            ...inputvalues,
            [name]: value
          })
      }
    
      const handleOnOk = () => {
        setStudent(inputvalues);    
      }
    
      const handleOnClean = () => {
        setStudent(studentObj);
      }
      
    
      return (
      <>
        <InfoInput name={"name"}
          onChange={handleInputChange}
          value={inputvalues.name} 
          placeholder="이름"
          inputRef={inputRef.name}
          />
    
        <InfoInput name={"age"} 
          onChange={handleInputChange} 
          value={inputvalues.age} 
          placeholder="나이"
          inputRef={inputRef.age}
          />
          
        <InfoInput name={"address"} 
          onChange={handleInputChange} 
          value={inputvalues.address} 
          placeholder="주소"
          inputRef={inputRef.address}
          />
        <InfoButtons>
          <button onClick={handleOnOk}>확인</button> 
          <button onClick={handleOnClean}>지우기</button>
        </InfoButtons>
    
        <StudentInfo title="이름" text={student.name} />
        <StudentInfo title="나이" text={student.age} />
        <StudentInfo title="주소" text={student.address} />
    
    
      </>
        
      );
    


}

export default StudentPage;