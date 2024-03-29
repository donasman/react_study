/** @jsxImportSource @emotion/react */
import { useMutation } from "react-query";
import AuthPageInput from "../../components/AuthPageInput/AuthPageInput";
import { useAuthCheck } from "../../hooks/useAuthCheck";
import { useInput } from "../../hooks/useInput";
import { editPasswordRequest } from "../../apis/api/editPassword";

function PasswordEditPage(props) {

    useAuthCheck();
    const [ oldPassword, handleOldPassword, oldMessage, setOld, setOldMessage ] = useInput("oldPassword");
    const [ newPassword, handleNewPassword, newMessage, setNew, setNewMessage ] = useInput("newPassword");
    const [ newPasswordCheck, handleNewPasswordCheck, newCheckMessage, setNewCheck, setNewCheckMessage ] = useInput("newPasswordCheck");

    const editPasswordMutation = useMutation({
        mutationKey:"editPasswordMutation",
        mutationFn: editPasswordRequest, 
        onSuccess: response => {
            alert("비밀번호를 정상적으로 변경하였습니다. \n다시 로그인 하세요");
            localStorage.removeItem("AccessToken");
            window.location.replace("/auth/signin");

        },
        onError: error => {
            console.log(error.response.data);
            if(error.response.status === 400) {
                const errorMap = error.response.data;
                const errorEntries = Object.entries(errorMap);

                setOldMessage(null);
                setNewMessage(null);
                setNewCheckMessage(null);

                for(let [ k, v ] of errorEntries) {
                    const message = {
                        type: "error",
                        text: v
                    }
                    if(k ==="oldPassword") {
                        setOldMessage(() => message);
                    }
                    if(k ==="newPassword") {
                        setNewMessage(() => message);
                    }
                    if(k ==="newPasswordCheck") {
                        setNewCheckMessage(() => message);
                    }
                }
            }
        }

    });

    const handleEditSubmitClick = () => {
        editPasswordMutation.mutate({
            oldPassword,
            newPassword,
            newPasswordCheck
        })
    }
    return (
        <div>
            <h1>비밀번호 변경</h1>
            <AuthPageInput type={"password"} placeholder={"기존 비밀번호"} message={oldMessage} value={oldPassword} onChange={handleOldPassword}/>
            <AuthPageInput type={"password"} placeholder={"새 비밀번호"} message={newMessage} value={newPassword} onChange={handleNewPassword}/>
            <AuthPageInput type={"password"} placeholder={"새 비빌번호 확인"} message={newCheckMessage} value={newPasswordCheck} onChange={handleNewPasswordCheck} />
            <button onClick={handleEditSubmitClick}>비밀번호 변경하기</button>
        </div>
    );
}

export default PasswordEditPage;