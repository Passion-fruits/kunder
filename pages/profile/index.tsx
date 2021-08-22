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

export default function ProfilePage() {
  const [menu, setMenu] =
    useState<"song" | "playlist" | "follower" | "following">("song");
  const router = useRouter();
  const { id, isMine } = router.query;
  const [data, setData] = useState<any>();
  const [musicList, setMusicList] = useState<any[]>([]);
  const [page, setPage] = useState<number>(1);
  const changeMenu = (menu) => {
    setMenu(menu);
  };
  const getData = (user_id) => {
    profile.getUserProfile(user_id).then((res) => {
      setData(res.data);
    });
  };
  useEffect(() => {
    if (id) {
      if (isMine === "mypage") {
        getData(id);
      } else {
        getData(id);
      }
    }
  }, [router]);
  const getDetailData = () => {
    console.log(page);
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
  return (
    <S.Wrapper>
      {data && (
        <S.Container>
          <>
            <S.Info>
              <>
                <img src={data.profile} alt="" />
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
                {isMine && isMine === "mypage" ? (
                  <button>정보수정</button>
                ) : (
                  <button>팔로우</button>
                )}
              </>
            </S.Info>
          </>
          <>
            <MenuList menu={menu} callback={changeMenu} />
          </>
          {menu === "song" && <CardList data={musicList} />}
        </S.Container>
      )}
    </S.Wrapper>
  );
}
