import { useRouter } from "next/dist/client/router";
import * as S from "../../styles/profileStyles";
import { useEffect, useState } from "react";
import InstaIcon from "../../assets/instagram";
import SoundCloudIcon from "./../../assets/soundCloud";
import YoutubeIcon from "../../assets/youtube";
import CircleFacebookIcon from "../../assets/circleFacebook";
import MenuList from "./menu/menuList";
import profile from "../../api/profile";
import CardList from "../../components/cardList";
import { CheckScroll } from "./../../lib/util/checkScroll";
import { toast } from "react-toastify";
import FileInput from "./fileInput/fileinput";

export default function ProfilePage() {
  const [menu, setMenu] =
    useState<"song" | "playlist" | "follower" | "following">("song");
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState<any>();
  const [musicList, setMusicList] = useState<any[]>([]);
  const [page, setPage] = useState<number>(1);
  const [isMyPage, setIsMyPage] = useState<boolean>(false);
  const [update, setUpdate] = useState<boolean>(false);
  const [userData, setUserData] = useState<any>({
    name: "",
    bio: "",
    insta: "",
    facebook: "",
    soundcloud: "",
    youtube: "",
  });
  const changeMenu = (menu) => {
    setMenu(menu);
  };
  const getData = () => {
    profile
      .getUserProfile(id)
      .then((res) => {
        console.log(res.data);
        setUserData({
          ...userData,
          name: res.data.name,
        });
        setIsMyPage(res.data.is_mine);
        setData(res.data);
      })
      .catch(() => {
        toast.error("에러가 발생하였습니다.");
        router.push("/");
      });
  };
  const handleData = (event) => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };
  useEffect(() => {
    id && getData();
  }, [router]);
  const getDetailData = () => {
    if (menu === "song") {
      profile
        .getUserMusic(id, page)
        .then((res) => {
          setMusicList(musicList.concat(res.data.songs));
        })
        .catch(() => {
          return;
        });
    }
  };
  const updateProfile = () => {
    profile
      .updateProfile(userData)
      .then((res) => {
        console.log(res.data);
        toast.success("정보가 수정되었습니다.");
        setUpdate(false);
      })
      .catch((err) => {
        console.log(err);
        toast.error("정보 수정에 실패하였습니다.");
        setUpdate(false);
      });
  };
  const fileUpload = () => {
    document.getElementById("profileImgInput").click();
  };
  const getSrc = (target: HTMLInputElement) => {
    profile
      .updateProfileImg(target.files[0])
      .then((res) => {
        console.log(res.data);
        toast.success("프로필 사진이 수정되었습니다.");
        getData();
      })
      .catch((err) => {
        toast.error("에러가 발생하였습니다.");
      });
    setUpdate(false);
  };
  useEffect(() => {
    id && getDetailData();
  }, [router, menu, page]);
  useEffect(() => {
    setMusicList([]);
    setPage(1);
  }, [menu]);
  useEffect(() => {
    window.onscroll = () => {
      if (CheckScroll()) {
        setPage((page) => page + 1);
      }
    };
  }, []);
  useEffect(() => {
    setMusicList([]);
  }, [router]);
  return (
    <S.Wrapper>
      <FileInput event={getSrc} />
      {data && (
        <S.Container>
          <>
            <S.Info>
              <>
                <S.ProfileImgWrapper>
                  {update && <button onClick={fileUpload}>+</button>}
                  <img src={data.profile} alt="" />
                </S.ProfileImgWrapper>
              </>
              <>
                <section>
                  <h1>{data.name}</h1>
                  <span>{data.email}</span>
                  <article>
                    <CircleFacebookIcon url={data.facebook} />
                    <InstaIcon url={data.insta} />
                    <SoundCloudIcon url={data.soundcloud} />
                    <YoutubeIcon url={data.youtube} />
                  </article>
                </section>
              </>
              <>
                {update ? (
                  <S.UpdateContainer>
                    <input
                      type="text"
                      name="name"
                      placeholder="아티스트명을 입력해주세요"
                      onChange={handleData}
                      defaultValue={data.name}
                    />
                    <input
                      type="text"
                      name="bio"
                      placeholder="자기소개를 입력해주세요"
                      onChange={handleData}
                    />
                    <input
                      type="text"
                      name="insta"
                      placeholder="인스타그램 링크를 입력해주세요"
                      onChange={handleData}
                      defaultValue={data.insta}
                    />
                    <input
                      type="text"
                      name="facebook"
                      placeholder="페이스북 링크를 입력해주세요"
                      onChange={handleData}
                      defaultValue={data.facebook}
                    />
                    <input
                      type="text"
                      name="soundcloud"
                      placeholder="사운드클라우드 링크를 입력해주세요"
                      onChange={handleData}
                      defaultValue={data.soundclound}
                    />
                    <input
                      type="text"
                      name="youtube"
                      placeholder="유튜브 링크를 입력해주세요"
                      defaultValue={data.youtube}
                      onChange={handleData}
                    />
                    <div />
                    <button onClick={updateProfile}>정보수정</button>
                  </S.UpdateContainer>
                ) : (
                  <>
                    {isMyPage ? (
                      <S.CallbackBtn onClick={() => setUpdate(true)}>
                        정보수정
                      </S.CallbackBtn>
                    ) : (
                      <S.CallbackBtn>팔로우</S.CallbackBtn>
                    )}
                  </>
                )}
              </>
            </S.Info>
          </>
          <>
            <MenuList
              follower={data.follower}
              following={data.following}
              menu={menu}
              callback={changeMenu}
            />
          </>
          {menu === "song" && <CardList data={musicList} />}
        </S.Container>
      )}
    </S.Wrapper>
  );
}
