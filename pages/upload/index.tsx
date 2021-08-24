import { genreList, moodList } from "../../lib/export/genre";
import * as S from "../../styles/uploadStyles";
import Tip from "./tip";
import { useState } from "react";

export default function UploadPage() {
  const [data, setData] = useState({
    title: "",
    description: "",
    genre: "",
    mood: "",
    duration: "",
  });
  const handleData = (evnet): void => {
    const { name, value } = evnet.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  return (
    <S.Wrapper>
      <S.Container>
        <Tip />
        <>
          <S.UploadContainer>
            <S.UploadBtn />
            <S.FlexContainer>
              <>
                <S.InpContainer>
                  <span>제목 (title)</span>
                  <input
                    type="text"
                    name="title"
                    placeholder="제목을 입력해주세요."
                    onChange={handleData}
                  />
                </S.InpContainer>
                <S.InpContainer>
                  <span>설명 (description)</span>
                  <textarea
                    name="description"
                    placeholder="곡 설명을 입력해주세요."
                    onChange={handleData}
                  />
                </S.InpContainer>
              </>
              <>
                <S.SelectContainer>
                  <S.InpContainer>
                    <span>장르 (genre)</span>
                    <select name="genre">
                      {genreList.map((genre, index) => (
                        <option
                          key={index}
                          value={genreList.indexOf(genre) + 1}
                        >
                          {genre}
                        </option>
                      ))}
                    </select>
                  </S.InpContainer>
                  <S.InpContainer>
                    <span>분위기 (mood)</span>
                    <select name="mood">
                      {moodList.map((mood, index) => (
                        <option key={index} value={moodList.indexOf(mood) + 1}>
                          {mood}
                        </option>
                      ))}
                    </select>
                  </S.InpContainer>
                </S.SelectContainer>
              </>
              <>
                <S.ChooseMusic>
                  <button>음악 선택</button>
                  <div>profile.mp4</div>
                </S.ChooseMusic>
              </>
              <>
                <S.SubBtn>업로드</S.SubBtn>
              </>
            </S.FlexContainer>
          </S.UploadContainer>
        </>
      </S.Container>
    </S.Wrapper>
  );
}
