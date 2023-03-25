import { useEffect, useRef, useState } from "react";
import { IPost } from "../../../../interfaces/Post";
import { listPosts } from "../../../../services/api-service/post-service";
import { handleException } from "../../../../services/error-handling-service/error-handling-service";
import { savePostLocally } from "../../../../services/local-storage-service/post-local-storage-service";
import ResultItem from "./ResultItem";
import allResultsStyles from "./Results.module.css";

interface IResults {
  framework: string;
}
/**
 * Renders the All Posts results.
 */
export default function AllResults({ framework }: IResults) {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [page, setPage] = useState(0);
  const bottomRef = useRef<HTMLDivElement>(null);

  //Retrieve data only when framerowk changes
  useEffect(() => {
    listPosts(framework, 0)
      .then((postResults) => setPosts(postResults))
      .catch((error) => handleException(error));
    setPage(0);
  }, [framework]);

  //Retrieve data only when page is grater than 0
  useEffect(() => {
    if (page > 0)
      listPosts(framework, page)
        .then((postResults) => {
          if (postResults.length > 0)
            setPosts((prev) => {
              return prev.concat(postResults);
            });
        })
        .catch((error) => handleException(error));
  }, [page]);

  useEffect(() => {
    //Implement the Infinite scroll funcitonality
    const iObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          //If the Observed element is on the User's view, then increment the page in 1.
          if (
            entry.isIntersecting &&
            entry.target === bottomRef.current //&&
            //window.scrollY > 0
          ) {
            setPage((prev) => prev + 1);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (bottomRef.current) {
      iObserver.observe(bottomRef.current);
    }

    //Clear up function to stop observing when unmonount the Component
    return () => {
      iObserver.disconnect();
    };
  }, []);

  const handleLike = (postId: string, like: boolean) => {
    const updatedPosts = [...posts];

    const likedPost = updatedPosts.find((post) => post.postId === postId);

    if (!likedPost) throw new Error("Post was not found!");
    likedPost.isLiked = like;

    if (savePostLocally(likedPost)) setPosts(updatedPosts);
    else throw new Error("Action not completed on the Local storage!");
  };

  return (
    <>
      <ul className={allResultsStyles["ul-results"]}>
        {posts.map((post) => (
          <ResultItem handleLike={handleLike} key={post.postId} post={post} />
        ))}
      </ul>
      <div ref={bottomRef}>{"Hacker News"}</div>
    </>
  );
}
