import { IPostQueryDTO } from "../dtos/PostQueryDTO";

export interface IPostApiData {
  hits: IPostQueryDTO[];

  page: string;
}
