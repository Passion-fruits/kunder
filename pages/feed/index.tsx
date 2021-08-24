import * as S from "../../styles/feedStyles";
import FeedCard from "./feedCard";

export default function FeedPage() {
  return (
    <S.Wrapper>
      <S.Container>
        <S.LEFT_SIDE>
          <h1>Your Feed</h1>
          <span>음악 하이라이트를 제공합니다.</span>
          <select>
            <option value="">힙합</option>
          </select>
          <select>
            <option value="">최신순</option>
          </select>
          <p>
            KUNDER | 무료 음악 스트리밍 | 개인정보 약관 <br />
            마이페이지 | 전체보기
          </p>
        </S.LEFT_SIDE>
        <S.RIGHT_SIDE>
            <FeedCard/>
            <FeedCard/>
            <FeedCard/>
            <FeedCard/>
            <FeedCard/>
        </S.RIGHT_SIDE>
      </S.Container>
    </S.Wrapper>
  );
}
