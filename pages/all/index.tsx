import { genreList } from "../../lib/export/genre";
import * as S from "../../styles/allStyles";
import { useState } from "react";
import { COLOR } from "./../../styles/index";
import { sortList } from "./../../lib/export/sort";

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
  return (
    <S.Wrapper>
      <S.Container>
        <>
          <S.GerneList>
            {genreList.map((genre, index) => (
              <label
                key={index}
                style={genre === nowGenre ? genreCheckStyle : {}}
              >
                <input
                  type="radio"
                  name="genre"
                  value={genre}
                  onClick={() => setNowGenre(genre)}
                />
                {genre}
              </label>
            ))}
          </S.GerneList>
        </>
        <>
          <S.SortList>
            {sortList.map((sort, index) => (
              <label key={index} style={sort === nowSort ? sortCheckStyle : {}}>
                <input
                  type="radio"
                  name="sort"
                  value={sort}
                  onClick={() => setNowSort(sort)}
                />
                {sort}
              </label>
            ))}
          </S.SortList>
        </>
      </S.Container>
    </S.Wrapper>
  );
}
