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
  const [loading, setLoading] = React.useState<boolean>(true);
  const [data, setData] = React.useState<any[]>([]);
  const [maxPage, setMaxPage] = React.useState(0);
  const genreCheckStyle: React.CSSProperties = {
    borderBottom: `2px solid ${COLOR.main}`,
    color: COLOR.main,
  };
  const sortCheckStyle: React.CSSProperties = {
    color: COLOR.main,
  };
  const showCardCnt = 12;

  const changePage = React.useCallback(
    ({ target }) => {
      router.push(`/all?page=${target.innerHTML}&sort=${sort}&genre=${genre}`);
    },
    [page, sort, genre]
  );

  const changeGenre = React.useCallback(
    ({ target }) => {
      router.push(`/all?page=1&sort=${sort}&genre=${target.value}`);
    },
    [page, sort, genre]
  );

  const changeSort = React.useCallback(
    ({ target }) => {
      router.push(`/all?page=1&sort=${target.value}&genre=${genre}`);
    },
    [page, sort, genre]
  );

  React.useEffect(() => {
    if (genre) {
      setLoading(true);
      music
        .getStreaming({ genre: genre, page: page, sort: sort })
        .then((res) => {
          setLoading(false);
          setData(res.data.songs);
          setMaxPage(res.data.max_song / showCardCnt + 1);
        })
        .catch((err) => {
          setLoading(false);
          if (err.response.status === 404) {
            setData(() => []);
            return;
          }
          toast.error("에러가 발생하였습니다.");
          router.push("/");
        });
    }
  }, [router]);

  React.useEffect(() => {
    if (page) {
      const perPage = 10;
      const pageBar = document.getElementById("pageBar");
      const pageToNum = parseInt(page.toString());
      const startPage = Math.floor(pageToNum / 10) * 10 + 1;
      const lastPage =
        maxPage >= startPage + perPage ? startPage + perPage : maxPage;
      while (pageBar.firstChild) {
        pageBar.removeChild(pageBar.firstChild);
      }
      for (let i = startPage; i < lastPage; i++) {
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
    }
  }, [genre, sort, page, maxPage]);

  return (
    <S.Wrapper>
      {loading && <LoadingPage />}
      <S.Container>
        <S.GerneList>
          <List
            list={genreList}
            checkStyle={genreCheckStyle}
            name="genre"
            now={genre}
            callback={changeGenre}
          />
        </S.GerneList>
        <S.SortList>
          <List
            list={sortList}
            checkStyle={sortCheckStyle}
            name="sort"
            now={sort}
            callback={changeSort}
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
