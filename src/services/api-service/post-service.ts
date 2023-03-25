import ConfigValues from "../../configs/ConfigValues";
import { transformToStory } from "../../dtos/PostQueryDTO";
import { IPost } from "../../interfaces/Post";
import { IPostApiData } from "../../interfaces/PostApiData";
import { handleException } from "../error-handling-service/error-handling-service";
import { getRawPostsFromLocal } from "../local-storage-service/post-local-storage-service";
import { getData } from "./axios-generic";

/**
 * List the Posts that come from the API.
 * @returns
 */
export async function listPosts(
  framework: string,
  page: number
): Promise<IPost[]> {
  try {
    //Get the raw data
    const dtoApiData = await getData<IPostApiData>(ConfigValues.PostQueryURL, {
      [ConfigValues.QueryURLParameter]: framework,
      [ConfigValues.PageURLParameter]: page.toString(),
    });

    const localData = getRawPostsFromLocal();

    //Transform the received format to the Post format to be used in the rest of the application
    const formatedPosts = dtoApiData.hits.reduce((prev: IPost[], curr) => {
      curr.page = dtoApiData.page;
      curr.framework = framework;
      const post = transformToStory(curr);

      if (!post) return prev;

      post.isLiked = localData[post.postId]
        ? localData[post.postId].isLiked
        : false;

      prev.push(post);

      return prev;
    }, []);

    return formatedPosts;
  } catch (error) {
    handleException(error);
    throw error;
  }
}
