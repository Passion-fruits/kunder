import PlayBtn from "../playBtn";
import * as S from "../styles";

export default function RecommendGenre({
  backgroundColor,
  height,
  title,
  subTitle,
  imgUrl,
  imgSize
}) {
  return (
    <S.RecommendGenreWrapper
      backgroundColor={backgroundColor}
      height={height}
      imgSize={imgSize}
      className="content-box"
    >
        <h1>{title}</h1>
        <h3>{subTitle}</h3>
        <PlayBtn direction="left"/>
        <img src={imgUrl} alt="" />
    </S.RecommendGenreWrapper>
  );
}
