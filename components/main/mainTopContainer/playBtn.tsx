import * as S from "./styles";
import PlayIcon from "./../../../assets/play";

interface props {
  direction: "left" | "right";
  callback(): void;
}

export default function PlayBtn({ direction, callback }: props) {
  return (
    <S.PlayBtn
      style={direction === "right" ? { right: 0 } : { left: 0 }}
      onClick={callback}
    >
      <PlayIcon size={13} color="white" callback={() => {}} />
    </S.PlayBtn>
  );
}
