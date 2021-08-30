import { getDate } from "./../../lib/util/getDate";
import { COLOR } from "./../../styles/index";
import { useRouter } from "next/dist/client/router";
import { resizing } from "./../../lib/util/resizing";
import { setValue } from "./../../lib/context/index";
import * as S from "./styles";
import React from "react";
import HeartIcon from "../../assets/heart";
import PlayIcon from "./../../assets/play";

export default function MusicInformation({
  cover_url,
  title,
  artist,
  genre,
  mood,
  created_at,
  like,
  user_id,
  description,
  song_url,
}) {
  const router = useRouter();
  const dispatch = setValue();

  const routingToUserProfile = React.useCallback(() => {
    router.push(`/profile?id=${user_id}`);
  }, [user_id]);

  const changeMusic = React.useCallback(() => {
    dispatch({
      type: "MUSIC_CHANGE",
      musicInformation: {
        title: title,
        name: artist,
        songId: router.query.id.toString(),
        musicSrc: song_url,
        coverImg: cover_url,
      },
    });
  }, []);

  React.useEffect(() => {
    if (song_url) {
      const WaveSurfer = require("wavesurfer.js");
      const wavesurfer = WaveSurfer.create({
        container: "#waveform",
        waveColor: "#E6E6E6",
        progressColor: COLOR.main,
        barWidth: "2",
        cursorColor: "transparent",
        barHeight: "0.7",
      });
      wavesurfer.load(song_url);
    }
  }, [song_url]);

  React.useEffect(() => {
    resizing(user_id);
  }, [description]);

  return (
    <>
      <>
        <S.MusicInformationWrapper>
          <S.CoverImgWrap>
            <img src={cover_url} />
            <button onClick={changeMusic}>
              <PlayIcon size={15} callback={changeMusic} color="white" />
            </button>
          </S.CoverImgWrap>
          <S.MusicInformationTextCotainer>
            <time>{`최초공개 ${getDate(created_at)}`}</time>
            <div onClick={routingToUserProfile} className="artist-name">
              <span>{artist}</span>
            </div>
            <div className="music-title">
              <span>{title}</span>
            </div>
            <div id="waveform" />
          </S.MusicInformationTextCotainer>
        </S.MusicInformationWrapper>
      </>
      <>
        <S.MusicIconContainer>
          <S.GenreWrap>
            <button>#{genre}</button>
            <button>#{mood}</button>
          </S.GenreWrap>
          <S.MusicLikeContainer>
            <HeartIcon size={20} callback={() => {}} color={COLOR.main} />
            <span>{like}</span>
          </S.MusicLikeContainer>
        </S.MusicIconContainer>
      </>
      <>
        <S.MusicDescription defaultValue={description} id={user_id} readOnly />
      </>
    </>
  );
}
