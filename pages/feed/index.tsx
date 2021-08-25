import * as S from "../../styles/feedStyles";
import FeedCard from "./feedCard";
import { useEffect, useState } from "react";
import feed from "../../api/feed";
import { genreList } from "../../lib/export/genre";
import { sortList } from "./../../lib/export/sort";
import { CheckScroll } from "./../../lib/util/checkScroll";

export default function FeedPage() {
  const [data, setData] = useState<any[]>([]);
  const [page, setPage] = useState<number>(1);
  const [genre, setGenre] = useState<number>(1);
  const [sort, setSort] = useState<number>(1);
  const getData = () => {
    feed
      .getFeedList(genre, page, sort)
      .then((res) => {
        setData(data.concat(res.data));
      })
      .catch((err) => {
        return;
      });
  };
  const changeState = async () => {
    data.length = 0;
    await setPage(1);
    page === 1 && data.length === 0 && getData();
  };
  useEffect(() => {
    changeState();
  }, [sort, genre]);
  useEffect(() => {
    getData();
  }, [page]);
  useEffect(() => {
    window.onscroll = () => {
      if (CheckScroll()) {
        setPage((page) => page + 1);
      }
    };
  }, []);
  const chooseGenre = (event): void => {
    setGenre(event.target.value);
  };
  const chooseSort = (event): void => {
    setSort(event.target.value);
  };
  return (
    <S.Wrapper>
      <S.Container>
        <S.LEFT_SIDE>
          <h1>Your Feed</h1>
          <span>음악 하이라이트를 제공합니다.</span>
          <select onChange={chooseGenre}>
            {genreList.map((genre, index) => (
              <option value={index + 1} key={index}>
                {genre}
              </option>
            ))}
          </select>
          <select onChange={chooseSort}>
            {sortList.map((sort, index) => (
              <option value={index + 1} key={index}>
                {sort}
              </option>
            ))}
          </select>
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
              src={obj.cover_url}
              description={obj.description}
              id={obj.song_id}
              genre={obj.genre}
              comment={obj.comment}
              key={index}
            />
          ))}
        </S.RIGHT_SIDE>
      </S.Container>
    </S.Wrapper>
  );
}
