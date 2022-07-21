import { User } from '../model/user-model';
import api from './ApiService';

export class UserService {

    static getAll = async() => {
        const response = await api.get<User[]>('/users');
        return response.data;
    }
}