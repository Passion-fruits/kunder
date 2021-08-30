import { useRouter } from "next/dist/client/router";
import PlayIcon from "../../assets/play";
import * as S from "./styled";
import { setValue } from "./../../lib/context/index";

interface props {
  id: string;
  imgSrc: string;
  musicSrc;
  title: string;
  writerName: string;
  genre: string;
}

export default function MusicCard({
  id,
  imgSrc,
  musicSrc,
  title,
  writerName,
  genre,
}: props) {
  const router = useRouter();
  const dispathch = setValue();

  const routing = (event): void => {
    event.target.id === "cover" && router.push(`/detail?id=${id}`);
  };

  const musicChange = () => {
    dispathch({
      type: "MUSIC_CHANGE",
      musicInformation: {
        title: title,
        name: writerName,
        coverImg: imgSrc,
        musicSrc: musicSrc,
      },
    });
  };

  return (
    <S.Wrapper>
      <S.Cover id="cover" onClick={routing}>
        <button>
          <PlayIcon callback={musicChange} size={20} />
        </button>
      </S.Cover>
      <img src={imgSrc} />
      <h3>{title}</h3>
      <span>{writerName}</span>
      <h5>{genre}</h5>
    </S.Wrapper>
  );
}
