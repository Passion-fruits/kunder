import { getDate } from "./../../lib/util/getDate";
import { COLOR } from "./../../styles/index";
import { useRouter } from "next/dist/client/router";
import * as S from "./styles";
import React from "react";
import HeartIcon from "../../assets/heart";

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
}) {
  const router = useRouter();
  const routingToUserProfile = React.useCallback(() => {
    router.push(`/profile?id=${user_id}`);
  }, [user_id]);
  return (
    <>
      <S.MusicInformationWrapper>
        <img src={cover_url} className="music-cover-img" />
        <S.MusicInformationTextCotainer>
          <h1 className="music-title">{title}</h1>
          <span className="artist-name" onClick={routingToUserProfile}>
            {artist}
          </span>
          <div className="genre-mood-wrap">
            <div>{genre}</div>
            <S.Line />
            <div>{mood}</div>
          </div>
          <span className="created-at">{getDate(created_at)}</span>
          <S.IconContainer>
            <HeartIcon size={20} callback={() => {}} color={COLOR.black} />
            {like}
          </S.IconContainer>
        </S.MusicInformationTextCotainer>
      </S.MusicInformationWrapper>
      <S.Description id={user_id} defaultValue={description} readOnly />
    </>
  );
}
