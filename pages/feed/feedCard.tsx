import { useEffect } from "react";
import HeartIcon from "../../assets/heart";
import PlayIcon from "../../assets/play";
import * as S from "../../styles/feedStyles";
import feed from '../../api/feed'

export default function FeedCard() {
/*     useEffect(()=>{
        feed.getFeedList().then((res)=>{
            console.log(res.data)
        })
    },[]) */
  return (
    <S.FeedCardWrapper>
      <S.ImgWrapper>
        <S.MusicInfo>
          <mark>왜그러니 너</mark>
          <mark>힙합</mark>
        </S.MusicInfo>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYkiyQB1J-DtEEa4EoflA3XqEoWe6VuBqdTw&usqp=CAU"
          alt=""
        />
      </S.ImgWrapper>
      <S.IconWrapper>
        <div>
          <HeartIcon size={23} color="black" callback={() => {}} />
          <span>13</span>
        </div>
        <PlayIcon callback={() => {}} size={18} color={"black"} />
      </S.IconWrapper>
      <S.InfoContainer>
        <div>
          <h3>정지원 님</h3>
          <span>3일 전</span>
        </div>
        <textarea defaultValue="sadkfjakdsfhlkashdf" readOnly />
      </S.InfoContainer>
    </S.FeedCardWrapper>
  );
}
