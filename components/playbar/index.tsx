import VolumeIcon from "../../assets/volume";
import HeartIcon from "../../assets/heart";
import PassIcon from "../../assets/pass";
import PlayIcon from "../../assets/play";
import * as S from "./styled";

export default function PlayBar() {
  return (
    <S.Wrapper>
      <S.Container>
        <>
          <S.Center>
            <S.CenterControl>
              <PassIcon callback={() => {}} isNext={false} />
              <PlayIcon size={17} callback={() => {}} />
              <PassIcon callback={() => {}} isNext={true} />
            </S.CenterControl>
            <S.RangeContainer progress={70}>
              <input type="range" name="" id="" />
            </S.RangeContainer>
          </S.Center>
        </>
        <>
          <S.Info>
            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/602f4731226337.5646928c3633f.jpg" />
            <div>
              <h3>너를 만나고</h3>
              <span>jussdfa</span>
            </div>
          </S.Info>
        </>
        <>
          <S.Control>
            <VolumeIcon callback={() => {}} />
            <HeartIcon size={26} callback={() => {}} />
          </S.Control>
        </>
      </S.Container>
    </S.Wrapper>
  );
}
