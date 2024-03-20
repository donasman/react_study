import instance from "../utils/instance";

export const sendAuthMailRequest = async () => {
    return await instance.post("/mail/send"); //토큰 발행 및 메일 전송
}