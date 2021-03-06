import { DataService } from '../DataService';
import { RequestMethod } from '@angular/http';
import { User, Player } from '../../models/user';

export class UsersAPI {

    constructor(
        private api: DataService
    ) {
    }

    public getMyProfile(): Promise<User> {
        return this.api.requestData(RequestMethod.Get, 'users/me', {});
    }

    public getUserById(id: number): Promise<Player> {
        return this.api.requestData(RequestMethod.Get, 'users/players/' + id, {});
    }
}
