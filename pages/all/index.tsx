import { genreList } from "../../lib/export/genre";
import * as S from "../../styles/allStyles";
import { useEffect, useState } from "react";
import { COLOR } from "./../../styles/index";
import { sortList } from "./../../lib/export/sort";
import List from "./list";
import music from "../../api/music";
import CardList from "../../components/cardList";

export default function AllPage() {
  const [nowGenre, setNowGenre] = useState<string>(genreList[0]);
  const [nowSort, setNowSort] = useState<string>(sortList[0]);
  const genreCheckStyle = {
    borderBottom: `2px solid ${COLOR.main}`,
    color: COLOR.main,
  };
  const sortCheckStyle = {
    color: COLOR.main,
  };
  useEffect(() => {
    music.getStreaming({ genre: 1, page: 1, sort: 1 }).then((res) => {
      console.log(res.data);
    });
  }, []);
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
        <></>
      </S.Container>
    </S.Wrapper>
  );
}
