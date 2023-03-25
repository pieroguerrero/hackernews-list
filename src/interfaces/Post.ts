export interface IPost {
  postId: string;
  author: string;
  storyTitle: string;
  storyUrl: string;
  createdAt: Date;
  isLiked: boolean;
  framework: string;
}
