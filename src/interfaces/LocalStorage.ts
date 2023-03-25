import { IPost } from "./Post";

export interface ILocalStorage {
  [postId: string]: IPost;
}
