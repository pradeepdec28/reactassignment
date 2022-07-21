import { UserService } from "../services/UserService";
import { UserStateManager } from "./UserStateManager";

export class UserManager {
    static getAll = async() => {
        const response = await  UserService.getAll();
        UserStateManager.getUser(response)
    }
}