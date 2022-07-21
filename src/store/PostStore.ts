import { proxy } from 'valtio';
import { Post } from '../model/posts-model';


interface PostStateType {
    posts: Post[]
}

export const PostState = proxy<PostStateType>({
    posts: [],
})