export enum UserRoles {'User', 'Admin'}

export class User {
  id: string
  name: string;
  age: number;
  email: string;
  password: string;
  picture: string;
  role: UserRoles;
}
