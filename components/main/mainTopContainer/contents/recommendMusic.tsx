import * as S from "../styles";
import PlayBtn from "../playBtn";

export default function RecommendMusic() {
  return (
    <S.RecommendMusicWrapper>
      <div className="img-cover content-box">
        <div className="cover-music-info">
          <h1>안녕 그대</h1>
          <h3>김현철</h3>
          <PlayBtn direction="right" />
        </div>
      </div>
      <img
        src="https://public-files.gumroad.com/variants/ta15js69flf0awf7qgtpvuqjb0s7/3298c3eb001bbed90f1d616da66708480096a0a1b6e81bd4f8a2d6e9b831d301"
        alt=""
      />
    </S.RecommendMusicWrapper>
  );
}
