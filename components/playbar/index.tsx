import { PassIcon, PlayIcon, VolumeIcon, HeartIcon } from "../../assets/index";
import { getValue } from "../../lib/context";
import React from "react";
import * as S from "./styled";

export default function PlayBar() {
  const musicObj = getValue().musicInformation;
  const [musicIndex, setMusicIndex] = React.useState<HTMLAudioElement>();
  const [musicDuration, setMusicDuration] = React.useState<number | null>();
  const [musicProgress, setMusicProgress] = React.useState<number>(0);
  const [nowTime, setNowTime] = React.useState<number>(0);
  const [isPlay, setIsPlay] = React.useState<boolean>(false);
  const isPlayRef = React.useRef(null);
  isPlayRef.current = isPlay;

  React.useEffect(() => {
    setMusicDuration(null);
    setMusicProgress(0);
    setIsPlay(false);
    if (musicObj.musicSrc) {
      setMusicIndex(
        typeof Audio !== "undefined" && new Audio(musicObj.musicSrc)
      );
    }
  }, [musicObj]);

  React.useEffect(() => {
    if (musicIndex) {
      musicIndex.addEventListener(
        "canplaythrough",
        () => {
          setIsPlay(true);
          setMusicDuration(musicIndex.duration);
        },
        false
      );
    }
  }, [musicIndex]);

  React.useEffect(() => {
    if (musicDuration) {
      setTimeout(() => {
        if (isPlayRef.current) {
          setNowTime(nowTime + 1);
          setMusicProgress(Math.floor((nowTime / musicDuration) * 100 + 1));
        }
      }, 1000);
    }
  }, [nowTime, isPlay,musicDuration]);

  React.useEffect(() => {
    if (musicDuration) {
      if (isPlay) {
        musicIndex.play();
      } else {
        musicIndex.pause();
      }
    }
  }, [isPlay,musicDuration]);

  console.log(musicProgress,nowTime)

  return (
    <S.Wrapper>
      <S.Container>
        <S.Center>
          <S.CenterControl>
            <PassIcon callback={() => {}} isNext={false} />
            <PlayIcon size={17} callback={() => {}} />
            <PassIcon callback={() => {}} isNext={true} />
          </S.CenterControl>
          <S.RangeContainer progress={musicProgress}>
            <input type="range" name="" id="" />
          </S.RangeContainer>
        </S.Center>
        <S.Info>
          <img src={musicObj.coverImg} />
          <div>
            <h3>{musicObj.title}</h3>
            <span>{musicObj.name}</span>
          </div>
        </S.Info>
        <S.Control>
          <VolumeIcon callback={() => {}} />
          <HeartIcon size={26} callback={() => {}} />
        </S.Control>
      </S.Container>
    </S.Wrapper>
  );
}
