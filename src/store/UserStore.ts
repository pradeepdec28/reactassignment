import { proxy } from 'valtio';
import { User } from '../model/user-model';

interface UsersStateType {
    users: User[]
}

export const UsersState = proxy<UsersStateType>({
    users: [],
})

