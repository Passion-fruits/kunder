import { useRouter } from "next/dist/client/router";
import * as S from "./styled";
import { setValue } from "./../../lib/context/index";
import { HeartIcon, PlayIcon } from "./../../assets";
import { COLOR } from "./../../styles/index";

interface props {
  id: string;
  imgSrc: string;
  musicSrc;
  title: string;
  writerName: string;
  like: string | number;
}

export default function MusicCard({
  id,
  imgSrc,
  musicSrc,
  title,
  writerName,
  like,
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
        artist: writerName,
        cover_url: imgSrc,
        song_url: musicSrc,
        song_id: id,
      },
    });
  };

  return (
    <S.Wrapper>
      <S.Cover id="cover" onClick={routing}>
        <button onClick={musicChange}>
          <PlayIcon callback={musicChange} size={20} />
        </button>
      </S.Cover>
      <img src={imgSrc} />
      <h3>{title}</h3>
      <span className="artist-name">{writerName}</span>
      <S.HeartWrap>
        <HeartIcon size={14} callback={() => {}} color={COLOR.main} />
        <span>{like}</span>
      </S.HeartWrap>
    </S.Wrapper>
  );
}
