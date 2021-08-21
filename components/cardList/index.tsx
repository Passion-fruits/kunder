import MusicCard from "../musicCard";
import * as S from "./styles";

interface props {
  data: any[];
}

export default function CardList({ data }: props) {
  return (
    <S.Wrapper>
      {data.map((obj, index) => (
        <MusicCard
          key={index}
          writerName={obj.artist}
          src={obj.cover_url}
          genre={obj.genre}
          id={obj.song_id}
          title={obj.title}
        />
      ))}
    </S.Wrapper>
  );
}
