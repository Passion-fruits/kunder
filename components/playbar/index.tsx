import {
  PassIcon,
  PlayIcon,
  VolumeIcon,
  PauseIcon,
  MuteIcon,
} from "../../assets/index";
import { getValue } from "../../lib/context";
import React from "react";
import * as S from "./styled";
import MusicInfo from "./musicInfo";

export default function PlayBar() {
  const musicObj = getValue().musicInformation;
  const [isPlay, setIsPlay] = React.useState<boolean>(false);
  const [musicProgress, setMusicProgress] = React.useState<number>(0);
  const [volume, setVolume] = React.useState(50);
  const audio = React.useRef(typeof Audio !== "undefined" && new Audio());

  const musicStop = React.useCallback(() => {
    audio.current.pause();
    setIsPlay(false);
  }, [audio]);

  const musicStart = React.useCallback(() => {
    audio.current.play();
    setIsPlay(true);
  }, [audio]);

  const moveMusic = React.useCallback(({ target }) => {
    const value = target.value;
    setMusicProgress(value);
    audio.current.currentTime = (audio.current.duration * value) / 100;
  }, []);

  const controleMusicVolume = React.useCallback(({ target }) => {
    setVolume(target.value);
  }, []);

  const volumeIconEvent = React.useCallback(() => {
    if (volume === 0) {
      setVolume(50);
    } else {
      setVolume(0);
    }
  }, [volume]);

  React.useEffect(() => {
    setMusicProgress(0);
    if (musicObj.musicSrc) {
      audio.current.src = musicObj.musicSrc;
      audio.current.play();
      setIsPlay(true);
    }
  }, [musicObj]);

  React.useEffect(() => {
    setInterval(() => {
      audio.current.currentTime &&
        setMusicProgress(
          (audio.current.currentTime / audio.current.duration) * 100 + 1
        );
    }, 1000);
  }, []);

  React.useEffect(() => {
    audio.current.volume = volume / 100;
  }, [volume]);

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
            <input type="range" onClick={moveMusic} />
          </S.RangeContainer>
        </S.Center>
        <MusicInfo
          title={musicObj.title}
          coverImg={musicObj.coverImg}
          name={musicObj.name}
          songId={musicObj.songId}
        />
        <S.Control>
          {volume == 0 ? (
            <MuteIcon size={22} callback={volumeIconEvent} />
          ) : (
            <VolumeIcon size={22} callback={volumeIconEvent} />
          )}
          <S.VolumeControlWrap progress={volume}>
            <input type="range" onClick={controleMusicVolume} />
          </S.VolumeControlWrap>
        </S.Control>
      </S.Container>
    </S.Wrapper>
  );
}
