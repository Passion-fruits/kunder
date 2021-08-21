import { useRouter } from "next/dist/client/router";
import SearchIcon from "../../assets/sarch";
import * as S from "./styled";
import { useState } from "react";
import { useEffect } from "react";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "./../../lib/export/localstorage";
import { toast } from "react-toastify";

export default function Header() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState<boolean>(false);
  useEffect(() => {
    if (localStorage.getItem(ACCESS_TOKEN)) {
      setIsLogin(true);
    }
  }, [router]);
  const routing = (path): void => {
    router.push(`/${path}`);
  };
  const logout = (): void => {
    localStorage.setItem(ACCESS_TOKEN, "");
    localStorage.setItem(REFRESH_TOKEN, "");
    setIsLogin(false);
    toast.success("로그아웃 되었습니다.");
  };
  return (
    <S.Wrapper>
      <S.Cotainer>
        <>
          <S.LEFT_SIDE>
            <h1 onClick={() => routing("")}>KUNDER</h1>
            <span onClick={() => routing("")}>메인</span>
            <span onClick={() => routing("all?genre=1&sort=1")}>전체보기</span>
            <span onClick={() => routing("feed")}>피드</span>
            <span onClick={() => routing("upload")}>음악업로드</span>
          </S.LEFT_SIDE>
        </>
        <>
          <S.RIGHT_SIDE>
            <div>
              <SearchIcon />
              <input type="text" placeholder="검색어를 입력하세요." />
            </div>
            {isLogin ? (
              <>
                <button onClick={logout}>로그아웃</button>
                <button onClick={() => routing("mypage")}>마이페이지</button>
              </>
            ) : (
              <button
                style={{ padding: "8px 24px" }}
                onClick={() => routing("login")}
              >
                로그인
              </button>
            )}
          </S.RIGHT_SIDE>
        </>
      </S.Cotainer>
    </S.Wrapper>
  );
}
