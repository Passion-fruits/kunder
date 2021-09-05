import * as S from "../styles";
import PlayBtn from "../playBtn";
import music from "../../../../api/music";
import React from "react";
import { setValue } from "./../../../../lib/context/index";
import { musicObject } from './../../../../lib/interfaces/music';

export default function RecommendMusic() {
  const [data, setData] = React.useState<musicObject>();
  const dispatch = setValue();

  React.useEffect(() => {
    music.getStreaming({ size: 1, page: 1, sort: 2, genre: 1 }).then((res) => {
      setData(res.data.songs[0]);
    });
  }, []);

  const playMusic = React.useCallback(() => {
    dispatch({
      type: "MUSIC_CHANGE",
      musicInformation: {
        title: data.title,
        artist: data.artist,
        cover_url: data.cover_url,
        song_id: data.song_id,
        song_url: data.song_url,
      },
    });
  }, [data]);

  return (
    <S.RecommendMusicWrapper>
      {data && (
        <>
          <div className="img-cover content-box">
            <div className="cover-music-info">
              <h1>{data.title}</h1>
              <h3>{data.artist}</h3>
              <PlayBtn direction="right" callback={playMusic} />
            </div>
          </div>
          <img src={data.cover_url} />
        </>
      )}
    </S.RecommendMusicWrapper>
  );
}
