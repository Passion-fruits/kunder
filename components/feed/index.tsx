import * as S from "./styles";
import React from "react";
import MusicListCard from "../musicListCard";

export default function FeedPage() {
  return (
    <S.Wrapper>
      <S.Contaienr>
        <S.IntroContaienr>
          <h1>Your Feed</h1>
          <h3>피드에선 음악의 15초 하이라이트를 제공합니다.</h3>
        </S.IntroContaienr>
        <MusicListCard />
        <MusicListCard />
        <MusicListCard />
        <MusicListCard />
        <MusicListCard />
        <MusicListCard />
        <MusicListCard />
        <MusicListCard />
        <MusicListCard />
        <MusicListCard />
        <MusicListCard />
        <MusicListCard />
        <MusicListCard />
        <MusicListCard />
        <MusicListCard />
        <MusicListCard />
        <MusicListCard />
        <MusicListCard />
      </S.Contaienr>
    </S.Wrapper>
  );
}
