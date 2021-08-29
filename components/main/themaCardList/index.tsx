import CardList from "../../cardList";
import * as S from "./styles";
import { useState } from "react";
import music from "../../../api/music";
import { useEffect } from "react";

export default function ThemaCardList() {
  const [data, setData] = useState([]);
  useEffect(() => {
    music.getStreaming({ genre: 1, page: 1, sort: 2 }).then((res) => {
      setData(res.data);
    });
  }, []);
  return (
    <S.Wrapper>
      <h1>오늘 나온 음악을 들어보세요</h1>
      <CardList data={data.slice(0, 5)} />
    </S.Wrapper>
  );
}
