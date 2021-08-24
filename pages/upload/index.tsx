import { genreList, moodList } from "../../lib/export/genre";
import * as S from "../../styles/uploadStyles";

export default function UploadPage() {
  return (
    <S.Wrapper>
      <S.Container>
        <>
          <S.Tip>
            <div>TIP</div>
            <p>
              저작권 위반 파일을 업로드할 경우 법적 제제를 받을 수 있습니다.
            </p>
          </S.Tip>
        </>
        <>
          <S.UploadContainer>
            <S.UploadBtn />
            <S.FlexContainer>
              <>
                <S.InpContainer>
                  <span>제목 (title)</span>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="제목을 입력해주세요."
                  />
                </S.InpContainer>
              </>
              <>
                <S.InpContainer>
                  <span>설명 (description)</span>
                  <textarea name="" id="" placeholder="제목을 입력해주세요." />
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
