import { extend } from "jquery";
import { Gender } from "src/app/Enums/gender";
import { UserRole } from "src/app/Enums/userRole";

export class SignupRequest {
  username!: string;
  name!: string;
  email!: string;
  contactNo!: string;
  gender!:Gender;
  password!: string;
  confirmPassword!: string;
}

export class AdminSignupRequest extends SignupRequest{
  userRole!:UserRole;
}