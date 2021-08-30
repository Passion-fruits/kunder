import { useRouter } from "next/dist/client/router";
import { getDate } from "../../../lib/util/getDate";
import { resizing } from "../../../lib/util/resizing";
import { CommentIcon, HeartIcon, PlayIcon } from "../../../assets";
import { setValue } from "./../../../lib/context/index";
import * as S from "../feedStyles";
import React from "react";

export default function FeedCard({
  title,
  genre,
  coverSrc,
  like,
  name,
  date,
  id,
  description,
  comment,
  musicSrc,
}) {
  const router = useRouter();
  const dispatch = setValue();

  const changeMusic = React.useCallback(() => {
    dispatch({
      type: "MUSIC_CHANGE",
      musicInformation: {
        title: title,
        songId: id,
        name: name,
        musicSrc: musicSrc,
        coverImg: coverSrc,
      },
    });
  }, []);

  React.useEffect(() => {
    resizing(id);
  }, [description, router]);

  return (
    <S.FeedCardWrapper>
      <S.ImgWrapper>
        <S.MusicInfo>
          <mark>{title}</mark>
          <mark>{genre}</mark>
        </S.MusicInfo>
        <img src={coverSrc} onClick={() => router.push(`/detail?id=${id}`)} />
      </S.ImgWrapper>
      <S.IconWrapper>
        <div>
          <HeartIcon size={23} color="black" callback={() => {}} />
          <span>{like}</span>
          <CommentIcon />
          <span>{comment}</span>
        </div>
        <div></div>
        <PlayIcon callback={changeMusic} size={18} color={"black"} />
      </S.IconWrapper>
      <S.InfoContainer>
        <div>
          <h3>{name} 님</h3>
          <span>{getDate(date)}</span>
        </div>
        <textarea id={id} value={description} readOnly />
      </S.InfoContainer>
    </S.FeedCardWrapper>
  );
}
