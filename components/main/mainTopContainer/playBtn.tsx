import * as S from "./styles";
import PlayIcon from "./../../../assets/play";

interface props {
  direction: "left" | "right";
}

export default function PlayBtn({ direction }: props) {
  return (
    <S.PlayBtn style={direction === "right" ? { right: 0 } : { left: 0 }}>
      <PlayIcon size={12} color="white" callback={() => {}} />
    </S.PlayBtn>
  );
}
