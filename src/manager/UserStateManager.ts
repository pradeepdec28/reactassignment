import { User } from "../model/user-model"
import { UsersState } from "../store/UserStore"

export class UserStateManager {
    static getUser = async (user: User[]) => {
        UsersState.users = user;
    }
}