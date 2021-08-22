import * as S from "../../../styles/profileStyles";
import Menu from "./menu";

export default function MenuList({ menu, callback }) {
  return (
    <S.Menu>
      <Menu
        contents="노래"
        cnt="0"
        nowMenu={menu}
        menu="song"
        callback={callback}
      />
      <Menu
        contents="팔로워"
        cnt="10"
        nowMenu={menu}
        menu="follower"
        callback={callback}
      />
      <Menu
        contents="팔로잉"
        cnt="20"
        nowMenu={menu}
        menu="following"
        callback={callback}
      />
      <Menu
        contents="플레이리스트"
        cnt="0"
        nowMenu={menu}
        menu="playlist"
        callback={callback}
      />
    </S.Menu>
  );
}
