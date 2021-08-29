import ThemaCardList from "../themaCardList";
import RecommendGenre from "./contents/recommendGenre";
import RecommendMusic from "./contents/recommendMusic";
import * as S from "./styles";

export default function MainTopContainer() {
  return (
    <S.MainTopWrapper>
      <h3 className="kunder-naming-intro">KOREAN UNDERGROUND MUSIC, KUNDER</h3>
      <h5 className="sub-intro">한국 언더그라운드 음악 플랫폼, 쿤더</h5>
      <S.ContentsFlexWrap>
        <RecommendMusic />
        <div className="column-wrap">
          <RecommendGenre
            backgroundColor="#4D94FF"
            title="힙합음악"
            subTitle="오늘을 힙하게"
            height="150px"
            imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaO29jas9tn4lelZsreznXFWI0iBA7qYvTgA&usqp=CAU"
            imgSize="65px"
          />
          <RecommendGenre
            backgroundColor="#FF4D9A"
            title="새벽 감성 바이브"
            subTitle="새벽 드라이브 가실래요?"
            height="190px"
            imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJhy6y4FBIV8TUptXXbpKxHjy52u3zZInCkQ&usqp=CAU"
            imgSize="65px"
          />
        </div>
        <RecommendGenre
          backgroundColor="#00EC86"
          title="재즈음악"
          subTitle="잔잔한 밤에 재즈음악"
          height="350px"
          imgUrl="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e4ed5459643717.5a298fd055fc3.png"
          imgSize="190px"
        />
      </S.ContentsFlexWrap>
      <ThemaCardList/>
      <ThemaCardList/>
      <ThemaCardList/>
    </S.MainTopWrapper>
  );
}
