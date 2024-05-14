import { Hobbies } from "../Enums/hobbies";

export class HobbyRequest{
    name!:Hobbies;
}
export class hobbyResponse{
    id! : string;
    name!:Hobbies;
}