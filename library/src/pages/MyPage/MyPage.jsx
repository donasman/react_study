/** @jsxImportSource @emotion/react */
import { useMutation, useQueryClient } from "react-query";
import * as s from "./style";
import { sendAuthMailRequest } from "../../apis/api/sendAuthMail";
import { GoCheckCircle } from "react-icons/go";
import { GridLoader } from "react-spinners";
import { useAuthCheck } from "../../hooks/useAuthCheck";
import { useNavigate } from "react-router-dom";

function MyPage(props) {
    useAuthCheck();
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const principalData = queryClient.getQueryData("principalQuery");
    const sendAuthMailMutation = useMutation({
        mutationKey: "sendAuthMailRequest",
        mutationFn: sendAuthMailRequest,
        retry: 0,
        onSuccess: (response) => {
            if(response.data) {
                alert("메일 전송을 완료하였습니다.")
            } else {
                alert("메일 전송에 실패하였습니다.")
            }
        }
    }); //react-query 라이브러리에서 get요청을 제외한 요청은 useMutation사용, 매개변수로 키와 함수 넣기

    const handleSendAuthMail = () => {
        console.log(principalData.data.authorities);
        sendAuthMailMutation.mutate(); // mutate를 호출하면sendAuthMailMutation안에 있는 함수가 호출됨
    }

    
    return (
        <>
            <div css={s.layout}>
                <div css={s.header}>
                    <div css={s.imgBox}>
                        <div css={s.profileImg}>
                            <img src="https://onimg.nate.com/orgImg/fb/2016/02/09/image_51c1e8fde431e2e378ebd7a363be5e50.png" alt="" />
                        </div>
                    </div>
                    <div css={s.infoBox}>
                        <div css={s.infoText}>사용자이름: {principalData?.data.username}</div>
                        <div css={s.infoText}>이름: {principalData?.data.name}</div>
                        <div css={s.emailBox}>
                            <div css={s.infoText}>이메일: {principalData?.data.email}</div>
                            {
                            principalData?.data.authorities.filter(auth => auth.authority === "ROLE_USER").length === 0 ? (
                                <>
                                    {
                                        sendAuthMailMutation.isLoading ? (
                                            <GridLoader color="#36d7b7" size={5} />
                                        ) 
                                        : 
                                        (
                                            <button css={s.infoButton} onClick={handleSendAuthMail}>인증하기</button>
                                        )
                                    }
                                </>
                            ) : (
                                <div css={s.emailCheck}>
                                    <GoCheckCircle />
                                </div>
                            )}
                        </div>
                        <div css={s.infoButtons}>
                            <button css={s.infoButton}>정보 수정</button>
                            <button css={s.infoButton} onClick={() => navigate("/account/edit/password")}>비밀번호 수정</button>
                        </div>
                    </div>
                </div>
                <div css={s.bottom}></div>
            </div>
        </>
    );
}

export default MyPage;