import { genreList } from "../../lib/export/genre";
import * as S from "../../styles/allStyles";
import { useEffect, useState } from "react";
import { COLOR } from "./../../styles/index";
import { sortList } from "./../../lib/export/sort";
import List from "./list";
import music from "../../api/music";
import CardList from "../../components/cardList";
import { useRouter } from "next/dist/client/router";

export default function AllPage() {
  const router = useRouter();
  const [nowGenre, setNowGenre] = useState<string>(genreList[0]);
  const [nowSort, setNowSort] = useState<string>(sortList[0]);
  const [data, setData] = useState<any[]>([]);
  const genreCheckStyle = {
    borderBottom: `2px solid ${COLOR.main}`,
    color: COLOR.main,
  };
  const sortCheckStyle = {
    color: COLOR.main,
  };
  useEffect(() => {
    const query = router.query;
    query.genre && 
    music
      .getStreaming({ genre: query.genre, page: 1, sort: query.sort })
      .then((res) => {
        setData(res.data);
      });
  }, [router]);
  useEffect(() => {
    router.push(
      `/all?genre=${genreList.indexOf(nowGenre) + 1}&page=1&sort=${
        sortList.indexOf(nowSort) + 1
      }`
    );
  }, [nowGenre, nowSort]);
  return (
    <S.Wrapper>
      <S.Container>
        <>
          <S.GerneList>
            <List
              list={genreList}
              checkStyle={genreCheckStyle}
              name="genre"
              now={nowGenre}
              callback={setNowGenre}
            />
          </S.GerneList>
        </>
        <>
          <S.SortList>
            <List
              list={sortList}
              checkStyle={sortCheckStyle}
              name="sort"
              now={nowSort}
              callback={setNowSort}
            />
          </S.SortList>
        </>
        <>
          <CardList data={data} />
        </>
      </S.Container>
    </S.Wrapper>
  );
}
