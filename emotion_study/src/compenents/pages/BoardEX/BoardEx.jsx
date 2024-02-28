import React, { useMemo } from 'react';
import ReactQuill from 'react-quill';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const layOut = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const textEditorLayout = css`
    width: 900px;
    height: 700px;
`;

function BoardEx() {
    const modules = useMemo(() => ({ 
        toolbar : [
            ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
            ['blockquote', 'code-block'],
            ['link', 'image', 'video', 'formula'],
        
            [{ 'header': 1 }, { 'header': 2 }],               // custom button values
            [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
            [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
            [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
            [{ 'direction': 'rtl' }],                         // text direction
        
            [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        
            [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
            [{ 'font': [] }],
            [{ 'align': [] }],
        
            ['clean']                                         // remove formatting button
        ]
    }), []);
            

    const handleQuillChange = (value) => {
        console.log(value);
    }

    return (
        <div css={layOut}>
            <div css= {textEditorLayout}>
                <ReactQuill style={{
                    height: "100%",

                }} onChange={handleQuillChange} modules={modules}/>   
            </div>
        </div>
    );
}

export default BoardEx;