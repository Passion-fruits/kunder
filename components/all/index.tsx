import { genreList } from "../../lib/export/genre";
import { COLOR } from "./../../styles/index";
import { sortList } from "./../../lib/export/sort";
import { useRouter } from "next/dist/client/router";
import { toast } from "react-toastify";
import * as S from "./styles";
import React from "react";
import List from "./chooseList/list";
import music from "../../api/music";
import CardList from "../../components/cardList";
import Arrow from "../../assets/arrow";
import LoadingPage from "../loading";

export default function AllPage() {
  const router = useRouter();
  const { genre, sort, page } = router.query;
  const [currentGenre, setCurrentGenre] = React.useState<string>();
  const [currentSort, setCurrentSort] = React.useState<string>();
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [loading, setLoading] = React.useState<boolean>(true);
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
    if (genre && page && sort) {
      const genreNum = parseInt(genre.toString()) - 1;
      const sortNum = parseInt(sort.toString()) - 1;
      const pageNum = parseInt(page.toString());
      setCurrentGenre(genreList[genreNum]);
      setCurrentSort(sortList[sortNum]);
      setCurrentPage(pageNum);
    }
  }, [router]);

  React.useEffect(() => {
    setLoading(true);
    genre &&
      music
        .getStreaming({ genre: genre, page: page, sort: sort })
        .then((res) => {
          setLoading(false);
          setData(res.data);
        })
        .catch(() => {
          setLoading(false);
          toast.error("에러가 발생하였습니다.");
          router.push("/");
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
  }, [currentPage]);

  React.useEffect(() => {
    if (currentGenre) {
      router.push(
        `/all?genre=${genreList.indexOf(currentGenre) + 1}&page=1&sort=${
          sortList.indexOf(currentSort) + 1
        }`
      );
    }
  }, [currentSort, currentGenre]);

  React.useEffect(() => {
    const pageBar = document.getElementById("pageBar");
    while (pageBar.firstChild) {
      pageBar.removeChild(pageBar.firstChild);
    }
    for (let i = 1; i < perPage + 1; i++) {
      const div = document.createElement("div");
      div.id = "pageIndex";
      div.innerHTML = i.toString();
      if (div.innerHTML === page) {
        div.style.background = "black";
        div.style.color = "white";
      }
      div.onclick = changePage;
      pageBar.insertBefore(div, null);
    }
  }, [genre, sort, page]);

  return (
    <S.Wrapper>
      {loading && <LoadingPage />}
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
