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
import FileInput from "./input/fileinput";
import { ProfileInputArr } from "./../../lib/export/profileInputArr";
import InforInput from "./input/inforInfo";

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
      .then(() => {
        getData();
        toast.success("정보가 수정되었습니다.");
      })
      .catch((err) => {
        console.log(err);
        toast.error("정보 수정에 실패하였습니다.");
      });
    setUpdate(false);
  };
  const fileUpload = () => {
    document.getElementById("profileImgInput").click();
  };
  const updateProfileImg = (target: HTMLInputElement) => {
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
  const snsRouting = (url) => {
    window.open(url);
  };
  return (
    <S.Wrapper>
      <FileInput event={updateProfileImg} />
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
                    <CircleFacebookIcon
                      callback={snsRouting}
                      url={data.facebook}
                    />
                    <InstaIcon callback={snsRouting} url={data.insta} />
                    <SoundCloudIcon
                      callback={snsRouting}
                      url={data.soundcloud}
                    />
                    <YoutubeIcon callback={snsRouting} url={data.youtube} />
                  </article>
                </section>
              </>
              <>
                {update ? (
                  <S.UpdateContainer>
                    {ProfileInputArr.map((obj, index) => (
                      <InforInput
                        callback={handleData}
                        data={data}
                        name={obj.name}
                        placeholder={obj.placeholder}
                        key={index}
                      />
                    ))}
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
