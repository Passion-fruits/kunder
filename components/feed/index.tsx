import { genreList } from "../../lib/export/genre";
import { sortList } from "./../../lib/export/sort";
import { CheckScroll } from "./../../lib/util/checkScroll";
import * as S from "./styles";
import React from "react";
import LoadingPage from "../../components/loading";
import FeedCard from "./feedCard/feedCard";
import FeedSelect from "./select";
import feed from "../../api/feed";
import { useRouter } from "next/dist/client/router";

export default function FeedPage() {
  const router = useRouter();
  const { genre, sort } = router.query;
  const [data, setData] = React.useState<any[]>([]);
  const [page, setPage] = React.useState<number>(1);
  const [loading, setLoading] = React.useState<boolean>(false);

  const getData = (props_page) => {
    genre &&
      sort &&
      feed
        .getFeedList(genre, props_page, sort)
        .then((res) => {
          setLoading(false);
          setData(data.concat(res.data));
        })
        .catch((err) => {
          setLoading(false);
          return;
        });
  };

  const chooseGenre = ({ target }) => {
    router.push(`/feed?genre=${target.value}&sort=${sort}`);
    clear();
  };

  const chooseSort = ({ target }) => {
    router.push(`/feed?genre=${genre}&sort=${target.value}`);
    clear();
  };

  const clear = () => {
    data.length = 0;
    setPage(1);
    getData(1);
  };

  React.useEffect(() => {
    genre && getData(1);
  }, [router]);

  React.useEffect(() => {
    window.onscroll = () => {
      if (CheckScroll()) {
        getData(page + 1);
        setPage((page) => page + 1);
      }
    };
  }, []);

  React.useEffect(() => {
    page === 1 && setLoading(true);
  }, [page]);

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
                defaultValue={genreList[parseInt(genre.toString()) - 1]}
                callback={chooseGenre}
                list={genreList}
              />
              <FeedSelect
                defaultValue={sortList[parseInt(sort.toString()) - 1]}
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
