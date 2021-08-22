import { useRouter } from "next/dist/client/router";
import PlayIcon from "../../assets/play";
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
  const router = useRouter();
  const routing = (event): void => {
    event.target.id === "cover" && router.push(`/detail?id=${id}`);
  };
  return (
    <S.Wrapper>
      <S.Cover id="cover" onClick={routing}>
        <button>
          <PlayIcon callback={() => {}} size={20} />
        </button>
      </S.Cover>
      <img src={src} />
      <h3>{title}</h3>
      <span>{writerName}</span>
      <h5>{genre}</h5>
    </S.Wrapper>
  );
}
