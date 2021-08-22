import { useRouter } from "next/dist/client/router";
import * as S from "../../styles/profileStyles";
import { useEffect, useState } from "react";
import InstaIcon from "../../assets/instagram";
import SoundCloudIcon from "./../../assets/soundCloud";
import YoutubeIcon from "../../assets/youtube";
import CircleFacebookIcon from "../../assets/circleFacebook";
import MenuList from "./menu/menuList";
import profile from "../../api/profile";

export default function ProfilePage() {
  const [menu, setMenu] = useState<string>("song");
  const router = useRouter();
  const { id, isMine } = router.query;
  const [data, setData] = useState<any>();
  const changeMenu = (menu) => {
    setMenu(menu);
  };
  useEffect(() => {
    if (id) {
      if (isMine === "mypage") {
        profile
          .getMyProfile()
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        profile.getUserProfile(id).then((res) => {
          setData(res.data);
        });
      }
    }
  }, [router]);
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
        </S.Container>
      )}
    </S.Wrapper>
  );
}
