import { genreList } from "../../lib/export/genre";
import { COLOR } from "./../../styles/index";
import { sortList } from "./../../lib/export/sort";
import { useRouter } from "next/dist/client/router";
import * as S from "./styles";
import React from "react";
import List from "./chooseList/list";
import music from "../../api/music";
import CardList from "../../components/cardList";
import Arrow from "../../assets/arrow";

export default function AllPage() {
  const router = useRouter();
  const { genre, sort, page } = router.query;
  const [currentGenre, setCurrentGenre] = React.useState<string>();
  const [currentSort, setCurrentSort] = React.useState<string>();
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [data, setData] = React.useState<any[]>([]);
  const genreCheckStyle: React.CSSProperties = {
    borderBottom: `2px solid ${COLOR.main}`,
    color: COLOR.main,
  };
  const sortCheckStyle: React.CSSProperties = {
    color: COLOR.main,
  };
  const perPage = 10;

  const changePage = React.useCallback(
    (event) => {
      setCurrentPage(event.target.innerHTML);
    },
    [currentPage]
  );

  React.useEffect(() => {
    if (genre) {
      const genreNum = parseInt(genre.toString()) - 1;
      const sortNum = parseInt(sort.toString()) - 1;
      const pageNum = parseInt(page.toString());
      setCurrentGenre(genreList[genreNum]);
      setCurrentSort(sortList[sortNum]);
      setCurrentPage(pageNum);
    }
  }, [router]);

  React.useEffect(() => {
    genre &&
      music
        .getStreaming({ genre: genre, page: page, sort: sort })
        .then((res) => {
          setData(res.data);
        })
        .catch(() => {
          return () => {};
        });
  }, [router]);

  React.useEffect(() => {
    if (currentGenre) {
      router.push(
        `/all?genre=${
          genreList.indexOf(currentGenre) + 1
        }&page=${currentPage}&sort=${sortList.indexOf(currentSort) + 1}`
      );
    }
  }, [currentGenre, currentSort, currentPage]);

  React.useEffect(() => {
    const pageBar = document.getElementById("pageBar");
    while (pageBar.firstChild) {
      pageBar.removeChild(pageBar.firstChild);
    }
    for (let i = 1; i < perPage + 1; i++) {
      const div = document.createElement("div");
      div.id = "pageIndex";
      div.innerHTML = i.toString();
      div.onclick = changePage;
      if (div.innerHTML === page) {
        div.style.background = "black";
        div.style.color = "white";
      }
      pageBar.insertBefore(div, null);
    }
  }, [genre, sort, page]);

  return (
    <S.Wrapper>
      <S.Container>
        <S.GerneList>
          <List
            list={genreList}
            checkStyle={genreCheckStyle}
            name="genre"
            now={currentGenre}
            callback={setCurrentGenre}
          />
        </S.GerneList>
        <S.SortList>
          <List
            list={sortList}
            checkStyle={sortCheckStyle}
            name="sort"
            now={currentSort}
            callback={setCurrentSort}
          />
        </S.SortList>
        <CardList data={data} />
        <S.PageBarWrap>
          <S.PageSmallWrap>
            <Arrow callback={() => {}} isNext={false} />
            <S.pageBar id="pageBar" />
            <Arrow callback={() => {}} isNext={true} />
          </S.PageSmallWrap>
        </S.PageBarWrap>
      </S.Container>
    </S.Wrapper>
  );
}
