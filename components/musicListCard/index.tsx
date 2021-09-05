import { HeartIcon, PlayIcon } from "../../assets";
import { COLOR } from "../../styles";
import * as S from "./styles";

export default function MusicListCard() {
  return (
    <S.Wrapper>
      <S.MusicInformatino className="list-contents">
        <div className="index-number">1</div>
        <button className="play-button">
          <PlayIcon size={13} callback={() => {}} color="#DBDBDB" />
        </button>
        <img
          className="cover-img"
          src="https://allforyoung-maycan-seoul.s3.ap-northeast-2.amazonaws.com/uploads/description/2021/01/28/3a5f6864-6e64-4b70-9d11-874acbf1b139.jpg"
        />
        <div className="music-title-writter">
          <h3>마에스트로</h3>
          <h5>changmo</h5>
        </div>
      </S.MusicInformatino>
      <S.MusicGenreMood className="list-contents">
        <div>
          <span>힙합음악</span>
        </div>
        <div>
          <span>아침에</span>
        </div>
      </S.MusicGenreMood>
      <S.HeartCotainer>
        <HeartIcon color={COLOR.main} size={20} callback={() => {}} />
        <span>1</span>
      </S.HeartCotainer>
    </S.Wrapper>
  );
}
