import React, { useEffect, useRef, useState } from 'react';

function StudentArrayPage(props) {
    const [ studentList, setStudentList ] = useState([]);

    const [ inputValue, setInputValue ] = useState({
        id: "",
        name: "",
        age: "",
        address: ""
    });

    const [ updateId, setUpdateId ] = useState(0);

    const staticId = useRef(0); // 랜더링이 되더라도 초기화 되지 않음 Ref값이 변해도 랜더링은 일어나지 않음

    useEffect(() => {
        console.log(studentList);
    }, [studentList])

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInputValue({
            ...inputValue,
            [name]: value
        })
    }

    const handleAddClick = () => {
        // console.log(staticId.current += 1);

        const student = {
            ...inputValue,
            id: staticId.current += 1           
        }
        setStudentList([...studentList, student])
        
    }
    const handleDeleteClick = (id) => {
        setStudentList([...studentList.filter(student => student.id != id) ])
    }

    const handleUpdateClick = (id) => {
        setUpdateId(id);
        setInputValue(studentList.filter(student => student.id === id)[0])
    }

    const handleUpdateSubmitClick = () => {
        const findIndex = studentList.indexOf(studentList.filter(student => student.id === updateId)[0]);
        const updateStudentList = [...studentList];

        updateStudentList[findIndex] = inputValue;

        setStudentList(updateStudentList);
        handleCancelSubmitClick();
    }

    const handleCancelSubmitClick = () => {
        setUpdateId(0);
        setInputValue({
            id: "",
            name: "",
            age: "",
            address: ""
        })
    }



    return (
        <div>
            <div>
                <input type="text" name="id" disabled={true} value={inputValue.id} placeholder='ID'/>
                <input type="text" name='name' onChange={handleInputChange} value={inputValue.name} placeholder='이름' />
                <input type="text" name='age' onChange={handleInputChange} value={inputValue.age} placeholder='나이' />
                <input type="text" name='address' onChange={handleInputChange} value={inputValue.address} placeholder='주소' />
                <button onClick={handleAddClick}>추가</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>이름</th>
                        <th>나이</th>
                        <th>주소</th>
                    </tr>
                </thead>
                <tbody>
                    {studentList.map(student => {
                        return <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{student.address}</td>
                            <td>
                                {
                                    updateId !== student.id 
                                    ? <button onClick={() => {handleUpdateClick(student.id);}}>수정</button>
                                    : <button onClick={() => {handleUpdateSubmitClick(student.id)}}>확인</button>
                                }
                            </td>
                            <td>
                                {
                                    updateId !== student.id
                                    ? <button onClick={() => {handleDeleteClick(student.id);}}>삭제</button>
                                    : <button onClick={handleCancelSubmitClick}>취소</button>
                                }
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>        
        </div>


    );
}

export default StudentArrayPage;