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
  const [musicIndex, setMusicIndex] = React.useState<HTMLAudioElement>();
  const [musicDuration, setMusicDuration] = React.useState<number | null>();
  const [musicProgress, setMusicProgress] = React.useState<number>(0);
  const [nowTime, setNowTime] = React.useState<number>(0);
  const [isPlay, setIsPlay] = React.useState<boolean>(false);
  const isPlayRef = React.useRef(null);
  isPlayRef.current = isPlay;

  React.useEffect(() => {
    setMusicIndex(null);
    setMusicDuration(null);
    setMusicProgress(0);
    setNowTime(0);
    setIsPlay(false);
    if (musicIndex) {
      musicIndex.currentTime = 0;
    }
    if (musicObj.musicSrc) {
      setMusicIndex(new Audio(musicObj.musicSrc));
    }
  }, [musicObj]);

  React.useEffect(() => {
    setIsPlay(false);
    if (musicIndex) {
      musicIndex.addEventListener(
        "canplaythrough",
        () => {
          console.log(musicIndex);
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
      }, 990);
    }
  }, [nowTime, isPlay, musicDuration]);

  React.useEffect(() => {
    if (musicDuration) {
      if (isPlay) {
        musicIndex.play();
      } else {
        musicIndex.pause();
      }
    }
  }, [isPlay, musicDuration]);

  return (
    <S.Wrapper>
      <S.Container>
        <S.Center>
          <S.CenterControl>
            <PassIcon callback={() => {}} isNext={false} />
            {isPlay ? (
              <PauseIcon size={17} callback={() => setIsPlay(false)} />
            ) : (
              <PlayIcon size={17} callback={() => setIsPlay(true)} />
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
