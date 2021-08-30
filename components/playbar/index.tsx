import {
  PassIcon,
  PlayIcon,
  VolumeIcon,
  HeartIcon,
  PauseIcon,
} from "../../assets/index";
import { getValue } from "../../lib/context";
import React from "react";
import * as S from "./styled";
import MusicInfo from "./musicInfo";

export default function PlayBar() {
  const musicObj = getValue().musicInformation;
  const [isPlay, setIsPlay] = React.useState<boolean>(false);
  const [musicProgress, setMusicProgress] = React.useState<number>(0);
  const audio = React.useRef(typeof Audio !== "undefined" && new Audio());

  const musicStop = React.useCallback(() => {
    audio.current.pause();
    setIsPlay(false);
  }, [audio]);

  const musicStart = React.useCallback(() => {
    audio.current.play();
    setIsPlay(true);
  }, [audio]);

  React.useEffect(() => {
    if (musicObj.musicSrc) {
      audio.current.src = musicObj.musicSrc;
      audio.current.play();
      setIsPlay(true);
    }
  }, [musicObj]);

  React.useEffect(() => {
    setInterval(() => {
      audio.current.currentTime && setMusicProgress(
        (audio.current.currentTime / audio.current.duration) * 100
      );
    }, 1000);
  }, []);

  return (
    <S.Wrapper>
      <audio id="audio" />
      <S.Container>
        <S.Center>
          <S.CenterControl>
            <PassIcon callback={() => {}} isNext={false} />
            {isPlay ? (
              <PauseIcon size={17} callback={musicStop} />
            ) : (
              <PlayIcon size={17} callback={musicStart} />
            )}
            <PassIcon callback={() => {}} isNext={true} />
          </S.CenterControl>
          <S.RangeContainer progress={musicProgress}>
            <input type="range" name="" id="" />
          </S.RangeContainer>
        </S.Center>
        <MusicInfo
          title={musicObj.title}
          coverImg={musicObj.coverImg}
          name={musicObj.name}
        />
        <S.Control>
          <VolumeIcon callback={() => {}} />
          <HeartIcon size={26} callback={() => {}} />
        </S.Control>
      </S.Container>
    </S.Wrapper>
  );
}
