import { useRouter } from "next/dist/client/router";
import { getDate } from "./../../lib/util/getDate";

export default function CommentView({ user_id, src, name, date, contents }) {
  const router = useRouter();
  return (
    <article>
      <img
        onClick={() => router.push(`/profile?id=${user_id}`)}
        src={src}
        alt=""
      />
      <div className="commentWrapper">
        <div className="commentInfo">
          {name} <span>{getDate(date)}</span>
        </div>
        <p>{contents}</p>
      </div>
    </article>
  );
}
