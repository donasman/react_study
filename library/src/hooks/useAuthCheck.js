import { useEffect } from "react";
import { useQueryClient } from "react-query"

export const useAuthCheck = () => {
    const queryClient = useQueryClient();

    useEffect(() => {
        const pricipalData = queryClient.getQueryData("principalQuery")
        if(!pricipalData) {
            alert("로그인 후 이용바랍니다");
            window.location.replace("/auth/signin")
        }
    },[]);
}