import MainTopContainer from "./mainTopContainer";
import * as S from "./styles";
import ThemaCardList from "./themaCardList";

export default function MainPage() {
  return (
    <S.Wrapper>
      <S.Container>
        <MainTopContainer />
        <ThemaCardList title="최신 힙합음악을 만나보세요" genre="힙합" />
        <ThemaCardList title="분위기 좋은 날, 재즈" genre="재즈" />
        <ThemaCardList title="당신을 즐겁게 할 팝 음악" genre="팝" />
      </S.Container>
    </S.Wrapper>
  );
}
