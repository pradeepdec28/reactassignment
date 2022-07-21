import { Post } from "../model/posts-model"
import { PostState } from "../store/PostStore"

export class PostStateManager {
    static setPosts = async (posts: Post[]) => {
        PostState.posts = posts;
    }
}