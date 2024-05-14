import { Gender } from "../Enums/gender";

export class LoggedInCredentials {
  id!:string;
  userName!: string;
  name!:string;
  token!: string;
  userRole!: string;
  gender!:Gender;
}
