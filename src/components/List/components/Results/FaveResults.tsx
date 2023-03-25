import { useEffect, useState } from "react";
import { IPost } from "../../../../interfaces/Post";
import { handleException } from "../../../../services/error-handling-service/error-handling-service";
import {
  listPostFromLocal,
  removePostLocally,
} from "../../../../services/local-storage-service/post-local-storage-service";
import ResultItem from "./ResultItem";
import faveResultsStyles from "./Results.module.css";

/**
 * Renders the Favourite results
 */
export default function FaveResults() {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    listPostFromLocal()
      .then((localPosts) => setPosts(localPosts))
      .catch((error) => handleException(error));
  }, []);

  const handleLike = (postId: string) => {
    const remainingPosts = posts.filter((post) => post.postId !== postId);

    if (removePostLocally(postId)) setPosts(remainingPosts);
    else throw new Error("Fave Post not removed from Local storage!");
  };

  return (
    <ul className={faveResultsStyles["ul-results"]}>
      {posts.map((post) => (
        <ResultItem handleLike={handleLike} key={post.postId} post={post} />
      ))}
    </ul>
  );
}
