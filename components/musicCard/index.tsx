import * as S from "./styled";

interface props {
  id: string;
  src: string;
  title: string;
  writerName: string;
  genre: string;
}

export default function MusicCard({
  id,
  src,
  title,
  writerName,
  genre,
}: props) {
  return (
    <S.Wrapper>
      <img src={src} />
      <h3>{title}</h3>
      <span>{writerName}</span>
      <h5>{genre}</h5>
    </S.Wrapper>
  );
}