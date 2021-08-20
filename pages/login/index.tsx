import FacebookIcon from "../../assets/facebook";
import * as S from "../../styles/loginStyles";
import auth from "../../api/auth";
import GoogleBtn from "./googleBtn";
import { useState } from "react";
import { toast } from "react-toastify";

export default function LoginPage() {
  const [email, setEmail] = useState<string>("");
  const googleAuth = (event): void => {
    const token = event.tokenId;
    auth
      .googleLogin(token)
      .then((res) => {
        const email: string = res.data.email;
        setEmail(email);
        toast.success(`환영합니다 ${email.split("@", 1)}님`);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <S.Wrapper>
      <S.Container>
        <h1>LOGIN</h1>
        <p>간편 로그인으로 쿤더를 만나보세요</p>
        <GoogleBtn googleAuth={googleAuth} />
        <div>
          <FacebookIcon />
          페이스북으로 로그인
        </div>
        <span style={{ textDecoration: "underline" }}>개인정보 정책 확인</span>
        <p>
          이전 로그인 내역이 있으면 자동 로그인됩니다.
          <br />
          그렇지 않은 경우 회원가입 페이지로 넘어갑니다.
        </p>
      </S.Container>
    </S.Wrapper>
  );
}
