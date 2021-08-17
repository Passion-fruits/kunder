import { useRouter } from "next/dist/client/router";
import SearchIcon from "../../assets/sarch";
import * as S from "./styled";

export default function Header() {
  const router = useRouter();
  const routing = (path): void => {
    router.push(`/${path}`);
  };
  return (
    <S.Wrapper>
      <S.Cotainer>
        <>
          <S.LEFT_SIDE>
            <h1 onClick={() => routing("/")}>KUNDER</h1>
            <span onClick={() => routing("/")}>메인</span>
            <span onClick={() => routing("/all")}>전체보기</span>
            <span onClick={() => routing("/feed")}>피드</span>
            <span onClick={() => routing("/upload")}>음악업로드</span>
          </S.LEFT_SIDE>
        </>
        <>
          <S.RIGHT_SIDE>
            <div>
              <SearchIcon />
              <input type="text" placeholder="검색어를 입력하세요." />
            </div>
            <button onClick={() => routing("/login")}>로그인</button>
          </S.RIGHT_SIDE>
        </>
      </S.Cotainer>
    </S.Wrapper>
  );
}
