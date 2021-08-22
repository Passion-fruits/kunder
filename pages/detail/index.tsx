import { useRouter } from "next/dist/client/router";
import HeartIcon from "../../assets/heart";
import * as S from "../../styles/detailStyles";
import { COLOR } from "./../../styles/index";
import music from "../../api/music";
import { useEffect, useState } from "react";
import { getDate } from "./../../lib/util/getDate";

export default function DetailPage() {
  const router = useRouter();
  const [data, setData] = useState<any>();
  useEffect(() => {
    const id = router.query.id;
    id &&
      music.getMusicDetail(router.query.id).then((res) => {
        setData(res.data);
      });
  }, [router]);
  return (
    <S.Wrapper>
      {data && (
        <S.Container>
          <>
            <S.MusicInfo>
              <>
                <img src={data.cover_url} alt="" />
              </>
              <>
                <div>
                  <h1>{data.title}</h1>
                  <span>{data.artist}</span>
                  <aside>
                    <span>{getDate(data.created_at)}</span>
                    <S.Line />
                    <span>{data.genre}</span>
                    <S.Line />
                    <span>{data.mood}</span>
                  </aside>
                </div>
              </>
              <>
                <S.HeartContainer>
                  <HeartIcon size={22} callback={() => {}} color={COLOR.text} />
                  {data.like}
                </S.HeartContainer>
              </>
            </S.MusicInfo>
          </>
          <>
            <S.Description>{data.description}</S.Description>
          </>
          <>
            <S.Comment placeholder="댓글을 입력하세요. (엔터를 누르면 등록됩니다.)" />
          </>
        </S.Container>
      )}
    </S.Wrapper>
  );
}
