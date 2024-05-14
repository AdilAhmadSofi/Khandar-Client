export class SignupResponse {
  message!: string;
  isSuccess!: boolean;
  result!: {
    id: string;
    username: string;
    email: string;
    contactNo: string;
    gender: number;
    userRole: number;
  };
}
