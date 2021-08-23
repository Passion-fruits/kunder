import { getDate } from "./../../lib/util/getDate";

export default function CommentView({ user_id, src, name, date, contents }) {
  return (
    <article>
      <img src={src} alt="" />
      <div className="commentWrapper">
        <div className="commentInfo">
          {name} <span>{getDate(date)}</span>
        </div>
        <p>{contents}</p>
      </div>
    </article>
  );
}
