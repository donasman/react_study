/** @jsxImportSource @emotion/react */
import Select from "react-select";
import BookRegisterInput from "../../../components/BookRegisterInput/BookRegisterInput";
import * as s from "./style"
import { useMutation, useQuery } from "react-query";
import { getAllBookTypeRequest, getAllCategoryRequest } from "../../../apis/api/options";
import { useRef, useState } from "react";
import { CiSquarePlus } from "react-icons/ci";
import { useBookRegisterInput } from "../../../hooks/useBookRegisterInput";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../../apis/firebase/config/firebaseConfig";
import {v4 as uuid} from "uuid";
import { upload } from "@testing-library/user-event/dist/upload";
import RightTopButton from "../../../components/RightTopButton/RightTopButton";
import { registerBook } from "../../../apis/api/bookApi";


function BookManagement(props) {
    
    const [ bookTypeOptions, setBookTypeOptions ] = useState([]);
    const [ categoiryOptions, setCategoriyOptions ] = useState([]);
    const fileRef = useRef();
    const inputRefs = [
        useRef(), // 0 bookId
        useRef(), // 1 isbn
        useRef(), // 2 도서형식
        useRef(), // 3 카테고리
        useRef(), // 4 도서명
        useRef(), // 5 저자명
        useRef(), // 6 출판사
        useRef() // 7 URL
    ]

    
    const categoryQuery = useQuery(
        ["categoryQuery"], 
        getAllCategoryRequest,
        {
            onSuccess: response => {
                setCategoriyOptions(() => response.data.map(category => {
                    return {
                        value: category.categoryId,
                        label: category.categoryName
                    }
                }));
            },
            retry: 0,
            refetchOnWindowFocus: false
        }
    );

    const bookTypeQuery = useQuery(
        ["bookTypeQuery"], 
        getAllBookTypeRequest,
        {
            onSuccess: response => {
                setBookTypeOptions(() => response.data.map(bookType => {
                    return {
                        value: bookType.bookTypeId,
                        label: bookType.bookTypeName
                    }
                }));
            },
            retry: 0,
            refetchOnWindowFocus: false
        }
    );

    const registerBookMutation = useMutation({
        mutationKey : "registerBookMutation",
        mutationFn: registerBook,
        onSuccess: response => {

        },
        onError: error => {

        }
    });


    const nextInput = (ref) => {
        console.log(ref.current);
        ref.current.focus();
    };

    const submit = () => {
        registerBookMutation.mutate({
            isbn: isbn.value,
            bookTypeId: bookTypeId.value.value,
            categoryId: categoryId.value.value,
            bookName: bookName.value,
            authorName: authorName.value,
            publisherName: publisherName.value,
            coverImgUrl: imgUrl.value
        })
    }

    const bookId = useBookRegisterInput(nextInput, inputRefs[1]);
    const isbn = useBookRegisterInput(nextInput, inputRefs[2]);
    const bookTypeId = useBookRegisterInput(nextInput, inputRefs[3]);
    const categoryId = useBookRegisterInput(nextInput, inputRefs[4]);
    const bookName = useBookRegisterInput(nextInput, inputRefs[5]);
    const authorName = useBookRegisterInput(nextInput, inputRefs[6]);
    const publisherName = useBookRegisterInput(nextInput, inputRefs[7]);
    const imgUrl = useBookRegisterInput(submit);

    const selectStyle = {
        control: (baseStyles) => ({
            ...baseStyles,
            borderRadius: "0px",
            border: "none",
            outline: "none",
            boxShadow: "none"
        })
    }


    const handleFileChange = (e) => {
        
        const files = Array.from(e.target.files);
        
        if(files.length === 0) {
            e.target.value = "";
            return;
        }

        if(!window.confirm("파일을 업로드 하시겠습니까?")) {
            e.target.value = "";
            return;
        }

        const storageRef = ref(storage, `library/book/cover/${uuid()}_${files[0].name}`);
        const uploadTask = uploadBytesResumable(storageRef, files[0]);

        uploadTask.on(
            "state_changed",
            snapshot => {},
            error => {},
            () => {
                alert("업로드가 완료되었습니다.");
                getDownloadURL(storageRef)
                .then(url => {
                    imgUrl.setValue(() => url);
                });
            }
        )

    }


    return (
        <div css={s.layout}>
            <div css={s.header}>
                <h1>도서관리</h1>
                <RightTopButton onClick={submit}>확인</RightTopButton>
            </div>
            <div css={s.topLayout}>
                <table css={s.registerTable}>
                    <tbody>
                        <tr>
                            <th css={s.registerTh}>도서코드</th>
                            <td>
                                <BookRegisterInput 
                                    value={bookId.value}
                                    bookref={inputRefs[0]}
                                    onChange={bookId.handleOnChange}
                                    onKeyDown={bookId.handleOnKeyDown}/>
                            </td>
                            <th css={s.registerTh}>ISBN</th>
                            <td>
                                <BookRegisterInput
                                    value={isbn.value}
                                    bookref={inputRefs[1]}
                                    onChange={isbn.handleOnChange}
                                    onKeyDown={isbn.handleOnKeyDown} />
                            </td>
                            <td rowSpan={5} css={s.preview}>
                                <div css={s.imageBox}>
                                    <img src={!imgUrl.value ? "data:image/jpeg;base64,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" 
                                    : imgUrl.value
                                } alt="" />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th css={s.registerTh}>도서형식</th>
                            <td>
                                <Select 
                                    styles={selectStyle} 
                                    options={bookTypeOptions}
                                    onKeyDown={bookTypeId.handleOnKeyDown}
                                    onChange={bookTypeId.handleOnChange}
                                    ref={inputRefs[2]}
                                />
                            </td>
                            <th css={s.registerTh}>카테고리</th>
                            <td>
                                <Select 
                                    styles={selectStyle} 
                                    options={categoiryOptions}
                                    onKeyDown={categoryId.handleOnKeyDown}
                                    onChange={categoryId.handleOnChange}
                                    ref={inputRefs[3]}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th css={s.registerTh}>도서명</th>
                            <td colSpan={3}>
                                <BookRegisterInput
                                    value={bookName.value}
                                    bookref={inputRefs[4]}
                                    onChange={bookName.handleOnChange}
                                    onKeyDown={bookName.handleOnKeyDown}
                                />
                            </td>
                        </tr>                    
                        <tr>
                            <th css={s.registerTh}>저자명</th>
                            <td>
                                <BookRegisterInput 
                                    value={authorName.value}
                                    bookref={inputRefs[5]}
                                    onChange={authorName.handleOnChange}
                                    onKeyDown={authorName.handleOnKeyDown}
                                />
                            </td>
                            <th css={s.registerTh}>출판사</th>
                            <td>
                                <BookRegisterInput 
                                    value={publisherName.value}
                                    bookref={inputRefs[6]}
                                    onChange={publisherName.handleOnChange}
                                    onKeyDown={publisherName.handleOnKeyDown}    
                                />
                            </td>
                        </tr>   
                        <tr>
                            <th css={s.registerTh}>표지URL</th>
                            <td colSpan={3}>
                                <div css={s.imgURL}>
                                    <span css={s.imgURLBox}>
                                        <BookRegisterInput 
                                            value={imgUrl.value}
                                            bookref={inputRefs[7]}
                                            onChange={imgUrl.handleOnChange}
                                            onKeyDown={imgUrl.handleOnKeyDown} 
                                        />
                                    </span>
                                    <input 
                                        type="file"
                                        style={{
                                            display: "none"
                                        }} 
                                        onChange={handleFileChange}
                                        ref={fileRef}
                                    />
                                    <button css={s.imgAddButton} onClick={() => fileRef.current.click()}>
                                        <CiSquarePlus />
                                    </button>  
                                </div>
                            </td>
                        </tr>     
                    </tbody>
                </table>
                <div></div>
            </div>
        </div>
    );
}

export default BookManagement;