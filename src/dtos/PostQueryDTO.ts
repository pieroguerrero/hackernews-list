import { IPost } from "../interfaces/Post";

export interface IPostQueryDTO {
  created_at_i: string;
  author: string;
  story_title: string;
  story_url: string;
  created_at: string;
  page: string;
  framework: string;
}
/**
 * Transforms the raw object received from the API to an object that is understandabale by the rest of the application
 */
export function transformToStory(postQuertDTO: IPostQueryDTO): IPost | null {
  if (
    !(
      postQuertDTO.author &&
      postQuertDTO.created_at &&
      postQuertDTO.story_title &&
      postQuertDTO.story_url &&
      postQuertDTO.created_at_i
    )
  )
    return null;

  return {
    //Use the created at in number format to use it as Id for our main object
    postId: postQuertDTO.created_at_i + "-" + postQuertDTO.page,
    author: postQuertDTO.author,
    storyTitle: postQuertDTO.story_title,
    storyUrl: postQuertDTO.story_url,
    createdAt: new Date(postQuertDTO.created_at),
    isLiked: false,
    framework: postQuertDTO.framework,
  };
}
