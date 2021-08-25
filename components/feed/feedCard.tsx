import { useRouter } from "next/dist/client/router";
import CommentIcon from "../../assets/comment";
import HeartIcon from "../../assets/heart";
import PlayIcon from "../../assets/play";
import * as S from "./feedStyles";
import { getDate } from "./../../lib/util/getDate";
import { useEffect } from "react";
import { resizing } from "./../../lib/util/resizing";

export default function FeedCard({
  title,
  genre,
  src,
  like,
  name,
  date,
  id,
  description,
  comment,
}) {
  const router = useRouter();
  useEffect(() => {
    resizing(id);
  }, [description, router]);
  return (
    <S.FeedCardWrapper>
      <S.ImgWrapper>
        <S.MusicInfo>
          <mark>{title}</mark>
          <mark>{genre}</mark>
        </S.MusicInfo>
        <img src={src} onClick={() => router.push(`/detail?id=${id}`)} />
      </S.ImgWrapper>
      <S.IconWrapper>
        <div>
          <HeartIcon size={23} color="black" callback={() => {}} />
          <span>{like}</span>
          <CommentIcon />
          <span>{comment}</span>
        </div>
        <div></div>
        <PlayIcon callback={() => {}} size={18} color={"black"} />
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
