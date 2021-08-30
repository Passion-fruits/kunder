import { genreList } from "../../lib/export/genre";
import { sortList } from "./../../lib/export/sort";
import { CheckScroll } from "./../../lib/util/checkScroll";
import * as S from "./styles";
import FeedCard from "./feedCard/feedCard";
import React from "react";
import feed from "../../api/feed";
import LoadingPage from "../../components/loading";
import FeedSelect from "./select";

export default function FeedPage() {
  const [data, setData] = React.useState<any[]>([]);
  const [page, setPage] = React.useState<number>(1);
  const [genre, setGenre] = React.useState<number>(1);
  const [sort, setSort] = React.useState<number>(1);
  const [loading, setLoading] = React.useState<boolean>(false);

  const getData = () => {
    feed
      .getFeedList(genre, page, sort)
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
    setGenre(target.value);
  };

  const chooseSort = ({ target }) => {
    setSort(target.value);
  };

  const requestNewDate = async () => {
    const clear = () => {
      data.length = 0;
    };
    setLoading(true);
    await clear();
    await setPage(1);
    getData();
  };

  React.useEffect(() => {
    getData();
  }, [page]);

  React.useEffect(() => {
    requestNewDate();
  }, [genre, sort]);

  React.useEffect(() => {
    window.onscroll = () => {
      if (CheckScroll()) {
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
          <FeedSelect callback={chooseGenre} list={genreList} />
          <FeedSelect callback={chooseSort} list={sortList} />
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
