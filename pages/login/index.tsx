import FacebookIcon from "../../assets/facebook";
import GoolgleIcon from "../../assets/google";
import * as S from "../../styles/loginStyles";

export default function LoginPage() {
  return (
    <S.Wrapper>
      <S.Container>
        <h1>LOGIN</h1>
        <p>간편 로그인으로 쿤더를 만나보세요</p>
        <div>
          <GoolgleIcon /> 구글로 로그인
        </div>
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
