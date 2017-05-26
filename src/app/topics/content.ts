import {Topic} from "./topic";
export class Content {
  id? : string;
  parent? : Topic;
  message : string;
  imagePath? : string;
}
