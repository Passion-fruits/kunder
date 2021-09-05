import { useRouter } from "next/dist/client/router";
import { CheckScroll } from "./../../lib/util/checkScroll";
import { toast } from "react-toastify";
import { ProfileInputArr } from "./../../lib/export/profileInputArr";
import {
  InstaIcon,
  SoundCloudIcon,
  YoutubeIcon,
  CircleFacebookIcon,
} from "../../assets/index";
import * as S from "./styles";
import React from "react";
import MenuList from "./menu/menuList";
import profile from "../../api/profile";
import CardList from "../cardList";
import FileInput from "./input/fileinput";
import InforInput from "./input/inforInfo";
import LoadingPage from "../../components/loading";

export default function ProfilePage() {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = React.useState<any>();
  const [musicList, setMusicList] = React.useState<any[]>([]);
  const [page, setPage] = React.useState<number>(1);
  const [isMyPage, setIsMyPage] = React.useState<boolean>(false);
  const [update, setUpdate] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [userData, setUserData] = React.useState<any>({
    name: "",
    bio: "",
    insta: "",
    facebook: "",
    soundcloud: "",
    youtube: "",
  });
  const [menu, setMenu] =
    React.useState<"song" | "playlist" | "follower" | "following">("song");

  const changeMenu = (menu) => {
    setMenu(menu);
  };

  const getData = () => {
    profile
      .getUserProfile(id)
      .then((res) => {
        setUserData(res.data);
        setIsMyPage(res.data.is_mine);
        setData(res.data);
        setLoading(false);
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

  React.useEffect(() => {
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
        toast.error("정보 수정에 실패하였습니다.");
      });
    setUpdate(false);
  };

  const fileUpload = () => {
    document.getElementById("profileImgInput").click();
  };

  const snsRouting = (url) => {
    window.open(url);
  };

  const updateProfileImg = (target: HTMLInputElement) => {
    profile
      .updateProfileImg(target.files[0])
      .then((res) => {
        toast.success("프로필 사진이 수정되었습니다.");
        getData();
      })
      .catch((err) => {
        toast.error("에러가 발생하였습니다.");
      });
    setUpdate(false);
  };

  React.useEffect(() => {
    setPage(1);
    musicList.length = 0;
  }, [router]);

  React.useEffect(() => {
    id && getDetailData();
  }, [router, menu, page]);

  React.useEffect(() => {
    musicList.length = 0;
    setPage(1);
  }, [menu]);

  React.useEffect(() => {
    window.onscroll = () => {
      if (CheckScroll()) {
        setPage((page) => page + 1);
      }
    };
  }, []);

  return (
    <S.Wrapper>
      {loading && <LoadingPage />}
      <FileInput event={updateProfileImg} />
      {data && (
        <S.Container>
          <>
            <S.Info>
                <S.ProfileImgWrapper>
                  {update && <button onClick={fileUpload}>+</button>}
                  <img src={data.profile} alt="" />
                </S.ProfileImgWrapper>
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
