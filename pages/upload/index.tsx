import { genreList, moodList } from "../../lib/export/genre";
import * as S from "../../styles/uploadStyles";
import Tip from "./tip";
import { useEffect, useState } from "react";
import Input from "./input/input";
import Select from "./input/select";
import FileInput from "./input/fileInput";
import music from "../../api/music";
import { toast } from "react-toastify";
import { useRouter } from "next/dist/client/router";
import { USER_ID } from "../../lib/export/localstorage";
import LoadingPage from "../../components/loading";

export default function UploadPage() {
  const [preview, setPreview] = useState<string>("");
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>({
    title: "",
    description: "",
    genre: 1,
    mood: 1,
    duration: "",
    musicSrc: "",
    imgSrc: "",
  });
  const handleData = (evnet): void => {
    const { name, value } = evnet.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const getSrc = (target: HTMLInputElement) => {
    setData({
      ...data,
      [target.name]: target.files[0],
    });
  };
  const fileUpload = (id) => {
    document.getElementById(id).click();
  };
  useEffect(() => {
    const reader = new FileReader();
    reader.onload = (e) => setPreview(e.target.result.toString());
    data.imgSrc && reader.readAsDataURL(data.imgSrc);
  }, [data.imgSrc]);
  useEffect(() => {
    if (data.musicSrc !== "") {
      const reader = new FileReader();
      reader.readAsDataURL(data.musicSrc);
      reader.onload = (e) => {
        const result: any = e.target.result;
        const audio = new Audio(result);
        audio.oncanplaythrough = () => {
          setData({
            ...data,
            duration: audio.duration.toString(),
          });
          if (audio.duration < 60 || audio.duration > 300) {
            toast.info("1분 이상, 5분 이하의 곡을 업로드해주세요!");
            setData({
              ...data,
              musicSrc: "",
              duration: "",
            });
          }
        };
      };
    }
  }, [data.musicSrc]);
  const subData = (): void => {
    setLoading(true);
    const { title, description, musicSrc, genre, mood, imgSrc } = data;
    if (title && description && musicSrc && genre && mood && imgSrc) {
      music
        .uploadMusic(data)
        .then((res) => {
          toast.success("업로드 되었습니다.");
          router.push(`/profile?id=${localStorage.getItem(USER_ID)}`);
        })
        .catch((err) => {
          toast.error("에러가 발생하였습니다.");
          setLoading(false);
        });
    } else {
      toast.info("모든 정보를 입력해주세요!");
      return;
    }
  };
  return (
    <S.Wrapper>
      {loading && <LoadingPage />}
      <S.Container>
        <FileInput event={getSrc} />
        <Tip />
        <S.UploadContainer>
          {preview ? (
            <S.ProfileImg
              onClick={() => fileUpload("uploadProfile")}
              src={preview}
            />
          ) : (
            <S.UploadBtn onClick={() => fileUpload("uploadProfile")} />
          )}
          <S.FlexContainer>
            <Input
              title="제목 (title)"
              name="title"
              placeholder="제목을 입력해주세요"
              callback={handleData}
            />
            <Input
              isText={true}
              title="설명 (description)"
              name="description"
              placeholder="설명을 입력해주세요"
              callback={handleData}
            />
            <S.SelectContainer>
              <Select
                title="장르 (genre)"
                name="genre"
                list={genreList}
                callback={handleData}
              />
              <Select
                title="분위기 (mood)"
                name="mood"
                list={moodList}
                callback={handleData}
              />
            </S.SelectContainer>
            <S.ChooseMusic>
              <button onClick={() => fileUpload("uploadMusic")}>
                음악 선택
              </button>
              <div>
                {data.musicSrc
                  ? `${data.musicSrc.name.substring(0, 55)}...`
                  : "업로드한 파일이 없습니다."}
              </div>
            </S.ChooseMusic>
            <S.SubBtn
              style={loading ? { opacity: "0.8", pointerEvents: "none" } : {}}
              onClick={subData}
            >
              업로드
            </S.SubBtn>
          </S.FlexContainer>
        </S.UploadContainer>
      </S.Container>
    </S.Wrapper>
  );
}
