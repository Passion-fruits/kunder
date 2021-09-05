import * as S from "./styles";
import React from "react";
import MusicListCard from "../musicListCard";
import { musicObject } from "../../lib/interfaces/music";
import feed from "../../api/feed";

export default function FeedPage() {
  const [data, setData] = React.useState<musicObject[]>([]);

  React.useEffect(() => {
    feed.getFeedList(1, 1, 2).then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <S.Wrapper>
      <S.Contaienr>
        <S.IntroContaienr>
          <h1>Your Feed</h1>
          <h3>피드에선 음악의 15초 하이라이트를 제공합니다.</h3>
        </S.IntroContaienr>
        {data.map((obj, index) => (
          <MusicListCard
            title={obj.title}
            cover_url={obj.cover_url}
            song_id={obj.song_id}
            song_url={obj.short_url}
            like={obj.like}
            mood={obj.mood}
            artist={obj.artist}
            artist_id={obj.user_id}
            indexNumber={index + 1}
            genre={obj.genre}
            created_at={obj.created_at}
            key={index}
          />
        ))}
      </S.Contaienr>
    </S.Wrapper>
  );
}
