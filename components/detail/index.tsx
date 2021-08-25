import { useRouter } from "next/dist/client/router";
import HeartIcon from "../../assets/heart";
import * as S from "./detailStyles";
import { COLOR } from "./../../styles/index";
import music from "../../api/music";
import { useEffect, useState } from "react";
import { getDate } from "./../../lib/util/getDate";
import CommentView from "./comment";
import { toast } from "react-toastify";
import { CheckToken } from "./../../lib/util/checkToken";
import LoadingPage from "../../components/loading";
import { resizing } from "./../../lib/util/resizing";
import PlayIcon from "../../assets/play";
import CommentIcon from "../../assets/comment";

export default function DetailPage() {
  const router = useRouter();
  const id = router.query.id;
  const [data, setData] = useState<any>();
  const [commentData, setCommentData] = useState<any[]>([]);
  const [comment, setComment] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const handleComment = (event) => {
    setComment(event.target.value);
  };
  const getComment = () => {
    id &&
      music
        .getMusicComment(id)
        .then((res) => {
          setCommentData(res.data);
        })
        .catch((err) => {
          return;
        });
  };
  useEffect(() => {
    id &&
      music.getMusicDetail(router.query.id).then((res) => {
        setLoading(false);
        setData(res.data);
      });
  }, [router]);
  useEffect(() => {
    getComment();
  }, [router]);
  const sendComment = (event) => {
    if (event.keyCode === 13) {
      if (!comment) {
        toast.info("작성 후 등록해주세요.");
        return;
      }
      music
        .sendComment(id, comment)
        .then(() => {
          toast.success("댓글이 등록되었습니다");
          getComment();
          setComment("");
        })
        .catch((err) => {
          if (err.response.status === 400) {
            toast.info("이미 댓글을 작성하셨습니다.");
            return;
          }
          if (err.response.status === 401) {
            if (CheckToken()) getComment();
            else toast.info("로그인 후 이용해주세요");
            return;
          }
          toast.error("에러가 발생하였습니다.");
        });
    }
  };
  useEffect(() => {
    data && resizing(data.user_id);
  }, [data]);
  return (
    <S.Wrapper>
      {loading && <LoadingPage />}
      {data && (
        <S.Container>
          <>
            <S.MusicInfo>
              <S.ImgWrapper>
                <img src={data.cover_url} alt="" />
              </S.ImgWrapper>
              <S.InforContainer>
                <h1>{data.title}</h1>
                <span
                  className="artist"
                  onClick={() => router.push(`/profile?id=${data.user_id}`)}
                >
                  {data.artist}
                </span>
                <div className="genreWrap">
                  <div>{data.genre}</div>
                  <S.Line />
                  <div>{data.mood}</div>
                </div>
                <span className="date">{getDate(data.created_at)}</span>
                <S.IconContainer>
                  <div>
                    <HeartIcon
                      size={20}
                      callback={() => {}}
                      color={COLOR.black}
                    />
                    {data.like}
                  </div>
                  <div>
                    <CommentIcon />
                    {data.comment}
                  </div>
                </S.IconContainer>
              </S.InforContainer>
            </S.MusicInfo>
            <S.Description
              id={data.user_id}
              defaultValue={data.description}
              readOnly
            />
          </>
          <>
            <S.Comment
              onChange={handleComment}
              onKeyDown={sendComment}
              value={comment}
              placeholder="댓글을 입력하세요. (엔터를 누르면 등록됩니다.)"
            />
            <S.CommentContainer>
              {commentData.map((obj, index) => (
                <CommentView
                  key={index}
                  contents={obj.comment_content}
                  date={obj.created_at}
                  name={obj.name}
                  user_id={obj.user_id}
                  src={obj.profile}
                />
              ))}
            </S.CommentContainer>
          </>
        </S.Container>
      )}
    </S.Wrapper>
  );
}
