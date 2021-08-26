import { genreList } from "../../lib/export/genre";
import { COLOR } from "./../../styles/index";
import { sortList } from "./../../lib/export/sort";
import { useRouter } from "next/dist/client/router";
import { CheckScroll } from "./../../lib/util/checkScroll";
import * as S from "./styles";
import React from "react";
import List from "./list";
import music from "../../api/music";
import CardList from "../../components/cardList";

export default function AllPage() {
  const [nowGenre, setNowGenre] = React.useState<string>(genreList[0]);
  const [nowSort, setNowSort] = React.useState<string>(sortList[0]);
  const [data, setData] = React.useState<any[]>([]);
  const [usepage, setUsePage] = React.useState<number>(1);
  const router = useRouter();
  const { genre, sort } = router.query;
  const genreCheckStyle: React.CSSProperties = {
    borderBottom: `2px solid ${COLOR.main}`,
    color: COLOR.main,
  };
  const sortCheckStyle: React.CSSProperties = {
    color: COLOR.main,
  };

  React.useEffect(() => {
    data.length = 0;
    setUsePage(1);
    genre &&
      music
        .getStreaming({ genre: genre, page: 1, sort: sort })
        .then((res) => {
          setData(res.data);
        })
        .catch(() => {
          return () => {};
        });
  }, [router]);

  React.useEffect(() => {
    router.push(
      `/all?genre=${genreList.indexOf(nowGenre) + 1}&page=1&sort=${
        sortList.indexOf(nowSort) + 1
      }`
    );
  }, [nowGenre, nowSort]);

  React.useEffect(() => {
    window.onscroll = () => {
      CheckScroll() &&
        genre &&
        music
          .getStreaming({
            genre: genre,
            page: usepage + 1,
            sort: sort,
          })
          .then((res) => {
            setData(data.concat(res.data));
            setUsePage(usepage + 1);
          })
          .catch(() => {
            return () => {};
          });
    };
  }, []);

  return (
    <S.Wrapper>
      <S.Container>
        <S.GerneList>
          <List
            list={genreList}
            checkStyle={genreCheckStyle}
            name="genre"
            now={nowGenre}
            callback={setNowGenre}
          />
        </S.GerneList>
        <S.SortList>
          <List
            list={sortList}
            checkStyle={sortCheckStyle}
            name="sort"
            now={nowSort}
            callback={setNowSort}
          />
        </S.SortList>
        <CardList data={data} />
      </S.Container>
    </S.Wrapper>
  );
}
