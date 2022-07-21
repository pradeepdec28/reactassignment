import { Post } from '../model/posts-model';
import {  User } from '../model/user-model';
import api from './ApiService';


export class PostService {
    static getPosts = async(user?: User) =>  {
        const url =  user && user.id ? `/posts?userId=${user.id}` : `/posts/`;
        const response = await api.get<Post[]>(url)
        return response.data   
    }
}