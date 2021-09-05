import MainTopContainer from "./mainTopContainer";
import * as S from "./styles";
import ThemaCardList from "./themaCardList";

export default function MainPage() {
  return (
    <S.Wrapper>
      <S.Container>
        <MainTopContainer />
        <ThemaCardList title="나를 힙하게 만드는 음악, 힙합" genre="힙합" />
        <ThemaCardList title="분위기 좋은 날엔, 재즈" genre="재즈" />
        <ThemaCardList title="당신을 즐겁게 할 팝 음악" genre="팝" />
        <ThemaCardList title="감성을 복돋는 음악, 클래식" genre="클래식" />
        <ThemaCardList title="당신만을 위한 레게 음악" genre="레게" />
      </S.Container>
    </S.Wrapper>
  );
}
