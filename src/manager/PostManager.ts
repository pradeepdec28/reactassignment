import { User } from "../model/user-model";
import { PostService } from "../services/PostService";
import { PostStateManager } from "./PostStateManager";



export class PostManager {
    static getAll = async(user?: User) => {
        const response = await PostService.getPosts(user);
        PostStateManager.setPosts(response);
    }
}