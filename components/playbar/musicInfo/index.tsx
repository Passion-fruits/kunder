import * as S from "../styled";

export default function MusicInfo({ coverImg, title, name }) {
  return (
    <S.Info>
      <img src={coverImg} />
      <div>
        <h3>{title}</h3>
        <span>{name}</span>
      </div>
    </S.Info>
  );
}
