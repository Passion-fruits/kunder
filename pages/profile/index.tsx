import { useRouter } from "next/dist/client/router";
import * as S from "../../styles/profileStyles";
import { useEffect, useState } from "react";
import InstaIcon from "../../assets/instagram";
import SoundCloudIcon from "./../../assets/soundCloud";
import YoutubeIcon from "../../assets/youtube";
import CircleFacebookIcon from "../../assets/circleFacebook";
import MenuList from "./menu/menuList";
import profile from '../../api/profile'

export default function ProfilePage() {
  const [menu, setMenu] = useState<string>("song");
  const router = useRouter();
  const changeMenu = (menu) => {
    setMenu(menu);
  };
  useEffect(() => {
    const { id, isMine } = router.query;
    if(isMine === "mypage"){
        profile.getMyProfile().then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })
    }else{
        
    }
  }, [router]);
  return (
    <S.Wrapper>
      <S.Container>
        <>
          <S.Info>
            <>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrxCFzRUHTZ2beXiAtneeEa7jT50eYgoHApA&usqp=CAU"
                alt=""
              />
            </>
            <>
              <section>
                <h1>정지원</h1>
                <span>jidole02@naver.com</span>
                <article>
                  <CircleFacebookIcon />
                  <InstaIcon />
                  <SoundCloudIcon />
                  <YoutubeIcon />
                </article>
              </section>
            </>
            <>
              <button>정보수정</button>
            </>
          </S.Info>
        </>
        <>
          <MenuList menu={menu} callback={changeMenu} />
        </>
      </S.Container>
    </S.Wrapper>
  );
}
