import { IPost } from "../../../../interfaces/Post";
import itemStyle from "./ResultItem.module.css";
import svgTimer from "../../../../assets/list/results/iconmonstr-time-2.svg";
import svgHeartFill from "../../../../assets/list/results/iconmonstr-favorite-3.svg";
import svgHeartEmpty from "../../../../assets/list/results/iconmonstr-favorite-2.svg";
import { formatPostCreationDate } from "../../../../services/date-formating-service/date-formating-service";

interface IResultItem {
  post: IPost;
  handleLike: (postId: string, like: boolean) => void;
}
export default function ResultItem({ post, handleLike }: IResultItem) {
  return (
    <li className={itemStyle["li"]}>
      <a
        href={post.storyUrl}
        target="_blank"
        className={itemStyle["li-div-text"]}
        rel="noreferrer"
      >
        <div className={itemStyle["li-div-text-header"]}>
          <img src={svgTimer} alt="timer" />
          <span>
            {formatPostCreationDate(post.createdAt) + " by " + post.author}
          </span>
        </div>
        <span className={itemStyle["li-div-text-title"]}>
          {post.storyTitle}
        </span>
      </a>
      <div className={itemStyle["li-div-like"]}>
        <button
          className={itemStyle["li-div-like-button"]}
          onClick={handleLike.bind(null, post.postId, !post.isLiked)}
        >
          <img
            className={itemStyle["li-div-like-button-img"]}
            src={post.isLiked ? svgHeartFill : svgHeartEmpty}
            alt={post.isLiked ? "Liked" : "Not Liked"}
          />
        </button>
      </div>
    </li>
  );
}
