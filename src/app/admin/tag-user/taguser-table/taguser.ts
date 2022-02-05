import { Tag } from '../../tag/tag-table/tag';
import { User } from '../../user/users-table/user';

export interface UserTag {
  userTagID: number;
  userID: number;
  tagID: number;
  user: User;
  tag: Tag;
}
