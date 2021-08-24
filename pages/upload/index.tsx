import { genreList, moodList } from "../../lib/export/genre";
import * as S from "../../styles/uploadStyles";
import Tip from "./tip";
import { useEffect, useState } from "react";
import Input from "./input/input";
import Select from "./input/select";
import FileInput from "./input/fileInput";

export default function UploadPage() {
  const [preview, setPreview] = useState<string>("");
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
  return (
    <S.Wrapper>
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
            <S.SubBtn>업로드</S.SubBtn>
          </S.FlexContainer>
        </S.UploadContainer>
      </S.Container>
    </S.Wrapper>
  );
}
