import {User} from "../users/user";
import {Content} from "./content";
export const enum TopicTypes {
  News, General, Support, Comments
}
export class Topic {
  id?: string;
  title : string;
  topicType : TopicTypes;
  createdAt? : string;
  updatedAt? : string;
  user?: User;
  message: string;
  imageUrl: string;
  subTopics : any[];
}
