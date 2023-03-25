import ConfigValues from "../../configs/ConfigValues";
import { ILocalStorage } from "../../interfaces/LocalStorage";
import { IPost } from "../../interfaces/Post";
import { handleException } from "../error-handling-service/error-handling-service";
import {
  getFromLocalStorage,
  saveToLocalStorage,
} from "./local-storage-generic";

export function getRawPostsFromLocal(): ILocalStorage {
  const rawPosts = getFromLocalStorage<ILocalStorage>(
    ConfigValues.LocalStorageId
  );

  if (!rawPosts) return {};

  return rawPosts;
}

export async function listPostFromLocal(): Promise<IPost[]> {
  const rawPosts = getFromLocalStorage<ILocalStorage>(
    ConfigValues.LocalStorageId
  );

  return Object.values(rawPosts).map((post) => {
    //Transform every createAt property from string format to Date format
    const newPost: IPost = { ...post };
    newPost.createdAt = new Date(post.createdAt);

    return newPost;
  });
}
export function savePostLocally(post: IPost) {
  try {
    const localPosts = getFromLocalStorage<ILocalStorage>(
      ConfigValues.LocalStorageId
    );

    //Create the new Post entry
    localPosts[post.postId] = post;
    saveToLocalStorage(ConfigValues.LocalStorageId, localPosts);

    return true;
  } catch (error) {
    handleException(error);
    return false;
  }
}

export function removePostLocally(postId: string) {
  const localPosts = getFromLocalStorage<ILocalStorage>(
    ConfigValues.LocalStorageId
  );

  //If there are no elements, return false
  if (!localPosts) return false;

  //Remove the Post that we don't want anymore
  delete localPosts[postId];
  saveToLocalStorage(ConfigValues.LocalStorageId, localPosts);

  return true;
}
