import { genreList } from "../../lib/export/genre";
import { sortList } from "./../../lib/export/sort";
import { CheckScroll } from "./../../lib/util/checkScroll";
import { useRouter } from "next/dist/client/router";
import * as S from "./styles";
import React from "react";
import LoadingPage from "../../components/loading";
import FeedCard from "./feedCard/feedCard";
import FeedSelect from "./select";
import feed from "../../api/feed";

export default function FeedPage() {
  const router = useRouter();
  const { genre, sort } = router.query;
  const [data, setData] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const dataRef = React.useRef(null);
  dataRef.current = data;
  let page = 1;

  const chooseGenre = ({ target }) => {
    router.push(`/feed?genre=${target.value}&sort=${sort}`);
  };

  const chooseSort = ({ target }) => {
    router.push(`/feed?genre=${genre}&sort=${target.value}`);
  };

  React.useEffect(() => {
    setLoading(true);
    data.length = 0;
    setData(() => []);
    page = 1;
    if (genre && data.length === 0) {
      feed
        .getFeedList(genre, 1, sort)
        .then((res) => {
          setLoading(false);
          setData(data.concat(res.data));
          page += 1;
        })
        .catch((err) => {
          setLoading(false);
          return;
        });
    }
  }, [router]);

  React.useEffect(() => {
    if (genre) {
      window.onscroll = () => {
        if (CheckScroll()) {
          setLoading(true);
          feed
            .getFeedList(genre, page, sort)
            .then((res) => {
              setLoading(false);
              setData(dataRef.current.concat(res.data));
              page += 1;
            })
            .catch((err) => {
              setLoading(false);
              return;
            });
        }
      };
    }
  }, [router]);

  return (
    <S.Wrapper>
      {loading && <LoadingPage />}
      <S.Container>
        <S.LEFT_SIDE>
          <h1>Your Feed</h1>
          <span>음악 하이라이트를 제공합니다.</span>
          {genre && (
            <>
              <FeedSelect
                defaultValue={genre}
                callback={chooseGenre}
                list={genreList}
              />
              <FeedSelect
                defaultValue={sort}
                callback={chooseSort}
                list={sortList}
              />
            </>
          )}
          <p>
            KUNDER | 무료 음악 스트리밍 | 개인정보 약관 <br />
            마이페이지 | 전체보기
          </p>
        </S.LEFT_SIDE>
        <S.RIGHT_SIDE>
          {data.map((obj, index) => (
            <FeedCard
              name={obj.artist}
              title={obj.title}
              like={obj.like}
              date={obj.created_at}
              coverSrc={obj.cover_url}
              description={obj.description}
              id={obj.song_id}
              genre={obj.genre}
              comment={obj.comment}
              musicSrc={obj.short_url}
              key={index}
            />
          ))}
        </S.RIGHT_SIDE>
      </S.Container>
    </S.Wrapper>
  );
}
